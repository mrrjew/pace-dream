/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "128px",
      },
    },
    // fontFamily: {
    //   display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
    //   body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
    // },

    extend: {
      backgroundImage:{
        'rectangle': "url('https://s3-alpha-sig.figma.com/img/806b/93b3/1fb5f1cd8b70dae7015d65698870c4fa?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=boHIQm3zpCHaPI5430xiL7nqBbe6RS98yVD0CuIC9AjZ5W146jWUTlHBFQsvC1paM2YKIaN0pWJyj0S0j7-yoVkCOI375bkGumN7x1ktpjlvELVdms-a41EDaCvs2uuiusqeAVSWFxBWke~~EB1VSlztOWueXGxW8Gf9Pcgb~3uFqwyipHmkRI8A1fGBtihUuWVmxpLnpCwGpJlO7Tm18rSvfK3IPdvVlUOvihHYDz5wQTQrjXnqCgT98YUqfsG40RnUsA7Ysjwq62kFMg9V6b1ikfitZPCnQxPg2E9ZGWc1q98TCwXsknt4aF~IxW0sImsiQ6k-K0~VJ5kNZYolYQ__')",
        'mobile' : "url('https://s3-alpha-sig.figma.com/img/50e9/75ae/6bf4745bff202e5215286477959c2d8e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QXYK1FYqeE3Vz8ML6gxK-ftfPBcapq6wqclrVHWCqlftlBHjDzD2iAI20WGNmrFAyQi~6vtBSimQnsoUPWHqqBmoVgSc0spWC33M~qcyZX~ZeXLO4wSNPeyPa8-TyvUcpyoRogWwLfVsTehNaDUw-1XnSpFXuhzgPOsvgUjH7v5JWbWBDxE42kZxTOBedXCwvjtOtj5HOlD7SrnHeyYDs-WB5Ktl0res3Lb~pvQaVerNTL48jML6wbpuZG5qTu3h4TT8aGTZR8JvLuC0NgUlklZJMS~b~gpyir99pmi8WkNIb~-x0ewq4JPR7foB8BFxQh9IE0HgSzgf4i0oFFtQZg__')",
      },
      letterSpacing: {
        "few-tight": "-.01em",
        "few-loos": "0.035em",
      },
      animation: {
        "ping-slow": "ping 1s cubic-bezier(0, 0, 0.2, 1) 0.3s infinite",
      },
      dropShadow: {
        image: "4px 10px 10px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        violet: "#632DF8",
        primary: {
          50: customColors("--c-primary-50"),
          100: customColors("--c-primary-100"),
          200: customColors("--c-primary-200"),
          300: customColors("--c-primary-300"),
          400: customColors("--c-primary-400"),
          500: customColors("--c-primary-500"),
          6000: customColors("--c-primary-600"),
          700: customColors("--c-primary-700"),
          800: customColors("--c-primary-800"),
          900: customColors("--c-primary-900"),
        },
        secondary: {
          50: customColors("--c-secondary-50"),
          100: customColors("--c-secondary-100"),
          200: customColors("--c-secondary-200"),
          300: customColors("--c-secondary-300"),
          400: customColors("--c-secondary-400"),
          500: customColors("--c-secondary-500"),
          6000: customColors("--c-secondary-600"),
          700: customColors("--c-secondary-700"),
          800: customColors("--c-secondary-800"),
          900: customColors("--c-secondary-900"),
        },
        neutral: {
          50: customColors("--c-neutral-50"),
          100: customColors("--c-neutral-100"),
          200: customColors("--c-neutral-200"),
          300: customColors("--c-neutral-300"),
          400: customColors("--c-neutral-400"),
          500: customColors("--c-neutral-500"),
          6000: customColors("--c-neutral-600"),
          700: customColors("--c-neutral-700"),
          800: customColors("--c-neutral-800"),
          900: customColors("--c-neutral-900"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar-hide"),
    function({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#c0c0c0"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            width: "4px",
          },
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
};
