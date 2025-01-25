import React, { useState } from "react";
import DataTable from "./ElementComponents/DataTable";
import DataKanbanCard from "./ElementComponents/DataKanbanCard";
import { ProjectsData, TasksData } from "../assets/utils/dashboardData";
import profileIcon from "../assets/images/profile-sec-icon.png";
import kanbanIcon from "../assets/images/kanban-icon.svg";
import tableIcon from "../assets/images/table-icon.svg";
import actionIcon from "../assets/images/action-icon.svg";

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
      <button onClick={() => setProjectsKanbanShow(false)}>
        <img src={kanbanIcon} />
      </button>
      <button onClick={() => setProjectsKanbanShow(true)}>
        <img src={tableIcon} />
      </button>
      <button>
        <img src={actionIcon} />
      </button>

      {projectsKanbanShow ? (
        <DataKanbanCard data={ProjectsData} />
      ) : (
        <DataTable
          tableData={ProjectsData}
          tableCellContent={tableCellContentArr}
        />
      )}

      <button onClick={() => setTasksKanbanShow(false)}>
        <img src={kanbanIcon} />
      </button>
      <button onClick={() => setTasksKanbanShow(true)}>
        <img src={tableIcon} />
      </button>
      <button>
        <img src={actionIcon} />
      </button>
      {tasksKanbanShow ? (
        <DataKanbanCard data={TasksData} />
      ) : (
        <DataTable
          tableData={TasksData}
          tableCellContent={tableCellContentArr}
        />
      )}
    </div>
  );
};

export default DataDashboard;
