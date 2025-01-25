import React, { useState } from "react";
import DataTable from "./ElementComponents/DataTable";
import DataKanbanCard from "./ElementComponents/DataKanbanCard";
import { ProjectsData, TasksData } from "../assets/utils/dashboardData";
import profileIcon from "../assets/images/profile-sec-icon.png";
import kanbanIcon from "../assets/images/kanban-icon.svg";
import tableIcon from "../assets/images/table-icon.svg";
import actionIcon from "../assets/images/action-icon.svg";
import addIcon from "../assets/images/add-icon.svg";
import dropDownIcon from "../assets/images/dropdown-icon.svg";

const DataDashboard = () => {
  const tableCellContentArr = [
    {
      key: "task_percentage",
      content: (value) => {
        return (
          <div className="progress-bar-section" style={{ margin: "5px 0px" }}>
            <span className="progress-num-txt">07</span>
            <div className="progress-indicator-sec">
              <span className="percent-txt">{value}%</span>
              <div className="active" style={{ width: `${value}%` }}></div>
            </div>
            <span className="progress-num-txt">14</span>
          </div>
        );
      },
    },
    {
      key: "owner",
      content: (value) => {
        return (
          <div className="profile-sec">
            <img src={profileIcon} />
            {value}
          </div>
        );
      },
    },
  ];

  const [projectsKanbanShow, setProjectsKanbanShow] = useState(true);
  const [tasksKanbanShow, setTasksKanbanShow] = useState(true);

  return (
    <div>
      <div className="project-head-sec">
        <div className="project-head">
          <h2 className="project-text">Projects</h2>
          <button className="add-project-btn">
            <img src={addIcon} /> Projects
          </button>
        </div>

        <span className="route-txt">
          Dashboard / <span className="link">Project Overview</span>
        </span>
      </div>

      <div>
        <div className="filter-action-sec">
          <h3 className="head-txt">
            All Projects <img src={dropDownIcon} />
          </h3>
          <div className="filter-btn-sec">
            <button
              className={`btn-1 ${!projectsKanbanShow ? "active-btn" : ""}`}
              onClick={() => setProjectsKanbanShow(false)}
            >
              <img src={kanbanIcon} />
            </button>
            <button
              className={`btn-2 ${projectsKanbanShow ? "active-btn" : ""}`}
              onClick={() => setProjectsKanbanShow(true)}
            >
              <img src={tableIcon} />
            </button>
            <button className="btn-3">
              <img src={actionIcon} />
            </button>
          </div>
        </div>

        {projectsKanbanShow ? (
          <DataKanbanCard
            data={ProjectsData}
            statusChips={[
              {
                text: "Not Started",
                status: "secondary",
                count: "2",
              },
              {
                text: "In Progress",
                status: "info",
                count: "3",
              },
              {
                text: "Archived",
                status: "secondary2",
                count: "2",
              },
              {
                text: "Completed",
                status: "success",
                count: "1",
              },
            ]}
          />
        ) : (
          <DataTable
            tableData={ProjectsData}
            tableCellContent={tableCellContentArr}
          />
        )}
      </div>

      <div>
        <div className="filter-action-sec">
          <h3 className="head-txt">
            All Tasks <img src={dropDownIcon} />
          </h3>
          <div className="filter-btn-sec">
            <button
              className={`btn-1 ${!tasksKanbanShow ? "active-btn" : ""}`}
              onClick={() => setTasksKanbanShow(false)}
            >
              <img src={kanbanIcon} />
            </button>
            <button
              className={`btn-2 ${tasksKanbanShow ? "active-btn" : ""}`}
              onClick={() => setTasksKanbanShow(true)}
            >
              <img src={tableIcon} />
            </button>
            <button className="btn-3">
              <img src={actionIcon} />
            </button>
          </div>
        </div>

        {tasksKanbanShow ? (
          <DataKanbanCard
            data={TasksData}
            statusChips={[
              {
                text: "In Progress",
                status: "info",
                count: "3",
              },
              {
                text: "In Review",
                status: "info2",
                count: "2",
              },
              {
                text: "In Revision",
                status: "dark",
                count: "2",
              },
              {
                text: "Completed",
                status: "success",
                count: "1",
              },
            ]}
          />
        ) : (
          <DataTable
            tableData={TasksData}
            hideColumn={["task_percentage"]}
            tableCellContent={[
              {
                key: "owner",
                content: (value) => {
                  return (
                    <div className="profile-sec">
                      <img src={profileIcon} />
                      {value}
                    </div>
                  );
                },
              },
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default DataDashboard;
