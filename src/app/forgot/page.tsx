"use client";
export default function forgot() {
    return (
        <div className="flex justify-center items-center flex-col h-screen">
            <h1 className="text-white font-bold text-3xl border border-pink-700 p-2 mb-3 rounded stroke-cyan-500 shadow-md shadow-red-600 bg-black w-fit">Recover your password</h1>

            <div className='my-3'>
                <label htmlFor="email" className="text-2xl font-bold">Email: </label>
                <input
                    type="email"
                    placeholder="enter your email"
                    required
                    className="p-2 text-l border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black w-[280px]"
                />
            </div>
            <button className="p-2 bg-blue-500 hover:bg-blue-600 font-bold rounded-md">Submit</button>

        </div>
    )
}