import Problem from "../models/Problem.js";
import axios from 'axios'
import Submission from "../models/Submission.js";

export const getProblemSet = async (req, res) => {
    try {
        // problem list
        const problems = await Problem.find().select("problemNumber title slug difficulty");
        res.status(200).json(problems);

    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message })
    }
}
export const getCompletion = async (req, res) => {
    try {

        // problems solved by user
        const acceptedProblems = await Submission.find({
            userId: req.user.userId,
            status: "Accepted"
        }).distinct("problemId")

        const totalProblems = await Problem.find();
        const completion = Math.round((acceptedProblems.length / totalProblems.length) * 1000) / 10;

        res.status(200).json({ completion, acceptedProblems })

    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message })
    }
}
export const getProblemBySlug = async (req, res) => {
    try {
        const problem = await Problem.findOne({ slug: req.params.slug })
        if (!problem) {
            return res.status(404).json({ message: 'Problem not found' });
        }

        const latestByLanguage = {};
        if (req.user) {
            const acceptedProblems = await Submission.find({ problemId: problem._id, userId: req.user.userId, status: "Accepted" }).sort({ createdAt: -1 })

            acceptedProblems.forEach(p => {
                if (!latestByLanguage[p.language]) {
                    latestByLanguage[p.language] = p.code
                }
            });
        }

        res.status(200).json({ problem, latestByLanguage });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message })
    }
}

const languageID = {
    Java: 62,
    Cpp: 54,
    Python: 71,
    Javascript: 63
}
export const runCode = async (req, res) => {

    const { language, code, slug } = req.body
    try {
        const problem = await Problem.findOne({ slug });
        if (!problem) {
            return res.status(404).json({ message: 'Problem not found' });
        }
        const results = await Promise.all(
            problem.testCases.slice(0, 2).map(async (tc, idx) => {
                const { data } = await axios.post(process.env.JUDGE0_URL,
                    {
                        source_code: code,
                        language_id: languageID[language],
                        stdin: tc.input,
                        expected_output: tc.expectedOutput
                    }
                );
                const actualOutput = data.stdout?.trim() ?? null;
                return {
                    input: tc.input,
                    expectedOutput: tc.expectedOutput,
                    actualOutput,
                    passed: tc.expectedOutput === actualOutput,
                    time: data.time,
                    status: data.status.description,
                    compileOutput: data.compile_output,
                }
            })
        )
        res.status(200).json({ results })

    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message })
    }
}

export const submitCode = async (req, res) => {
    try {
        const { language, code, slug } = req.body;
        const problem = await Problem.findOne({ slug });
        if (!problem) return res.status(404).json({ message: 'Problem not found' });

        const results = await Promise.all(
            problem.testCases.map(async (tc, idx) => {
                const { data } = await axios.post(process.env.JUDGE0_URL, {
                    source_code: code,
                    language_id: languageID[language],
                    stdin: tc.input,
                    expected_output: tc.expectedOutput,
                });
                const actualOutput = data.stdout?.trim() ?? null;
                return {
                    input: tc.input,
                    expectedOutput: tc.expectedOutput,
                    actualOutput,
                    passed: Array.isArray(tc.expectedOutput) ? tc.expectedOutput.includes(actualOutput) : tc.expectedOutput === actualOutput,
                    time: data.time,
                    memory: data.memory,
                    status: data.status.description,
                    compileOutput: data.compile_output,
                }
            })
        )
        const compilationErrorCheck = results.some(re =>
            re.status.includes("compilation error")
        );

        const runtimeErrorCheck = results.some(re =>
            re.status.includes("Runtime Error")
        );

        const TLECheck = results.some(re =>
            re.status.includes("time limit exceeded")
        );

        const wrongAnswerCheck = results.some(re =>
            re.status.includes("Wrong Answer")
        );
        const finalStatus = compilationErrorCheck ? "Compilation Error" : runtimeErrorCheck ? "Runtime Error" : TLECheck ? "Time Limit Exceeded" : wrongAnswerCheck ? "Wrong Answer" : "Accepted";

        await Submission.create({
            userId: req.user.userId,
            problemId: problem._id,
            status: finalStatus,
            language,
            code,
        })
        res.status(200).json({ results })


    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message })
    }
}
