import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/material/styles'

//import { Button, Field, Form, Input } from "../Forms";

export const Contact = () => {
  const {setStep, userData, setUserData } = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm({ defaultValues: userData });
  const watchPassword = watch("password");
  //const navigate = useNavigate();

  const saveData = (data) => {
    setUserData({ ...userData, ...data });
    //navigate("/education");
  };

  return (
    <Box>
    <form onChange={handleSubmit(saveData)}>
      <fieldset>
        <legend>Contact</legend>
        <div className="col-sm-12 mb-3">
          <div>
          <label> First Name</label>
          <input
            {...register("firstName", { 
              
              required: {
              value: true,
              message: "First Name is Required"
            },
            maxLength: {
              value: 20,
              message: "Name must be shorter than 20 characters"
            }
           })}
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
            {...register("email", { required: 
              { value: true,
               message: "Email is Required"},

               maxLength: {
                value: 20,
                message: "Email cannot be longer than 20 characters"
               },

               pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a Valid Email"
               }
              })}
            type="email"
            id="email"
          />
        </div>
        {<small className="error">{errors.email?.message}</small>}

        <div className="col-sm-12 mb-3">
          <label className="label"> Password</label>
          <input
            {...register("password", {
               required: { value: true,
                            message: "Password is Required" },
                          
              minLength: {
                value: 7,
                message: "Password Must be Longer than 7 characters"
              }
      })}
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
        <button onClick={()=> setStep(2)}> Next </button>
      </fieldset>
    </form>
    </Box>
  );
};
