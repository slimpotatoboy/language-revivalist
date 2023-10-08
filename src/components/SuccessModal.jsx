export default function SuccessModal({ open, level, onStart }) {
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
          <h3 className="font-bold text-lg">Success!</h3>
          <p className="py-4">Yaay! You have completed {level} level</p>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn btn-primary text-white"
              onClick={() => onStart()}
            >
              Next
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
