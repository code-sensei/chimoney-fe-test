import { useDispatch } from "react-redux";
import { updateItemQuantity } from "../../../../app/store/slices/cartSlice";
import { successToast } from "../../../../app/toast/toast";
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
                        onQtyChanged={async (data: {quantity: number, id: number}) => {
                            console.log('New Qty', data);
                            await dispatch(updateItemQuantity({
                                ...data,
                                index
                            }))
                            successToast(`${item.name} quantity updated`);
                        }}
                    />
                </div>
            </div>
        </>
    )   
}

export default CartItem;