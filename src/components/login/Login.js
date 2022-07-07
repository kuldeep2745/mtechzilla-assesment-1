import React from 'react'

import LoginCss from "./login.module.css"
import Profile from "../../assets/profilepic.jpg"
import { auth, provider } from '../../firebase'



const Login = () => {
function googleSignUp(){
  auth.signInWithPopup(provider);

}
  return (
    <>
      <div className={LoginCss.back}>
        <div className={LoginCss.logoContainer}>
          <h2 className={LoginCss.assesmentHead}>MtechZilla Assesment-1</h2>
          <img className={LoginCss.assesmentLogo} src={"https://mtechzilla.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75"} alt="pic" />
        </div>
        <div className={LoginCss.credits}>
          <h2 className={LoginCss.creditText}>Created By <br /> Kuldeep Rathore</h2>
          <img className={LoginCss.creditLogo} src={Profile} alt="logo" />
        </div>
        <div className={LoginCss.containerOverlay}>
          <div className={LoginCss.loginContainer}>
            <div className={LoginCss.loginUi}></div>
            <div className={LoginCss.inputDiv}>
              <h2 className={LoginCss.inputHead}>Login With Google</h2>

            <button onClick={googleSignUp} className={LoginCss.loginButton}>Login With Google</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
