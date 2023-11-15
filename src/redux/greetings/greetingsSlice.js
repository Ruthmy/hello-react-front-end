import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// This slice is to conect to the backend API and get one of the random greetings

export const getGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    try {
      const response = await axios.get('http://127.0.0.1:4000/api/v1/greetings');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch greetings');
    }
  },
);

// This is the initial state of the greetings slice
const initialState = {
  greetings: [],
  loading: false,
  hasErrors: false,
};

// Create a slice of the application state
const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGreetings.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGreetings.fulfilled, (state, { payload }) => {
        state.greetings = payload;
        state.loading = false;
        state.hasErrors = false;
      })
      .addCase(getGreetings.rejected, (state) => {
        state.loading = false;
        state.hasErrors = true;
      });
  },
});

// Export the actions generated from the slice
export default greetingsSlice.reducer;
