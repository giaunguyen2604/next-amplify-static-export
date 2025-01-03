/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
	darkMode: ["class"],
	content: [
	  "'./pages/**/*.{ts,tsx}'",
	  "'./components/**/*.{ts,tsx}'",
	  "'./app/**/*.{ts,tsx}'",
	  "'./src/**/*.{ts,tsx}'",
	  ],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		colors: {
		  navy: "rgb(var(--color-navy) / <alpha-value>)",
		  "royal-blue": "rgb(var(--color-royal-blue) / <alpha-value>)",
		  "sky-blue": "rgb(var(--color-sky-blue) / <alpha-value>)",
		  "powder-blue": "rgb(var(--color-powder-blue) / <alpha-value>)",
		},
		keyframes: {
		  "accordion-down": {
			from: { height: 0 },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: 0 },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }
  
  