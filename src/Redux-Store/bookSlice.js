import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mockData from "../component/Utls/Mock"

export const fetchData = createAsyncThunk("fetchData", async () => {
    const responce = await fetch("https://freetestapi.com/api/v1/books");
     return responce.json()
})

const bookSlice = createSlice({
    name: "bookDetials",
    initialState:{
        bookItems: mockData,
        isLoading:true
    },
    reducers:{
        addItem: (state, action) => {
            state.bookItems.unshift(action.payload)
        },
        extraReducer: ((builder) => {
            builder.addCase(fetchData.fulfilled,(state, action) => {
                state.bookItems = action.payload;
                state.isLoading = false;
        })
        })
        
       
    }
})
export const { addItem} = bookSlice.actions

export default bookSlice.reducer