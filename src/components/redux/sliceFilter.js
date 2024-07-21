const { createSlice } = require('@reduxjs/toolkit');

const initialFilterState = '';

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    setStatutFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setStatutFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
