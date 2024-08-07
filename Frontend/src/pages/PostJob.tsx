import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import type { AppDispatch, RootState } from "../redux/store";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs, postJob } from "../redux/slices/JobsSlice";
import { useSnackbar } from "notistack";

const PostJob = () => {
  //@ts-ignore
  const { jobs, loading, error } = useSelector(
    (state: RootState) => state.jobs
  );
  const dispatch = useDispatch<AppDispatch>();
  const userInfo = JSON.parse(localStorage.getItem("login") || "{}");
  const email = userInfo.email;
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  const [inputs, setInputs] = useState([""]);
  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleInputChange = (index: any, value: any) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const removeInput = (index: any) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = (values: any) => {
    const formData = {
      ...values,
      benefits: inputs.filter((input) => input.trim() !== ""),
      companylogo:
        "https://assets-global.website-files.com/63b3bf674632664abc613903/63c7dfab3d135205f8d21a3d_slack.svg",
    };
    //@ts-ignore
    dispatch(postJob(formData));
    enqueueSnackbar("Job posted successfully!", { variant: "success" });
  };
  // const SignupSchema = Yup.object().shape({
  //   firstName: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Required"),
  //   lastName: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Required"),
  //   email: Yup.string().email("Invalid email").required("Required"),
  // });
  return (
    <div className="postjobpage">
      <p className="post">Post a Job</p>
      <p className="please">
        Handsome met debating sir dwelling age material. As style lived he worse
        dried
      </p>
      <div className="form">
        <Formik
          initialValues={{
            id: uuidv4(),
            title: "",
            email: email,
            categories: "",
            salary: "",
            location: "",
            remote: false,
            type: "",
            benefits: [],
            experience: "",
            qualification: "",
            description: "",
            companyname: "",
            companywebsite: "",
            companyemail: "",
            companycontact: "",
            companylocation: "",
            companydescription: "",
            companylogo: "",
            date: new Date(),
          }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <div className="cont">
              <Form className="formik" onSubmit={handleSubmit}>
                <p className="jobdetail">Job details</p>
                <p className="label">Job Title</p>
                <Field name="title" className="input" />
                <p className="label">Location</p>
                <Field
                  name="location"
                  className="input inputlocation"
                  placeholder="e.g Mumbai"
                />

                <p className="leave">
                  Leave this blank if the location is not important
                </p>
                <p className="remote">Remote Position(optional)</p>
                <div className="remotecheck">
                  <Field
                    type="checkbox"
                    name="remote"
                    id="remote"
                    className="checkbox"
                  />
                  <p className="select">Select if this is a remote position.</p>
                </div>
                <div className="grids">
                  <div className="griditem">
                    <p className="label gridlabel">Job type</p>
                    <Field as="select" name="type" className="selectbox">
                      <option value="Full time">Full time</option>
                      <option value="Part time">Part time</option>
                      <option value="Internship">Internship</option>
                      <option value="Temporary">Temporary</option>
                    </Field>
                  </div>
                  <div className="griditem">
                    <p className="label gridlabel">Job Salary (optional)</p>
                    <Field name="salary" className="input" />
                  </div>
                </div>
                <div className="grids">
                  <div className="griditem">
                    <p className="label gridlabel">Job Experience</p>
                    <Field name="experience" className="input" />
                  </div>
                  <div className="griditem">
                    <p className="label gridlabel">Job Qualification</p>
                    <Field name="qualification" className="input" />
                  </div>
                </div>
                <p className="label">Job category</p>
                <Field as="select" name="categories" className="selectcategory">
                  <option value="Engineering">Engineering</option>
                  <option value="Business & consulting">
                    Business & consulting
                  </option>
                  <option value="Human research">Human research</option>
                  <option value="Marketing & finance">
                    Marketing & finance
                  </option>
                  <option value="Design & development">
                    Design & development
                  </option>
                  <option value="Tech & Programming">Tech & Programming</option>
                  <option value="Project management">Project management</option>
                  <option value="Customer services">Customer services</option>
                </Field>
                <p className="label">Job benefits</p>
                {inputs.map((input, index) => (
                  <div key={index} className="jobtitles">
                    <Field
                      name="benefits"
                      className="input title"
                      value={input}
                      onChange={(e: any) =>
                        handleInputChange(index, e.target.value)
                      }
                    />
                    {index === inputs.length - 1 && (
                      <button type="button" className="add" onClick={addInput}>
                        +
                      </button>
                    )}
                    {inputs.length > 1 && (
                      <button
                        type="button"
                        className="add"
                        onClick={() => removeInput(index)}
                      >
                        -
                      </button>
                    )}
                  </div>
                ))}
                <p className="label">Description</p>
                <Field name="description" as="textarea" className="input" />
                <p className="jobdetail">Company details</p>
                <p className="label">Company name</p>
                <Field name="companyname" className="input" />
                <div className="grids">
                  <div className="griditem">
                    <p className="label gridlabel">Company Website</p>
                    <Field name="companywebsite" className="input" />
                  </div>
                  <div className="griditem">
                    <p className="label gridlabel">Company Email</p>
                    <Field name="companyemail" className="input" />
                  </div>
                </div>
                <div className="grids">
                  <div className="griditem">
                    <p className="label gridlabel">Company Contact</p>
                    <Field name="companycontact" className="input" />
                  </div>
                  <div className="griditem">
                    <p className="label gridlabel">Company Location</p>
                    <Field name="companylocation" className="input" />
                  </div>
                </div>
                {/* <p className="label">Company Logo</p> */}
                {/* <Field
                  name="companylogo"
                  className="input"
                  placeholder="enter link here"
                /> */}
                <p className="label">Company Description</p>
                <Field
                  name="companydescription"
                  as="textarea"
                  className="input"
                />
                <button type="submit">Submit for approval</button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PostJob;
