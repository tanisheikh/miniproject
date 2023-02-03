import { useFormik } from "formik";

import * as Yup from "yup";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  const StatusField = [
    { label: "Todo", value: "Todo" },
    { label: "Inprogress", value: "Inprogress" },

    { label: "Bugs", value: "Bugs" },

    { label: "Complete", value: "Complete" },
  ];

  const formik = useFormik({
    // const moment={moment().utc().format("DD-MM-YYYY HH:SS")}
    initialValues: {
      title: undefined,
      description: undefined,
      from: undefined,
      to: undefined,
      status: StatusField[0].value,
    },
    onSubmit: function (values) {
      debugger;
      console.log("values===", values);
      console.info("onSubmit Called");
      debugger;
      dispatch.formModel.createRecordAsync(values);
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      description: Yup.string().required(),
      from: Yup.string().required(),
      to: Yup.string().required(),
      status: Yup.string().required(),
    }),
    onReset: () => {
      debugger;
      console.info("onReset Called");
    },
  });

  // const validate = (values) => {
  //   const error = {};
  //   if (!values.title) {
  //     error.title = "require";
  //   }
  //   if (!values.description) {
  //     error.description = "require";
  //   }

  //   if (!values.form) {
  //     error.form = "require";
  //   }

  //   if (!values.to) {
  //     error.to = "require";
  //   }

  //   if (!values.status) {
  //     error.status = "require";
  //   }
  //   return error;
  // };
  return (
    <div className="container   ">
      <h3 className="head">Details from</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="mb-3  ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <span>Title:</span>
              </label>
              <input
                type="text"
                name="title"
                className="form-control"
                id="exampleInputPassword1"
                value={formik.values.title}
                onChange={formik.handleChange}
                autoFocus
              />
              {formik.touched.title && formik.errors.title && (
                <span className="text-red-400">{formik.errors.title}</span>
              )}
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <span> Description:</span>
              </label>
              <input
                type="text"
                name="description"
                className="form-control"
                id="exampleInputPassword1"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              {formik.touched.description && formik.errors.description && (
                <span className="text-red-400">{formik.errors.description}</span>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <span> From:</span>
              </label>

              {/* <input
                type="date"
                name="from"
                className="form-control"
                id="exampleInputPassword1"
                value={formik.values.from}
                onChange={formik.handleChange}
              /> */}
              <Calendar
                id="time24"
                const
                value={formik.values.from}
                name="from"
                onChange={formik.handleChange}
                hourFormat="12"
                showTime
              />
              <br />

              {formik.touched.from && formik.errors.from && (
                <span className="text-red-400">{formik.errors.from}</span>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <span> To:</span>
              </label>
              {/* <input
                type="date"
                name="to"
                className="form-control"
                id="exampleInputPassword1"
                value={formik.values.to}
                onChange={formik.handleChange}
              /> */}
              <Calendar
                id="time24"
                value={formik.values.to}
                name="to"
                onChange={formik.handleChange}
                hourFormat="12"
                showTime
              />
              <br />
              {formik.touched.to && formik.errors.to && (
                <span className="text-red-400">{formik.errors.to}</span>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <span> Status:</span>
                ---- {formik.values.status}
              </label>
              <Dropdown
                className="dropdown-menu"
                value={formik.values.status}
                options={StatusField}
                name="status"
                onChange={formik.handleChange}
                placeholder="Select a Status"
                optionLabel="label"
                optionValue="value"
                showOnFocus={true}
              />
              {formik.touched.status && formik.errors.status && (
                <span className="text-red-400">{formik.errors.status}</span>
              )}
            </div>
          </div>
          <Button
            className="mr-5"
            label="Save"
            icon="pi pi-check"
            disabled={!formik.isValid || formik.isSubmitting}
          />
          <Button className="gapBtn" label="Cancel" icon="pi pi-times" onClick={formik.handleReset} />
          <div>
            {/* {data.map((item, index) => {
              return (
                <div key={index}>
                  <h3>{item.title}</h3>
                  <h3>{item.description}</h3>
                  <h3>{item.from}</h3>
                  <h3>{item.to}</h3>
                  <h3>{item.Status}</h3>
                </div>
              );
            })} */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
