import React from "react";
import "./tabsservices.scss";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Tick from "../../assets/svg/tick.svg";

const TabsServices = (props) => {
  return (
    <div className="tabsservices">
      <div className="tabsservices-heading">{props.services?.title}</div>
      {props.services?.tabsgroup && (
        <Tabs defaultActiveKey={1} className="tabsservices-tab-parent">
          {props.services?.tabsgroup?.map((item, index) => (
            <Tab eventKey={index + 1} title={item?.tab?.tabtitle}>
              <div className="tabsservices-table">
                <div className="tabsservices-table-left">
                  <div className="tableservices-table-heading">
                    {item?.tab?.title}
                  </div>
                  <div className="tableservices-table-content">
                    {item?.tab?.description}
                  </div>
                  <button className="tableservices-table-button">
                    Join now
                  </button>
                </div>
                <div className="tabsservices-table-right">
                  {item?.tab?.points?.map((point) => (
                    <div>
                      <img src={Tick} alt="tick-icon" />
                      {point?.point}
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default TabsServices;
