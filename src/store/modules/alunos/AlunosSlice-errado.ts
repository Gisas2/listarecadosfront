import { createSlice } from "@reduxjs/toolkit";
import { AlunosType } from "../../../pages/alunos/types";

const initialState: AlunosType = [];

const alunosSlice = createSlice({
  name: "alunos",
  initialState,
  reducers: {
    adicionar(state, action) {
      return [...state, action.payload];
    },
    excluir(state, action) {
      console.log(action.payload);
      const novoEstado = [...state];
      novoEstado.splice(action.payload, 1);
      return novoEstado;
    },
    clear() {
      return initialState;
    },
  },
});

export const { adicionar, clear, excluir } = alunosSlice.actions;
export default alunosSlice.reducer;
