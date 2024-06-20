// Error 404 Not Found Page
// This page will be displayed when the user tries to access a page that does not exist.
// lottie files are used to display animations on the page.
import { router } from "../main.tsx";
import Lottie from "lottie-react";
import notfoundanimation from "../assets/Animation - 1718919269776.json";
export default function NotFound() {
  return (
    <div>
      <h1>ERROR 404</h1>
      <Lottie
        animationData={notfoundanimation}
        loop
        autoplay
        // reduce the size of the animation alignment in center
        style={{ width: "300px", height: "300px", margin: "auto" }}
      />
      <p> Looks like you got out of track</p>
      <button onClick={() => router.navigate("/home")}>Go to Home</button>
    </div>
  );
}
