import React from "react";
import {
  FaBuilding,
  FaUserTie,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaArrowLeft,
  FaFileAlt,
  FaDownload,
  FaUniversity,
} from "react-icons/fa";

import "./InternshipStatus.css";

const InternshipStatus = () => {
  const internship = {
    company: "Microsoft",
    role: "Software Development Intern",
    status: "Approved",
    startDate: "01 July 2026",
    endDate: "31 August 2026",
    coordinator: "Dr. Anitha",
    evaluation: "Pending",
    credits: 4,
    duration: "2 Months",
  };

  const progress = 75;

  const timeline = [
    {
      title: "Application Submitted",
      date: "26 June 2026",
      completed: true,
    },
    {
      title: "Coordinator Review",
      date: "27 June 2026",
      completed: true,
    },
    {
      title: "Approved",
      date: "29 June 2026",
      completed: true,
    },
    {
      title: "Evaluation Pending",
      date: "Waiting",
      completed: false,
    },
  ];

  return (
    <div className="status-page">

      {/* Header */}

      <div className="page-header">

        <div>

          <h1>Internship Status</h1>

          <p>
            Track your internship approval, evaluation and overall progress.
          </p>

        </div>

        <button className="download-btn">

          <FaDownload />

          Download Letter

        </button>

      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-card">

          <FaCheckCircle className="stat-icon green" />

          <div>

            <h3>Status</h3>

            <span>Approved</span>

          </div>

        </div>

        <div className="stat-card">

          <FaCalendarAlt className="stat-icon orange" />

          <div>

            <h3>Duration</h3>

            <span>{internship.duration}</span>

          </div>

        </div>

        <div className="stat-card">

          <FaUniversity className="stat-icon blue" />

          <div>

            <h3>Credits</h3>

            <span>{internship.credits}</span>

          </div>

        </div>

        <div className="stat-card">

          <FaClock className="stat-icon purple" />

          <div>

            <h3>Evaluation</h3>

            <span>{internship.evaluation}</span>

          </div>

        </div>

      </div>

      {/* Main Grid */}

      <div className="details-grid">

        {/* Internship Details */}

        <div className="card">

          <div className="card-header">

            <FaBuilding />

            <h2>Internship Details</h2>

          </div>

          <div className="info-row">

            <span>Company</span>

            <strong>{internship.company}</strong>

          </div>

          <div className="info-row">

            <span>Role</span>

            <strong>{internship.role}</strong>

          </div>

          <div className="info-row">

            <span>Start Date</span>

            <strong>{internship.startDate}</strong>

          </div>

          <div className="info-row">

            <span>End Date</span>

            <strong>{internship.endDate}</strong>

          </div>

        </div>

        {/* Approval */}

        <div className="card">

          <div className="card-header">

            <FaUserTie />

            <h2>Approval Details</h2>

          </div>

          <div className="info-row">

            <span>Status</span>

            <span className="badge approved">

              Approved

            </span>

          </div>

          <div className="info-row">

            <span>Coordinator</span>

            <strong>{internship.coordinator}</strong>

          </div>

          <div className="info-row">

            <span>Evaluation</span>

            <span className="badge pending">

              Pending

            </span>

          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="card progress-card">

        <div className="card-header">

          <FaClock />

          <h2>Overall Progress</h2>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

        <p>{progress}% Completed</p>

      </div>

      {/* Timeline */}

      <div className="card">

        <div className="card-header">

          <FaCheckCircle />

          <h2>Approval Timeline</h2>

        </div>

        <div className="timeline">

          {timeline.map((item, index) => (

            <div className="timeline-item" key={index}>

              <div
                className={
                  item.completed
                    ? "circle completed"
                    : "circle pending"
                }
              >
                {item.completed ? "✓" : ""}
              </div>

              <div className="timeline-content">

                <h3>{item.title}</h3>

                <span>{item.date}</span>

              </div>

            </div>

          ))}
        </div>

      </div>

      {/* Buttons */}

      <div className="button-group">

        <button className="primary-btn">

          <FaFileAlt />

          View Internship Details

        </button>

        <button className="secondary-btn">

          <FaArrowLeft />

          Back to Dashboard

        </button>

      </div>

    </div>
  );
};

export default InternshipStatus;