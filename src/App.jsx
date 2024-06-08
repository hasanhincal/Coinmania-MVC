import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderView from "./view/HeaderView";
import LoginPage from "./view/loginpage/LoginPage";
import MainPageController from "./controller/MainPageController";
import DetailPageController from "./controller/DetailPageController";
import axios from "axios";

axios.defaults.baseURL = "https://api.coincap.io/v2";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderView />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<MainPageController />} />
          <Route path="/coin/:id" element={<DetailPageController />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
