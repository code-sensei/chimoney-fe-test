import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initiateProducts } from '../app/store/slices/productsSlice'
import { RootState } from '../app/store/store'
import { useRouter } from 'next/router'
import { CartState, setCart } from '../app/store/slices/cartSlice'
import { getProductsFromAPI } from '../app/functions/products'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    getProductsFromAPI()
      .then(response => {
        let products = response.data.benefitsList.filter((item: any) => item.type === "Products");
        console.log('Products', products);
        dispatch(initiateProducts(products));
        initCartItems(products);
        router.push('/cart');
      })
      .catch(err => console.error(err));
  }, [])

  const initCartItems = (products: any) => {
      let cartItems: CartState[] = products.slice(0,3).map((item: any) => ({
          id: item.id,
          quantity: 1
      }))
      dispatch(setCart(cartItems))
  }

  return (
    <>
      
    </>
  )
}
