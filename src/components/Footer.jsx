import React, { Component } from 'react'

import styled from 'styled-components';

const Container = styled.div`
    min-height: 40vh;
    padding: 80px 60px;
    background: #000;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    justify-content: center;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
        grid-gap: 20px;
    }
`

const Column = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    max-width: 200px;
    margin: 0 auto;
`

const Title = styled.p`
    color: rgb(9,83,133);
    max-width: 200px;
    text-align: center;
    font-size: 20px;
`

const Link = styled.a`
    color: white;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    max-width: 200px;
    &:hover {
        color: rgb(0,153,255);
        transition: 200ms ease-in;
        text-decoration: none;
    }
`

const Icon = styled.i`
    margin-right: 12px;
    font-size: 18px;
`
export default class Footer extends Component {
  render() {
      return (
        <>
          <Container>
              <Wrapper>
                  <Row>
                      <Column>
                          <Title style={{ fontFamily:"Open Sans, sans-serif"}}>About</Title>
                          <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="/">Home</Link>
                          <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="/products">About Us</Link>
                          <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="/marketing"> Term of Use</Link>
                          <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="/contact">Contact Us</Link>
                        
                          <Link></Link>
                      </Column>
                      <Column>
                            <Title style={{ fontFamily:"Open Sans, sans-serif"}} href="#">Services</Title>
                            <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="#">FL Book Club</Link>
                            <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="#">Marketing</Link>
                            <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="#">Web Dev</Link>
                            <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="#">Speaking</Link>
                        </Column>
                   
                      <Column>
                          <Title style={{ fontFamily:"Open Sans, sans-serif"}}>Social</Title>
                          <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="https://www.youtube.com/channel/UCIKwCc4iCgafjlP_DH3g5EA"><Icon className="fab fa-youtube"/>YouTube</Link>
                          <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="https://twitter.com/taxants"><Icon className="fab fa-twitter"/>Twitter</Link>
                          <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="https://www.facebook.com/taxantsinc?_rdc=1&_rdr"><Icon className="fab fa-facebook"/>Facebook</Link>
                          <Link style={{ fontFamily:"Open Sans, sans-serif"}} href="https://www.instagram.com/taxants/"><Icon className="fab fa-instagram"/>Instagram</Link>
                      </Column>
                  </Row>
              </Wrapper>
          </Container>
           <div className="row">
           <p style={{textAlign:"center", backgroundColor:"#000", color:"#fff", marginTop:"-60px", fontSize:"20px", fontFamily:"Open Sans, sans-serif"}}>
             &copy;{new Date().getFullYear()} Copyright 2020 Taxants All Right Reserved
           </p>
         </div>
         </>
      )
  }
}