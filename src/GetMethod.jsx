/** @format */

import React, { useState, useEffect } from "react";

function GetMethod() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        if (!response.ok) {
          throw new Error("network response is not ok");
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
        //console.log(data);
      })
      .catch(error => {
        console.log("error", error);
      });
  });

  return (
    <div>
        {
        loading?(<p>loading...</p>):(
            <table>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>body</td>
                </tr>
                {
                  data.map((list, index)=>(
                    <tr>
                        <td>{list.id}</td>
                        <td>{list.title}</td>
                        <td>{list.body}</td>
                    </tr>
                  ))  
                }
            </table>
        )
        }
    </div>
  );
}

export default GetMethod;
