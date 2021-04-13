import React from "react";

export default function Card(props: { title: string }): JSX.Element {
  return <div>{props.title}</div>;
}
