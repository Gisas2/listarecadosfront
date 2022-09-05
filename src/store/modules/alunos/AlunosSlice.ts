import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { AlunoType } from "../../../pages/alunos/types";

const adapter = createEntityAdapter<AlunoType>({
  selectId: (item) => item.matricula,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.alunos
);

const alunosSlice = createSlice({
  name: "alunos",
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    removeOne: adapter.removeOne,
  },
});

export const { addOne, addMany, updateOne, removeOne } = alunosSlice.actions;
export default alunosSlice.reducer;
