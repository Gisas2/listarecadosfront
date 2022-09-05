import { Typography } from '@mui/material';
import React from 'react';

interface TituloPaginaProps {
  titulo: string;
  tamanhoTitulo?: "h1" | "h2" | "h3" | "h4";
}

const TituloPagina: React.FC<TituloPaginaProps> = ({titulo, tamanhoTitulo}) => {
  return (
    <React.Fragment>
      <Typography variant={tamanhoTitulo}>{titulo}</Typography>
    </React.Fragment>
  );
};

export default TituloPagina;
