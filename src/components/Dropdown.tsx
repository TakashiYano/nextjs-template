import { Menu, Transition } from "@headlessui/react";
import type { VFC } from "react";

type Props = { label: string };

export const Dropdown: VFC<Props> = (props) => {
  return (
    <Menu>
      {({ open }) => {
        return (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                <span>{props.label}</span>
                <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 w-56 mt-2 bg-white border border-gray-200 shadow-lg outline-none origin-top-right divide-y divide-gray-100 rounded-md"
              >
                <div className="px-4 py-3">
                  <p className="text-sm leading-5">Signed in as</p>
                  <p className="text-sm font-medium text-gray-900 truncate leading-5">taka@example.com</p>
                </div>

                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <a
                          href="#account-settings"
                          className={`${
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Account settings
                        </a>
                      );
                    }}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <a
                          href="#support"
                          className={`${
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Support
                        </a>
                      );
                    }}
                  </Menu.Item>
                  <Menu.Item
                    as="span"
                    disabled
                    className="flex justify-between w-full px-4 py-2 text-sm text-left text-gray-700 opacity-50 cursor-not-allowed leading-5"
                  >
                    New feature (soon)
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <a
                          href="#license"
                          className={`${
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          License
                        </a>
                      );
                    }}
                  </Menu.Item>
                </div>

                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => {
                      return (
                        <a
                          href="#sign-out"
                          className={`${
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Sign out
                        </a>
                      );
                    }}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        );
      }}
    </Menu>
  );
};
