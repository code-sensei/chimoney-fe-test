import styles from "./CartProductImage.module.css"

const CartProductImage = ({...props}) => {

    const {
        url = 'https://picsum.photos/200'
    } = props
    return (
        <>
            <div className={styles.cart__productImage}>
                <img 
                    src={url}
                    alt={'Product Image'}
                    width={150}
                    height={150}
                />
            </div>
        </>
    )
}

export default CartProductImage;