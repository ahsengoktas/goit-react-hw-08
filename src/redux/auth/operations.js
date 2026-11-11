import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

// Helper: adds the JWT to every following axios request (Authorization header).
// Called after a successful register, login and refreshUser.
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Helper: removes the JWT from axios defaults.
// Called after logout so later requests are sent without a token.
const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

/*
 * POST /users/signup
 * body: { name, email, password }
 * Creates a new user, then calls setAuthHeader(token).
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/*
 * POST /users/login
 * body: { email, password }
 * Logs in an existing user, then calls setAuthHeader(token).
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/*
 * POST /users/logout
 * headers: Authorization: Bearer token
 * Logs the user out, then calls clearAuthHeader().
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET /users/current
 * headers: Authorization: Bearer token
 * Reads the persisted token from the state, calls setAuthHeader(token)
 * and fetches the current user. Skipped when there is no saved token.
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      clearAuthHeader();
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => getState().auth.token !== null,
  },
);
