import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initiateProducts } from '../app/store/slices/productsSlice'
import { RootState } from '../app/store/store'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const products = useSelector((state: RootState) => state.products.values());
  const dispatch = useDispatch();

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
        dispatch(initiateProducts(products));
      })
      .catch(err => console.error(err));
  }
  return (
    <>
      
    </>
  )
}
