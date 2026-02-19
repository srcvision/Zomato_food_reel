import React from "react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003D20]">
      <div className="w-full max-w-md bg-gradient-to-br from-[#022d16] to-[#1a5c3b] rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8">
        <h1 className="text-4xl font-extrabold text-[#F8F272] mb-2 tracking-tight text-center drop-shadow-lg">
          Create Account
        </h1>
        <p className="text-[#F8F272] text-opacity-80 text-center mb-4">
          Join FoodPartner and start your food journey!
        </p>
        <form className="w-full flex flex-col gap-5">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-3 rounded-xl bg-[#003D20] text-[#F8F272] placeholder-[#F8F272] placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#F8F272] border border-[#F8F272]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-3 rounded-xl bg-[#003D20] text-[#F8F272] placeholder-[#F8F272] placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#F8F272] border border-[#F8F272]"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-xl bg-[#003D20] text-[#F8F272] placeholder-[#F8F272] placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#F8F272] border border-[#F8F272]"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-xl bg-[#003D20] text-[#F8F272] placeholder-[#F8F272] placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#F8F272] border border-[#F8F272]"
          />
          <button
            type="button"
            className="mt-2 bg-[#F8F272] text-[#003D20] font-bold py-3 rounded-xl shadow-lg hover:bg-[#e6e05c] transition-all duration-200 text-lg tracking-wide"
          >
            Sign Up
          </button>
        </form>
        <div className="text-[#F8F272] text-opacity-80 text-sm mt-2">
          Already have an account?{" "}
          <a
            href="/user/login"
            className="underline font-semibold"
          >
            Login
          </a>
        </div>
        <div className="text-[#F8F272] text-opacity-80 text-sm flex flex-col gap-1 items-center mt-2">
          <span>Or</span>
          <a
            href="/foodpartner/register"
            className="underline font-semibold"
          >
            Register as Food Partner
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
