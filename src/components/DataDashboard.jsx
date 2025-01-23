import React from "react";
import DataKanbanCard from "./ElementComponents/DataKanbanCard";
import { ProjectsData, TasksData } from "../assets/utils/dashboardData";
import DataTable from "./ElementComponents/DataTable";

const DataDashboard = () => {
  return (
    <div>
      <DataKanbanCard data={ProjectsData} />
      <DataTable tableData={ProjectsData} />
      <DataKanbanCard data={TasksData} />
      <DataTable tableData={TasksData} />
    </div>
  );
};

export default DataDashboard;
