import React, { useEffect } from "react";
import { getStatus } from "../../assets/utils/dashboardData";

const DataTable = ({ tableData, tableCellContent = [], tableHeadContent = [], hideColumn = [] }) => {
  const getTableCellContent = (key, value) => {
    if (tableCellContent) {
      let filterContent = tableCellContent?.filter((ele) => ele.key == key)[0];
      return filterContent ? filterContent.content(value) : value;
    } else {
      return value;
    }
  };

  const getTableHeadContent = (value) => {
    if (tableHeadContent) {
      let filterContent = tableHeadContent.filter((ele) => ele.key == value)[0];
      return filterContent ? filterContent.content(value.split("_").join(" ").toString()) : value.split("_").join(" ").toString();
    } else {
      return value.split("_").join(" ").toString();
    }
  };

  return (
    <div className="table-container">
      <table className="table-section">
        <tr className="table-head">
          <th className="table-cell">ID</th>
          {Object.keys(tableData[0])?.map((value, i) => {
            if (hideColumn.includes(value)) {
              return null;
            } else {
              return (
                <th
                  key={i}
                  className={`table-cell ${
                    Object.keys(tableData[0])?.length - 1 === i
                      ? "no-border-right"
                      : ""
                  }`}
                >
                  {/* {value.split("_").join(" ").toString()} */}
                  {getTableHeadContent(value)}
                </th>
              );
            }
          })}
        </tr>

        {tableData?.map((ele, index) => {
          return (
            <tr key={index} className="table-row">
              <td
                className={`table-cell ${
                  tableData.length - 1 === index ? "no-border-bottom" : ""
                }`}
              >
                {index + 1}
              </td>
              {Object.entries(ele)?.map(([key, value], i) => {
                if (hideColumn.includes(key)) {
                  return null;
                } else {
                  return (
                    <td
                      key={i}
                      className={`table-cell ${
                        tableData.length - 1 === index ? "no-border-bottom" : ""
                      } 
                    ${
                      Object.values(ele)?.length - 1 === i
                        ? "no-border-right"
                        : ""
                    } ${key == "status" ? getStatus(value) : ""}`}
                    >
                      {getTableCellContent(key, value)}
                    </td>
                  );
                }
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default DataTable;
