import React, { useEffect, useState } from 'react'

function UpdateMethod() {
  const [postData, setPostData]=useState({
    id:1,
    title:"",
    body:""
  })

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);  

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPostData({
      ...postData,
      [name]:value
    })
  }
//load the initial post data when the component mount
  useEffect(()=>{
    const postId = postData.id;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(apiUrl)
    .then((response)=>response.json())
    .then((data)=>{
      setPostData(data);
    })
    .catch((error)=>{
      console.log("error", error);
    })
  }, [postData.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postData.id}`;
    const requestOptions = {
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(postData)
    }
    //send the put(update) request
    fetch(apiUrl, requestOptions)
    .then((response)=>response.json())
    .then((data)=>{
      setMessage("post updated successfully");
      console.log(data);
    })
    .catch((error)=>{
      console.log("error", error);
      setMessage("Error updating the post")
    })
    .finally(()=>{
      setLoading(false);
    })
  }
  return (
    <div>
      {loading && <p>loading...</p>}
      {message && <p>{message}</p>}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">title</label>
          <input type="text" name='title' value={postData.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">body</label>
          <textarea id="" name='body' value={postData.body} onChange={handleChange}></textarea>
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default UpdateMethod