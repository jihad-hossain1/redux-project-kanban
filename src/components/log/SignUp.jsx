import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/features/users/usersSlice";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, error, email } = useSelector(
    (state) => state.userSlice
  );
  //   console.log(isLoading, isError);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isError && error) {
      toast.error(error);
    }
  }, [isError, error]);
  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
    }
  }, [isLoading, email, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, name } = formData;

    dispatch(
      createUser({
        name,
        email,
        password,
      })
    );

    console.log(formData);
  };

  const scafolding = {
    name: "",
    email: "",
    password: "",
    cPassword: "",
  };
  const [formData, setFormData] = useState(scafolding);

  return (
    <div>
      <Toaster />
      <h4 className="text-center py-6">SignUp</h4>
      <div className="max-w-[500px] mx-auto p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label htmlFor="">Name</label>
          <input
            required={true}
            defaultValue={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="cinpt"
          />
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
          <label htmlFor="">cpassword</label>
          <input
            required={true}
            defaultValue={formData.cPassword}
            onChange={handleChange}
            type="password"
            name="cPassword"
            id="cpassword"
            className="cinpt"
          />

          <div>
            <button type="submit" className="cbtn">
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-6">
          <Link to={"/signin"} className="text-blue-600 hover:underline">
            already an account ? login here...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
