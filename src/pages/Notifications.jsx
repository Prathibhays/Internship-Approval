import React from "react";

const Notifications = () => {
  // Dummy notifications (replace with API data later)
  const notifications = [
    {
      id: 1,
      title: "Internship Approved",
      message: "Your internship at Microsoft has been approved.",
      date: "25 June 2026",
      type: "success",
    },
    {
      id: 2,
      title: "Reminder",
      message: "Please upload your offer letter before 30 June.",
      date: "24 June 2026",
      type: "warning",
    },
    {
      id: 3,
      title: "Evaluation Pending",
      message: "Your manager has not submitted the evaluation yet.",
      date: "20 June 2026",
      type: "info",
    },
    {
      id: 4,
      title: "Chatbot Update",
      message: "New internship FAQs have been added.",
      date: "18 June 2026",
      type: "default",
    },
  ];

  const getColor = (type) => {
    switch (type) {
      case "success":
        return "border-green-500 bg-green-50";
      case "warning":
        return "border-yellow-500 bg-yellow-50";
      case "info":
        return "border-blue-500 bg-blue-50";
      default:
        return "border-gray-400 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Notifications
        </h1>

        <div className="space-y-5">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`border-l-4 p-5 rounded-lg shadow ${getColor(item.type)}`}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>

              <p className="text-gray-700 mt-2">
                {item.message}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Mark All as Read
          </button>

          <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg">
            Back to Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};

export default Notifications;