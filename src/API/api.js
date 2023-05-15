import axios from "axios";

export const apiPhoto = axios.create({
    baseURL: "https://photo-sharing-api-bootcamp.do.dibimbing.id",
    headers: {
        Accept:"application/json",
        apiKey: "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b",
    },
})