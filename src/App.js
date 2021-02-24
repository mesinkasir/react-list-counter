import React from "react";
import "./App.css";
import Counter from "./components/counter";
import DataList from "./components/datalist";
import Main from "./components/main";
import { createStore } from "redux";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";

// // actions

// const increment = () => {
//  return { type: 'INCREMENT' }
// }

// const decrement = () => {
//   return { type: 'DECREMENT' }
// }

// // reducer

// const reducerCounter = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// // store

// let store = createStore(reducerCounter);

// // dispatch

// // display

//  store.subscribe(() => console.log(store.getState()));

//  store.dispatch(increment());
//  store.dispatch(decrement());

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 text-center p-3">
              <img
                className="img-fluid"
                width="120"
                src="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
              />
              <br />
              <p className="lead">
                We have develope source code just download it free, for learn
                and support your bussines.
              </p>
              <a
                href="https://www.hockeycomputindo.com/2010/12/blog-post.html"
                className="btn btn-danger rounded-pill"
              >
                Download Source Code Project
              </a>
            </div>
            <div className="col-12 col-md-6 p-3 animate__animated animate__bounceInRight">
              <DataList store={store} />
            </div>

            <div className="col-12 col-md-4 p-3 animate__animated animate__bounceInDown">
              <Main />
            </div>
            <div className="col-4 col-md-2 p-3 p-md-5 animate__animated animate__bounceInLeft">
              <Counter store={store} />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
