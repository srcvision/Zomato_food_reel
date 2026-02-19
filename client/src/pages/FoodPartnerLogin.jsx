import React from "react";

const FoodPartnerLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003D20]">
      <div className="w-full max-w-md bg-gradient-to-br from-[#022d16] to-[#1a5c3b] rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-extrabold text-[#F8F272] mb-2 tracking-tight text-center drop-shadow-lg">
          Food Partner Login
        </h1>
        <p className="text-[#F8F272] text-opacity-80 text-center mb-4">
          Login to manage your food partner account
        </p>
        <form className="w-full flex flex-col gap-4">
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
            className="mt-4 bg-[#F8F272] text-[#003D20] font-bold py-3 rounded-xl shadow-lg hover:bg-[#e6e05c] transition-all duration-200 text-lg tracking-wide"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-[#F8F272] text-opacity-80 text-sm">
          Not registered? <a href="/foodpartner/register" className="underline font-semibold">Register</a>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
