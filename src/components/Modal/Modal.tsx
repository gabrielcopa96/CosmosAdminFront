import { Dispatch, Fragment, ReactElement, SetStateAction, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ open, setOpen }: ModalProps): ReactElement<any> => {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(!open)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    {/*  */}
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Nombre
                      </label>
                      <div className="mt-1 sm:col-span-2 sm:mt-0">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                        />
                      </div>
                    </div>
                    {/* DESCRIPTION PROJECTS */}
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Descripcion
                      </label>
                      <div className="mt-1 sm:col-span-2 sm:mt-0">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={''}
                        />
                        <p className="mt-2 text-sm text-gray-500">Descripcion del proyecto (min 500 caracteres)</p>
                      </div>
                    </div>
                    {/* <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                      </p>
                    </div> */}
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Go back to dashboard
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal