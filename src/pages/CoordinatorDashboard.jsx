import React from "react";

const CoordinatorDashboard = () => {
  // Dummy data (replace with backend API)
  const stats = [
    { title: "Total Students", value: 250, color: "bg-blue-500" },
    { title: "Applications Submitted", value: 180, color: "bg-green-500" },
    { title: "Pending Approvals", value: 25, color: "bg-yellow-500" },
    { title: "Approved", value: 155, color: "bg-purple-500" },
  ];

  const applications = [
    {
      id: 1,
      student: "Rahul Sharma",
      srn: "PES2UG22CS001",
      company: "Microsoft",
      role: "Software Intern",
      status: "Pending",
    },
    {
      id: 2,
      student: "Ananya Rao",
      srn: "PES2UG22CS015",
      company: "Amazon",
      role: "Cloud Intern",
      status: "Approved",
    },
    {
      id: 3,
      student: "Rohan Kumar",
      srn: "PES2UG22CS030",
      company: "Infosys",
      role: "Developer Intern",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    return status === "Approved"
      ? "text-green-600 font-semibold"
      : "text-yellow-600 font-semibold";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Coordinator Dashboard
        </h1>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`${item.color} text-white rounded-xl p-6 shadow-lg`}
            >
              <h2 className="text-lg">{item.title}</h2>
              <p className="text-3xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Internship Applications Table */}
        <div className="bg-white rounded-xl shadow-lg p-6">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              Recent Internship Applications
            </h2>

            <input
              type="text"
              placeholder="Search Student..."
              className="border rounded-lg px-4 py-2"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-blue-100">
                  <th className="p-3 text-left">Student</th>
                  <th className="p-3 text-left">SRN</th>
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="border-b hover:bg-gray-50">

                    <td className="p-3">{app.student}</td>
                    <td className="p-3">{app.srn}</td>
                    <td className="p-3">{app.company}</td>
                    <td className="p-3">{app.role}</td>

                    <td className="p-3">
                      <span className={getStatusColor(app.status)}>
                        {app.status}
                      </span>
                    </td>

                    <td className="p-3 text-center">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                        View
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
            Approve Applications
          </button>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
            View Reports
          </button>

          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg">
            Send Reminder Emails
          </button>
        </div>

      </div>
    </div>
  );
};

export default CoordinatorDashboard;