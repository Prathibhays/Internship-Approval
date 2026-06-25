import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import InternshipForm from "./pages/InternshipForm";
import InternshipStatus from "./pages/InternshipStatus";
import CoordinatorDashboard from "./pages/CoordinatorDashboard";
import ApprovalPage from "./pages/ApprovalPage";
import ChatbotPage from "./pages/ChatbotPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/internship-form" element={<InternshipForm />} />
        <Route path="/status" element={<InternshipStatus />} />
        <Route path="/coordinator" element={<CoordinatorDashboard />} />
        <Route path="/approval" element={<ApprovalPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;