import styled from "styled-components"
import React, {Component} from "react"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MainContainer, WelcomeText, InputContainer, ButtonContainer, LoginWith, HorizontalRule, IconsContainer, ForgotPassword} from "./LoginElements";
import Input from "./InputLogin";
import Button from "./Button";
import Icon from "./IconElement";

import styles from './Style.css';

const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

   

class Login extends Component {
 
    render()
    {
      
    return (
        <div className={styles.tt}>
        <MainContainer >
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer>
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
            <Button content="Sign Up" />
        </ButtonContainer>
        <LoginWith>OR LOGIN WITH</LoginWith>
        <HorizontalRule />
        <IconsContainer>
            <FaFacebookF />
            <FaInstagram />    
            <FaTwitter />
        </IconsContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
    </div>
        
    )
    }
}

export default Login
