import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLayout } from "./layout";
import { CheckoutPage, HomePage, NotFound } from "./pages";
import Products from "./pages/Products/Products";
import { Collection } from "./components";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.subscribe(() => console.log(store.getState()['cartItems']))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="products" element={<Products />} exact={true}>
            <Route index element={<Collection selection={'all'} />} />
            <Route path="cakes" element={<Collection selection={'cakes'} />} />
            <Route path="cookies" element={<Collection selection={'cookies'} />} />
            <Route path="breads" element={<Collection selection={'breads'} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
