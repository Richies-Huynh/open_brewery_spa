import React, {JSX} from "react";
import "./Title.css";


export default function Title({label} : {label: string}): JSX.Element {
  return (
    <h1>{label}</h1>
  );
}