import { useEffect, useState } from "react";

const SaleTimer = () => {
    // ⏳ Always start from 23 hours
    const INITIAL_TIME = 23 * 60 * 60; // seconds

    const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="w-full bg-indigo-600 text-white py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left Text */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg md:text-2xl font-bold">
                        🔥 Flash Sale Live Now
                    </h2>
                    <p className="text-sm md:text-base text-indigo-100">
                        Hurry up! Limited time offer
                    </p>
                </div>

                {/* Timer */}
                {timeLeft === 0 ? (
                    <p className="text-lg font-semibold">⛔ Sale Ended</p>
                ) : (
                    <div className="flex gap-3 sm:gap-4">
                        {[
                            { label: "Hours", value: hours },
                            { label: "Minutes", value: minutes },
                            { label: "Seconds", value: seconds },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="bg-white text-indigo-600 rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[70px] text-center"
                            >
                                <p className="text-xl sm:text-2xl font-bold">
                                    {String(item.value).padStart(2, "0")}
                                </p>
                                <span className="text-[10px] sm:text-xs uppercase">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default SaleTimer;
