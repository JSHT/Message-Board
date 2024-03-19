import { useState } from "react";
import { Link } from "react-router-dom";

import {
    AcademicCapIcon,
    AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

const PageHeader = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleMenuHandler = () => {
        setToggleMenu((prev) => !prev);
        console.log(toggleMenu);
    };
    return (
        <>
            <nav className='bg-white border-gray-200 dark:bg-gray-900'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <a
                        href='/'
                        className='flex items-center space-x-3 rtl:space-x-reverse'
                    >
                        <AcademicCapIcon className='h-6 w-6 text-blue-500' />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                            Message-board
                        </span>
                    </a>
                    <button
                        type='button'
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        onClick={toggleMenuHandler}
                    >
                        <span className='sr-only'>Open main menu</span>
                        <AdjustmentsHorizontalIcon className='h-6 w-6 text-gray-500' />
                    </button>
                    <div
                        className={`w-full md:block md:w-auto ${
                            toggleMenu ? "" : "hidden"
                        }`}
                    >
                        <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                            <li>
                                <Link
                                    to='/'
                                    className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                    aria-current='page'
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/about'
                                    className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default PageHeader;
