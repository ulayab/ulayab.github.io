import Typography from "typography"

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Apple SD Gothic Neo', 'Nanum Gothic'],
  bodyFontFamily: ['Apple SD Gothic Neo', 'Nanum Gothic'],
	overrideStyles: () => ({
		// move global styling to layout.js
		h1: {
			margin: 0,
			// fontFamily: ['Montserrat', 'sans-serif'].join(','),
		},
	})
});

export default typography