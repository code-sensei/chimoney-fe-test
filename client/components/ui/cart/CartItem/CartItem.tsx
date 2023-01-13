import ModalContainer from "../../ModalContainer/ModalContainer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItemQuantity } from "../../../../app/store/slices/cartSlice";
import { successToast } from "../../../../app/toast/toast";
import { CloseIcon } from "../../../icons/index";
import CartProductDescription from "../CartProductDescription/CartProductDescription";
import CartProductImage from "../CartProductImage/CartProductImage";
import styles from "./CartItem.module.css"

const CartItem = ({...props}) => {

    const {
        item,
        index,
        onPriceChange
    } = props;

    const dispatch = useDispatch();
    const [ 
        showDeleteConfirmationModal, 
        setShowDeleteConfirmationModal 
    ] = useState<boolean>(false)

    const handlePriceChanged = (data: any) => {
        if (onPriceChange) {
            onPriceChange({
                changeType: data.changeType,
                priceChange: data.priceChange
            })
        }
    }

    const handleRemoveItem = () => {
        // console.log('Item', item);
        dispatch(removeItem({
            id: item.id
        }));
    }
    return (
        <>
            <div className={styles.cartItem}>
                <div 
                    className={styles.cart__closeIcon}
                    onClick={() => setShowDeleteConfirmationModal(true)}
                >
                    <CloseIcon 
                        className={'hover:cursor-pointer hover:text-red-500'} 
                    />
                </div>
                <div className={styles.cart__productImage}>
                    <CartProductImage 
                        url={item.images[0]} 
                    />
                </div>
                <div className={styles.cart__productDescription}>
                    <CartProductDescription
                        product={item}
                        onQtyChanged={
                            async (data: {
                                quantity: number, 
                                id: number,
                                newPrice: number,
                                priceChange: number,
                                changeType: string
                            }) => {
                                // console.log('New Qty', data);
                                await dispatch(updateItemQuantity({
                                    ...data,
                                    index
                                }))
                                handlePriceChanged(data);
                                if (data.quantity === 0) setShowDeleteConfirmationModal(true);
                                successToast(`${item.name} quantity updated`);
                            }
                        }
                    />
                </div>
            </div>
            <ModalContainer
                show={showDeleteConfirmationModal}
                message="Remove Cart Item"
                subMessage={`Are you sure you want to remove "${item.name}" from your cart?`}
                closed={(event: any) => (event ? setShowDeleteConfirmationModal(false) : null)}
            >
                <div className="w-full text-center flex flex-row gap-4 mt-6">
                    <button
                        className="w-1/2 sm:w-1/2 rounded-lg h-12 bg-danger"
                        onClick={handleRemoveItem}
                    >
                        Yes
                    </button>
                    <button
                        className="w-1/2 sm:w-1/2 rounded-lg h-12 bg-transparent text-primary font-semibold"
                        onClick={(event) => {
                            event.preventDefault();
                            handlePriceChanged({
                                priceChange: item.price,
                                changeType: 'negative'
                            })
                            setShowDeleteConfirmationModal(false);
                        }}
                    >
                        No, go back
                    </button>
                </div>
            </ModalContainer>
        </>
    )   
}

export default CartItem;