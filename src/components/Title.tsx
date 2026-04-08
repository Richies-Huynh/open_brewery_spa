import React, {JSX} from "react";

const styles = {
  h1: {
    textAlign: "center"
  }
} satisfies Record<string, React.CSSProperties>

export default function Title({label} : {label: string}): JSX.Element {
  return (
    <h1 style={styles.h1}>{label}</h1>
  );
}