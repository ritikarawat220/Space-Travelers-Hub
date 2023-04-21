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
    error: null,
    status: 'idle',
  },
  reducers: {
    reserverockets: (state, action) => {
      const id = action.payload;
      const reservedRockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      state.rockets = reservedRockets;
    },
    cancelrockets: (state, action) => {
      const id = action.payload;
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      state.rockets = rockets;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserverockets, cancelrockets } = rocketSlice.actions;

export default rocketSlice.reducer;
