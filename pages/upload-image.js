import Image from 'next/image'
import styles from '../styles/upload-image.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router'
import Layout from './components/layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  const [image, setImage] = useState([])
  const router = useRouter()

  const uploadToClient = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      // setImage(i);
      const data1 = i

      const body = new FormData()
      body.append("uploaded_file", data1)
      const response = await fetch("https://monkeypox-detector-api.herokuapp.com/predict", {
        method: "POST",
        body
      })

      const finalData = await response.json()
      // console.log(finalData.prediction)

      // router.push(
      //   { pathname: "/submit-image", query: { name: finalData.prediction } },
      //   "/submit-image"
      // );

      if (finalData.prediction == "Monkeypox") {
        router.push('/positive-monkeybox')
      } else {
        router.push('/negative-monkeybox')
      }
    }
  };


  // const submitImage = async (event) => {
  //   const body = new FormData()
  //   body.append("uploaded_file", image)
  //   const response = await fetch("http://127.0.0.1:8000/predict", {
  //     method: "POST",
  //     body
  //   })

  //   const data = await response.json()

  //   console.log(data.prediction)

  //   if (data.prediction == "Monkeypox") {
  //     router.push('/positive-monkeybox')
  //   } else {
  //     router.push('/negative-monkeybox')
  //   }

  // }


  return (
    // <Layout props={0x249aaa}>
    <>
      {/* <h1>MonkeyBox App</h1>
      <h4>Upload Image</h4>
      <input type="file" name="myImage" onChange={uploadToClient} />
      <button
        className="btn btn-primary"
        type="submit"
        onClick={submitImage}
      >
        Submit Image
      </button> */}

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <FontAwesomeIcon
            icon={faCloudUploadAlt}
            style={{ fontSize: 200 }} />
          <input id="uploadImage" className={styles.inputItem} accept="image/x-png,image/gif,image/jpeg" type="file" onChange={uploadToClient}></input>

          <label htmlFor="uploadImage" className={styles.buttonItem}>
            Upload Image
          </label>


        </div>
      </div>
    </>
    // </Layout>
  )
}
