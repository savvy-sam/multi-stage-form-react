import { useForm, Controller } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import ReactDatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

//import { Button, Field, Form, Input } from "../Forms";

export const Education = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register, control } = useForm({ defaultValues: state });
  const navigate = useNavigate();


  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/about");
  };

return (
  <div className="columns mt-5 is-centered">
    <div className="column is-half">
    <form onSubmit={handleSubmit(saveData)}>
      <fieldset className="fieldset">
        <legend className="legend">Academic Information</legend>
        <div className="field">
          <field>
            <label className="label"> Start Year  </label>
              <div className="control">
                <Controller
                  control={control}
                  name="startYear"
                  render={({ field }) => (
                    <ReactDatePicker
                      className="Textfield"
                      onChange={(e) => field.onChange(e)}
                      selected={field.value}
                    />
                  )}
                />
              </div>
          </field>
        </div>

        <field className="field">
          <label className="label"> End Year </label>
            <div className="control">
              <Controller
                control={control}
                name="endYear"
                render={({ field }) => (
                  <ReactDatePicker
                    className="Textfield"
                    onChange={(e) => field.onChange(e)}
                    selected={field.value}
                  />
                )}
              />
            </div>
        </field>
        <field className="field"> 
          <label className= "label"> Institution Name </label>
          <div className="control">
          <input type="text" className="input" {...register("institutionName")} id="institutionName" />
          </div>
        </field>

        <field className="field">
          <label className="label"> Course Name </label>
            <div className="control">
            <input type="text" className="input" {...register("courseName")} id="courseName" />
            </div>
        </field>

        <field class="field">
          <label class="label">Specialization</label>
          <div className="control">
          <input {...register("specialization")} className="input" id="specialization" />
          </div>
        </field>

        <field className="field">
          <label class="label"> Award </label>
          <div className="select-is-fullwidth">
            <select {...register("award")} className="input" id="award" >
            <option value="A">Option A</option>
            <option value="B">Option B</option>
            <option value="C">Option C</option>
            </select>
          </div>
        </field>

        <field className="field">
          <div className="select-is-fullwidth">
            <select {...register("grade")} id="grade" >
            <option value="A">Option A</option>
            <option value="B">Option B</option>
            <option value="C">Option C</option>
            </select>
          </div>
        </field>
        
        <div className="button-row">
          <button variant="secondary" onClick={() => navigate("/")}>
            {"<"} Previous
          </button>
          <button>Next {">"}</button>
        </div>
      </fieldset>
    </form>
    </div>
  </div>
);
};
