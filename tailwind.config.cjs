/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      /* Typography */
      fontSize: {
        xxxl: ["24px", { lineHeight: "150%" }],
        xxl: ["22px", { lineHeight: "150%" }],
        xl: ["20px", { lineHeight: "150%" }],
        lg: ["18px", { lineHeight: "150%" }],
        md: ["16px", { lineHeight: "150%" }],
        sm: ["14px", { lineHeight: "150%" }],
        xs: ["12px", { lineHeight: "150%" }],
        xxs: ["10px", { lineHeight: "120%" }],
        xxxs: ["8px", { lineHeight: "110%" }],
      },
      fontWeight: {
        bold: "700",
        semibold: "600",
        medium: "500",
        regular: "400",
      },
      /* Color Pallet */
      colors: {
        gray: {
          5: "#F7F7F8",
          10: "#E9E9ED",
          20: "#CDCDD6",
          30: "#B0B0BF",
          40: "#9494A8",
          50: "#787891",
          60: "#606076",
          70: "#49495A",
          80: "#32323E",
          85: "#272730",
          90: "#1C1C22",
        },
        sub: {
          sub: "#007AFF",
          10: "#E5F2FF",
        },
        metro: {
          KA: "#0090D1", // 공항철도
          S: "#D4013B", // 신분당선
          UI: "#B0CE1A", // 우이신설경전철

          rail1: "#77C4A3", // 경중선
          rail2: "#F5A202", // 수인분당선
          rail4: "#0C8E71", // 경춘선

          // 서울 지하철
          line1: "#0032A0", // 1호선
          line2: "#00B140", // 2호선
          line3: "#FC4C02", // 3호선
          line4: "#00A9E0", // 4호선
          line5: "#A05EB5", // 5호선
          line6: "#A9431E", // 6호선
          line7: "#67823A", // 7호선
          line8: "#E31C79", // 8호선
          line9: "#BB8336", // 9호선
        },
        kakao: { yellow: "#FEE500", black: "#1E1E20" },
        error: "#D4013B",
      },
      height: {
        "screen-dvh": "100dvh",
      },
      boxShadow: {
        bt01: "0px -4px 24px 0px rgba(28, 28, 34, 0.10)",
        pin01: "0px 0px 24px 0px rgba(28, 28, 34, 0.25)",
        pin02: "0px 4px 8px 0px rgba(28, 28, 34, 0.15)",
        list: "0px 0px 16px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
