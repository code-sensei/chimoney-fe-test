import Image from 'next/image'
import styles from './PageLoader.module.css';

const PageLoader = ({...props}) => {

    const {
        show = false
    } = props;

    return (
        <div className={styles.wrapper}>
            <Image
                height={80}
                width={200}
                alt={'Chimoney logo'}
                src={'images/chimoney-logo.svg'}
                className={show ? styles.show : ''}
                loading={'eager'}
            />
            <p className="text-primary font-semibold">Loading App...</p>
        </div>
    )
}

export default PageLoader;