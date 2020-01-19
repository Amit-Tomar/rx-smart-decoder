/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import AdjustOutlinedIcon from "@material-ui/icons/AdjustOutlined";
import styled from "styled-components";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {
  faPrescriptionBottle,
  faCalendarAlt,
  faPills,
  faClock,
  faPrescription,
  faCapsules
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Medicine", "Dosage", "Dosing Time", "Duration", "Suggestion"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Medicine";
    case 1:
      return "Dosage";
    case 2:
      return "Dosing Time";
    case 3:
      return "Duration";
    case 4:
      return "Suggestion";
    default:
      return "Unknown step";
  }
}

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const LabelDescriptor = styled("label")`
  padding: 0px 5px 0px 5px;
  line-height: 1;
  display: block;
  position: absolute;
  left: 10px;
  top: -7px;
  z-index: 1;
  background-color: white;
  font-size: 12px;
`;

const InputWrapper = styled("div")`
  width: 80%;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    font-size: 14px;
    line-height: 26px;
    padding: 2px 6px;
    flex-grow: 1;
    border: 0;
    outline: 0;
  }
`;

const Tag = styled(({ label, onDelete, currentInputIndex, ...props }) => (
  <div {...props}>
    {/* <FontAwesomeIcon icon={faPrescriptionBottle} /> */}
    {/* <FontAwesomeIcon icon={faCapsules} /> */}
    {/* <FontAwesomeIcon icon={faPrescription} /> */}
    {currentInputIndex === 0 && <FontAwesomeIcon icon={faPills} />}
    {currentInputIndex === 1 && <FontAwesomeIcon icon={faPrescriptionBottle} />}
    {currentInputIndex === 2 && <FontAwesomeIcon icon={faClock} />}
    {currentInputIndex === 3 && <FontAwesomeIcon icon={faCalendarAlt} />}
    <span>{label}</span>
    {/* <CloseIcon onClick={onDelete} /> */}
    {/* <AdjustOutlinedIcon></AdjustOutlinedIcon> */}
  </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 18px;
    cursor: pointer;
    padding: 4px;
  }
`;

const Listbox = styled("ul")`
  width: 300px;
  margin: 0;
  margin-top: 2px;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected="true"] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus="true"] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;

export default function CustomizedHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: null,
    multiple: true,
    freeSolo: true,
    options: medications,
    getOptionLabel: option => option.medicine
  });

  const activeStep = value.length;
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const labelDescriptions = [
    "Medicine",
    "Dosage",
    "Dosing Time",
    "Duration",
    "Remark"
  ];

  const getLabelDescription = () => {
    return labelDescriptions[activeStep];
  };

  const isStepOptional = step => {
    return step === 4;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    //setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    //setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    //setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    //setActiveStep(0);
  };

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
              label = index < 4 ? label + "*" : label;
              const stepProps = {};
              const labelProps = {};
              //   if (isStepOptional(index)) {
              //     labelProps.optional = (
              //       <Typography variant="caption">Optional</Typography>
              //     );
              //   }
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
        </Grid>
        <Grid item xs={9}>
          <div style={{ paddingTop: "24px" }}>
            <Label {...getInputLabelProps()} style={{ paddingBottom: "10px" }}>
              Press enter after input
            </Label>
            <div {...getRootProps()}>
              <InputWrapper
                ref={setAnchorEl}
                className={focused ? "focused" : ""}
              >
                <LabelDescriptor {...getInputLabelProps()}>
                  {getLabelDescription()}
                </LabelDescriptor>
                {value.map((option, index) => (
                  <Tag
                    label={option.medicine || option}
                    currentInputIndex={index}
                    {...getTagProps({ index })}
                  />
                ))}
                <input {...getInputProps()} />
              </InputWrapper>
            </div>
            {groupedOptions.length > 0 ? (
              <Listbox {...getListboxProps()}>
                {groupedOptions.map((option, index) => (
                  <li {...getOptionProps({ option, index })}>
                    <span>{option.medicine}</span>
                    <CheckIcon fontSize="small" />
                  </li>
                ))}
              </Listbox>
            ) : null}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const medications = [
  {
    medicine: "Risperidone",
    dosage: ["0.25mg", "0.5mg", "1mg", "2mg", "3mg", "4mg"]
  },
  {
    medicine: "Olanzapine",
    dosage: ["2.5mg", "5mg", "7.5mg", "10mg", "15mg", "20mg"]
  },
  {
    medicine: "Clozapine",
    dosage: ["12.5mg", "25mg", "50mg", "100mg", "200mg"]
  },
  {
    medicine: "Haloperidol",
    dosage: ["0.5mg", "1mg", "2mg", "5mg", "10mg", "20mg"]
  },
  {
    medicine: "Chlorpromazine",
    dosage: ["10mg", "25mg", "50mg", "100mg", "200mg"]
  },
  {
    medicine: "Trihexyphenidyl",
    dosage: ["2mg"]
  },
  {
    medicine: "Imipramine",
    dosage: ["10mg", "25mg", "50mg"]
  },
  {
    medicine: "Amitriptyline",
    dosage: ["10mg", "25mg", "50mg", "75mg", "100mg", "150mg"]
  },
  {
    medicine: "Flouxetine",
    dosage: ["10mg", "20mg", "40mg"]
  },
  {
    medicine: "Sertraline",
    dosage: ["25mg", "50mg", "100mg"]
  },
  {
    medicine: "Paroxetine",
    dosage: ["12.5mg", "25mg", "37.5mg", "10mg", "20mg", "30mg", "40mg"]
  },
  {
    medicine: "Sodium Valproate",
    dosage: ["125mg", "250mg", "500mg", "1gm"]
  },
  {
    medicine: "Carbamazepine",
    dosage: ["100mg", "200mg", "300mg", "400mg"]
  },
  {
    medicine: "Lithium",
    dosage: ["300mg", "400mg", "350mg"]
  },
  {
    medicine: "Clonidine",
    dosage: ["0.1mg", "0.2mg", "0.3mg"]
  },
  {
    medicine: "Atomoxetine",
    dosage: ["10mg", "18mg", "25mg", "60mg", "60mg", "80mg", "100mg"]
  },
  {
    medicine: "Lorazepam",
    dosage: ["0.5mg", "1mg", "2mg"]
  },
  {
    medicine: "Diazepam",
    dosage: ["2mg", "5mg", "10mg"]
  },
  {
    medicine: "Oxazepam",
    dosage: ["10mg", "15mg", "30mg"]
  },
  {
    medicine: "Disulfiram",
    dosage: ["250mg", "500mg"]
  },
  {
    medicine: "Naltrexone",
    dosage: ["50mg"]
  },
  {
    medicine: "Acamprosate",
    dosage: ["33mg"]
  },
  {
    medicine: "Nicotine Gums",
    dosage: ["2mg", "4mg"]
  },
  {
    medicine: "Varenicline",
    dosage: ["0.5mg", "1mg"]
  },
  {
    medicine: "Injection Fluphenazine",
    dosage: ["12.5mg", "25mg"]
  },
  {
    medicine: "Injection Haloperidol",
    dosage: ["50mg", "100mg"]
  },
  {
    medicine: "Injection Flupenthixol",
    dosage: ["20mg", "40mg"]
  },
  {
    medicine: "Injection Lorazepam",
    dosage: ["2mg", "4mg"]
  },
  {
    medicine: "Injection Diazepam",
    dosage: ["5mg", "10mg"]
  },
  {
    medicine: "Injection Promathazine",
    dosage: ["12.5mg", "25mg", "50mg", "100mg"]
  },
  {
    medicine: "Injection Thiamine/Multivitamin",
    dosage: ["100mg/ml"]
  }
];
