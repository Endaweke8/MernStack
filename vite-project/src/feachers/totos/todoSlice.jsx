import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[],
}


export const todoSlice=createSlice({
    name:"todo"
})