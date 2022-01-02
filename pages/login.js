import React from "react";
import Button from "../components/Button";
import Guest from "../layout/Guest";

export default function Login() {
  return (
    <div>
      <h1 className="font-semibold uppercase font-namaFont text-facebook text-light">
        Login
      </h1>
      <form>
        <div className="mb-5">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="px-4 py-2 border rounded-xl "
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="mb-5">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="px-4 py-2 border rounded-xl "
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="mb-5">
          <input
            className="mr-3 focus:ring-0"
            type="checkbox"
            name="remeber"
            id="remeber"
          />

          <label className="select-none" htmlFor="remeber">
            Remember Me
          </label>
        </div>
        <Button>Login</Button>
      </form>
    </div>
  );
}

Login.getLayout = (page) => <Guest children={page} />;
