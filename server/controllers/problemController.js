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
        const problem = await Problem.findOne({ slug: req.params.slug })
        if (!problem) {
            res.status(404).json({ message: 'Problem not found' });
        }
        res.status(200).json(problem);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message })
    }
}