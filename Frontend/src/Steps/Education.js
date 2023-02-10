import { useForm, Controller } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import ReactDatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { Card, CardContent, Button } from "@mui/material";

//import { Button, Field, Form, Input } from "../Forms";

export const Education = () => {
  
  const {setStep, userData, setUserData } = useAppState();
  const { handleSubmit, register, control } = useForm({ defaultValues: userData });
  //const navigate = useNavigate();


  const saveData = (data) => {
    setUserData({ ...userData, ...data });
  //  navigate("/about");
  };

return (
  <Card>
  <CardContent>
  <div className="columns mt-5 is-centered">
    <div className="column is-half">
    <form onChange={handleSubmit(saveData)}>
      <fieldset className="fieldset">
        <legend className="legend">Academic Information</legend>
        <div className="field">
          <div>
            <label className="label"> Start Year  </label>
              <div className="control">
                <Controller
                  control={control}
                  name="startYear"
                  render={({ field }) => (
                    <DatePicker
                      className="Textfield"
                      onChange={(e) => field.onChange(e)}
                      selected={field.value}
                      dateFormat="yyyy"
                      showYearPicker
                      maxDate={new Date() }

                    />
                  )}
                />
              </div>
          </div>
        </div>

        <div className="field">
          <label className="label"> End Year </label>
            <div className="control">
              <Controller
                control={control}
                name="endYear"
                render={({ field }) => (
                  <DatePicker
                    className="Textfield"
                    onChange={(e) => field.onChange(e)}
                    selected={field.value}
                    dateFormat="yyyy"
                    showYearPicker
                    maxDate={new Date() }
                  />
                )}
              />
            </div>
        </div>
        <div className="field"> 
          <label className= "label"> Institution Name </label>
          <div className="control">
          <input type="text" className="input" {...register("institutionName")} id="institutionName" />
          </div>
        </div>

        <div className="field">
          <label className="label"> Course Name </label>
            <div className="control">
            <input type="text" className="input" {...register("courseName")} id="courseName" />
            </div>
        </div>

        <div className="field">
          <label className="label">Specialization</label>
          <div className="control">
          <input {...register("specialization")} className="input" id="specialization" />
          </div>
        </div>

        <div className="field">
          <label className="label"> Award </label>
          <div className="select-is-fullwidth">
            <select {...register("award")} className="input" id="award" >
            <option value="A">Option A</option>
            <option value="B">Option B</option>
            <option value="C">Option C</option>
            </select>
          </div>
        </div>

        <div className="field">
          <div className="select-is-fullwidth">
            <select {...register("grade")} id="grade" >
            <option value="A">Option A</option>
            <option value="B">Option B</option>
            <option value="C">Option C</option>
            </select>
          </div>
        </div>
        
        <div className="button-row">
          <Button variant="secondary" onClick={() => setStep(1)}>
           Previous
          </Button>
          <Button onClick={()=> setStep(3)}>Next </Button>
        </div>
      </fieldset>
    </form>
    </div>
  </div>
  </CardContent>
  </Card>
);
};
