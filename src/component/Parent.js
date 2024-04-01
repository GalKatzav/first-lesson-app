import React from "react";

export default function Parent(props) {
  return <div className="border p-4 text-danger">{props.children}</div>;
}
