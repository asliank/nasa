import { Button, Input, Link } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomId, serachById } from "../redux/Action";
import { Loder } from "./Loder";
import "../App.css";

export default function Asteroid() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [inputId, setInputId] = useState("");
  const [status, setStatus] = useState(false);
  const inputHandler = (evt) => {
    const tem = evt.target.value;
    setInputId(tem);
  };

  const submitHandler = () => {
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${inputId}?api_key=rchOydRl6eFK1Lzgw97e42BagIw1lMRCbruF9R37`;
    dispatch(serachById(url));
    setStatus(true);
  };
  const RandomHandler = () => {
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=rchOydRl6eFK1Lzgw97e42BagIw1lMRCbruF9R37`;
    dispatch(randomId(url));
    setStatus(true);
  };

  const render = () => {
    if (state.loading === true) {
      return <Loder />;
    } else if (state.error !== null) {
      return (
        <div className="error">
          <h3> Error: ID IS INCORRECT </h3>
        </div>
      );
    } else {
      return (
        <div id="display">
          <label> NAME</label> <h5>{state.getData.name}</h5>
          <hr />
          <label> NASA_JPL_URL</label>{" "}
          <h5>
            <Link href={state.getData.nasa_jpl_url} target="_blank">
              {" "}
              URL
            </Link>
          </h5>
          <hr />
          <label>IS POTENTIALLY HAZARDOUS ASTEROID</label>
          <h5>{state.getData.is_potentially_hazardous_asteroid?.toString()}</h5>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <Input
        placeholder="Enter Asteroid ID"
        type="number"
        color="primary"
        onChange={inputHandler}
      ></Input>
      <Button
        variant="outlined"
        color="primary"
        disabled={inputId.length === 0 ? true : false}
        onClick={submitHandler}
      >
        Submit
      </Button>
      <Button color="primary" variant="outlined" onClick={RandomHandler}>
        RandomId
      </Button>

      {status ? render() : null}
    </div>
  );
}
