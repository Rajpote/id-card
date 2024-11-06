import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Avatar() {
   return (
      <div>
         <img className="avatar" src="avatar.jpg" alt="avatar" />
      </div>
   );
}

function Intro() {
   return (
      <div className="intro">
         <h1>Raj Pote</h1>
         <p>my name is raj pote i am currenty procuing fullstack development with MERN stack</p>
      </div>
   );
}

function SkillList() {
   return (
      <div className="skill-list">
         <Skill skill="Html - CSS" color="orangered" />
         <Skill skill="JavaScript" color="yellow" />
         <Skill skill="React.js" color="skyblue" />
         <Skill skill="Node.js" color="lightgreen" />
         <Skill skill="MongoDB" color="green" />
      </div>
   );
}

function Skill(props) {
   return (
      <div className="skill" style={{ backgroundColor: props.color }}>
         <span>{props.skill}</span>
      </div>
   );
}
function App() {
   return (
      <div className="card">
         <Avatar />
         <div className="data">
            <Intro />
            <SkillList />
         </div>
      </div>
   );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
   <StrictMode>
      <App />
   </StrictMode>
);
