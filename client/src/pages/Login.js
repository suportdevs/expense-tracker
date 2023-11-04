import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="p-20 h-screen w-screen mx-auto flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
      <div class="content mx-auto text-3xl text-center md:text-left">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_xx9zron9.json"
          background="transparent"
          speed="1"
          style={{ width: "450px", height: "450px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <div class="container mx-auto flex flex-col items-center">
        <form class="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
          <Input type="text" placeholder="Email or Phone Number"></Input>
          <Input type="password" placeholder="Pasword"></Input>
          <Button>Login</Button>
          <Link class="text-blue-400 text-center my-2">Forgot Pasword?</Link>
          <hr />
          <Link class="text-blue-400 text-center my-2">
            Create a new Account
          </Link>
        </form>
        <p class="text-center text-sm my-4">
          <span class="font-semibold text-center w-full">Create a Page</span>{" "}
          for a celebrity, band or business
        </p>
      </div>
    </div>
  );
};

export default Login;
