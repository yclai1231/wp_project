import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppFrame from "./container/AppFrame";
import SignIn from "./container/SignIn";
import Products from "./container/Products";
import styled from "styled-components";
import MainPage from "./container/MainPage";
import ProductDetail from "./container/ProductDetail";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: aliceblue;
`;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppFrame />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* <Route path="/vip" element={<Vip />} /> */}
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
