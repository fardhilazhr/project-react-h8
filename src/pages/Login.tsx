import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Label from "../components/UI/Label";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-200">
      <form className="bg-neutral-50 p-8 w-[350px] rounded-lg shadow-lg border-4 border-neutral-100">
        <h1 className="font-bold text-2xl mb-6 text-center text-cyan-600">
          Login
        </h1>
        <div className="my-4">
          <Label htmlFor="email">Email</Label>
          <Input className="w-full rounded-lg" id="email" placeholder="Email" />
        </div>

        <div className="my-4">
          <Label htmlFor="password">Password</Label>
          <Input
            className="w-full rounded-lg"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>

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
