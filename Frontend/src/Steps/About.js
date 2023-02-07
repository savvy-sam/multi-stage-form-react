import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
//import { Button, Field, Form } from "../Forms";

export const About = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  return (
    <form onSubmit={handleSubmit(saveData)}>
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
            onClick={() => navigate("/education")}
          >
            {"<"} Previous
          </button>
          <button className="button">Next {">"}</button>
        </div>
      </fieldset>
    </form>
  );
};
