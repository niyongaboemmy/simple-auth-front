// import React from 'react'
import { useRef, useState } from "react";
import "./login.css";
import axios from "axios";

export interface SignupData {
  username: string;
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<SignupData>({
    username: "",
    email: "",
    password: "",
  });
  const [userError, setUserError] = useState ('')
  const [passError, setpassError] = useState ('')
  const validate = useRef<HTMLDivElement | null>(null);
  const errorDiv = validate.current;
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  function isValidEmail(email:string) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setpassError('');
    setUserError('');
    if (formData.email === '') {
      setUserError('Email is required.');
      if (errorDiv) {
        errorDiv.textContent = 'Email is required.';
      }
      return;
    }

    if (!isValidEmail(formData.email)) {
      setUserError('Invalid email address.');
      if (errorDiv) {
        errorDiv.textContent = 'Invalid email address.';
      }
      return;
    }
    
    if (formData.password === '') {
      setpassError('Password is required.');
      if (errorDiv) {
        errorDiv.textContent = 'Password is required.';
      }
      return;
    }
    if (
      formData.password.length < 8 ||
      !/[A-Z]/.test(formData.password) ||
      !/\d/.test(formData.password)
    ) {
      setpassError(
        'Password must be 8 characters long, include uppercase, at least one numeric digit.'
      );
      if (errorDiv) {
        errorDiv.textContent=
        'Password must be 8 characters long, include uppercase, at least one numeric digit.'
         }
      return;
    }
    console.log(formData)
    // axios.post('').then((res)=>{

    // })
  }

  return (
    <div className="login-page mx-auto">
      <div className="flex flex-col justify-center pb-4 bg-white mx-auto login-form rounded pt-5 pb-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>

        <div className="mt-7 px-5">
          <form className="space-y-6" action="#" method="POST">
          <div ref={validate} className="text-red"></div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                phone number or email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="bottom-action flex justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
              onClick={handleSubmit}
              className="flex w-20 justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
