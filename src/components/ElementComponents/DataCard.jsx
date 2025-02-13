import React from "react";
import FolderIcon from "../../assets/images/folder-icon.svg";
import FileIcon from "../../assets/images/file-icon.svg";
import CalendarIcon from "../../assets/images/calendar-icon.svg";
import ownerIcon from "../../assets/images/owners-icon.png";
import { getStatus } from "../../assets/utils/dashboardData";

const DataCard = ({ cardData, id }) => {

  return (
    <div className="data-card">
      {cardData.status_badge && (
        <div className={`data-card-badge ${getStatus(cardData.status)}`}>
          {cardData.status}
          <div className={`arrow-sec ${getStatus(cardData.status)}`}>
            <div className="arr-inner-sec"></div>
          </div>
        </div>
      )}

      <div className="data-project-sec">
        <span className="project-name">
          <img src={FolderIcon} loading="lazy" />{" "}
          {cardData?.project_name
            ? cardData?.project_name
            : cardData?.tasks_name}
        </span>
        <span className="id-txt">ID: P-{id + 1}</span>
      </div>
      <div className="progress-bar-section">
        <span className="progress-num-txt">07</span>
        <div className="progress-indicator-sec">
          <span className="percent-txt">{cardData?.task_percentage}%</span>
          <div
            className="active"
            style={{ width: `${cardData?.task_percentage}%` }}
          ></div>
        </div>
        <span className="progress-num-txt">14</span>
      </div>
      <div className="date-section">
        <span className="date-txt">
          <img src={CalendarIcon} loading="lazy" /> {cardData?.start_date} -{" "}
          {cardData?.end_date}
        </span>
      </div>
      <div className="files-sec">
        <div className="owner-sec-txt">
          <img src={ownerIcon} loading="lazy" /> <span>10+</span>
        </div>
        <span className="file-txt">
          <img src={FileIcon} loading="lazy" /> <span>14 files</span>
        </span>
      </div>
    </div>
  );
};

export default DataCard;
