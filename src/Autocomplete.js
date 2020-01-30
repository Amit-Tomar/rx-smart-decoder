/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
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
import matchSorter from "match-sorter";

import {
  faPrescriptionBottle,
  faCalendarAlt,
  faPills,
  faClock,
  faPrescription,
  faCapsules,
  faNotesMedical,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { getByPlaceholderText } from "@testing-library/dom";

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
  width: 95%;
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
    {currentInputIndex >= 4 && <FontAwesomeIcon icon={faNotesMedical} />}
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

export default function Autocomplete() {
  var [autoSuggestedList, setAutoSuggestedList] = useState([]);
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
    options: autoSuggestedList,
    // onChange: handleAutocomplete,
    getOptionLabel: option => option
  });

  const activeStep = value.length;
  const [skipped, setSkipped] = React.useState(new Set());

  const handleAutocomplete = event => {
    getInputProps().onChange(event);
  };

  const handleKeyPress = event => {
    console.log(event, getInputProps());
    // if (event.which == 13 || event.keyCode == 13) {
    // 	console.log("Enter pressed", event, event.key, event.value);
    //   }
    // if (getInputProps().value === "")
    //   document.getElementById("customized-hook-demo").value = " ";

    getInputProps().onChange(event);
  };
  let currentValue = getInputProps().value;

  useEffect(() => {
    let currentFillValue = currentValue;
    setAutoSuggestedList([]);
    let tempAutoSuggestedList = [];
    if (activeStep === 0) {
      tempAutoSuggestedList = medications.map(
        medication => medication.medicine
      );
    } else if (activeStep === 1) {
      medications.forEach(medication => {
        if (medication.medicine === value[0]) {
          tempAutoSuggestedList = medication.dosage.slice();
        }
      });

      if (currentFillValue) {
        if (
          currentFillValue.indexOf("mg") < 0 &&
          currentFillValue.indexOf("ml") < 0 &&
          currentFillValue.indexOf("mg/ml") < 0
        ) {
          tempAutoSuggestedList.push(currentFillValue + " mg");
          tempAutoSuggestedList.push(currentFillValue + " ml");
          tempAutoSuggestedList.push(currentFillValue + " mg/ml");
        }
      }
    } else if (activeStep === 2) {
      currentFillValue = parseInt(currentFillValue, 10);
      if (isNaN(currentFillValue)) {
        currentFillValue = 1;
      }

      currentFillValue = currentFillValue || 1;

      tempAutoSuggestedList.push(
        currentFillValue + "-" + currentFillValue + "-" + currentFillValue
      );
      tempAutoSuggestedList.push(
        currentFillValue +
          "-" +
          currentFillValue +
          "-" +
          currentFillValue +
          "-" +
          currentFillValue
      );
      tempAutoSuggestedList.push(
        "0-" + currentFillValue + "-" + currentFillValue
      );
      tempAutoSuggestedList.push(currentFillValue + "-0-" + currentFillValue);
      tempAutoSuggestedList.push(
        currentFillValue + "-" + currentFillValue + "-0"
      );

      tempAutoSuggestedList.push(
        "0-" +
          currentFillValue +
          "-" +
          currentFillValue +
          "-" +
          currentFillValue
      );
      tempAutoSuggestedList.push(
        currentFillValue + "-0-" + currentFillValue + "-" + currentFillValue
      );
      tempAutoSuggestedList.push(
        currentFillValue + "-" + currentFillValue + "-0-" + currentFillValue
      );
      tempAutoSuggestedList.push(
        currentFillValue +
          "-" +
          currentFillValue +
          "-" +
          currentFillValue +
          "-0"
      );
    } else if (activeStep === 3) {
      currentFillValue = parseInt(currentFillValue, 10);
      if (!isNaN(currentFillValue)) {
        currentFillValue = currentFillValue || 1;
        tempAutoSuggestedList.push(currentFillValue + " day");
        tempAutoSuggestedList.push(currentFillValue + " week");
        tempAutoSuggestedList.push(currentFillValue + " month");
      }
    }

    setAutoSuggestedList(tempAutoSuggestedList);
  }, [activeStep, currentValue]);

  const stepDescriptions = [
    "Medicine",
    "Dosage",
    "Dosing Time",
    "Duration",
    "Remark"
  ];

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
        return <FontAwesomeIcon icon={faCheck} color="green" />;
    }
  }

  function getByPlaceholderText(step) {
    switch (step) {
      case 0:
        return "Diazepam";
      case 1:
        return "10mg";
      case 2:
        return "1-1-1";
      case 3:
        return "4day";
      case 4:
        return "Suggestion";
      default:
        return "";
    }
  }

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
    <div style={{ padding: "24px" }}>
      <Card style={{ padding: "10px" }}>
        <Typography variant="h3" gutterBottom style={{ fontSize: "2.5em" }}>
          Prescription for Amit Tomar
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          style={{ fontSize: "1em", color: "grey" }}
        >
          Dr. Robert N., General Physician
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{ fontSize: "1em", color: "grey" }}
        >
          Last visited on : 2 Nov 2019
        </Typography>
      </Card>

      <div style={{ padding: "10px" }}>
        {/* orientation="vertical" */}
        <Stepper activeStep={activeStep}>
          {stepDescriptions.map((label, index) => {
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
        <Label {...getInputLabelProps()} style={{ paddingBottom: "10px" }}>
          Press enter after input
        </Label>
        <div {...getRootProps()}>
          <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
            <LabelDescriptor {...getInputLabelProps()}>
              {getStepContent(activeStep)}
            </LabelDescriptor>
            {value.map((option, index) => (
              <Tag
                label={option || option}
                currentInputIndex={index}
                {...getTagProps({ index })}
              />
            ))}
            {/* {activeStep < 5 && ( */}
            {
              <input
                {...getInputProps()}
                placeholder={getByPlaceholderText(activeStep)}
                onChange={handleAutocomplete}
                onKeyPress={handleKeyPress}
              />
            }
          </InputWrapper>
        </div>
        {groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li
                {...getOptionProps({ option, index })}
                onKeyPress={e => console.log(e)}
              >
                <span>{option}</span>
                <CheckIcon fontSize="small" />
              </li>
            ))}
          </Listbox>
        ) : null}
      </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
var medications = [
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
