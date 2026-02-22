import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";
import { BiSolidHide, BiSolidShow  } from "react-icons/bi";

function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isConfirmValid =
    form.confirmPassword === form.password && form.confirmPassword !== "";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isConfirmValid) return;

    console.log("Form Submitted:", form);
  };

  return (
    <AuthLayout
      title="Create an Account"
      subtitle="Join thousands of smart travelers"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-5 cursor-pointer text-sm text-indigo-600"
          >
            {showPassword ? <BiSolidHide /> : <BiSolidShow />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-5 cursor-pointer text-sm text-indigo-600"
          >
            {showConfirm ? <BiSolidHide /> : <BiSolidShow /> }
          </span>
        </div>

        {/* Password mismatch message */}
        {!isConfirmValid && form.confirmPassword && (
          <p className="text-sm text-red-500">
            Passwords do not match
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={!isConfirmValid}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            isConfirmValid
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        >
          Sign Up
        </button>
      </form>

      <p className="text-xs text-gray-400 mt-4">
        By signing up, you agree to our Terms & Conditions and Privacy Policy.
      </p>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-600 font-semibold hover:underline"
        >
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}

export default RegisterPage;