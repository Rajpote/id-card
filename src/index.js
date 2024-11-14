import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
   {
      skill: "Html - CSS",
      level: "Advanced",
      color: "orangered",
   },
   {
      skill: "JavaScript",
      level: "Advanced",
      color: "yellow",
   },
   {
      skill: "React.js",
      level: "intermediate",
      color: "skyblue",
   },
   {
      skill: "Node.js",
      level: "intermediate",
      color: "lightgreen",
   },
   {
      skill: "MongoDB",
      level: "Beginner",
      color: "green",
   },
];

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
         {skills.map((skill) => (
            <Skill skill={skill.skill} color={skill.color} level={skill.level} />
         ))}
      </div>
   );
}

function Skill({ skill, color, level }) {
   return (
      <div className="skill" style={{ backgroundColor: color }}>
         <span>{skill}</span>
         <span>
            {level === "Beginner" && "🔰"}
            {level === "intermediate" && "🍾"}
            {level === "Advanced" && "⚡"}
         </span>
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
