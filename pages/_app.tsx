import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../app/store/store'
import { Provider } from 'react-redux'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    getProductsFromAPI();
  }, [])

  const getProductsFromAPI = () => {
    const headers = new Headers();
    headers.append('accept', 'application/json');
    headers.append('X-API-KEY', String(process.env.NEXT_PUBLIC_CHIMONEY_API_KEY))
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     'X-API-KEY': process.env.NEXT_PUBLIC_CHIMONEY_API_KEY?.toString()
    //   }
    // };
    
    fetch('https://api.chimoney.io/v0.2/info/assets', {
      method: 'GET',
      headers: headers
    })
      .then(response => response.json())
      .then(response => {
        let products = response.data.benefitsList.filter((item: any) => item.type === "Products");
        console.log('Products', products);
      })
      .catch(err => console.error(err));
  }
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
