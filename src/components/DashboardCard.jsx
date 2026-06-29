import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="app">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="content">

          <h1>Dashboard</h1>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;;