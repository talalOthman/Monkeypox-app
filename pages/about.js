import Link from 'next/link';
import Layout from './components/layout';
import styles from '../styles/about.module.css'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Home() {
    const router = useRouter()

    
    return (
        // <Layout props={0x249aaa}>
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageItem}>
                            <Image
                                src="/images/Talal.jpg"
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className={styles.imageItem}
                            />
                        </div>
                        <h1 className={styles.nameItem}>Talal Al-Ahdal</h1>
                    </div>
                    <div className={styles.socialMediaContainer}>
                        <Link href="https://www.linkedin.com/in/talalothman/">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                style={{ fontSize: 25 }}
                                className={styles.navbarLogoItem}
                            /></Link>

                        <Link href="https://talal-portfolio.herokuapp.com">
                            <FontAwesomeIcon
                                icon={faGlobe}
                                style={{ fontSize: 25 }}
                                className={styles.navbarLogoItem}
                            /></Link>

                        <Link href="https://github.com/talalOthman" >
                            <FontAwesomeIcon
                                icon={faGithub}
                                style={{ fontSize: 25 }}
                                className={styles.navbarLogoItem}
                            /></Link>
                    </div>
                    <div className={styles.donationItem}>
                        <Link href="https://www.buymeacoffee.com/talalOthman">
                        <Image
                            src="/images/buymecoffe.jpeg"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            className={styles.donationItem}
                        />
                        </Link>
                    </div>
                </div>
            </div>
        // </Layout>
    )
}
