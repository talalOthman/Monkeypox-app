import Link from 'next/link';
import Layout from './components/layout';
import styles from '../styles/positive.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneFlip, faStethoscope, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'

export default function PositiveMonkeyBoxPage() {
    const router = useRouter()
    const redirectHome = () => {
        router.push('/')
    }
    return (
        <div className={styles.content}>
            <div className={styles.card}>
                <div className={styles.symbolContainer}>
                    <FontAwesomeIcon
                        icon={faWarning}
                        style={{ fontSize: 250 }} />
                    <h1 className={styles.nameItem}>Potential Monkeypox Risk</h1>
                </div>
                <div className={styles.lowerSection}>
                    <div className={styles.detailsContainer}>
                        <a href='https://www.cdc.gov/poxvirus/monkeypox/symptoms/index.html'>
                            <div className={styles.symptomsContainer}>
                                <FontAwesomeIcon
                                    icon={faStethoscope}
                                    style={{ fontSize: 50 }} />
                                <h1 className={styles.symptomsItem}>Symptoms</h1>
                            </div>
                        </a>

                        <a href='https://northeastlondon.icb.nhs.uk/news/monkeypox-helpline'>
                            <div className={styles.contactsContainer}>
                                <FontAwesomeIcon
                                    icon={faPhoneFlip}
                                    style={{ fontSize: 50 }} />
                                <h1 className={styles.contactsItem}>Helpline</h1>
                            </div>
                        </a>
                    </div>
                    <button className={styles.buttonItem} onClick={redirectHome}>Home</button>
                </div>

            </div>
        </div>
    )
}