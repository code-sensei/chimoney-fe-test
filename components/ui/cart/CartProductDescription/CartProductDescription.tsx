import { useState, useRef } from "react";
import { MinusIcon, PlusIcon } from "../../../icons";
import styles from "./CartProductDescription.module.css"

function CartProductDescription({...props}) {

    const {
        product,
        onQtyChanged
    } = props;

    const [ quantity, setQuantity ] = useState<number>(product.quantity);
    const quantityInput = useRef<any>();

    const handleQtyChange = (changeType: any) => {
        if (onQtyChanged) {
            // console.log('Ev', event);
            // event.preventDefault();
            onQtyChanged({
                quantity: Number(quantityInput.current.value),
                id: product.id,
                newPrice: Number(quantityInput.current.value) * product.price,
                priceChange: product.price,
                changeType
            });
        } else {
            console.log('Rubbish');
        }
    }

    return (
        <>
            <div className={styles.cart__productDescription}>
                <div className={styles.cart__productTitle}>
                    <p className={styles.cart__productName}>{ product.name }</p>
                    <small className={styles.cart_productID}>#{ product.id }</small>
                </div>
                <div className={styles.cart__action}>
                    <div className={styles.cart__productQty}>
                        <MinusIcon 
                            className="hover:cursor-pointer"
                            onClick={async (event: any) => {
                                event.preventDefault()
                                if (quantity > 0) {
                                    await setQuantity(quantity - 1);
                                    handleQtyChange('negative');
                                }
                            }}
                        />
                        <input 
                            className={styles.cart__productQtyValue} 
                            type={'number'}
                            value={quantity}
                            ref={quantityInput}
                            readOnly
                        />
                        <PlusIcon
                            className="hover:cursor-pointer"
                            onClick={async (event: any) => {
                                event.preventDefault()
                                if (quantity < 99) {
                                    await setQuantity(quantity + 1);
                                    handleQtyChange('positive');
                                }
                            }}
                        />
                    </div>
                </div>
                <div className={styles.cart__price}>
                    <p 
                        className={styles.cart__productPrice}
                    >
                        { (product.price * quantity).toFixed(2) } { product.currency } 
                    </p>
                </div>
            </div>
        </>
    )
}

export default CartProductDescription;