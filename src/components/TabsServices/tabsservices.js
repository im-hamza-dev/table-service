import React from "react";
import "./tabsservices.scss";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Tick from "../../assets/svg/tick.svg";

const TabsServices = (props) => {
  return (
    <div className="tabsservices">
      <div className="tabsservices-heading">{props.services?.title}</div>
      <div className="tabsservices-description">
        {props.services?.description}
      </div>
      {props.services?.tabsgroup && (
        <Tabs defaultActiveKey={1} className="tabsservices-tab-parent">
          {props.services?.tabsgroup?.map((item, index) => (
            <Tab eventKey={index + 1} title={item?.tab?.tabtitle}>
              <div className="tabsservices-table">
                <div className="tabsservices-table-left">
                  <div
                    className="tableservices-table-heading"
                    dangerouslySetInnerHTML={{ __html: item?.tab?.title }}
                  />
                  <div
                    className="tableservices-table-content"
                    dangerouslySetInnerHTML={{ __html: item?.tab?.description }}
                  />

                  {item?.tab?.button?.link && item?.tab?.button?.text && (
                    <a
                      href={item?.tab?.button?.link}
                      className="tableservices-table-button"
                    >
                      {item?.tab?.button?.text}
                    </a>
                  )}
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
