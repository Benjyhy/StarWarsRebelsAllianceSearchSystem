"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error);
      return;
    }

    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);

    router.push("/search");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.titleLog}>Please login to the empire search system</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input className={styles.input} type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input className={styles.input} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className={styles.button} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
