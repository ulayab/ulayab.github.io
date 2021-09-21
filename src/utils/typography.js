import Typography from "typography"

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Apple SD Gothic Neo', 'Nanum Gothic'],
  bodyFontFamily: ['Apple SD Gothic Neo', 'Nanum Gothic'],
	overrideStyles: () => ({
		h1: {
			color: '#24292e',
			margin: 0,
			// fontFamily: ['Montserrat', 'sans-serif'].join(','),
		},
		a: {
			color: '#6c7a88',
		}
	})
});

export default typography