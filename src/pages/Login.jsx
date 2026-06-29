import { useState } from "react";

export default function Login() {
  const [srn, setSrn] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    console.log({
      srn,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-[#08262D] flex items-center justify-center">
      <form
        onSubmit={login}
        className="bg-white w-[350px] rounded-md shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Log in
        </h1>

        <input
          type="text"
          placeholder="Enter SRN"
          value={srn}
          onChange={(e) => setSrn(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-5 outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded font-medium transition"
        >
          Log in
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          or,{" "}
          <span className="text-cyan-600 cursor-pointer hover:underline">
            sign up
          </span>
        </p>
      </form>
    </div>
  );
}