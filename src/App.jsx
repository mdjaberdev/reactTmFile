import "./App.css";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/pages/layouts/RootLayout";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </>
    </>
  );
}

export default App;
