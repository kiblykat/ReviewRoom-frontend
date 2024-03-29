import { BrowserRouter, Route, Routes } from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
