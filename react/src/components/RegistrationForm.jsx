import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    age: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Welcome " + form.username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />

      <button type="submit">Register</button>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </form>
  );
}
