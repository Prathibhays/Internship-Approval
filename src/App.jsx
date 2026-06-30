import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import InternshipForm from "./pages/InternshipForm";
import InternshipStatus from "./pages/InternshipStatus";
import Notifications from "./pages/Notifications";
import CoordinatorDashboard from "./pages/CoordinatorDashboard";
import ApprovalPage from "./pages/ApprovalPage";
import Reports from "./pages/Reports";
import ChatbotPage from "./pages/ChatbotPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page (No Sidebar/Navbar/Footer) */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

        {/* Internship Form */}
        <Route
          path="/internship-form"
          element={
            <Layout>
              <InternshipForm />
            </Layout>
          }
        />

        {/* Internship Status */}
        <Route
          path="/status"
          element={
            <Layout>
              <InternshipStatus />
            </Layout>
          }
        />

        {/* Notifications */}
        <Route
          path="/notifications"
          element={
            <Layout>
              <Notifications />
            </Layout>
          }
        />

        {/* Coordinator */}
        <Route
          path="/coordinator"
          element={
            <Layout>
              <CoordinatorDashboard />
            </Layout>
          }
        />

        {/* Approval */}
        <Route
          path="/approval"
          element={
            <Layout>
              <ApprovalPage />
            </Layout>
          }
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={
            <Layout>
              <Reports />
            </Layout>
          }
        />

        {/* Chatbot */}
        <Route
          path="/chatbot"
          element={
            <Layout>
              <ChatbotPage />
            </Layout>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;