import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Curriculum from "./pages/Curriculum";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="projects" />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="curriculum" element={<Curriculum />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
