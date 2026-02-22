import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email and we’ll send you a reset link"
    >
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 border rounded-lg"
        />

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
          Send Reset Link
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Remember your password?{" "}
        <Link to="/login" className="text-indigo-600 font-semibold">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}

export default ForgotPasswordPage;