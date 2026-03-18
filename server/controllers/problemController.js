import Problem from "../models/Problem.js";

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
        const problems = await Problem.findOne({ slug })
        res.status(200).json(problems);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message })
    }
}