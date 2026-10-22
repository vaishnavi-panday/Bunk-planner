import { createSlice, nanoid } from '@reduxjs/toolkit';

// Each subject: { id, name, attended, total }
const initialState = {
  list: [
    { id: 's1', name: 'Data Structures', attended: 18, total: 20 },
    { id: 's2', name: 'DBMS', attended: 14, total: 20 },
    { id: 's3', name: 'Operating Systems', attended: 9, total: 16 },
    { id: 's4', name: 'Web Development', attended: 0, total: 0 },
  ],
};

const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    addSubject(state, action) {
      state.list.push({
        id: nanoid(),
        name: action.payload,
        attended: 0,
        total: 0,
      });
    },
    // payload: { id, present }  -> present is true or false
    markAttendance(state, action) {
      const { id, present } = action.payload;
      const subject = state.list.find((s) => s.id === id);
      if (!subject) return;
      subject.total += 1;
      if (present) subject.attended += 1;
    },
  },
});

export const { addSubject, markAttendance } = subjectsSlice.actions;
export default subjectsSlice.reducer;
