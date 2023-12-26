import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


// GET NEWS

export const getNews = createAsyncThunk( 'new/get',
async() => {
    try {
        const {data} = await axios('api/data');

        let answer = []
        for(let i = 0; i < data.data.articles.length && i < 20; i++) {
            answer.push(data.data.articles[i])
        }
        return answer;
    } catch (error) {
        console.log(error)
    }
})