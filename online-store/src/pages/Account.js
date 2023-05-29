import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 54px;
  font-weight: 300;
`;

const Font= styled.p`
  font-size: 34px;
  font-weight: 300;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;


const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
<div>
      <Navbar/>
    <Container>
    <Title>Account Page</Title>
      <Font> User Email: {user && user.email} </Font>
    <Button  onClick={handleLogout}>
         Logout
    </Button>
   </Container>
    <Footer/>
  </div>
  );
};

export default Account;

