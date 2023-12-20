import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigator from "./routes/Navigator";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
