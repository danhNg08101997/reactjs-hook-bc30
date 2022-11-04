import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import UseStateDemo from "./pages/HookDemo/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/HookDemo/UseEffectDemo/UseEffectDemo";
import UseCallBackDemo from "./pages/HookDemo/UseCallBackDemo/UseCallBackDemo";
import UseMemoDemo from "./pages/HookDemo/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/HookDemo/UseRefDemo/UseRefDemo";
import DemoNumber from "./pages/HookDemo/UseReduxDemo/DemoNumber/DemoNumber";
import DemoFaceBookApp from "./pages/HookDemo/UseReduxDemo/DemoFaceBookApp/DemoFaceBookApp";
import LoginDemo from "./pages/HookDemo/UseHookRouter/LoginDemo/LoginDemo";
import Home from "./pages/HookDemo/UseHookRouter/UseParamsDemo/Home";
import Detail from "./pages/HookDemo/UseHookRouter/UseParamsDemo/Detail";
import UseSearchParams from "./pages/HookDemo/UseHookRouter/UseSearchParams/UseSearchParams";
import DemoUseRoute from "./pages/HookDemo/CustomHooks/DemoUseRoute";
import Login from "./pages/Login/Login";

//setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

//antd
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import AntdDemo from "./pages/AntdDemo/AntdDemo";

import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./assets/scss/style.scss";
import Profile from "./pages/Profile/Profile";

//cấu hình history (chuyển hướng không cần hook navigate)
export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="search" element={<UseSearchParams />}></Route>
          <Route path="usestate" element={<UseStateDemo />}></Route>
          <Route path="useeffect" element={<UseEffectDemo />}></Route>
          <Route path="usecallback" element={<UseCallBackDemo />}></Route>
          <Route path="usememo" element={<UseMemoDemo />}></Route>
          <Route path="useref" element={<UseRefDemo />}></Route>
          <Route path="useredux" element={<DemoNumber />}></Route>
          <Route path="usereduxfbapp" element={<DemoFaceBookApp />}></Route>
          <Route path="logindemo" element={<LoginDemo />}></Route>
          <Route path="demouseroutes" element={<DemoUseRoute />}></Route>
          <Route path="antd" element={<AntdDemo />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
