import React from "react";

import HomeScreen from "./pages/home";
import DiscoveryScreen from "./pages/discovery";
import SearchScreen from "./pages/search";
import AlbumScreen from "./pages/album";
import FavoritesScreen from "./pages/favorites";

import { Switch, Route } from 'react-router-dom'

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={HomeScreen} />
    <Route exact path='/discovery' component={DiscoveryScreen} />
    <Route exact path='/search' component={SearchScreen} />
    <Route exact path='/album/:id' component={AlbumScreen} />
    <Route exact path='/favorites' component={FavoritesScreen} />
  </Switch>
);

export default Routes;