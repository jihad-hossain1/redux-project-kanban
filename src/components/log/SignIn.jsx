import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/features/users/usersSlice";
import { Link } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    dispatch(
      createUser({
        email,
        password,
      })
    );
    console.log(formData);
  };

  const scafolding = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(scafolding);
  return (
    <div>
      <h4 className="text-center py-6">SignIn</h4>
      <div className="max-w-[500px] mx-auto p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label htmlFor="">email</label>
          <input
            required={true}
            defaultValue={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            className="cinpt"
          />
          <label htmlFor="">password</label>
          <input
            required={true}
            defaultValue={formData.password}
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            className="cinpt"
          />

          <div>
            <button type="submit" className="cbtn">
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6">
          <Link to={"/signup"} className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
