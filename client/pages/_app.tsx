import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RootState, store } from '../app/store/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { initiateProducts } from '../app/store/slices/productsSlice'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Provider store={store}>
          <Toaster />
          <Component {...pageProps} />
      </Provider>
    </AnimatePresence>
  )
}
