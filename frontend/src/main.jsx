import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import ShopContextProvider from "./context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
