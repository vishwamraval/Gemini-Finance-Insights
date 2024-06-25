// Dashboard page
// import { router } from "../main.tsx";
import { getAuth } from "firebase/auth";
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {getCurrentUser()?.displayName}! to your dashboard!</p>
    </div>
  );
}

// Get the current user
export function getCurrentUser() {
  const auth = getAuth();
  return auth.currentUser;
}
