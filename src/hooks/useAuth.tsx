import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const validUser = {
  email: "admin@example.com",
  password: "admin123",
};

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    const scheme = z.object({
      email: z.string().email("Email does not exist"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    });
    const result = scheme.safeParse({ email, password });

    if (!result.success) {
      const formattedError = Object.fromEntries(
        Object.entries(result.error.flatten().fieldErrors).map(
          ([Key, value]) => {
            return [Key, value?.[0] || ""];
          }
        )
      );
      setErrors(formattedError);
      return;
    }

    setErrors({});

    if (email !== validUser.email || password !== validUser.password) {
      setError("Invalid username or password");
      return;
    }
    setIsLoggedIn(true);
    setUser(validUser);
    localStorage.setItem("user", JSON.stringify(validUser));
    navigate("/", { replace: true });
  };
  return {
    isLoggedIn,
    setIsLoggedIn,
    email,
    setEmail,
    password,
    setPassword,
    user,
    setUser,
    error,
    setError,
    errors,
    setErrors,
    login,
  };
};

export default useAuth;
