import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDarkMode } from "@/context/DarkModeContext";

// กำหนดโครงสร้างข้อมูลของฟอร์ม
type FormData = {
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export default function RegistrationForm() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="min-w-screen min-h-screen flex flex-col justify-start items-center mt-20 gap-5"
    >
      <div
        className={`flex flex-col gap-5 border border-gray-400 p-4 rounded-lg shadow-md${
          isDarkMode ? "border border-white" : " border border-black "
        }`}
      >
        {/* Email */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-xl ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black "
            }`}
          >
            Email
          </p>
          <div className={` ${isDarkMode ? "bg-black " : "bg-white  "}`}>
            <input
              className={`border border-gray-400 rounded-md px-2 py-1 w-[400px] bg-white text-black`}
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Email must be a valid format and end with .com",
                },
              })}
            />
            {errors.email && (
              <p className="text-gray-400 mt-1 text-xs">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-xl ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black "
            }`}
          >
            Phone Number
          </p>
          <div className={` ${isDarkMode ? "bg-black " : "bg-white  "}`}>
            <input
              className={`border border-gray-400 rounded-md px-2 py-1 w-[400px] bg-white text-black`}
              id="phone"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-gray-400 mt-1 text-xs">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-xl ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black "
            }`}
          >
            Password
          </p>
          <div className={` ${isDarkMode ? "bg-black " : "bg-white  "}`}>
            <input
              className={`border border-gray-400 rounded-md px-2 py-1 w-[400px] bg-white text-black`}
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-gray-400 mt-1 text-xs">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          <p
            className={`text-xl ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black "
            }`}
          >
            Confirm Password
          </p>
          <div className={` ${isDarkMode ? "bg-black " : "bg-white  "}`}>
            <input
              className={`border border-gray-400 rounded-md px-2 py-1 w-[400px] bg-white text-black`}
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-gray-400 mt-1 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={`px-4 py-2 border rounded-md transition-all duration-300 hover:scale-105 ${
          isDarkMode ? "bg-white text-black" : "bg-black  text-white"
        }`}
      >
        Register
      </button>
    </form>
  );
}
