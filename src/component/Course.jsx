import React from "react";
import { useSearchParams } from "react-router-dom";

function Course() {
  //search params
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Stt</th>
            <th>course</th>
            <th>time</th>
            <th>action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>ReactJs</td>
            <td>1200</td>
            <td>
              {" "}
              <button
                onClick={() =>
                  setSearchParams({ Course: "ReactJs", time: "1200" })
                }
              >
                {" "}
                Detail
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>NodeJs</td>
            <td>1400</td>
            <td>
              {" "}
              <button
                onClick={() =>
                  setSearchParams({ Course: "NodeJS", time: "1400" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Chi tieets khaos hockj </h3>
      <p>
        Detail course:{searchParams.get("Course")}-time:
        {searchParams.get("time")}
      </p>
    </div>
  );
}

export default Course;
