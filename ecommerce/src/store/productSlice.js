import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getApi } from "../service/api";
import axios from "axios";


const initialState = {
    apiResponse: {
        total: 0,
        skip: 0,
        limit: 0,
        products: []
    },
    isLoading: false,
    error: null
}

export const fetchProducts = createAsyncThunk('product/fetchProducts',  async()=>{
    try{
        let result = await axios('https://dummyjson.com/products')
        return result.data;
    }
    catch(ex){
        throw ex;
    }
   

});
const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.apiResponse = action.payload;
            state.error=null;
            console.log('Success')

        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Error in fetching products";
        })
    }
});

//reducers will be consumed by store.
export default productSlice.reducer;