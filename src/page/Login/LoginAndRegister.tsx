import { ReactElement, useState } from "react";
import Login from "./Login";
import Register from "./Register";

type ComponentLoginOrRegister = "login" | "register";

const LoginAndRegister = (): ReactElement<HTMLElement> => {
  const [actionPage, setActionPage] =
    useState<ComponentLoginOrRegister>("login");

  return (
    <div>
      <div className="flex min-h-screen">
        <div className="flex flex-1 items-center bg-logo-main justify-center">
          <div>
            <h1 className="text-6xl font-black text-gray-900 text-center">
              Cosmos.
            </h1>
            <img
              className="img-login"
              src="https://res.cloudinary.com/dbewbczkz/image/upload/v1668481697/Cosmos/illustration-login_fzcpzx.png"
              alt=""
            />
          </div>
        </div>
        {actionPage === "login" && (
          <Login setActionPage={setActionPage} />
        )}
        {actionPage === "register" && (
          <Register setActionPage={setActionPage} />
        )}
      </div>
    </div>
  );
};

export default LoginAndRegister;
