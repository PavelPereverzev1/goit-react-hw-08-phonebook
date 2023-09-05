import axios from "axios";
import { createAsyncThunk} from "@reduxjs/toolkit";
import { errorMsg } from 'utils/notification';

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

export const fetchContacts = createAsyncThunk( 
    "contacts/fetchAll",
async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (e) {
    errorMsg('Something went wrong try again');
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts",  newContact );
        return response.data;
      } catch (e) {
        errorMsg('Something went wrong try again');
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );


  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (taskId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${taskId}`);
        return response.data;
      } catch (e) {
        errorMsg('Something went wrong try again');
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );