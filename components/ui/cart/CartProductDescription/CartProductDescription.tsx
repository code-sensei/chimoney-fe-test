import { MinusIcon, PlusIcon } from "../../../icons";
import styles from "./CartProductDescription.module.css"

function CartProductDescription() {
    return (
        <>
            <div className={styles.cart__productDescription}>
                <div className={styles.cart__productTitle}>
                    <p className={styles.cart__productName}>Product 1</p>
                    <small className={styles.cart_productID}>#124254</small>
                </div>
                <div className={styles.cart__action}>
                    <div className={styles.cart__productQty}>
                        <MinusIcon className="hover:cursor-pointer" />
                        <input 
                            className={styles.cart__productQtyValue} 
                            type={'number'}
                            value={1}
                            readOnly
                        />
                        <PlusIcon className="hover:cursor-pointer" />
                    </div>
                </div>
                <div className={styles.cart__action}>
                    <p className={styles.cart__productPrice}>$4,000</p>
                </div>
            </div>
        </>
    )
}

export default CartProductDescription;