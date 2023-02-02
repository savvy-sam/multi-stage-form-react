import { useForm, Controller } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import { Button, Field, Form, Input } from "../Forms";

export const Education = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register, control } = useForm({ defaultValues: state });
  const navigate = useNavigate();


  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/about");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Academic Information</legend>
        <Field label="Start Year">
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
        </Field>
        <Field label="End Year">
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
        </Field>
        <Field label="Institution Name">
          <Input {...register("institutionName")} id="institutionName" />
        </Field>
        <Field label="Course Name">
          <Input {...register("courseName")} id="courseName" />
        </Field>
        <Field label="Specialization">
          <Input {...register("specialization")} id="specialization" />
        </Field>
        <Field label = "Award">
          <select {...register("award")} id="award" >
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          </select>
        </Field>
        <Field label = "Grade">
          <select {...register("grade")} id="grade" >
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          </select>
        </Field>
        <div className="button-row">
          <Button variant="secondary" onClick={() => navigate("/")}>
            {"<"} Previous
          </Button>
          <Button>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};
