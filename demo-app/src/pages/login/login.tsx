// import React from 'react'
import { ChangeEvent, useRef,useState} from "react";
import "./login.css";
import axios from "axios";
import { useFormik } from "formik";
import { validationSchema } from "./schema/loginSchema";
import { useNavigate } from "react-router-dom";

export interface SignupData {
  email: string;
  password: string;
}

export default function Login() {
  const [isPending, setisPending] = useState(false);
  const validate = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(result)
    } catch (error) {
      console.log(error)
    }
    navigate("/dashboard");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values: { email: string; password: string }) => {
      console.log("hhh");

      setisPending(true);
      handleSubmit(values);
    },
  });
  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    console.log(event);
    formik.setFieldTouched(event.target.name, true, true);
    formik.handleChange(event);
  };

  return (
    <div className="login-page md:mx-auto md:w-2/5 mx-2">
      <div className="flex flex-col justify-center pb-4 bg-white mx-auto login-form rounded pt-5 pb-5">
        <div className="px-5">
          <h2 className="text-2xl font-bold">Sign In</h2>
        </div>

        <div className="mt-2 px-5">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={formik.handleSubmit}
          >
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
                  value={formik.values.email}
                  onChange={handleFieldChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red">{formik.errors.email}</div>
                )}
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
                  value={formik.values.password}
                  onChange={handleFieldChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red">{formik.errors.password}</div>
                )}
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
                type="submit"
                className="flex w-20 justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
