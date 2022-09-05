import { createSlice } from "@reduxjs/toolkit";
import { AlunoType } from "../../../pages/alunos/types";

const initialState: AlunoType = {
  nome: "",
  matricula: 0,
  aprovado: false,
  idade: 0,
};

const alunoSlice = createSlice({
  name: "aluno",
  initialState,
  reducers: {
    adicionar: (state, action) => {
      return action.payload;
    },
    limpar: () => initialState,
  },
});

export const { adicionar, limpar } = alunoSlice.actions;
export default alunoSlice.reducer;
