import React from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
// import { Provider } from "react-redux";
// import store from "./store";

import Init from "./components/init";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay, faStop, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faPlay, faStop, faPen, faTrash);

import './main.scss';

// const Index = () => (
//   <Provider store={store}>
//     <Main />
//   </Provider>
// );

ReactGA.initialize('UA-69615603-1');
ReactGA.pageview('/home');

const Index = () => (
  <Init />
);

ReactDOM.render(<Index />, document.getElementById("index"));
