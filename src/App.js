import { BrowserRouter } from "react-router-dom";
import AllRouter from "./router/AllRouter";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AllRouter />
    </BrowserRouter>
  );
}

export default App;
