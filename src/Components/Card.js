import { Button } from "primereact/button";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import moment from "moment";

const Cards = (props) => {
  const state = useSelector((state) => state.formModel);
  const data = state.todoList;
  const Id = state.Id;
  const status = props.status;
  console.info("current State", state);
  console.log("current data", data);
  console.log("current status", status);
  console.log("Current Id", Id);
  const dispatch = useDispatch();

  const filteredData = data.filter((dataItem) => dataItem.status === status);
  const getFormatDate = (From, To) => {
    if (moment(From).utc().format("DD-MMM-YYY") === moment(To).utc().format("DD-MMM-YYY")) {
      return moment(From, To).utc().format("DD-MMM YYYY HH:MM");
    } else if (
      moment(From).utc().format("DD") !== moment(To).utc().format("DD") &&
      moment(From).utc().format("MMM") === moment(To).utc().format("MMM")
    ) {
      return `${moment(From).utc().format("DD-")} ${moment(To).utc().format("DD-MMM YYYY HH:MM")}`;
    } else if (
      moment(From).utc().format("DD") !== moment(To).utc().format("DD") &&
      moment(From).utc().format("MMM") !== moment(To).utc().format("MMM")
    ) {
      return `${moment(From).utc().format("DD-MMM ")} ${moment(To).utc().format("DD-MMM YYYY HH:MM")}`;
    }
  };

  const deleteBtn = (id) => {
    debugger;
    console.log("id===", id);
    console.info("onClicked Called");
    debugger;
    dispatch.formModel.deleteRecordAsync(id);
    debugger;
  };
  const updateBtn = (data) => {
    console.info("onClicked update Called");

    dispatch.formModel.updateRecordAsync(data);
  };

  // filter data with status from dashboard

  // const footer = (
  //   <span>
  //     <Button label="Update" icon="pi pi-check" />
  //     <Button label="Delete" icon="pi pi-times" className="p-button-secondary deletebtn" />
  //   </span>
  // );

  return (
    <div className="container-fluid card " style={{ backgroundColor: "#7fffd442" }}>
      <div className="row">
        {(filteredData || []).map((item, index) => {
          console.log("state.data>>>", data);
          console.log("item.data>>>", item);

          return (
            <div key={index} className="col">
              <Card className="width">
                <div className="title">
                  {item.title.toUpperCase()}
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end buttonsIcon">
                    <Button
                      type="button"
                      icon="pi pi-trash"
                      tooltip="Click to Delete Item"
                      tooltipOptions={{ position: "bottom" }}
                      className="p-button-danger me-md-2 "
                      onClick={() => {
                        deleteBtn(item.Id);
                      }}></Button>
                    <Button
                      type="button"
                      icon="pi pi-user-edit"
                      tooltip="Click to Edit Item"
                      tooltipOptions={{ position: "bottom" }}
                      className="p-button-primary "
                      onClick={() => {
                        updateBtn(item.data);
                      }}></Button>
                  </div>
                </div>
                <div className={"status " + item.status}> {item.status}</div>

                <br />

                <span className="text " style={{ overflow: "hidden" }}>
                  {item.description}
                </span>
                <br />
                <div className="calender">
                  <i className="pi pi-calendar" style={{ fontSize: "2em" }}></i>

                  <span className="text C-text"> {getFormatDate(item.from, item.to)}</span>
                </div>
                <br />
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
