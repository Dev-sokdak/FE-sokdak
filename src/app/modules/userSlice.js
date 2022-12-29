import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import myAPI from '../../api/my';

const initialState = {
  user: {
    careerTag: '',
    jobTag: '',
    nickname: '',
    profileImage: ''
  },
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const getUserInfo = createAsyncThunk('get/MYPAGE', async (_, thunkAPI) => {
  try {
    const response = await myAPI.getMyInfo();
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    [getUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;