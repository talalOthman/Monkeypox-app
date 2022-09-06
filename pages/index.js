import Link from 'next/link';
import Layout from './components/layout';
import styles from '../styles/index.module.css'
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
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.titleItem}>Monkeypox Detector</h1>
                    <p className={styles.subTitleItem}>An efficent way to discover monkeypox</p>
                </div>

                <div className={styles.buttonContainer}>
                    <button onClick={redirectUploadImage} className={styles.buttonItem}>Start</button>
                </div>
            </div>
            // </Background>
        // </Layout>
    )
}
