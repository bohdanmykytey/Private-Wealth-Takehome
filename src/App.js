import "./App.css";
import Table from "./components/Table";
import EditPage from "./components/EditPage";
import PageNotFound from "./components/pageNotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/edit" element={<EditPage />} />
        <Route path="/" element={<Table />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
