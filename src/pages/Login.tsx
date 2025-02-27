import { useEffect, useRef } from "react";
import Input from "../components/UI/Input";
import useAuth from "../hooks/useAuth";
import Label from "../components/UI/Label";
import Button from "../components/UI/Button";
import { NavLink } from "react-router-dom";

export default function Login() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const { error, errors, login, email, setEmail, password, setPassword } =
    useAuth();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(email, password);
  }

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-200">
      <form
        className="bg-neutral-50 p-8 w-[350px] rounded-lg shadow-lg border-4 border-neutral-100"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-2xl mb-6 text-center text-cyan-600">
          Login
        </h1>
        <div className="my-4">
          <Label htmlFor="email">Email</Label>
          <Input
            className="w-full rounded-md"
            id="email"
            onChange={setEmail}
            ref={emailRef}
            error={errors.email}
            placeholder="Email"
          />
        </div>

        <div className="my-4">
          <Label htmlFor="password">Password</Label>
          <Input
            className="w-full rounded-md"
            id="password"
            type="password"
            onChange={setPassword}
            error={errors.password}
            placeholder="Password"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="mt-8">
          <Button label="Login" className="w-full" />
        </div>

        <div>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <NavLink to="/register" className="font-semibold text-cyan-600">
              Register
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
