import { ArrowRightIcon } from "@heroicons/react/24/solid";
import avatar from "../assets/avatar.png";

const AboutPage = () => {
    return (
        <div className='flex items-center justify-center p-48 '>
            <div className='flex flex-col items-center m-12'>
                <img
                    className='w-36 h-36 mb-3 rounded-full shadow-lg'
                    src={avatar}
                    alt='JSHT image'
                />
                <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                    JSHT
                </h5>
                <span className='text-sm text-gray-500 dark:text-gray-400'>
                    R12922042
                </span>
            </div>
            <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-12'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Welcome!
                </h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    Hi, I{"'"}m a graduate student in National Taiwan
                    University.
                </p>
                <a
                    href='https://github.com/JSHT'
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                    Read more <ArrowRightIcon className='h-4 w-4 text-white' />
                </a>
            </div>
        </div>
    );
};

export default AboutPage;
