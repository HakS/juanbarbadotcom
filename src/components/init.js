import ReactDOM from "react-dom";
import React from "react";
import ReactGA from 'react-ga';
// import { Provider } from "react-redux";
// import store from "./store";

class Init extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h3>Test</h3>
    );
  }
}

// export default Init;


const Index = () => (
  <Init />
  );

// const Index = () => (
//   <Provider store={store}>
//     <Main />
//   </Provider>
// );

ReactGA.initialize('UA-69615603-1');
ReactGA.pageview('/home');

ReactDOM.render(<Index />, document.getElementById("index"));
