import React, { useState } from "react";
export default function Value() {
  const [inpName, setInpName] = useState("");
  const onSub = (e) => {
    // מונע את הברירת מחדל של שיגור שיעשה ריטסטר לאפליקציה
    e.preventDefault();
    alert(inpName);
  };
  return (
    <div>
      <h1>Order form</h1>
      <form onSubmit={onSub} className="col-md-6">
        <label>Name:</label>
        <input
          onChange={(e) => setInpName(e.currentTarget.value)}
          type="text"
          className="form-control"
        />
        <label>Phone:</label>
        <input type="text" className="form-control" />
        <button className="btn btn-info mt-4">Add</button>
      </form>
    </div>
  );
}
