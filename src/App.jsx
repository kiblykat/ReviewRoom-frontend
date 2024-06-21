import { BrowserRouter, Route, Routes } from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import CreateReview from "./pages/CreateReview";
import CreateCustomer from "./pages/CreateCustomer";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="create-review" element={<CreateReview />} />
          <Route path="create-customer" element={<CreateCustomer />} />
          <Route path="create-product" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
