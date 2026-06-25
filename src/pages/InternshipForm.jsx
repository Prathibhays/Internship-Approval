import { useState } from "react";

export default function InternshipForm() {

  const [form, setForm] = useState({
    company:"",
    role:"",
    paid:"",
    stipend:"",
    manager:"",
    email:"",
  });

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const submit=(e)=>{
    e.preventDefault();
    console.log(form);
  }

  return(
    <div className="p-10">

      <h1 className="text-3xl mb-5">
        Internship Registration
      </h1>

      <form onSubmit={submit} className="space-y-4">

        <input
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="role"
          placeholder="Role"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <select
          name="paid"
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option>Paid</option>
          <option>Unpaid</option>
        </select>

        <input
          name="stipend"
          placeholder="Stipend"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="manager"
          placeholder="Manager Name"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="email"
          placeholder="Manager Email"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button className="bg-blue-700 text-white px-6 py-2 rounded">
          Submit
        </button>

      </form>

    </div>
  )
}