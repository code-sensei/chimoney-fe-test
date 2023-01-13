import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store/store";
import { CartItem } from "@components/ui";

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
        <>
            <div className="grid grid-cols-3 gap-4 justify-start items-start h-screen">
                <div className="col-span-2 bg-primary text-white h-full overflow-y-scroll p-24">
                    <h1 className="font-bold text-white text-3xl">
                        Shopping Cart
                    </h1>
                    <div className="mt-16 max-h-[70%] overflow-y-auto">
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
                        <div className="grid grid-cols-6 justify-center items-center">
                            <div className="col-span-1"></div>
                            <div className="col-span-2">
                                <button 
                                    className="text-thin bg-white text-primary rounded-lg"
                                    onClick={() => router.push('/')}
                                >
                                    Continue Shopping
                                </button>
                            </div>
                            <div className="col-span-1">
                                <p className="font-bold text-xl">SubTotal:</p>
                            </div>
                            <div className="col-span-2 text-end pr-12">
                                <p className="font-bold text-xl">{ cartTotal } USD</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 h-full py-24 px-8">
                    <h1 className="font-bold text-primary text-3xl">
                        Card Details
                    </h1>
                    <div className="w-full min-h-[70%] flex flex-col justify-center items-start">
                        <form 
                            className="w-full flex flex-col gap-y-4"
                        >
                            <div className="w-full flex flex-col gap-y-2">
                                <label htmlFor="card-name">Name on Card</label>
                                <input 
                                    id="card-name"
                                    className="bg-transparent border-2 w-full border-primary rounded-lg px-4 py-2 min-h-12"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="w-full flex flex-col gap-y-2">
                                <label htmlFor="card-number">Card Number</label>
                                <input 
                                    id="card-number"
                                    className="bg-transparent border-2 w-full border-primary rounded-lg px-4 py-2 min-h-12"
                                    placeholder="**** **** **** **** ****"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="col-span-1">
                                    <div className="w-full flex flex-col gap-y-2">
                                        <label htmlFor="valid-date">Valid Date</label>
                                        <select 
                                            id="valid-date"
                                            defaultValue={'MM'}
                                            className="bg-transparent border-2 w-full border-primary rounded-lg px-4 py-2 min-h-12"
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
                                    <div className="w-full flex flex-col gap-y-2">
                                        <label htmlFor="valid-year" className="text-white">Valid Year</label>
                                        <select 
                                            id="valid-year"
                                            defaultValue={'YYYY'}
                                            className="bg-transparent border-2 w-full border-primary rounded-lg px-4 py-2 min-h-12"
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
                                    <div className="w-full flex flex-col gap-y-2">
                                        <label htmlFor="cvv">CVV</label>
                                        <input 
                                            id="cvv"
                                            className="bg-transparent border-2 w-full border-primary rounded-lg px-4 py-2 min-h-12"
                                            placeholder="***"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="mt-8 px-6 h-12 text-center w-full rounded-lg font-bold bg-primary text-white"
                            >Checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;