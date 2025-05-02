import { useState } from "react";

const Create = () => {
    const[title , setTitle] = useState('hello');
    return (
        <div className="create max-w-md mx-auto text-center">
            <h2 className="text-xl text-pink-600 mb-8 font-semibold">Add a New Blog</h2>
            <form className="text-left">
                <label className="block mb-1 text-gray-700">Blog Title:</label>
                <input className="w-full p-2 border border-gray-300 mb-4" type="text" required  value={title} onChange={(e) => setTitle(e.target.value)} />

                <label className="block mb-1 text-gray-700">Blog Body:</label>
                <textarea className="w-full p-2 border border-gray-300 mb-4" required />

                <label className="block mb-1 text-gray-700">Blog Author:</label>
                <select className="w-full p-2 border border-gray-300 mb-6">
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">Add Blog</button>
                <p>{title}</p>
            </form>
        </div>

    );
}

export default Create;