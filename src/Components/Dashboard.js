import React from "react";
import { useSelector } from "react-redux";
import Cards from "./Card";

const Dashboard = () => {
  const state = useSelector((state) => state.formModel);
  const data = state.todoList;
  console.info("current State", state);
  console.log("current data", data);

  const statusList = ["Todo", "Complete", "Bugs", "Inprogress"];

  // {
  //   /* card component ith current status */
  // }

  return (
    <div className="row">
      <span className="font-weight">
        Todo List &nbsp; &nbsp; &nbsp; &nbsp;
        <i className=" fa fa-thin fa-star"></i>
      </span>

      {(statusList || []).map((item, index) => {
        return (
          <div key={index} className="col ">
            <span className="font-weight">{item}</span>
            <Cards status={item}></Cards>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
