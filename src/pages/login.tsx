// Login page
import { router } from "../main.tsx";
export default function Login() {

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Enter your email"></input>
      <br />
      <input placeholder="Enter your password" type="password"></input>
      <br />
      <br />
      <button
        onClick={() => {
          console.log("Login button clicked");
          // route to dashboard
          router.navigate("/dashboard");
        }}
      >
        Login
      </button>
    </div>
  );
}
