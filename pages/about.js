import Link from 'next/link';
import Layout from './components/layout';
// import styles from '../styles/about.module.css'
import styles from '../styles/Home.module.css'
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
            <div className={styles.aboutContent}>
                <div className={styles.aboutCard}>
                    <div className={styles.aboutImageContainer}>
                        <div className={styles.aboutImageItem}>
                            <Image
                                src="/images/Talal.jpg"
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className={styles.aboutImageItem}
                            />
                        </div>
                        <h1 className={styles.aboutNameItem}>Talal Al-Ahdal</h1>
                    </div>
                    <div className={styles.aboutSocialMediaContainer}>
                        <Link href="https://www.linkedin.com/in/talalothman/">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                style={{ fontSize: 25 }}
                                className={styles.aboutNavbarLogoItem}
                            /></Link>

                        <Link href="https://talal-portfolio.herokuapp.com">
                            <FontAwesomeIcon
                                icon={faGlobe}
                                style={{ fontSize: 25 }}
                                className={styles.aboutNavbarLogoItem}
                            /></Link>

                        <Link href="https://github.com/talalOthman" >
                            <FontAwesomeIcon
                                icon={faGithub}
                                style={{ fontSize: 25 }}
                                className={styles.aboutNavbarLogoItem}
                            /></Link>
                    </div>
                    <div className={styles.aboutDonationItem}>
                        <Link href="https://www.buymeacoffee.com/talalOthman">
                        <Image
                            src="/images/buymecoffe.jpeg"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            className={styles.aboutDonationItem}
                        />
                        </Link>
                    </div>
                </div>
            </div>
        // </Layout>
    )
}
