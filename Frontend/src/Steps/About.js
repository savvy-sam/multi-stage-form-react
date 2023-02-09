import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
//import { Button, Field, Form } from "../Forms";

export const About = () => {
  const {setStep, userData, setUserData} = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: userData });
  //const navigate = useNavigate();

  const saveData = (data) => {
    setUserData({ ...userData, ...data });
    //navigate("/confirm");
  };

  return (
    <Card>
    <CardContent>
    <form onChange={handleSubmit(saveData)}>
      <fieldset className="fieldset">
        <legend className="legend">About</legend>
        <div className="field">
        <label className="label"> About You </label>
          <textarea
            {...register("about")}
            id="about"
            className="form-control"
          />
        </div>
        <div className="field">
        <label className="label"> Your Image </label>
          <input
            {...register("image")}
            id="image"
            type="file"
            className="form-control"
          />
        </div>

        <div className="field">
        <label className="label"> Attach Your Documents </label>
          <input
            {...register("cv")}
            id="cv"
            type="file"
            className="form-control"
          />
        </div>
    
        <div className="button-row">
          <button
            type="button"
            variant="secondary"
            onClick={() => setStep(2)}
          >
             Previous
          </button>
          <button onClick={() => setStep(4)} className="button">Next </button>
        </div>
      </fieldset>
    </form>
    </CardContent>
    </Card>
  );
};
