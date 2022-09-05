import { Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { MyPaper } from '../../components/ButtonPink/ButtonPink';
import TituloPagina from '../../components/TituloPagina/TituloPagina';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { alterarCategoria, ativarCategoria, Categoria, desativarCategoria } from '../../store/modules/categorias/categoriaSlice';

const PaginaCategoria: React.FC = () => {

  const dispatch = useAppDispatch();

  const categoriaRedux = useAppSelector(state => state.categoria);


  const alterar = () => {
    const categoria1: Categoria = {
      id: 1,
      nome: "Web",
      ativo: true
    }
    
    dispatch(alterarCategoria(categoria1));
  };

  const desativar = () => {
    dispatch(desativarCategoria());
  }

  const ativar = () => {
    dispatch(ativarCategoria());
  }



  return (
    <React.Fragment>
      <TituloPagina titulo='Titulo da pagina' tamanhoTitulo='h3' />
        <Button onClick={alterar} variant="outlined" className='m-5'>ALterar categoria</Button>
        <Button onClick={desativar} variant="outlined" className='m-5'>Desativar</Button>
        <Button onClick={ativar} variant="outlined" className='m-5'>Ativar</Button>
      <MyPaper>
        <Typography variant='h4'>Cód. da categoria: {categoriaRedux.id}</Typography>
        <Typography variant='h4'>Nome da categoria: {categoriaRedux.nome}</Typography>
        <Typography variant='h4'>Status: {categoriaRedux.ativo ? <ThumbUpIcon/> : <ThumbDownIcon/>}</Typography>
      </MyPaper>
    </React.Fragment>
  );
};

export default PaginaCategoria;
