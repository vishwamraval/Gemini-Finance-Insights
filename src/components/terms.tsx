//  Terms abd Conditions Modal
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';

export default function Terms() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-primary p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-text_primary">
            Terms and Conditions
          </h1>
          <button
            className="text-text_primary"
            onClick={() => console.log("Close button clicked")}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="mt-4">
          <p className="text-text_primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tristique, nunc et ultricies lacinia, nunc metus ultricies justo,
            nec fermentum nunc purus vel justo. Sed nec nunc at libero tincidunt
            tincidunt
          </p>
        </div>
      </div>
    </div>
  );
}
