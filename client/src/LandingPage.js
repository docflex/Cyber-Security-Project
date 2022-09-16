import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RecentActivity from "./RecentActivity";

function LandingPage() {
  const [search, setsearch] = useState("");
  var todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);
  const [currentBalance, setcurrentBalance] = useState("");

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    navigate("/signin");
  };

  /*setTimeout(function () {
    navigate("/signin");
  }, 900000);
  */
  /*To make it responsive*/
  const toggleNav = () => {};

  useEffect(() => {
    axios
      .post("http://localhost:3001/getCurrentBalance", {
        username: localStorage.email,
      })
      .then((response) => {
        //console.log(response.data[0].currentbal);
        setcurrentBalance(response.data[0].currentbal);
      });
  }, []);

  return (
    <div class="relative min-h-screen md:flex">
      <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <a href="#" class="block p-4 text-white font-bold">
          Better Dev
        </a>

        <button
          onClick={toggleNav}
          class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div class="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <a href="#" class="text-white flex items-center space-x-2 px-4">
          <i class="fas fa-sign-out-alt"></i>

          <span class="text-2xl font-extrabold" onClick={logout}>
            Log Out
          </span>
        </a>

        <nav>
          <a
            href="#"
            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-white-800"
          >
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400">
              <i class="fas fa-home"></i>
            </span>
            <span class="text-sm font-medium">Home</span>
          </a>
          <a
            href="#"
            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-white-800"
          >
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400">
              <i class="far fa-clock"></i>
            </span>
            <span class="text-sm font-medium">History</span>
          </a>
          <a
            href="#"
            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-white-800"
          >
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400">
              <i class="fas fa-balance-scale"></i>
            </span>
            <span class="text-sm font-medium">Balances</span>
          </a>
          <Link to="/profile">
            <a
              href="#"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-white-800"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400">
                <i class="fas fa-users"></i>
              </span>
              <span class="text-sm font-medium">Profile</span>
            </a>
          </Link>
          <hr className="mt-8" />
          <a
            href="#"
            class="flex flex-row items-center mt-8 h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-white-800"
          >
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400">
              <i class="fas fa-cog"></i>
            </span>
            <Link to="/settings">
              <span class="text-sm font-medium">Settings</span>
            </Link>
          </a>
          <a
            href="#"
            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-white-800"
          >
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400">
              <i class="far fa-question-circle"></i>
            </span>
            <span class="text-sm font-medium">Help</span>
          </a>
          <a
            href="#"
            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-white-800"
          >
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400">
              <i class="fas fa-user-secret"></i>
            </span>
            <span class="text-sm font-medium">Privacy</span>
          </a>
        </nav>
      </div>
      <div class="flex-1 p-10 text-2xl font-bold bg-gray-50">
        <div class="relative mx-auto text-gray-600">
          <input
            onChange={(e) => {
              setsearch(e.target.value);
              //console.log(search);
            }}
            class="border-0 mt-0 bg-gray-50 h-10 px-5 pr-16 ml-10 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search transactions"
          />

          <button type="submit" class="absolute left-0 mt-1.5 top-0 mr-4">
            <i class="fas fa-search"></i>
          </button>
          <hr className="relative mt-2 w-50" />
        </div>
        <div class="bg-gray-50 -mt-8">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span class="block">Good Morning,</span>
              <span class="block text-indigo-600">
                {localStorage.firstname}.
              </span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div class="inline-flex rounded-md shadow">
                <Link to="/transaction">
                  <a
                    href="#"
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Add Money
                  </a>
                </Link>
              </div>
              <div class="inline-flex rounded-md shadow ml-3">
                <Link to="/transactionwithdraw">
                  <a
                    href="#"
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Withdraw
                  </a>
                </Link>
              </div>
              <div class="ml-3 inline-flex rounded-md shadow">
                <Link to="/sendmoney">
                  <a
                    href="#"
                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Send Money
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="-mt-5" />
        <div class="bg-gray-50">
          <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="-mt-12 text-2xl font-bold tracking-tight text-gray-900">
              Overview
            </h2>

            <div class="h-50 grid grid-rows-1 grid-flow-col gap-6 mt-3">
              <div className="bg-white h-20 rounded-lg border-2 border-light-blue-500 border-opacity-300">
                <i className="fas fa-balance-scale ml-3 mt-5"></i>
                <span className="pl-8 text-gray-600">
                  Current Balance : ₹{currentBalance}
                </span>
              </div>
              <div className="bg-white h-20 rounded-lg border-2 border-light-blue-500 border-opacity-300">
                <i className="fas fa-balance-scale ml-3 mt-5"></i>
                <span className="pl-8 text-gray-600">
                  Current Balance : ₹{currentBalance}
                </span>
              </div>
            </div>
          </div>
        </div>
        <RecentActivity search={search} />
      </div>
    </div>
  );
}

export default LandingPage;
