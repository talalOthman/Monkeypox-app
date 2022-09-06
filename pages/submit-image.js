import Image from 'next/image'
import styles from '../styles/upload-image.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Layout from './components/layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudUpload, faCloudUploadAlt, faFileImage, faFileUpload, faImagePortrait, faRocket, faShieldVirus, faUpload } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  const router = useRouter()
  const [image, setImage] = useState([])

  useEffect(() => {
    setImage(router.query.name)
  }, [router.query]);


  const submitImage =  (event) => {
    // console.log(image)
    // const body = new FormData()
    // body.append("uploaded_file", image)
    // const response = await fetch("http://127.0.0.1:8000/predict", {
    //   method: "POST",
    //   body
    // })

    // const data = await response.json()

    console.log(image)

    if (image == "Monkeypox") {
      router.push('/positive-monkeybox')
    } else {
      router.push('/negative-monkeybox')
    }

  }


  return (
    // <Layout props={0x249aaa}>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <FontAwesomeIcon
            icon={faCloudUploadAlt}
            style={{ fontSize: 200 }} />

          <button
            type="submit"
            onClick={submitImage}
            className={styles.buttonItem}
          >Start Test</button>


        </div>
      </div>
    // </Layout>
  )
}
