import React from 'react'
import styled, { keyframes } from 'styled-components'
import { MdReport } from 'react-icons/md'
const entrance = keyframes`
    0% {top: -150px;}
    20% {top: 100px;}
    80% {top: 100px;}
    100% {top: -150px;}
`
const MessageContainer = styled.div`
  display: flex;
  top: -100px;
  left: calc(50% - 296px / 2);
  flex-direction: row;
  align-items: flex-start;
  background: #f5f9ff;
  border: 2px solid #4e92f9;
  box-sizing: border-box;
  box-shadow: 0px 8px 10px rgba(84, 84, 84, 0.14),
    0px 3px 14px rgba(84, 84, 84, 0.12), 0px 4px 5px rgba(84, 84, 84, 0.2);
  border-radius: 4px;

  padding: 12px 16px;
  position: fixed;
  width: 296px;
  z-index: 9;
  animation: ${entrance} 4s ease-in;
  /* box-sizing: border-box;
    position: relative;
    width: 328px;
    padding: 8px 16px 8px 16px;
    min-height: 32px;
    background: #FFFFFF;
    border: 2px solid #545454; */
  /* box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2); */
  /* border-radius: 2px; */
  @media only screen and (min-width: 600px) {
    width: 528px;
    left: calc(50% - 528px / 2);
  }
`
const Text = styled.p`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.25px;
  color: #545454;
  // border: 1px dotted blue;
`
const Icon = styled(MdReport)`
  width: 24px;
  height: 24px;
  color: #4e92f9;
  padding: 4px auto;
`

export default function StatusMessage(props) {
  const { message, className } = props

  return (
    <MessageContainer className={className}>
      <Icon />
      <Text>{message}</Text>
    </MessageContainer>
  )
}
