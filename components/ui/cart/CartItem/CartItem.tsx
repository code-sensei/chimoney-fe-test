import { CloseIcon } from "../../../icons";
import CartProductDescription from "../CartProductDescription/CartProductDescription";
import CartProductImage from "../CartProductImage/CartProductImage";
import styles from "./CartItem.module.css"

function CartItem() {
    return (
        <>
            <div className={styles.cartItem}>
                <div className={styles.cart__closeIcon}>
                    <CloseIcon className={'hover:cursor-pointer'} />
                </div>
                <div className={styles.cart__productImage}>
                    <CartProductImage />
                </div>
                <div className={styles.cart__productDescription}>
                    <CartProductDescription />
                </div>
            </div>
        </>
    )   
}

export default CartItem;