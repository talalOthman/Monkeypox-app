import Link from 'next/link';
import Layout from './components/layout';
// import styles from '../styles/positive.module.css'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneFlip, faStethoscope, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'

export default function PositiveMonkeyBoxPage() {
    const router = useRouter()
    const redirectHome = () => {
        router.push('/')
    }
    return (
        <div className={styles.positiveContent}>
            <div className={styles.positiveCard}>
                <div className={styles.positiveSymbolContainer}>
                    <FontAwesomeIcon
                        icon={faWarning}
                        style={{ fontSize: 250 }} />
                    <h1 className={styles.positiveNameItem}>Potential Monkeypox Risk</h1>
                </div>
                <div className={styles.positiveLowerSection}>
                    <div className={styles.positiveDetailsContainer}>
                        <a href='https://www.cdc.gov/poxvirus/monkeypox/symptoms/index.html'>
                            <div className={styles.positiveSymptomsContainer}>
                                <FontAwesomeIcon
                                    icon={faStethoscope}
                                    style={{ fontSize: 50 }} />
                                <h1 className={styles.positiveSymptomsItem}>Symptoms</h1>
                            </div>
                        </a>

                        <a href='https://northeastlondon.icb.nhs.uk/news/monkeypox-helpline'>
                            <div className={styles.positiveContactsContainer}>
                                <FontAwesomeIcon
                                    icon={faPhoneFlip}
                                    style={{ fontSize: 50 }} />
                                <h1 className={styles.positiveContactsItem}>Helpline</h1>
                            </div>
                        </a>
                    </div>
                    <button className={styles.positiveButtonItem} onClick={redirectHome}>Home</button>
                </div>

            </div>
        </div>
    )
}