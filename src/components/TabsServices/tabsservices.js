import React, { useState } from "react";
import "./tabsservices.scss";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Tick from "../../assets/svg/tick.svg";
import BgIcon from "../../assets/svg/tabservicebg.svg";

const TabsServices = (props) => {
  return (
    <div className="tabsservices">
      <div className="tabsservices-heading">
        We have got everything covered.
      </div>
      <Tabs defaultActiveKey="first" className="tabsservices-tab-parent">
        <Tab eventKey="first" title="TABLE SERVICE">
          <div className="tabsservices-table">
            <div className="tabsservices-table-left">
              <div className="tableservices-table-heading">
                No Signup, No Downloads Super fast, Super simple
              </div>
              <div className="tableservices-table-content">
                Changing the way people eat & drink with the worlds fastest
                order and pay platform, creating a seemless order experience for
                you and your customers. Table Service App has been made to
                improve customer service and increase the average value of
                orders.
              </div>
              <button className="tableservices-table-button">Join now</button>
            </div>
            <div className="tabsservices-table-right">
              <div>
                <img src={Tick} alt="tick-icon" />
                No upfront costs
              </div>
              <div>
                <img src={Tick} alt="tick-icon" />
                High R.O.I per transaction
              </div>
              <div>
                <img src={Tick} alt="tick-icon" />
                Instant Menu, No Sign ups or downloads
              </div>
              <div>
                <img src={Tick} alt="tick-icon" />
                Use own payment provider
              </div>
              <div>
                <img src={Tick} alt="tick-icon" />
                Automatic Printing
              </div>
              <div>
                <img src={Tick} alt="tick-icon" />
                Real-Time Stock Control
              </div>
              <div>
                <img src={Tick} alt="tick-icon" />
                Sales & Reporting
              </div>
              <div>
                <img src={Tick} alt="tick-icon" />
                Fully Brandable
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="second" title="ROOM SERVICE">
          Hii, I am 2nd tab content
        </Tab>
        <Tab eventKey="third" title="TAKEAWAYS">
          Hii, I am 3rd tab content
        </Tab>
        <Tab eventKey="fourth" title="EVENTS/FESTIVALS">
          Hii, I am 4th tab content
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsServices;
