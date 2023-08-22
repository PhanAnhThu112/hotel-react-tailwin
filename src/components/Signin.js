import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSignin = () => {
    if (!email && !password) {
      setErrorEmail("Please enter your email");
      setErrorPassword("Please enter your password");
      return;
    }

    if (!email) {
      setErrorEmail("Please enter your email");
      return;
    }

    if (!password) {
      setErrorPassword("Please enter your password");
      return;
    }

    // Xử lý xác minh email và mật khẩu ở đây
    // Thay đổi logic xác minh tùy theo yêu cầu của bạn
    if (email && password) {
      // Đăng nhập thành công, thực hiện các thao tác cần thiết
      console.log("Sign up successful");
      setErrorEmail(""); // Xóa thông báo lỗi email nếu có
      setErrorPassword(""); // Xóa thông báo lỗi mật khẩu nếu có
      setShowModal(true); // Hiển thị modal đăng nhập thành công
    } else {
      // Xác minh không thành công, hiển thị thông báo lỗi
      setErrorEmail("Invalid email or password");
      setErrorPassword("Invalid email or password");
      setShowModal(false); // Ẩn modal nếu có
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        src="image.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute w-full h-full bg-black/70"></div>
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col mt-16 md:mx-40 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-16">
            <span className="mb-3 pr-8 text-5xl font-bold font-tertiary">
              Welcome back
            </span>
            <span className="font-tertiary text-gray-400 mb-8 text-lg">
              Welcome back! Please enter your details
            </span>
            <span className="mb-2 text-lg font-tertiary font-semibold">
              Email
            </span>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorEmail("");
              }}
              className={`w-full p-2 border border-gray-300 rounded-xl placeholder:font-tertiary placeholder:text-gray-500 ${
                errorEmail ? "border-yellow-500" : ""
              }`}
              name="email"
              id="email"
            />
            {errorEmail && (
              <div className="text-yellow-500 mt-2">{errorEmail}</div>
            )}
            <span className="mb-2 text-lg font-tertiary font-semibold">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorPassword("");
              }}
              className={`w-full p-2 border border-gray-300 rounded-xl placeholder:font-tertiary placeholder:text-gray-500 ${
                errorPassword ? "border-yellow-500" : ""
              }`}
              name="pass"
              id="pass"
            />
            {errorPassword && (
              <div className="text-yellow-500 mt-2">{errorPassword}</div>
            )}
            {/* ... */}
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <label
                  htmlFor="ch"
                  className="flex items-center cursor-pointer"
                >
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className=" hover:text-sky-500 font-tertiary text-lg">
                    Remember for 30 days
                  </span>
                </label>
              </div>
              <span class=" font-semibold font-tertiary text-lg hover:text-sky-500">
                Forgot password
              </span>
            </div>
            <button
              onClick={handleSignin}
              className="w-full bg-black/90 font-tertiary text-white p-2 text-lg rounded-xl mb-6 hover:bg-accent hover hover:border hover:border-gray-300"
            >
              Sign in
            </button>
            <button class="w-full font-tertiary border bg-black/90 text-white border-gray-300 text-lg p-2 hover:bg-accent rounded-xl mb-6 hover:text-white">
              <img src="google.svg" alt="img" class="w-6 h-6 inline mr-2" />
              Sign in with Google
            </button>
            <div class="text-center text-gray-400 font-tertiary text-lg">
              Dont'have an account ?
              <span class="ml-1 font-semibold bold font-tertiary text-black  hover:text-sky-500">
                <Link to="/SignUp">Sign up for free</Link>
              </span>
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Sign In Successful
                </h3>
                <p className="text-gray-600">
                  You have successfully signed in. Welcome back!
                </p>
                <button
                  className="bg-accent text-white px-4 py-2 mt-4 rounded-lg"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <div class="relative">
            <img
              src="background.png"
              alt="img"
              class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
            <div class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
              <span class="text-white text-xl">
                We've been uesing Untitle to kick"
                <br />
                start every new project and can't <br />
                imagine working without it."
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
