import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
//import { Button, Field, Form, Input } from "../Forms";

export const Contact = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const watchPassword = watch("password");
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/education");
  };

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Contact</legend>
        <div className="col-sm-12 mb-3">
          <div>
          <label> First Name</label>
          <input
            {...register("firstName", { required: "First name is required" })}
            id="first-name" className="form-control"
          />
          {<small className="error">{errors.firstName?.message}</small>}
          </div>
        </div>

        <div className="col-sm-12 mb-3">
          <div>
            <label> Last Name</label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              id="first-name" className="form-control"
            />
            {<small className="error">{errors.lastName?.message}</small>}
          </div>
        </div>

        <div className="col-sm-12 mb-3">
          <label className="label"> Email </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            id="email"
          />
        </div>
        {<small className="error">{errors.lastName?.message}</small>}

        <div className="col-sm-12 mb-3">
          <label className="label"> Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            id="password"
          />
           {<small className="error">{errors.password?.message}</small>}
        </div>

        <div className="col-sm-12 mb-3">
          <label className="label"> Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "Confirm the password",
              validate: (value) =>
                value === watchPassword || "The passwords do not match"
            })}
            type="password"
            id="password-confirm"
          />
          {<small className="error">{errors.confirmPassword?.message}</small>}
        </div>
        <button>Next {">"}</button>
      </fieldset>
    </form>
  );
};
