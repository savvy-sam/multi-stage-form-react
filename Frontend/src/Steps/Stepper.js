import React from 'react'
import { Stepper, StepLabel, Step } from '@mui/material'
import { Education } from './Education'
import { Contact } from './Contact'
import { Confirm } from './Confirm'
import { About } from './About'
import { useAppState } from '../state'



export default function StepperBar () {

  const{ currentStep, finalData} = useAppState();

  function showStep(step){
    switch(step){
      case 1:
        return < Contact/>
      case 2:
        return < Education/>

      case 3:
        return < About/>

      case 4:
        return < Confirm />
    }

  }
  return (
    <div className="center-stepper">
    <Stepper style={{width: '18%'}} activeStep={currentStep-1} orientation= "horizontal">
      <Step>
      <StepLabel>Contacts</StepLabel>
      </Step>
      <Step>
      <StepLabel>Education</StepLabel>
      </Step>
      <Step>
      <StepLabel>About</StepLabel>
      </Step>
      <Step>
      <StepLabel>Contact</StepLabel>
      </Step>
    </Stepper>
    <div>
      {showStep(currentStep)}
    </div>
    </div>
  )
}



























/*import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Contact', 'Education', 'About', 'Confirm'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

/*

//import { useLocation } from "react-router-dom";

export const Stepper = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return (
      "nav-link disabled " + (path === location.pathname ? "active" : undefined)
    );
  };

  return (
    <nav className="stepper navbar navbar-expand-lg">
      <div className="navbar-collapse">
        <ol className="navbar-nav">
          <li className="step nav-item">
            <span className={getLinkClass("/")}>Contact</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/education")}>Education</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/about")}>About</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/confirm")}>Confirm</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
*/