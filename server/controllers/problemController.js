import Problem from "../models/Problem.js";
import axios from 'axios'

export const getProblemSet = async (req, res) => {
    try {
        const problems = await Problem.find();
        res.status(200).json(problems);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message })
    }
}
export const getProblemBySlug = async (req, res) => {
    try {
        const problem = await Problem.findOne({ slug: req.params.slug })
        if (!problem) {
            res.status(404).json({ message: 'Problem not found' });
        }
        res.status(200).json(problem);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message })
    }
}

export const runCode = async (req, res) => {
    const languageID = {
        Java: 62,
        Cpp: 54,
        Python: 71,
        Javascript: 63
    }
    const { language, code, slug } = req.body
    try {
        const res = await axios.post('https://emkc.org/api/v2/piston/execute',
            {
                "source_code": code,
                "language_id": languageID[language]
            }
        )
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message })
    }
}
