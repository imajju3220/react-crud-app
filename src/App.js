/** @format */

import logo from "./logo.svg";
import "./App.css";
import GetMethod from "./GetMethod";
import PostMethod from "./PostMethod";
import UpdateMethod from "./UpdateMethod";
import DeleteMethod from "./DeleteMethod";

function App() {
  return (
    <div className="App">
      <h4>delete</h4>
      <DeleteMethod/>
      <hr />
      <h4>put for update</h4>
      <UpdateMethod />
      <hr />
      <h4>post</h4>
      <PostMethod />
      <hr />
      <h4>get</h4>
      <GetMethod />      
    </div>
  );
}

export default App;
