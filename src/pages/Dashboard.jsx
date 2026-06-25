import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="p-10">

        <h2 className="text-3xl font-bold">
          Welcome Student
        </h2>

        <div className="grid grid-cols-4 gap-5 mt-8">

          <div className="bg-green-100 p-5 rounded">
            <h3>Status</h3>
            <p>Approved</p>
          </div>

          <div className="bg-yellow-100 p-5 rounded">
            <h3>Company</h3>
            <p>Microsoft</p>
          </div>

          <div className="bg-blue-100 p-5 rounded">
            <h3>Role</h3>
            <p>Software Intern</p>
          </div>

          <div className="bg-red-100 p-5 rounded">
            <h3>Notifications</h3>
            <p>2</p>
          </div>

        </div>

      </div>
    </>
  );
}