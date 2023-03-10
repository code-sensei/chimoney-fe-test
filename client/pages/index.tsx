import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { initiateProducts } from '../app/store/slices/productsSlice'
import { useRouter } from 'next/router'
import { CartState, setCart } from '../app/store/slices/cartSlice'
import { getProductsFromAPI } from '../app/functions/products'
import { PageLoader } from '../components/ui'
import Layout from '../components/layouts/DefaultLayout'

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getProductsFromAPI()
      .then(response => {
        let products = response.data.benefitsList.filter((item: any) => item.type === "Products");
        // console.log('Products', products);
        dispatch(initiateProducts(products));
        initCartItems(products);
        router.push('/cart');
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.error(err);
      });
  }, [])

  const initCartItems = (products: any) => {
      let cartItems: CartState[] = products.slice(0,3).map((item: any) => ({
          id: item.id,
          quantity: 1
      }))
      dispatch(setCart(cartItems))
  }

  return (
    <Layout>
      <PageLoader
        show={isLoading}
      ></PageLoader>
    </Layout>
  )
}

export default Home;