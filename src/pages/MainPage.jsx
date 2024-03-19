import { useState } from "react";
const MainPage = () => {
    const [textInput, setTextInput] = useState({ name: "", message: "" });
    const [comments, setComments] = useState(
        /** @type {{name: string, message: string}[]}*/ ([])
    );
    // next page content
    /** @type {React.ChangeEventHandler<HTMLInputElement>} */
    const handleTextInputChange = ({ target: { name, value } }) => {
        // const { name, value } = event.target
        // obj = { ...prev }; obj[name] = value
        setTextInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    /** @type {React.FormEventHandler<HTMLFormElement>} */
    const handleFormSubmit = (event) => {
        setComments((prev) => [...prev, textInput]);
        setTextInput({ name: "", message: "" });
        event.preventDefault();
    };

    // after login, we can change to advanced-layout
    // https://flowbite.com/docs/typography/lists/#advanced-layout

    return (
        <div>
            <form className='flex justify-center' onSubmit={handleFormSubmit}>
                <div className='w-1/4'>
                    {/* <label
                        htmlFor='name'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                        Your Name
                    </label> */}
                    <input
                        id='name'
                        name='name'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='your name'
                        value={textInput.name}
                        onChange={handleTextInputChange}
                        required
                    />
                </div>
                <div className='w-1/2'>
                    {/* <label
                        htmlFor='message'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                        Your Message
                    </label> */}
                    <input
                        id='message'
                        name='message'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='your message'
                        value={textInput.message}
                        onChange={handleTextInputChange}
                        required
                    />
                </div>

                <button
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                    Submit
                </button>
            </form>
            <p>當前參觀人數一共有 {comments.length} 人</p>
            <div>
                <ul className='max-w-md space-y-1 list-disc list-inside dark:text-gray-400'>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            {comment.name}: {comment.message}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default MainPage;
