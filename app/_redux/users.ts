import { createSlice } from "@reduxjs/toolkit"

const getInitialState = () => ({
  data: {
    email: "",
    password: "",
    location: null,
    firstName: "",
    lastName: "",
  },
})

export const userSlice = createSlice({
  name: "signup",
  initialState: getInitialState(),
  reducers: {
    updateEmailAndPassword: (state, action) => {
      state.data = {
        ...state.data,
        email: action.payload.email,
        password: action.payload.password,
      }
    },
    updateNamesAndLocation: (state, { payload = {} }) => {
      const { firstName, lastName, location } = payload
      state.data = {
        ...state.data,
        firstName,
        lastName,
        location,
      }
      console.log( firstName, lastName, location );
    },
    reset: (state) => {
      state.data = getInitialState().data
    },
  },
})

export const { updateNamesAndLocation, updateEmailAndPassword } =
  userSlice.actions

export default userSlice.reducer
