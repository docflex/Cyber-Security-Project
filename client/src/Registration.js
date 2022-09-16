import React, { Component, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [usernameReg, setusernameReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const [nameReg, setname] = useState("");
  const [transpasswordReg, settranspasswordReg] = useState("");
  const navigate = useNavigate();

  const register = () => {
    axios
      .post("http://localhost:3001/registration", {
        username: usernameReg,
        password: passwordReg,
        name: nameReg,
        transpassword: transpasswordReg,
      })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white p-16 rounded shadow-2xl w-2/3">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Create Your Account
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-bold text-gray-500">Name</label>
            <input
              type="text"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">Email</label>
            <input
              type="email"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              onChange={(e) => {
                setusernameReg(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Password
            </label>
            <input
              type="password"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              onChange={(e) => {
                setpasswordReg(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Transaction Password
            </label>
            <input
              type="password"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              onChange={(e) => {
                settranspasswordReg(e.target.value);
              }}
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="agree" />
            <label className="ml-2 text-gray-700 text-sm">
              I agree to the terms and privacy.
            </label>
          </div>

          <button
            onClick={register}
            className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              navigate("/signin");
            }}
            class="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
