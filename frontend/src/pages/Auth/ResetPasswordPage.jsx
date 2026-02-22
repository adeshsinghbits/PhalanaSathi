import React from "react";
import AuthLayout from "./AuthLayout";

function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Create a new secure password"
    >
      <form className="space-y-4">
        <input
          type="password"
          placeholder="New Password"
          className="w-full px-4 py-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 border rounded-lg"
        />

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
          Reset Password
        </button>
      </form>
    </AuthLayout>
  );
}

export default ResetPasswordPage;