import React from "react";
import DataCard from "./DataCard";

const DataKanbanCard = ({ data, statusChips = [] }) => {
  return (
    <div>
      <div className="data-card-section">
        <div className="status-tab-sec">
          {statusChips?.map((ele, i) => {
            return (
              <div key={i}>
                <div className={`status-tab ${ele.status}`}>
                  {ele.text}&nbsp;&nbsp;&nbsp;{ele.count}
                </div>
              </div>
            );
          })}
        </div>
        <div className="data-inner-card-section">
          {data?.map((ele, index) => {
            return <DataCard key={index} cardData={ele} id={index} />;
          })}
        </div>
        <div className="view-more-sec">
          <div className="view-more-item">
            <a className="view-more-btn">View More</a>
          </div>
          <div className="view-more-item">
            <a className="view-more-btn">View More</a>
          </div>
          <div className="view-more-item">
            <a className="view-more-btn">View More</a>
          </div>
          <div className="view-more-item">
            <a className="view-more-btn">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataKanbanCard;
