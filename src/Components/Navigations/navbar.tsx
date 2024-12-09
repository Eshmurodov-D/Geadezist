    import { useState } from "react";
    import { Switch } from "../ui/switch";
    import { Link } from "react-router-dom";
    // import { Label } from "../ui/label";

    function Navbar() {
      const [toggleSidebar, setToggleSidebar] = useState(false);

      const toggleSidebarHandler = () => {
        setToggleSidebar(!toggleSidebar);
      };

      return (
        <>
          <nav className="fixed top-0 py-2 z-50 w-full bg-white border-gray-200 dark:bg-white">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start rtl:justify-end">
                  <button
                    onClick={toggleSidebarHandler}
                    data-drawer-target="logo-sidebar"
                    data-drawer-toggle="logo-sidebar"
                    aria-controls="logo-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
                  >
                    <span className="sr-only">Open sidebar</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                      ></path>
                    </svg>
                  </button>
                  <h1 className="ms-2 font-medium text-2xl">Geadezist</h1>
                </div>
                <div className="flex items-center text-black">
                  <div className="flex items-center ms-3">
                    <div className="flex items-center justify-center gap-4">
                      <Switch id="airplane-mode" />
                      <button
                        type="button"
                        className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="user photo"
                        />
                      </button>
                      <div className="flex items-center space-x-2">
                        {/* <Label htmlFor="airplane-mode">Airplane Mode</Label> */}
                      </div>
                    </div>
                    <div
                      className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:divide-gray-600"
                      id="dropdown-user"
                    >
                      <div className="px-4 py-3" role="none">
                        <p className="text-sm" role="none">
                          Neil Sims
                        </p>
                        <p
                          className="text-sm font-medium  truncate text-black"
                          role="none"
                        >
                          neil.sims@flowbite.com
                        </p>
                      </div>
                      <ul className="py-1" role="none">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-black "
                            role="menuitem"
                          >
                            Бошқарув панели
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-black"
                            role="menuitem"
                          >
                            Категория
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-black"
                            role="menuitem"
                          >
                            Тест
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-black"
                            role="menuitem"
                          >
                            Фойдаланувчилар
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <aside
            id="logo-sidebar"
            className={`${
              toggleSidebar ? "translate-x-0" : "-translate-x-full"
            } fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white border-r border-gray-200 lg:translate-x-0 `}
            aria-label="Sidebar"
          >
            <div className="h-full px-3 pb-4 overflow-y-auto flex items-center justify-center bg-white dark:bg-white">
              <ul className="space-y-2 w-full font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 border py-4 rounded-lg shadow-lg hover:bg-gray-100"
                  >
                    <span className="ms-3">Бошқарув панели</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 py-4 rounded-lg border shadow-lg hover:bg-gray-100   group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">Категория</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 py-4  rounded-lg border shadow-lg hover:bg-gray-100   group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">Тест</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 py-4  rounded-lg border shadow-lg hover:bg-gray-100   group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Фойдаланувчилар
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 py-4  rounded-lg border shadow-lg hover:bg-gray-100   group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Фойдаланувчилар <br /> натижаси
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                    to="/EmployeeTable"
                    className="flex items-center p-2 py-4  rounded-lg border shadow-lg hover:bg-gray-100   group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">Ходимлар</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 py-4  rounded-lg border shadow-lg hover:bg-gray-100   group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">Манзил</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div className="p-4 sm:ml-64">
            
          </div>
        </>
      );
    }

    export default Navbar;
