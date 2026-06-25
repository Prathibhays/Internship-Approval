import React from "react";

const Profile = () => {
  // Dummy data (replace with API data later)
  const student = {
    name: "Rahul Sharma",
    srn: "PES2UG22CS001",
    branch: "Computer Science",
    semester: 6,
    email: "rahul@example.com",
    phone: "9876543210",
    cgpa: 8.75,
    section: "A",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Student Profile
        </h1>

        <div className="flex items-center gap-6 mb-8">
          <img
            src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=2563eb&color=fff"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-600"
          />

          <div>
            <h2 className="text-2xl font-semibold">
              {student.name}
            </h2>

            <p className="text-gray-600">
              {student.branch}
            </p>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Active Student
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-50 p-5 rounded-lg shadow">
            <h3 className="font-semibold text-blue-600 mb-4">
              Academic Details
            </h3>

            <p><strong>SRN:</strong> {student.srn}</p>
            <p><strong>Branch:</strong> {student.branch}</p>
            <p><strong>Semester:</strong> {student.semester}</p>
            <p><strong>Section:</strong> {student.section}</p>
            <p><strong>CGPA:</strong> {student.cgpa}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg shadow">
            <h3 className="font-semibold text-blue-600 mb-4">
              Contact Details
            </h3>

            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
          </div>

        </div>

        <div className="mt-8 flex gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Edit Profile
          </button>

          <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg">
            Back to Dashboard
          </button>

        </div>

      </div>
    </div>
  );
};

export default Profile;