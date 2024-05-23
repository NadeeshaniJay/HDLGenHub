import React from "react";
import "./Help.css";
import img from "../../images/help.png";
import { Play, User, Book, Shield } from "react-feather";
function Help() {
  return (
    <div class="m-20 mt-32">
      <div class="flex">
        <div class="w-3/4 h-72 bg-amber-500 rounded-ss-3xl rounded-es-3xl content-center">
          <p class="text-5xl m-10 ml-32 font-bold flex text-white drop-shadow-xl">Help Center</p>
          <div>
            <input
              type="search"
              class="w-1/3 h-10 rounded-2xl m-5 p-2 pl-5 flex ml-32 bg-slate-300 opacity-75 border-2 shadow-2xl"
              placeholder="Search..."
            ></input>
          </div>
        </div>
        <div>
          <img src={img} alt="img" class="h-72" />
        </div>
      </div>

      <div class="md:flex gap-10 mt-20">
        <div className="help-box2 hover:scale-105 flex items-center flex-col">
          <Play className="help-icon" />
          <h3>Getting Started</h3>
          <p style={{ fontSize: "14px", width: "240px" }}>
            Learn how <span style={{ fontWeight: "800" }}>HDL Gen Hub</span>{" "}
            works and how to start learing
          </p>
        </div>

        <div className="help-box2 hover:scale-105 flex items-center flex-col">
          <User className="help-icon" />
          <h3>Account/Profile</h3>
          <p style={{ fontSize: "14px", width: "240px", marginLeft: "26px" }}>
            Manage your account settings
          </p>
        </div>

        <div className="help-box2 hover:scale-105 flex items-center flex-col">
          <Book className="help-icon" />
          <h3>Learning Experience</h3>
          <p style={{ fontSize: "14px", width: "240px", marginLeft: "26px" }}>
            Everything about the{" "}
            <span style={{ fontWeight: "800" }}>HDL Gen Hub</span> learning
            experience
          </p>
        </div>
        <div className="help-box2 hover:scale-105 flex items-center flex-col">
          <Shield className="help-icon" />
          <h3>Trust & Safe</h3>
          <p style={{ fontSize: "14px", width: "240px", marginLeft: "26px" }}>
            Trust and safty informations
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;
