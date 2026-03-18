import api from "./axios";
import { useParams } from "react-router-dom";

export const getProblems = async () => {
    const res = await api.get('/problems');
    return res.data;
}

export const getProblemBySlug = async (slug) => {
    const res = await api.get(`/problems/:${slug}`);
    return res.data;
}