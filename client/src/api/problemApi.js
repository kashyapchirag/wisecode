import api from "./axios";


export const getProblems = async () => {
    const res = await api.get('/api/problems');
    return res.data;
}

export const getCompletionProgress = async () => {
    const res = await api.get('/api/problems/completion');
    return res.data;
}

export const getProblemBySlug = async (slug) => {
    const res = await api.get(`/api/problems/${slug}`);
    return res.data;
}