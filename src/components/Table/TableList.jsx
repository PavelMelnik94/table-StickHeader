import axios from "axios";
import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function TableList({ dataUrl }) {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios.get(dataUrl).then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    if (data.length) {
      setHeaders(
        Object.keys(...data)
          .toString()
          .replaceAll("Cur_", "")
          .split(",")
      );
    }

    console.log("sdsdsd" + headers);
  }, [data]);

  return (
    <div className="wrap">
      <div className="headers">
        <div className="scroller syncscroll" name="myElements">
          {headers.map((el) => (
            <TableHead key={el} name={el} />
          ))}
        </div>
      </div>
      <div className="body-holder syncscroll" name="myElements">
        {data.map((el) => (
          <TableBody
            key={el.Cur_ID}
            id={el.Cur_ID}
            date={el.Date}
            abbreviation={el.Cur_Abbreviation}
            scale={el.Cur_Scale}
            name={el.Cur_Name}
            officialrate={el.Cur_OfficialRate}
          />
        ))}
      </div>
    </div>
  );
}
