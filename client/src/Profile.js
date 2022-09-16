import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Profile() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [bankaccountno, setbankaccountno] = useState("");
  const [ifsc, setifsc] = useState("");
  const [pan, setpan] = useState("");
  const [currentBalance, setcurrentBalance] = useState("");
  const saveProfile = () => {
    axios
      .post("http://localhost:3001/profileInfo", {
        username: localStorage.email,
        firstname: firstname,
        lastname: lastname,
        mobileno: mobileno,
        address: address,
        city: city,
        country: country,
        postalcode: postalcode,
        bankaccountno: bankaccountno,
        ifsc: ifsc,
        pan: pan,
        currentBalance: currentBalance,
      })
      .then((response) => {});
  };

  const [firstnamef, setfirstnamef] = useState("");
  const [lastnamef, setlastnamef] = useState("");
  const [mobilenof, setmobilenof] = useState("");
  const [addressf, setaddressf] = useState("");
  const [cityf, setcityf] = useState("");
  const [countryf, setcountryf] = useState("");
  const [postalcodef, setpostalcodef] = useState("");
  const [bankaccountnof, setbankaccountnof] = useState("");
  const [ifscf, setifscf] = useState("");
  const [panf, setpanf] = useState("");
  const [currentBalancef, setcurrentBalancef] = useState("");

  const viewProfile = () => {
    axios
      .post("http://localhost:3001/profileInfo", {
        username: localStorage.email,
      })
      .then((response) => {
        console.log(response.data[0].firstname);
        setfirstnamef(response.data[0].firstname);
        setlastnamef(response.data[0].lastname);
        setmobilenof(response.data[0].mobileno);
        setaddressf(response.data[0].address);
        setcityf(response.data[0].city);
        setcountryf(response.data[0].country);
        setpostalcodef(response.data[0].postalcode);
        setbankaccountnof(response.data[0].bankno);
        setifscf(response.data[0].ifsc);
        setpanf(response.data[0].pan);
        setcurrentBalancef(response.data[0].currentbal);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section class=" py-1 bg-blueGray-50">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">My account</h6>
                <Link to="/">
                  <button
                    class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Go Back
                  </button>
                </Link>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={localStorage.username}
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={localStorage.email}
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        First Name
                      </label>
                      <input
                        onChange={(e) => {
                          setfirstname(e.target.value);
                        }}
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Last Name
                      </label>
                      <input
                        onChange={(e) => {
                          setlastname(e.target.value);
                        }}
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Mobile No:
                      </label>
                      <input
                        onChange={(e) => {
                          setmobileno(e.target.value);
                        }}
                        type="number"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Address
                      </label>
                      <input
                        onChange={(e) => {
                          setaddress(e.target.value);
                        }}
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        City
                      </label>
                      <input
                        onChange={(e) => {
                          setcity(e.target.value);
                        }}
                        type="email"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Country
                      </label>
                      <input
                        onChange={(e) => {
                          setcountry(e.target.value);
                        }}
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Postal Code
                      </label>
                      <input
                        onChange={(e) => {
                          setpostalcode(e.target.value);
                        }}
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Bank Information
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Bank Account Number
                      </label>
                      <input
                        onChange={(e) => {
                          setbankaccountno(e.target.value);
                        }}
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlsfor="grid-password"
                      >
                        IFSC CODE
                      </label>
                      <input
                        onChange={(e) => {
                          setifsc(e.target.value);
                        }}
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Pan No:
                      </label>
                      <input
                        onChange={(e) => {
                          setpan(e.target.value);
                        }}
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Current Balance
                      </label>
                      <input
                        onChange={(e) => {
                          setcurrentBalance(e.target.value);
                        }}
                        type="number"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-6/12 px-4 mx-auto text-center mt-6">
                  <button
                    onClick={saveProfile}
                    class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Save
                  </button>
                  <Link to="/EditedProfile">
                    <button
                      onClick={viewProfile}
                      class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-5"
                      type="button"
                    >
                      View Profile
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <footer class="relative  pt-8 pb-6 mt-2">
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-6/12 px-4 mx-auto text-center"></div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
export default Profile;
