import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckoutContext } from "../lib/CheckoutContext";

export default function Message() {
  const [checkout, setCheckout] = useContext(CheckoutContext);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        auto-reopen="true"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-raleway font-bold text-trust-blue"
                  >
                    CONFIRM YOUR TRUST BY TWEETING
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-normal font-karla text-trust-blue">
                      THIS INFORMATION WILL BE DISPLAYED PUBLICLY SO BE CAREFUL
                      WHAT YOU SHARE
                    </p>
                  </div>
                  <div className="mt-2">
                    <input type="text" className="text-sm text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="py-1 px-2 md:py-2 md:px-4 w-full inline-flex justify-center rounded border hover:border-trust-blue hover:border-2 font-karla font-semibold shadow-sm px-4 py-2 bg-trust-blue text-lg text-white hover:bg-trust-yellow hover:text-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue sm:col-start-2 sm:text-sm tracking-widest"
                  onClick={() => setOpen(false)}
                >
                  TWEET
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded border border-trust-blue border-2 shadow-sm font-karla px-4 py-2 bg-white text-base font-semibold text-trust-blue hover:bg-trust-yellow hover:text-trust-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue sm:mt-0 sm:col-start-1 sm:text-sm tracking-widest"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
