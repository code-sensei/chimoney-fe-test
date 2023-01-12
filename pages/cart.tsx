import Image from "next/image";
import { CartItem } from "../components/ui";

function Cart() {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 justify-start items-start h-screen">
                <div className="col-span-2 bg-primary text-white h-full overflow-y-scroll p-24">
                    <h1 className="font-bold text-white text-3xl">
                        Shopping Cart
                    </h1>
                    <div className="mt-16 max-h-[70%] overflow-y-auto">
                        { [1,1,1,1,1].map(() => {
                            return (
                                <>
                                    <CartItem />
                                </>
                            )
                        })}
                    </div>
                    <div className="mt-12">
                        <div className="grid grid-cols-5">
                            <div className="col-span-1"></div>
                            <div className="col-span-2">
                                <p className="thin">Continue Shopping</p>
                            </div>
                            <div className="col-span-1">
                                <p className="font-bold text-xl">SubTotal:</p>
                            </div>
                            <div className="col-span-1">
                                <p className="font-bold text-xl">$20,000</p>
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
                                            className="bg-transparent border-2 w-full border-primary rounded-lg px-4 py-2 min-h-12"
                                        >
                                            <option value="MM" selected>MM</option>
                                            {[1,2,3,4,5,6,7,8,9,10,11,12].map((value, index) => {
                                                return (
                                                    <>
                                                        <option value={index + 1}>{ value }</option>
                                                    </>
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
                                            className="bg-transparent border-2 w-full border-primary rounded-lg px-4 py-2 min-h-12"
                                        >
                                            <option value="YYYY" selected>YYYY</option>
                                            {[2023,2024,2025].map((value, index) => {
                                                return (
                                                    <>
                                                        <option value={index + 1}>{ value }</option>
                                                    </>
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