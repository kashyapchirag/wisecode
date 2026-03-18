import mongoose, { mongo } from "mongoose";

const problemSchema = new mongoose.Schema({
    problemNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    difficulty: {
        type: String,
        enum: ["Basic", "Easy", "Medium", "Hard"],
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    description: {
        type: String,
        required: true,
    },
    examples: [
        {
            input: String,
            output: String,
            explanation: String,
        }
    ],
    constraints: {
        type: [String],
        default: [],
    },
    testCases: [
        {
            input: String,
            expectedOutput: String,
        }
    ],
    starterCode: {
        javascript: { type: String, default: '' },
        python: { type: String, default: '' },
        cpp: { type: String, default: '' },
        java: { type: String, default: '' },
    }

})

const Problem = mongoose.model('Problem', problemSchema);

export default Problem;