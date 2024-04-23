import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formValue, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenum: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenum: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...formValue, [name]: value });
    console.log(formValue);
  };

  const validateForm = (formValue) => {
    // const { firstName, lastName, email, phonenum, password, confirmPassword } =
    //   formValue;
    let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let isValid = true;

    let newErrors = {
      // firstName: "",
      // lastName: "",
      // email: "",
      // phonenum: "",
      // password: "",
      // confirmPassword: "",
    };

    if (!formValue.firstName.length) {
      newErrors.firstName = " enter firstname ";
      isValid = false;
    }
    if (!formValue.lastName.length) {
      newErrors.lastName = " enter lastname ";
      isValid = false;
    }
    if (!formValue.email.length) {
      newErrors.email = " enter an email";
      isValid = false;
    } else if (!regex.test(email)) {
      newErrors.email = " enter valid email";
      isValid = false;
    }
    if (!formValue.phonenum.length) {
      newErrors.phonenum = " Phone Number is required!!";
      isValid = false;
    } else if (formValue.phonenum.length < 10) {
      newErrors.phonenum = " 10 number is required!!";
      isValid = false;
    }
    if (!formValue.password.length) {
      newErrors.password = " Password is required ";
      isValid = false;
    }
    if (!formValue.confirmPassword.length) {
      newErrors.confirmPassword = "Re-enterr the passord";
      isValid = false;
    } else if (formValue.password !== formValue.confirmPassword) {
      newErrors.confirmPassword = "password should be same";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(validateForm(values))
    if (validateForm(formValue)) {
      alert("form submitted successsfully");
    }
  };

  return (
    <>
      <div className=" ">
        {Object.keys(errors).length === 0 ? (
          <div className=" ui message success">form submitted successfully</div>
        ) : (
          <div>
            <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col w-[500px] m-auto py-[50px] border-2 border-black bg-blue-300 shadow-2xl">
          <div className=" flex flex-col gap-[10px] m-auto">
            <label htmlFor="firstName">First Name</label>
            <input
              className="border-2 border-black pl-[4px] w-[300px] h-[50px] rounded-md "
              type="text"
              name="firstName"
              placeholder="enter first name"
              value={formValue.firstName}
              onChange={handleChange}
            />
            <p className="error text-red-500">{errors.firstName}</p>
          </div>
          <div className=" flex flex-col gap-[10px] m-auto">
            <label htmlFor="lastName">Last Name</label>
            <input
             className="border-2 border-black pl-[4px] w-[300px] h-[50px] rounded-md "
              type="text"
              name="lastName"
              id="lastName"
              placeholder="enter last name"
              value={formValue.lastName}
              onChange={handleChange}
            />
            <p className="error text-red-500">{errors.lastName}</p>
          </div>
          <div className=" flex flex-col gap-[10px] m-auto">
            <label htmlFor="email">Email Id</label>
            <input
              className="border-2 border-black pl-[4px] w-[300px] h-[50px] rounded-md "
              type="email"
              name="email"
              id="email"
              placeholder="enter email id "
              value={formValue.email}
              onChange={handleChange}
            />
          </div>
          <p className="error text-red-500">{errors.email}</p>
          <div className=" flex flex-col gap-[10px] m-auto">
            <label htmlFor="phonenum">Phone Num</label>
            <input
              className="border-2 border-black pl-[4px] w-[300px] h-[50px] rounded-md "
              type="number"
              name="phonenum"
              id="phonenum"
              placeholder="Phone Number"
              value={formValue.phonenum}
              onChange={handleChange}
            />
          </div>
          <p className="error text-red-500">{errors.phonenum}</p>
          <div className=" flex flex-col gap-[10px] m-auto">
            <label htmlFor="password">Password</label>
            <input
              className="border-2 border-black pl-[4px] w-[300px] h-[50px] rounded-md "
              type="password"
              name="password"
              id="Password"
              placeholder="enter Password "
              value={formValue.password}
              onChange={handleChange}
            />
          </div>
          <p className="error text-red-500">{errors.password}</p>
          <div className=" flex flex-col gap-[10px] m-auto">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
             className="border-2 border-black pl-[4px] w-[300px] h-[50px] rounded-md "
              type="password"
              name="confirmPassword"
              id="ConfirmPassword"
              placeholder="enter Confirm Password"
              value={formValue.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <p className="error text-red-500">{errors.confirmPassword}</p>
          <button className="border-2 rounded-xl bg-slate-600 border-black px-[50px] mt-[10px]">submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
