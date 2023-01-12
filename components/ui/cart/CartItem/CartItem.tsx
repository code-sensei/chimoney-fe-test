import { useDispatch } from "react-redux";
import { updateItemQuantity } from "../../../../app/store/slices/cartSlice";
import { CloseIcon } from "../../../icons";
import CartProductDescription from "../CartProductDescription/CartProductDescription";
import CartProductImage from "../CartProductImage/CartProductImage";
import styles from "./CartItem.module.css"

function CartItem({...props}) {

    const {
        item,
        index
    } = props;

    const dispatch = useDispatch();
    return (
        <>
            <div className={styles.cartItem}>
                <div className={styles.cart__closeIcon}>
                    <CloseIcon className={'hover:cursor-pointer'} />
                </div>
                <div className={styles.cart__productImage}>
                    <CartProductImage 
                        url={item.images[0]} 
                    />
                </div>
                <div className={styles.cart__productDescription}>
                    <CartProductDescription
                        product={item}
                        onQtyChanged={(data: {quantity: number, id: number}) => {
                            console.log('New Qty', data);
                            dispatch(updateItemQuantity({
                                ...data,
                                index
                            }))
                        }}
                    />
                </div>
            </div>
        </>
    )   
}

export default CartItem;