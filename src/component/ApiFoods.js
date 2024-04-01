import React, { useEffect, useState } from "react";
export default function ApiFoods() {
  const [foods_ar, setFoodsAr] = useState([]);
  // [] - מערך ריק אומר שיפעל בהתחלה
  useEffect(() => {
    doApi();
  }, []);
  const doApi = async () => {
    const url = "http://fs1.co.il/bus/foods.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setFoodsAr(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      alert("There problem come back later");
    }
  };
  return (
    <div className="container">
      <h1>Foods menu:</h1>
      <ul>
        {foods_ar.map((item) => {
          return (
            <li key={item.name}>
              {item.name} - {item.price} NIS{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
