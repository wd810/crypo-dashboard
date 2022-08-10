
import { makeStyles } from "@mui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Header from "./Components/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";

const useStyles = makeStyles({
  root: {
    background: "#1a1b12",
    color: "white",
    minHeight: "100vh",
  }
})

function App() {
 
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
