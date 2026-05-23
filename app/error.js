"use client";

export default function ErrorPage({ error, reset }) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
            <h2 className="text-3xl font-bold text-red-500">
                Something went wrong...
            </h2>

            <p className="text-gray-400">
                {error.message}
            </p>

            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-red-400 py-2 rounded-lg text-white rounded hover:bg-red-500 transition"
            >
                Try Again!
            </button>
        </div>
    );
}