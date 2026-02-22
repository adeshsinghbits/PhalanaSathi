import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Log in to continue your journey"
    >
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border rounded-lg"
        />

        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-indigo-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
          Log In
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Don’t have an account?{" "}
        <Link to="/register" className="text-indigo-600 font-semibold">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;