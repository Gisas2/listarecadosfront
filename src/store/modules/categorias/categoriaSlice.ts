import { createSlice } from "@reduxjs/toolkit";

interface Categoria {
  id: number;
  nome: string;
  ativo: boolean;
}

const initialState: Categoria = {
  id: 0,
  nome: "",
  ativo: false,
};

const categoriaSlice = createSlice({
  name: "categoria",
  initialState,
  reducers: {
    alterarCategoria(state, action) {
      return action.payload;
    },
    ativarCategoria(state) {
      state.ativo = true;
    },
    desativarCategoria(state) {
      state.ativo = false;
    },
    clear() {
      return initialState;
    },
  },
});

export type { Categoria };
export const { alterarCategoria, desativarCategoria, ativarCategoria, clear } =
  categoriaSlice.actions;
export default categoriaSlice.reducer;
