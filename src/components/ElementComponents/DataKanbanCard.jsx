import React from "react";
import DataCard from "./DataCard";

const DataKanbanCard = ({ data }) => {
  return (
    <div>
      <div className="data-card-section">
        <div className="data-inner-card-section">
          {data?.map((ele, index) => {
            return <DataCard key={index} cardData={ele} id={index} />;
          })}
        </div>
      </div>

    </div>
  );
};

export default DataKanbanCard;
