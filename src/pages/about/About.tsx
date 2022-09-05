import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import TituloPagina from '../../components/TituloPagina/TituloPagina';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPosts, selectAll } from '../../store/modules/posts/PostsSlice';

const About: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state=> state.posts.loading);
  const postsRedux = useAppSelector(selectAll);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Grid container spacing={2}>
      {loading ? <h1>Loading...</h1> : (
      <> 
        <Grid item xs={12}>
        <TituloPagina titulo='Sobre nós' tamanhoTitulo='h3'/>
      </Grid>
      {postsRedux.map(item => {
        return (
          <Grid item xs={12} key={item.id} sm={12}>
            <Typography variant="h4" color="primary">
              {item.title}
            </Typography>
            <Typography variant="body1"  color="primary">
              {item.body}
            </Typography>
          </Grid>
        )
      })}
      
      </>
      )}
      
    </Grid>
  );
};

export default About;
