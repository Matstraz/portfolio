import { useState } from "react";

export default function ModalFinlab() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer allProjectsBg bgFinlab w-80 h-40"
        onClick={() => setShowModal(true)}
      ></div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}

              <div className="bgFinlab allProjectsBg bgModal relative">
                {/*body*/}
                {/*footer*/}
                <button
                  className="text-black absolute top-3 right-3 bg-slate-400 h-8 w-8 font-bold rounded-full border-2 border-black"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
