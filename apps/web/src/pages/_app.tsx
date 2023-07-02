import '@note/component/theme/global.css'
import '@note/component/theme/theme.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
