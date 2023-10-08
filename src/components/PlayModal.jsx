export default function PlayModal({ open, level, onStart }) {
  return (
    <>
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        defaultChecked={open}
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Welcome to {level.toUpperCase()} Level!
          </h3>
          <p className="py-4">
            In the {level} level, you will encounter{" "}
            {level == "beginner"
              ? "three"
              : level == "intermediate"
              ? "five"
              : level == "advanced"
              ? "seven"
              : ""}{" "}
            words. You will have 60 seconds to memorize these words. Afterward,
            you will proceed to the next screen, where you will engage in a
            word-matching memory game.
          </p>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn btn-primary text-white"
              onClick={() => onStart()}
            >
              Start
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
