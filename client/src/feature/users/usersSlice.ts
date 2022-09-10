import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

axios.defaults.baseURL = "http://127.0.0.1:65432";
const namespace = 'users';

type props = {
    users: []
}

const initialState = {
    users: [],
    status: 'idle'
};

export const fetchUsersEmail = createAsyncThunk(`${namespace}/fetchUsersEmail`,async()=>{
    try{
        const response = await axios.get('/users');
        return response?.data;
    }catch(err){
        console.log('users/fetchUsersEmail: => error ',err)
    }
})

const usersSlice = createSlice({
    name: namespace,
    initialState,
    reducers: {
        
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchUsersEmail.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchUsersEmail.fulfilled,(state,action)=>{
            state.status = 'idle';
            state.users = action.payload;
        })
        .addCase(fetchUsersEmail.rejected,(state,action)=>{
            state.status = 'error';
        })
    }
});

export const getUsers = (state: props) =>state.users;
export default usersSlice.reducer;