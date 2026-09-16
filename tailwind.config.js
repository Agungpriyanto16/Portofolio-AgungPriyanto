module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        ink: "#F8FAFC",
        surface: "#FFFFFF",
      },
      boxShadow: {
        glass: "0 4px 24px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.08)",
        glow: "0 8px 32px rgba(99,102,241,0.12)",
      },
      backdropBlur: { xs: "2px" },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
    },
  },
  plugins: [],
};
