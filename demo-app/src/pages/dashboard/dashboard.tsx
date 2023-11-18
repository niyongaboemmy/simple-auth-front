// import React from "react";
import "./dashboard.css";
import logo from "../../assets/ur_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Dashboard() {
  const activityItems = [
    { icon: "database", text: "Assets Stock" },
    { icon: "share-nodes", text: "Assets Distribution" },
    { icon: "barcode", text: "Assets tracking" },
    { icon: "user-group", text: "Staff Management" },
    { icon: "database", text: "Report" },
  ];
  const profileItems = [
    { icon: "user", text: "My profile" },
    { icon: "unlock", text: "Change password" },
  ];
  return (
    <div className="dashboard flex w-100">
      <div className="side-bar w-1/5 bg-white mt-1 rounded-lg">
        <img src={logo} alt="logo" className="w-44 m-auto" />
        <div className="options w-60 m-auto">
          <h3 className="font-bold">
            <FontAwesomeIcon icon="cubes" className="text-gray me-3"/>
            Dashboard
          </h3>

          <h3 className="mt-5 mb-3 text-gray">PROFILE</h3>
          <ul>
            {profileItems.map((item, index) => (
              <li key={index} className="flex gap-2">
                <FontAwesomeIcon
                  icon={item.icon as IconProp}
                  className="text-gray"
                />
                {item.text}
              </li>
            ))}
          </ul>
          <h3 className="mt-5 mb-3 text-gray">ACTIVITIES</h3>
          <ul>
            {activityItems.map((item, index) => (
              <li key={index} className="flex gap-2">
                <FontAwesomeIcon
                  icon={item.icon as IconProp}
                  className="text-gray"
                />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="dash-body w-4/5 grid gap-2 p-2">
        <div className="heading bg-white flex justify-between items-center rounded-lg px-5">
          <div>
            <h3 className="font-bold">Welcome</h3>
            <h1 className="font-bold text-2xl">ERIC RWASA</h1>
          </div>
          <div className="logout">
            <button className="flex w-40 justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Logout
            </button>
          </div>
        </div>
        <div className="body bg-white row-span-5 rounded-lg"></div>
      </div>
    </div>
  );
}
