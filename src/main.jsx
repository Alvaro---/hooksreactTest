import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp";
import { CounterApp } from "./01.-UseState/CounterApp";
import { CounterwithCustomHook } from "./01.-UseState/CounterwithCustomHook";
import { SimpleForm } from "./02.-UseEffect/SimpleForm";

import "./index.css";
import { FormWithCustomHook } from "./02.-UseEffect/FormWithCustomHook";
import { MultipleCostomHooks } from "./03.-MultipleHooks/MultipleCostomHooks";
import { FocusScreen } from "./04.-UseRef/FocusScreen";
import { Layout } from "./05.-UseLayoutEffect/Layout";
import { Memorize } from "./06.-Memos/Memorize";
import { MemoHook } from "./07.-UseMemo/MemoHook";
import { CallbackHook } from "./08.-UseCallback/CallbackHook";
import { Padre } from "./09-tarea-memo/Padre";

import "./10.-UseReducer/introreducer";
import { TodoApp } from "./10.-UseReducer/TodoApp";
import { MainApp } from "./11.-useContext/mainApp";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterwithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCostomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    {/* <Padre /> */}
    {/* <TodoApp /> */}
    <MainApp />
  </BrowserRouter>
);
