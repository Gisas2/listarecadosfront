import { combineReducers } from "@reduxjs/toolkit";

import books from "./books/BooksSlice";
import items from "./items/ItemsSlice";
import aluno from "./alunos/AlunoSlice";
import categoria from "./categorias/categoriaSlice";
import alunos from "./alunos/AlunosSlice";
import posts from "./posts/PostsSlice";
import users from "./users/UsersSlice"

export default combineReducers({
  books,
  items,
  aluno,
  alunos,
  categoria,
  posts,
  users
});
