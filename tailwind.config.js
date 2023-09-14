/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#5f3c90",
        "custom-coklat": "#D37643",
      },
      width: {
        "w-logo": "209px",
        "w-navbar": "1440px",
        "w-icon": "19px",
        "w-icon-search": "22px",
        "w-icon-hamberger": "25px",
        "w-slide": "1446px",
      },
      height: {
        "h-logo": "139px",
        "h-navbar": "141px",
        "h-icon": "17.77px",
        "h-icon-search": "22px",
        "h-icon-hamberger": "22px",
        "h-slide": "522px",
      },
      padding: {
        "p-1": "1px",
        "p-82": "82px",
      },
      fontSize: {
        "f-12": "12px",
        "f-14": "14px",
        "f-16": "16px",
        "f-18": "18px",
        "f-20": "20px",
        "f-22": "22px",
        "f-24": "24px",
        "f-26": "26px",
        "f-28": "28px",
        "f-30": "30px",
        "f-32": "32px",
        "f-34": "34px",
        "f-36": "36px",
        "f-38": "38px",
        "f-40": "40px",
        "f-42": "42px",
        "f-44": "44px",
        "f-46": "46px",
        "f-48": "48px",
        "f-50": "50px",
      },

      margin: {
        "mt-what": "62px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
