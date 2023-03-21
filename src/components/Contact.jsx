import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'

import Map from './Map'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

const Title = styled.h1`
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`

const Input = styled.input`
  padding: 20px;
  background-color: lightgray;
  border-radius: 5px;
  border: none;
`

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: lightgray;
`

const Button = styled.button`
  background-color: var(--pink-color);
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
  border-radius: 5px;
  border: none;
`

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Contact = () => {
  
  const ref = useRef();
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_8pplmsk", "template_uxcswvl", ref.current, "1pC0zd1L4FHoCgohc")
      .then((result) => {
        setSuccess(true)
      }, (error) => {
        console.log(error);
        setSuccess(false)
      })
  }
  
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' name="name" />
            <Input placeholder='Email' name="email" />
            <TextArea placeholder='Write your thoughts' rows={10} name="message"/>
            <Button type="submit">Send</Button>
            {success && 
              "Your message has been sent. We'll get back to you soon :)"
            }
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact