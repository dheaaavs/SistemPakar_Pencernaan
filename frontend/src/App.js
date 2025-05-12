import {BrowserRouter, Routes, Route} from "react-router-dom";
import PenyakitList from "./components/PenyakitList";
import AddPenyakit from "./components/AddPenyakit";
import EditPenyakit from "./components/EditPenyakit";
import GejalaList from "./components/GejalaList";
import AturanList from "./components/AturanList";
import AddGejala from "./components/AddGejala";
import AddAturan from "./components/AddAturan";
import EditGejala from "./components/EditGejala";
import EditAturan from "./components/EditAturan";
import Dashboard from "./components/Dashboard";
import DiagnosaList from "./components/DiagnosaList";
import DiagnosaForm from "./components/DiagnosaForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/penyakit" element={<PenyakitList />} />
        <Route path="/gejala" element={<GejalaList />} />
        <Route path="/aturan" element={<AturanList />} />
        <Route path="/diagnosa" element={<DiagnosaList />} />
        <Route path="/add-diagnosa" element={<DiagnosaForm />} />
        <Route path="penyakit/add-penyakit" element={<AddPenyakit />} />
        <Route path="/gejala/add-gejala" element={<AddGejala />} />
        <Route path="aturan/add-aturan" element={<AddAturan />} />
        <Route path="/edit-penyakit/:id" element={<EditPenyakit />} />
        <Route path="/edit-gejala/:id" element={<EditGejala />} />
        <Route path="/edit-aturan/:id" element={<EditAturan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;