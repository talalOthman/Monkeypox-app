import Link from 'next/link';
import Layout from './components/layout';
// import styles from '../styles/index.module.css'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'



export default function Home() {
    const router = useRouter()
    
    const redirectUploadImage = () =>{
        router.push('/upload-image')
    }
    return (
        // <Layout props={0x249aaa}>
        // <Background props={0x249aaa}>
            <div className={styles.indexContentContainer}>
                <div className={styles.indexTitleContainer}>
                    <h1 className={styles.indexTitleItem}>Monkeypox Detector</h1>
                    <p className={styles.indexSubTitleItem}>An efficent way to discover monkeypox</p>
                </div>

                <div className={styles.indexButtonContainer}>
                    <button onClick={redirectUploadImage} className={styles.indexButtonItem}>Start</button>
                </div>
            </div>
            // </Background>
        // </Layout>
    )
}
