import Image from 'next/image'
import styles from './PageLoader.module.css';

const PageLoader = ({...props}) => {

    const {
        show = false
    } = props;

    return (
        <div className={show ? styles.show : 'wrapper'}>
            <Image
                height={80}
                width={200}
                alt={'Chimoney logo'}
                src={'images/chimoney-logo.svg'}
                className="animate-pulse mb-4"
                loading={'eager'}
            />
            {/* <p className="text-xl text-primary font-semibold">Loading...</p> */}
        </div>
    )
}

export default PageLoader;