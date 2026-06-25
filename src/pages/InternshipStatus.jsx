import React from "react";

const InternshipStatus = () => {
  // Dummy data (replace with API response)
  const internship = {
    company: "Microsoft",
    role: "Software Development Intern",
    status: "Approved",
    startDate: "01-07-2026",
    endDate: "31-08-2026",
    coordinator: "Dr. Anitha",
    evaluation: "Pending",
  };

  const steps = [
    { title: "Application Submitted", completed: true },
    { title: "Coordinator Review", completed: true },
    { title: "Approved", completed: true },
    { title: "Evaluation Pending", completed: false },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Internship Status
        </h1>

        {/* Internship Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Internship Details
            </h2>

            <p><strong>Company:</strong> {internship.company}</p>
            <p><strong>Role:</strong> {internship.role}</p>
            <p><strong>Start Date:</strong> {internship.startDate}</p>
            <p><strong>End Date:</strong> {internship.endDate}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Approval Details
            </h2>

            <p>
              <strong>Status:</strong>{" "}
              <span className="text-green-600 font-bold">
                {internship.status}
              </span>
            </p>

            <p><strong>Coordinator:</strong> {internship.coordinator}</p>
            <p><strong>Evaluation:</strong> {internship.evaluation}</p>
          </div>

        </div>

        {/* Progress Timeline */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          Progress Timeline
        </h2>

        <div className="space-y-5">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                  step.completed ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                {step.completed ? "✓" : index + 1}
              </div>

              <div>
                <p className="font-semibold">{step.title}</p>
                <p className="text-sm text-gray-500">
                  {step.completed ? "Completed" : "Waiting"}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            View Internship Details
          </button>

          <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg">
            Back to Dashboard
          </button>

        </div>

      </div>
    </div>
  );
};

export default InternshipStatus;