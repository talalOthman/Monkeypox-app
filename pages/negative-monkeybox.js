import Link from 'next/link';
import Layout from './components/layout';
// import styles from '../styles/negative.module.css'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faCheckCircle, faFlagCheckered, faPhoneFlip, faStethoscope, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'

export default function NegativeMonkeyBoxPage() {
    const router = useRouter()
    const redirectHome = () => {
        router.push('/')
    }
    return (
        <div className={styles.negativeContent}>
            <div className={styles.negativeCard}>
                <div className={styles.negativeSymbolContainer}>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ fontSize: 250 }} />
                    <h1 className={styles.negativeNameItem}>No Monkeypox Risk</h1>
                </div>
                <div className={styles.negativeLowerSection}>
                    <div className={styles.negativeDetailsContainer}>
                        <a href='https://www.cdc.gov/poxvirus/monkeypox/symptoms/index.html'>
                            <div className={styles.negativeSymptomsContainer}>
                                <FontAwesomeIcon
                                    icon={faStethoscope}
                                    style={{ fontSize: 50 }} />
                                <h1 className={styles.negativeSymptomsItem}>Symptoms</h1>
                            </div>
                        </a>

                        <a href='https://northeastlondon.icb.nhs.uk/news/monkeypox-helpline'>
                            <div className={styles.negativeContactsContainer}>
                                <FontAwesomeIcon
                                    icon={faPhoneFlip}
                                    style={{ fontSize: 50 }} />
                                <h1 className={styles.negativeContactsItem}>Helpline</h1>
                            </div>
                        </a>
                    </div>
                    <button className={styles.negativeButtonItem} onClick={redirectHome}>Home</button>
                </div>

            </div>
        </div>
    )
}