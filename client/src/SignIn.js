import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loginstate, setloginstate] = useState("");
  const [logged, setlogged] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("http://localhost:3001/encryptPass").then((response) => {
      console.log(response.data);
    });
  }, [username]);

  const login = () => {
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setloginstate(response.data.message);
          setlogged(0);
          console.log(0);
        } else {
          setloginstate(response.data[0].username);
          setlogged(1);
          console.log(1);
          localStorage.setItem("email", response.data[0].username);
          localStorage.setItem("username", response.data[0].name);
          localStorage.setItem("firstname", response.data[0].firstname);
          localStorage.setItem("password", "");
          navigate("/");
        }
      });
  };

  return (
    <div class="min-h-screen bg-gray-100 flex items-center">
      <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <div class="py-12 p-10 bg-white rounded-xl">
          <div class="mb-6">
            <label
              class="mr-4 text-gray-700 font-bold inline-block mb-2"
              for="email"
            >
              Email
            </label>
            <input
              type="text"
              class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              placeholder="Your email"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div class="">
            <label
              class="mr-4 text-gray-700 font-bold inline-block mb-2"
              for="name"
            >
              Password
            </label>
            <input
              type="password"
              class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <span class="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">
            forget password
          </span>
          <button
            onClick={login}
            class="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300"
          >
            LOGIN
          </button>
          <h3 className="mt-1 text-center">OR</h3>
          <Link to="/register">
            <h3 className="text-center font-bold hover:text-indigo-500">
              Register
            </h3>
          </Link>
        </div>
        {loginstate === "Wrong username/password combination" ? (
          <div
            class="fixed z-10 inset-0 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
              ></div>
              <span
                class="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        class="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        class="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Wrong username/password combination
                      </h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          Are you sure you have entered the right
                          username/password combination?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <Link to="/register">
                    <button
                      type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      OK
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default SignIn;
