/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: {
                    950: '#030712', // Primary Background
                    900: '#111827', // Secondary Background / Cards
                    800: '#1f2937',
                    700: '#374151',
                    600: '#4b5563',
                    500: '#6b7280',
                    400: '#9ca3af',
                    300: '#d1d5db', // Text
                    200: '#e5e7eb',
                    100: '#f3f4f6',
                    50: '#f9fafb',
                }
            }
        },
    },
    plugins: [],
}
