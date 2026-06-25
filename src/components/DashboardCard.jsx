import React from "react";

const DashboardCard = ({ title, value, color }) => {
  return (
    <div className={`${color} rounded-xl p-6 shadow-lg text-white`}>

      <h2 className="text-lg font-medium">
        {title}
      </h2>

      <p className="text-4xl font-bold mt-3">
        {value}
      </p>

    </div>
  );
};

export default DashboardCard;