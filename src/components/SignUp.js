import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [fullName, setFullName] = useState(""); // Thêm state cho Full Name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorFullName, setErrorFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // Thêm state cho lỗi Full Name
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!email && !password) {
      setErrorEmail("Please enter your email");
      setErrorPassword("Please enter your password");
      setErrorFullName(fullName ? "" : "Please enter your full name");
      setErrorConfirmPassword(
        confirmPassword
          ? password === confirmPassword
            ? ""
            : "Passwords do not match"
          : "Please confirm your password"
      );
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
    if (!fullName) {
      setErrorFullName("Please enter your full name");
      return;
    }
    if (!confirmPassword) {
      setConfirmPassword("Please enter your full name");
      return;
    }
    // Xử lý xác minh email và mật khẩu ở đây
    // Thay đổi logic xác minh tùy theo yêu cầu của bạn
    if (email && password) {
      // Đăng nhập thành công, thực hiện các thao tác cần thiết
      console.log("Sign up successful");
      setErrorEmail(""); // Xóa thông báo lỗi email nếu có
      setErrorPassword(""); // Xóa thông báo lỗi mật khẩu nếu có
      setErrorFullName("");
      setErrorConfirmPassword("");
      setShowModal(true); // Hiển thị modal đăng nhập thành công
    } else {
      // Xác minh không thành công, hiển thị thông báo lỗi
      setErrorEmail("Invalid email or password");
      setErrorPassword("Invalid email or password");
      setShowModal(false); // Ẩn modal nếu có
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/home"); // Chuyển hướng về trang home
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
        <div class="relative flex flex-col mt-16 md:mx-40 space-y-8 bg-white shadow-2xl rounded-2xl  md:flex-row md:space-y-0">
          <div class="flex flex-col justify-center p-8 md:p-16">
            <span class="mb-3 pr-8 text-5xl font-bold font-tertiary ">
              Sign Up
            </span>
            <span class="font-tertiary text-gray-400 mb-8 text-lg">
              Create a new account
            </span>
            <div>
              <span class="mb-2 text-lg font-tertiary font-semibold">
                Full Name
              </span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setErrorFullName("");
                }}
                className={`w-full p-2 border border-gray-300 rounded-xl placeholder:font-tertiary placeholder:text-gray-500 ${
                  errorFullName ? "border-yellow-500" : ""
                }`}
                name="fullName"
                id="fullName"
              />
              {errorFullName && (
                <div className="text-yellow-500 mt-2 ">{errorFullName}</div>
              )}
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

            <div>
              <span class="mb-2 text-lg font-tertiary font-semibold">
                Confirm Password
              </span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrorConfirmPassword("");
                }}
                className={`w-full p-2 border border-gray-300 rounded-xl placeholder:font-tertiary placeholder:text-gray-500 ${
                  errorConfirmPassword ? "border-yellow-500" : ""
                }`}
                name="confirmPass"
                id="confirmPass"
              />
              {errorConfirmPassword && (
                <div className="text-yellow-500 mt-2">
                  {errorConfirmPassword}
                </div>
              )}
            </div>

            <button
              onClick={handleSignUp}
              className="w-full mt-8 bg-black/90 font-tertiary text-white p-2 text-lg rounded-xl mb-6 hover:bg-accent"
            >
              Sign Up
            </button>
            <div className="text-center font-tertiary text-3xl">
              <Link
                to="/signin"
                className=" hover:text-sky-500 hover:underline"
              >
                <span className="mr-2" aria-label="Go back">
                  {" "}
                  &#8592;{" "}
                </span>
              </Link>
            </div>
            {/* ... */}
          </div>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Sign Up Successful
                </h3>
                <p className="text-gray-600">
                  You have successfully signed up. Welcome you !
                </p>
                <button
                  className="bg-accent text-white px-4 py-2 mt-4 rounded-lg"
                  onClick={handleCloseModal}
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

export default SignUp;
