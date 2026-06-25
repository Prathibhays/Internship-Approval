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
    <div className="flex justify-center items-center h-screen">

      <form
        onSubmit={login}
        className="shadow-lg p-8 rounded-lg w-96"
      >

        <h1 className="text-3xl font-bold mb-5">
          Student Login
        </h1>

        <input
          type="text"
          placeholder="Enter SRN"
          className="border p-2 w-full mb-4"
          value={srn}
          onChange={(e)=>setSrn(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="bg-blue-700 text-white w-full p-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}