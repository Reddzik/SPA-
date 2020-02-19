import React from "react";

const LoginPage = () => {
  return (
    <div className="login">
      <label htmlFor="">
        Podaj Login <input type="text" />
      </label>
      <label htmlFor="">
        Podaj hasło <input type="password" />
      </label>
      <button>zaloguj</button>
    </div>
  );
};

export default LoginPage;
