/** @format */

import React, { useState } from "react";

function PostMethod() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]:value,
    })
  }

const handleSubmit=(e)=>{
e.preventDefault();
const apiUrl = "https://jsonplaceholder.typicode.com/posts";
//create request object
const requestOptions = {
    method :"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(formData),
}

//send the post request
  fetch(apiUrl, requestOptions)
  .then((response)=>response.json())
  .then((data)=>{
    //handle the response data
    console.log('response data', data);
  })
  .catch((error)=>{
    console.log("error", error);
  })
}

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">tile</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">body</label>
          <textarea name="body" id="" value={formData.body} onChange={handleChange}></textarea>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default PostMethod;
