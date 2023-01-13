import Image from "next/image";
import styles from "/styles/Cart.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store/store";
import { CartItem } from "../components/ui";
import Layout from "../components/layouts/DefaultLayout";

const Cart = () => {
    const products = useSelector((state: RootState) => state.products);
    const cart = useSelector((state: RootState) => state.cart);
    const router = useRouter();
    const [ cartItems, setCartItems ] = useState<any[]>([]);
    const [ cartTotal, setCartTotal ] = useState<any>(0);

    useEffect(() => {
        getCartItems();
        getCartTotal();
    }, [cartItems])

    const getCartTotal = () => {
        let total = 0;
        cartItems.forEach((item: any) => {
            total += item.price * item.quantity
        });
        setCartTotal(total.toFixed(2));
    }

    const getCartItems = async () => {
        let cartItems = await products.map((product) => {
            let cartItemIDs = cart.map((item) => item.id);
            if (cartItemIDs.indexOf(product.id) !== -1) {
                return {
                    ...product, 
                    quantity: cart[cartItemIDs.indexOf(product.id)].quantity
                };
            }
        });
        // console.log('Cart Items', cartItems.filter((item) => !!item));
        setCartItems(cartItems.filter((item) => !!item));
    }
    return (
        <Layout>
            <div className={styles.cart}>
                <div className={styles.cart__itemsSection}>
                    <h1 className={styles.sectionTitle}>
                        Shopping Cart
                    </h1>
                    <div className={styles.cartItem}>
                        { cartItems.map((item, index) => {
                            // console.log('Item', item);
                            return (
                                <div key={`cartItem-${item.id}`}>
                                    <CartItem 
                                        item={item} 
                                        index={index} 
                                        onPriceChange={(data: {
                                            priceChange: number,
                                            changeType: string
                                        }) => {
                                            console.log('Price changed', data);
                                            let total = Number(cartTotal)
                                            if (data.changeType) {
                                                data.changeType === 'positive' ?
                                                total += data.priceChange :
                                                data.changeType === 'negative' ?
                                                total -= data.priceChange :
                                                getCartTotal()
                                            }
                                            setCartTotal(total)
                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className="mt-12">
                        <div className={styles.cart__subTotalSection}>
                            <div className={styles.cart__subTotalSectionDivider}></div>
                            <div className="col-span-2">
                                <button 
                                    className={styles.cart__continueShoppingButton}
                                    onClick={() => router.push('/')}
                                >
                                    Continue Shopping
                                </button>
                            </div>
                            <div className={styles.cart__subTotalSectionDivider2}></div>
                            <div className={styles.cart__subTotal}>
                                <p className={styles.subTotalText}>SubTotal:</p>
                            {/* </div> */}
                            {/* <div className="col-span-3 md:col-span-2 text-end pr-0 md:pr-12"> */}
                                <p className={styles.boldText}>{ cartTotal } USD</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardSection}>
                    <h1 className={styles.sectionTitle}>
                        Card Details
                    </h1>
                    <div className={styles.card__formWrapper}>
                        <form 
                            className={styles.card__form}
                            onSubmit={(event) => {
                                event.preventDefault();
                            }}
                        >
                            <div className={styles.card__formGroup}>
                                <label htmlFor="card-name">Name on Card</label>
                                <input 
                                    id="card-name"
                                    className={styles.card__input}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className={styles.card__formGroup}>
                                <label htmlFor="card-number">Card Number</label>
                                <input 
                                    id="card-number"
                                    className={styles.card__input}
                                    placeholder="**** **** **** **** ****"
                                />
                            </div>
                            <div className={styles.card__cvvSection}>
                                <div className="col-span-1">
                                    <div className={styles.card__formGroup}>
                                        <label htmlFor="valid-date">Exp</label>
                                        <select 
                                            id="valid-date"
                                            defaultValue={'MM'}
                                            className={styles.card__input}
                                        >
                                            <option value="MM">MM</option>
                                            {[1,2,3,4,5,6,7,8,9,10,11,12].map((value, index) => {
                                                return (
                                                    <option key={`month-${value}`} value={index + 1}>{ value }</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className={styles.card__formGroup}>
                                        <label htmlFor="valid-year" className="text-white">Exp</label>
                                        <select 
                                            id="valid-year"
                                            defaultValue={'YYYY'}
                                            className={styles.card__input}
                                        >
                                            <option value="YYYY">YYYY</option>
                                            {[2023,2024,2025].map((value, index) => {
                                                return (
                                                    <option key={`year-${value}`} value={index + 1}>{ value }</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className={styles.card__formGroup}>
                                        <label htmlFor="cvv">CVV</label>
                                        <input 
                                            id="cvv"
                                            className={styles.card__input}
                                            placeholder="***"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className={styles.card__checkoutButton}
                            >Checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart;