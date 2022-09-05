
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  {MyPaper} from '../../components/ButtonPink/ButtonPink';
import TituloPagina from '../../components/TituloPagina/TituloPagina';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addOne, removeOne, selectAll, updateOne } from '../../store/modules/alunos/AlunosSlice';
import {AlunoType, AlunosType} from './types';

const Alunos: React.FC = () => {

const alunosRedux = useAppSelector(selectAll);
// const [alunosLocal, setAlunosLocal] = useState<AlunosType>([]);
const [nome, setNome] = useState<string>("");
const [idade, setIdade] = useState<string>("");
const [matricula, setMatricula] = useState<string>("");

const dispatch = useAppDispatch();

const [open, setOpen] = React.useState(false);
const [openEditar, setOpenEditar] = React.useState(false);

  const abrirModal = () => {
    setOpen(true);
  };

  const abrirModalEditar = () => {
    setOpenEditar(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNome("");
    setMatricula("");
    setIdade("");
  };

  const fecharModalEditar = () => {
    setOpenEditar(false);
    setNome("");
    setMatricula("");
    setIdade("");
  };

function cadastrarAluno() {

  const aluno:AlunoType = {
    nome: nome,
    idade: Number(idade),
    matricula: Number(matricula),
    aprovado: false
  }

  // setAlunosLocal([...alunosLocal, aluno]);
  dispatch(addOne(aluno));

  setNome("");
  setMatricula("");
  setIdade("");
}

function excluirAluno(matricula: number) {
  dispatch(removeOne(matricula));
}

function fezAniversario(matricula: number, idade: number) {
  dispatch(updateOne({id: matricula, changes: {idade:idade + 1}}))
}

function editarAluno(item: AlunoType) {
  setNome(item.nome);
  setMatricula(item.matricula + '');
  setIdade(item.idade + "");

  abrirModalEditar();
}

function atualizarAluno() {
  dispatch(updateOne({id: matricula, changes: {idade: Number(idade), nome: nome, matricula: Number(matricula)}}))
}

  return (
    <React.Fragment>
      <TituloPagina titulo='Alunos' tamanhoTitulo='h3'/>
      <Button onClick={abrirModal} variant='outlined'>Cadastrar</Button>

      {alunosRedux.map((item ) => {
        return (
          <div key={item.matricula} className="mt-5">
            <Typography>Nome: {item.nome}</Typography>
            <Typography>Idade: {item.idade}</Typography>
            <Typography>Matricula: {item.matricula}</Typography>
            <Button onClick={()=> fezAniversario(item.matricula, item.idade)} variant='outlined'>Fez aniverário</Button>
            <Button onClick={()=> editarAluno(item)} variant='outlined'>Editar</Button>
            <Button onClick={()=> excluirAluno(item.matricula)} variant='outlined'>Excluir</Button>
          </div>
        )
      })}
      <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Cadastrar aluno
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Para cadastrar um aluno, utilize o fomrulário abaixo.
          </DialogContentText>
          <Grid container spacing={2} className="mt-5">
            <Grid item xs={12}>
              <TextField value={nome} onChange={(e) => setNome(e.target.value)} label="Digite o nome" fullWidth color="secondary" focused />
            </Grid>
            <Grid item xs={12}>
              <TextField value={idade} onChange={(e) => setIdade(e.target.value)} label="Idade" fullWidth color="secondary" />
            </Grid>
            <Grid item xs={12}>
              <TextField value={matricula} onChange={(e) => setMatricula(e.target.value)} label="Matricula" fullWidth color="secondary" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant='contained' onClick={()=> cadastrarAluno()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      {/* MODAL DE EDITAR */}
      <Dialog
        open={openEditar}
        onClose={fecharModalEditar}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Editar aluno
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Para editar um aluno, utilize o fomrulário abaixo.
          </DialogContentText>
          <Grid container spacing={2} className="mt-5">
            <Grid item xs={12}>
              <TextField value={nome} onChange={(e) => setNome(e.target.value)} label="Digite o nome" fullWidth color="secondary" focused />
            </Grid>
            <Grid item xs={12}>
              <TextField value={idade} onChange={(e) => setIdade(e.target.value)} label="Idade" fullWidth color="secondary" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={fecharModalEditar}>Cancelar</Button>
          <Button variant='contained' onClick={()=> atualizarAluno()}>
            Atualizar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </React.Fragment>
  );
};

export default Alunos;