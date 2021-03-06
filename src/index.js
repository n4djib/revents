import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/common/ScrollToTop";
// import { loadEvents } from "./features/events/eventActions";

// ReactDOM.render(<App />, document.getElementById('root'));

const rootEl = document.getElementById("root");

const store = configureStore();
// store.dispatch(loadEvents());

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <ReduxToastr
            position="bottom-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
          />
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
