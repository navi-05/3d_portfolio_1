import React, { useState } from 'react'

import WebDesign from './WebDesign'
import Development from './Development'
import ProductDesign from './ProductDesign'
import styled from 'styled-components'

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`

const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.div`
  font-size: 90px;
  font-weight: bold;
  cursor-pointer;
  color: transparent;
  -webkit-text-stroke: .5px lightgray;
  position: relative;

  
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    --webkit-text-stroke: 0;
  }

  ::after {
    content: "${(props)=>props.text}";
    position: absolute;
    inset: 0;
    color: var(--pink-color);
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  } 

  &:hover {
    ::after {
      -webkit-text-stroke: 0;
      animation: moveText 500ms linear both;

      @keyframes moveText {
        to{
          width: 100%;
        }
      }
    }
  }
`

const Right = styled.div`
  flex: 1;
`

const Works = () => {
  const [work, setWork] = useState('Web Design')
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item, i) => (
              <ListItem key={i} text={item} onClick={() => setWork(item)}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
         {work === 'Web Design' ? <WebDesign /> : work === 'Development' ? <Development /> : <ProductDesign />}
        </Right>
      </Container>
    </Section>
  )
}

export default Works