import merge from 'deepmerge'
import theme from '@theme-ui/preset-tailwind'
import colors from './colors.js'
import styles from './styles.js'

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray

export default merge(
  theme,
  {
    colors,
    styles,
    fonts: {
      // body:
      //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'Roboto, sans-serif',
      monospace: 'Menlo, monospace',
    },
    cards: {
      ul: {
        listStyle: `none`,
        display: [`block`, `flex`],
        margin: [`0`, `0 -16px`],
        p: 0,
        m: 0,
      },
      li: {
        bg: `Menu`,
        boxShadow: `default`,
        borderRadius: `sm`,
        // border: `1px solid rgba(34,36,38,.15)`,
        textAlign: `center`,
        fontSize: `1`,
        mx: [0, 3],
        mb: 4,
        mt: 2,
        p: 3,
        borderTop: `2px solid ${colors.brand}`,
        width: `100%`,
      },
    },
    layout: {
      container: {
        width: [`100%`, `90%`],
      },
    },
    sizes: {
      container: 1168,
    },
    text: {
      heading: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
      },
    },
    messages: {
      error: {
        borderRadius: `sm`,
        bg: `red.1`,
        // border: `1px solid ${tailwind.colors.red[8]}`,
        boxShadow: (t) =>
          `inset 0 0 0 1px ${t.colors.red[8]}, 0 0 0 0 transparent`,
        opacity: 0.7,
        color: `red.8`,
        p: 3,
        my: 3,
        fontWeight: `medium`,
        display: `flex`,
        width: `100%`,
        alignItems: `center`,
      },
      success: {
        borderRadius: `sm`,
        bg: `green.1`,
        // border: `1px solid ${tailwind.colors.green[8]}`,
        boxShadow: (t) =>
          `inset 0 0 0 1px ${t.colors.green[8]}, 0 0 0 0 transparent`,
        opacity: 0.7,
        color: `green.8`,
        p: 3,
        my: 3,
        fontWeight: `medium`,
        display: `flex`,
        width: `100%`,
        alignItems: `center`,
      },
    },
  },
  { arrayMerge: overwriteMerge }
)
