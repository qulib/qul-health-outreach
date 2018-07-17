import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Open Sans Pro',
      styles: ['300', '400', '400i', '700'],
    },
  ],
  headerFontFamily: ["Open Sans", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  headerWeight: '300',
  bodyWeight: 400,
  boldWeight: 700,
});

export const { rhythm, scale } = typography
export default typography
