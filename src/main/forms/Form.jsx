
import { useRef, useState } from "react";
import Swal from "sweetalert2";
function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleFormSubmition = async(e) => {
    e.preventDefault();
     
    
    if (validateForm()) {
      showAlert(email);
    }
  };
  const validateForm = () => {
    let isValid = true;

    if (email.trim() === "") {
      emailRef.current.classList.add("border-red-500");
      isValid = false;
      setTimeout(() => {
        emailRef.current.classList.remove("border-red-500");
      }, 2000);
    }

    if (password.trim() === "") {
      passwordRef.current.classList.add("border-red-500");
      isValid = false;
      setTimeout(() => {
        passwordRef.current.classList.remove("border-red-500");
      }, 2000);
    }

    return isValid;
  };
  const showAlert = (name) => {
    Swal.fire({
      title: "Hello!",
      text: name,
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <>
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form className="mb-4" onSubmit={handleFormSubmition}>
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">
                Username or Email
              </label>
              <input
                className="w-full border  rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="email"
                id="email"
                placeholder="Username "
                ref={emailRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 md:w-full">
              <label htmlFor="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Password"
                ref={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;
