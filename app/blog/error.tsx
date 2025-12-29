"use client"

export default function Error({error, reset}: {error: Error, reset: () => void}) {
    return (
        <div className="bg-gray-300 w-auto my-0 mx-auto flex flex-col p-5 gap-3">
            <h2 className="font-bold text-6xl text-center">Oops! Something went wrong!</h2>
            <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-center"></button>
        </div>
    );
};
