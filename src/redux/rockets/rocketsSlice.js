import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetch', async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch rockets');
  }
  const data = await response.json();
  return data;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    isFetching: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    reserverockets: (state, action) => {
      const id = action.payload;
      const reservedRockets = state.rockets.map((rockets) => {
        if (rockets.id === id) {
          return { ...rockets, reserved: true };
        }
        return rockets;
      });
      return { ...state, rockets: reservedRockets };
    },
    cancelrockets: (state, action) => {
      const id = action.payload;
      const rockets = state.rockets.map((rockets) => {
        if (rockets.id !== id) return rockets;
        return { ...rockets, reserved: false };
      });
      return { ...state, rockets };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        isFetching: false,
        rockets: action.payload,
      }))
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        status: 'succeeded',
        isFetching: true,
      }));
  },
});

export default rocketSlice.reducer;
export const { reserverockets, cancelrockets } = rocketSlice.actions;
export const selectRockets = (state) => state.rockets.rockets;
