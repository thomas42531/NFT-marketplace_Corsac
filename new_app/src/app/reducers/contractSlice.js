import { 
  createSlice
} from '@reduxjs/toolkit'

const initialState = {
  status: false,
  contract: {},
}
// -------------------------------- contract slice------------------//
export const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    connectContract: (state, payload) => {
      state.status = true
      state.contract = payload.contract
    },
  }
})

export const {
  connectContract,
} = contractSlice.actions

export default contractSlice.reducer