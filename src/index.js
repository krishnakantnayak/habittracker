import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import store from "./store";
import "./components/Todo.css";
import { Provider } from "react-redux";
//entry point index
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store ={store}>
     <Navbar/>
     <footer className="card-footer bg-transparent border-success">
     </footer>
    </Provider>
  </StrictMode>
);
