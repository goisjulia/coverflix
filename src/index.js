import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Video from './pages/cadastro/Video/index';
import Categoria from './pages/cadastro/Categoria/index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={Video} exact />
      <Route path="/cadastro/categoria" component={Categoria} exact />
      <Route component={() => (<h1> Página 404 </h1>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
