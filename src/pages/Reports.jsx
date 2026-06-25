import React from "react";

const Reports = () => {
  const stats = [
    {
      title: "Total Students",
      value: 250,
      color: "bg-blue-500",
    },
    {
      title: "Internships Approved",
      value: 180,
      color: "bg-green-500",
    },
    {
      title: "Pending Approval",
      value: 30,
      color: "bg-yellow-500",
    },
    {
      title: "Evaluations Received",
      value: 145,
      color: "bg-purple-500",
    },
  ];

  const companyData = [
    { company: "Microsoft", students: 20 },
    { company: "Amazon", students: 18 },
    { company: "Google", students: 15 },
    { company: "Infosys", students: 35 },
    { company: "TCS", students: 28 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Internship Reports
        </h1>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`${item.color} text-white p-6 rounded-xl shadow`}
            >
              <h2 className="text-lg">{item.title}</h2>
              <p className="text-3xl font-bold mt-2">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Company-wise Report */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Company-wise Internship Report
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Students</th>
              </tr>
            </thead>

            <tbody>
              {companyData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3">{item.company}</td>
                  <td className="p-3">{item.students}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Internship Summary */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Internship Summary
            </h2>

            <ul className="space-y-2">
              <li>✅ Paid Internships: 120</li>
              <li>✅ Unpaid Internships: 60</li>
              <li>✅ Remote: 75</li>
              <li>✅ Hybrid: 40</li>
              <li>✅ Onsite: 65</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Average Stipend
            </h2>

            <div className="text-5xl font-bold text-green-600">
              ₹25,000
            </div>

            <p className="text-gray-500 mt-3">
              Average monthly stipend across all approved internships.
            </p>
          </div>

        </div>

        {/* Export Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
            Export CSV
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Export PDF
          </button>
        </div>

      </div>
    </div>
  );
};

export default Reports;