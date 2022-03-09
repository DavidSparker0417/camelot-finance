import { createSlice } from "@reduxjs/toolkit";

export const camelotSlice = createSlice({
  name: 'camelot slice',
  initialState: {
    tower : {
      nodes   : 0,
      rewards : 0,
      money   : 0
    },
    camelotStat : {
      nodes               : 0,
      treasury            : 0,
      tokensInRewardPool  : 0,
      marketCap           : 0,
    },
    holds : []
  },
  reducers : {
    refreshTower: (state, action) => {
      state.tower = action.payload
    },
    refreshCamelotStat: (state, action) => {
      state.camelotStat = action.payload
    },
    refreshHolds: (state, action) => {
      state.holds = action.payload
    }
  },
})

export const {
  refreshTower, 
  refreshCamelotStat,
  refreshHolds} = camelotSlice.actions
export default camelotSlice.reducer