// Error 404 Not Found Page
// This page will be displayed when the user tries to access a page that does not exist.
// lottie files are used to display animations on the page.
import { router } from "../main.tsx";
import Lottie from "lottie-react";
import notfoundanimation from "../assets/Animation - 1718919269776.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NotFound() {
  return (
    <div className="h-screen bg-primary text-text_primary flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-center">404 Not Found</h1>
      <Lottie
        animationData={notfoundanimation}
        loop
        autoplay
        style={{ width: "300px", height: "300px" }}
      />
      <p className="text-center mt-4">
        The page you are looking for does not exist.
      </p>
      <div className="flex items-center justify-center">
        <button
          className="bg-accent text-white p-3 rounded-lg hover:accent_light transition-colors mt-4"
          onClick={() => router.navigate("/home")}
        >
          <FontAwesomeIcon icon="house" className="mr-2" />
          Go to Home
        </button>
      </div>
    </div>
  );
}
