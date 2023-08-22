import React, { useState } from "react";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSignUp = () => {
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
      } else {
        // Xác minh không thành công, hiển thị thông báo lỗi
        setErrorEmail("Invalid email or password");
        setErrorPassword("Invalid email or password");
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
        <div class="relative flex flex-col mt-24 md:mx-40 space-y-8 bg-white shadow-2xl rounded-2xl  md:flex-row md:space-y-0">
          <div class="flex flex-col justify-center p-8 md:p-16">
            <span class="mb-3 pr-8 text-5xl font-bold font-tertiary ">
              Sign Up
            </span>
            <span class="font-tertiary text-gray-400 mb-8 text-lg">
              Create a new account
            </span>
            <div class="py-4">
              <span class="mb-2 text-lg font-tertiary font-semibold">
                Full Name
              </span>
              <input
                type="text"
                class="w-full p-2 border border-gray-300 rounded-xl placeholder:font-tertiary placeholder:text-gray-500"
                name="fullName"
                id="fullName"
              />
            </div>
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

            {/* ... */}

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

            <div class="py-4">
              <span class="mb-2 text-lg font-tertiary font-semibold">
                Confirm Password
              </span>
              <input
                type="password"
                name="confirmPass"
                id="confirmPass"
                class="w-full p-2 border border-gray-300 rounded-xl placeholder:font-tertiary placeholder:text-gray-500"
              />
            </div>
            <button
              onClick={handleSignUp}
              className="w-full bg-black/90 font-tertiary text-white p-2 text-lg rounded-xl mb-6 hover:bg-accent hover hover:border hover:border-gray-300"
            >
              Sign in
            </button>
            {/* ... */}
          </div>
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

export default SignUp;
