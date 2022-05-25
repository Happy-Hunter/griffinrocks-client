import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import '../css/App.css';

import LiveMusic from './LiveMusic';
import BandPhotos from './BandPhotos';

{/************************** Feature image *************************/ }
const headerData = {
  bgImage: require('../images/profile-background-image.jpg'),
  title: "An archive",
  date: "2007 - 2015",
  style: "featured-header-mobile"
};