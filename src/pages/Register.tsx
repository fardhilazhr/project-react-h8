import { useState } from "react";
import { z } from "zod";
import Label from "../components/UI/Label.tsx";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { NavLink } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const scheme = z.object({
      name: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(6),
      confirmPassword: z
        .string()
        .min(6)
        .refine((value) => value === password, {
          message: "password doesn't match",
        }),
      age: z.preprocess(
        (value) => {
          if (value === "") {
            return undefined;
          }
          const num = Number(value);
          return isNaN(num) ? undefined : num;
        },
        z
          .number()
          .optional()
          .refine((value) => value === undefined || value >= 18, {
            message: "You must be at least 18 years old",
          })
      ),
    });
    const result = scheme.safeParse({
      name,
      email,
      password,
      confirmPassword,
      age: parseInt(age),
    });

    if (!result.success) {
      const formattedError = Object.fromEntries(
        Object.entries(result.error.flatten().fieldErrors).map(
          ([Key, value]) => {
            return [Key, value?.[0] || ""];
          }
        )
      );

      setError(formattedError);

      return;
    }
    setError({});
    alert("Success");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-200">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-50 p-8 w-[350px] rounded-lg shadow-lg border-4 border-neutral-100"
      >
        <h1 className="font-bold text-2xl mb-6 text-center text-cyan-600">
          Register
        </h1>

        <div className="mb-4">
          <Label htmlFor="nama">Name</Label>
          <Input
            className="w-full rounded-lg"
            id="nama"
            placeholder="input name"
            value={name}
            error={error.name}
            onChange={(value) => setName(value)}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            className="w-full rounded-lg"
            id="email"
            placeholder="input email"
            value={email}
            error={error.email}
            onChange={(value) => setEmail(value)}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            className="w-full rounded-lg"
            type="password"
            id="password"
            placeholder="input password"
            value={password}
            error={error.password}
            onChange={(value) => setPassword(value)}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            className="w-full rounded-lg"
            type="password"
            id="confirmPassword"
            placeholder="confirm password"
            value={confirmPassword}
            error={error.confirmPassword}
            onChange={(value) => setConfirmPassword(value)}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="umur">Umur</Label>
          <Input
            className="w-full rounded-lg"
            id="umur"
            placeholder="input umur"
            value={age}
            error={error.age}
            onChange={(value) => setAge(value)}
          />
        </div>

        <div className=" mt-8">
          <Button label="Register" className="w-full" />
        </div>
        <div>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <NavLink to="/Login" className="font-semibold text-cyan-600">
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}
