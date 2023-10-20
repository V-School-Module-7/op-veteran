// import React, { useState, useContext, useEffect } from 'react'
import React from 'react'
import styled from 'styled-components'

const colors = {
  white: 'ffffff',
  green: '#799C8A',
  red: '#EA7C7C',
  yellow: '#FBBC05',
  blue: '#4E92F9',
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 15px;
  width: ${(props) => props.width};
  //position:sticky;
  bottom: 50px;
  left: 20px;
  margin: auto;
  background: #fff;
  z-index: 88;
  position: absolute;

  //text-shadow: 1px 1px 1px #000;
`
const Item = styled.p`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  //padding: 10px;
  grid-column: 1/2;
  font-size: 0.85em;
  margin-bottom: 8px;
`
const Span = styled.span`
  box-sizing: border-box;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  width: 25px;
  height: 25px;
  border: 1px solid black;
  margin-bottom: 5px;
`

const Legend = (props) => {
  return (
    <Wrapper width='300px'>
      <Item column={'1 / 2'} backgroundColor='#fff' color='#000'>
        Booth size: 10'x10'
      </Item>
      <Item backgroundColor='fff'>Open Booth. Click to Reserve.</Item>
      <Span backgroundColor={colors.green} />
      <Item backgroundColor='fff'>Reserved Booth</Item>
      <Span backgroundColor={colors.white} />
      <Item backgroundColor='fff'>Paladin and Abrams Sponsors</Item>
      <Span backgroundColor={colors.blue} />
      <Item backgroundColor='fff'>Stryker and Bradley Sponsors</Item>
      <Span backgroundColor={colors.red} />
      <Item backgroundColor='fff'>
        Booths with access to power. Additional $50 fee
      </Item>
      <Span backgroundColor={colors.yellow} />
    </Wrapper>
  )
}

export default Legend
