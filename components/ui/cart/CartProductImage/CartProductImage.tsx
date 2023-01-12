import styles from "./CartProductImage.module.css"

function CartProductImage() {
    return (
        <>
            <div className={styles.cart__productImage}>
                <img 
                    src={'https://picsum.photos/200'}
                    alt={'Product Image'}
                    width={150}
                    height={150}
                />
            </div>
        </>
    )
}

export default CartProductImage;