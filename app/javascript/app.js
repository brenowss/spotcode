import React, { Fragment } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import './app.scss';
import Menu from './components/shared/menu'
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
        <BrowserRouter>
        <Menu />
        <Routes />
        </BrowserRouter>
    </Fragment>
  );
};

export default App;