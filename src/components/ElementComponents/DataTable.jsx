import React, { useEffect } from "react";

const DataTable = ({ tableData, tableCellContent = null, hideColumn = [] }) => {
  const getTableCellContent = (key, value) => {
    if (tableCellContent) {
      let filterContent = tableCellContent.filter((ele) => ele.key == key)[0];
      return filterContent ? filterContent.content(value) : value;
    } else {
      return value;
    }
  };

  const getStatus = (status) => {
    if (status == "Completed") {
      return "success";
    } else if (status == "Not Started") {
      return "secondary";
    } else if (status == "Archived") {
      return "secondary2";
    } else if (status == "In Progress") {
      return "info";
    } else if (status == "In Review") {
      return "info2";
    } else if (status == "Delayed") {
      return "error";
    } else if (status == "On Track") {
      return "warning";
    } else if (status == "In Revision") {
      return "dark";
    }
  };

  return (
    <div className="table-container">
      <table className="table-section">
        <tr className="table-head">
          <th className="table-cell">ID</th>
          {Object.keys(tableData[0]).map((value, i) => {
            return (
              <th
                key={i}
                className={`table-cell ${
                  Object.keys(tableData[0]).length - 1 === i ? "no-border-right" : ""
                }`}
              >
                {value.split("_").join(" ").toString()}
              </th>
            );
          })}
        </tr>

        {tableData.map((ele, index) => {
          return (
            <tr key={index} className="table-row">
              <td
                className={`table-cell ${
                  tableData.length - 1 === index ? "no-border-bottom" : ""
                }`}
              >
                {index + 1}
              </td>
              {Object.entries(ele).map(([key, value], i) => {
                return (
                  <td
                    key={i}
                    className={`table-cell ${
                      tableData.length - 1 === index ? "no-border-bottom" : ""
                    } 
                    ${
                      Object.values(ele).length - 1 === i ? "no-border-right" : ""
                    } ${key == "status" ? getStatus(value) : ""}`}
                  >
                    {getTableCellContent(key, value)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default DataTable;
