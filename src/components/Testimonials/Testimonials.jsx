import React, { useState } from "react";
import AppWrap from "../../wrap/AppWrap";
import MotionHandle from "../../wrap/MotionHandle";
import "./Testimonials.css";

const Testimonials = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="reviews">
      <h1>What they are saying</h1>
      <div className="reviews-container">
        <div className="reviews-item">
          <h4>Best planning service</h4>
          <p>
            I had fantastic experience at shady rhymes with pax planner, shady
            rhymes was so helpful and friendly and went above and beyond to help
            me configure my perfect walk in wardobe room.
          </p>
          <div className="reviewer">
            <img
              src="https://preview.redd.it/8fqzw8yxpkp11.jpg?auto=webp&s=32ea42ee435e3ec0f86d4d91468a1b3daaaaec91"
              alt=""
            />
            <div className="reviewer-info">
              <h5>Chris Mead</h5>
              <span>Project manager at cubana</span>
            </div>
          </div>
        </div>
        <div className="reviews-item">
          <h4>Flexible and reliable</h4>
          <p>
            Terrific work from beginning to end can work any angle from minimal
            help to complete project handling professional without a doubt!
            Love!
          </p>
          <div className="reviewer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNA6JavVxRIylfSuP--9-NKXc2Pie16UgZ_g&usqp=CAU"
              alt=""
            />
            <div className="reviewer-info">
              <h5>Jenine Green</h5>
              <span>Freelancer</span>
            </div>
          </div>
        </div>
        <div className="reviews-item">
          <h4>innovative</h4>
          <p>
            "I loved working with Darla shady rhymes for about 2 years and
            highly recommend anyone looking for an interior designer agency who
            brings creativity but designs something that fits YOU and your
            style.
          </p>
          <div className="reviewer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2wXru-iP69dqmJr9PcgNGUD2ObbR5lIW1A&usqp=CAU"
              alt=""
            />
            <div className="reviewer-info">
              <h5>Dalia Halowitz</h5>
              <span>Designer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="item-container">
        {[1, 2, 3].map((item) => (
          <li
            className={`item ${active === item ? "active" : ""}`}
            key={item}
            onClick={() => setActive(item)}
          ></li>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionHandle(Testimonials), "testimonials");


