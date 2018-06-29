import React from 'react';
import './App.css';
import fetchOnScroll from './hoc/fetchOnScroll';
import Image from './image';
import Grid from './grid';
import Loading from './loading';

const App = ({urls, isLoading}) =>
  <div className="App">
    <Grid>
      {
        urls.map(({url, username, avatarUrl}, i) =>
         <Image key={url+i} src={url} name={username} avatarUrl={avatarUrl} />
        )
      }
    </Grid>
    <Loading isLoading={isLoading} />
  </div>

export default fetchOnScroll(App);
