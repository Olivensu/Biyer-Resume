'use client';

import { useEffect, useState } from 'react';

export default function WelcomePopup() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const words = ['Welcome', 'to', 'Biyer', 'Resume'];

    useEffect(() => {
        if (currentWordIndex < words.length) {
            const timer = setTimeout(() => {
                setCurrentWordIndex(currentWordIndex + 1);
            }, 1000); // 1 second per word
            return () => clearTimeout(timer);
        } else {
            // Hide the popup after all words are shown
            const hideTimer = setTimeout(() => {
                setIsVisible(false);
            }, 1000);
            return () => clearTimeout(hideTimer);
        }
    }, [currentWordIndex]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 p-12 rounded-3xl shadow-2xl transform animate-in zoom-in duration-500">
                <div className="flex gap-4 items-center justify-center min-h-[100px]">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className={`text-5xl font-bold text-white transition-all duration-700 ${index < currentWordIndex
                                    ? 'opacity-100 scale-100 translate-y-0'
                                    : 'opacity-0 scale-50 translate-y-10'
                                }`}
                            style={{
                                textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                                letterSpacing: '0.05em',
                            }}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
