import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="T3_Header section_padding" id="home">
      <div className="T3_Header_content">
        <h1 className="Gradient_Text">
          Let Me Teach You Some Of The Amazing Things You Can Do With ChatGPT-3
          OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          itaque fuga facilis quisquam enim rem ex modi voluptate harum! Est
          nulla doloribus eius dicta ullam, rem inventore nostrum nemo quasi.
        </p>
        <div className="T3_Header_content_input">
          <input type="email" placeholder="Enter Your Email Adress Here" />
          <button type="button">Let's Go</button>
        </div>
        <div className="T3_Header_content_people">
          <img className="people" src={people} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            laboriosam vero. Itaque, rerum nisi similique provident nobis fugit
            quam atque ipsam, veniam necessitatibus voluptatum eius, aperiam
            nihil unde deserunt ullam.
          </p>
        </div> 
        </div>
        <div className="T3_Header_image">
        <img src={ai} /> 
      </div>
    </div>
  );
};

export default Header;
