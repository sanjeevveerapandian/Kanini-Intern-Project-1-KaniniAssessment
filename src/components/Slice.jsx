import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    firstName: '',
    lastName: '',
    department: '',
    dob: '',
    gender: '',
    education: '',
    email: '',
    phoneNumber: '',
    location: '',
    address: '',
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateField(state, action) {
            const { name, value } = action.payload;
            state[name] = value;
           
        }
       
    }
});

export const { updateField, logFormData } = formSlice.actions;
export default formSlice.reducer;
