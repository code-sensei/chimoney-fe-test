import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RootState, store } from '../app/store/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { initiateProducts } from '../app/store/slices/productsSlice'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
