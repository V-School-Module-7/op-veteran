import React from 'react'
import styled from 'styled-components'
import { setStyle } from './utils'

const StyledButton = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  cursor: pointer;
  /* Primary/White */
  grid-column: ${(props) => (props.column ? props.column : null)};
  grid-row: ${(props) => (props.row ? props.row : null)};
  box-sizing: border-box;
  height: 40px;
  line-height: 24px;
  letter-spacing: 0.25px;
  margin: 8px;
  margin-bottom: 15px;
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  box-shadow: ${(props) => props.boxShadow};
  // box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
  // border: 2px solid #618572;
  border: ${(props) => props.border};
  border-radius: 50px;
  outline: none;
  &:hover {
    background-color: ${(props) => props.hoverBackground};
    transform: translateY(-3px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
  &:active {
    background: ${(props) => props.activeBackground};
    border: ${(props) => props.activeBorder};
    transform: translateY(-1px);
  }
`

export default function Button(props) {
  const { buttonText, buttonStyle, disabled, ...buttonProps } = props
  const {
    background,
    border,
    fontColor,
    hoverBackground,
    activeBackground,
    activeBorder,
    borderRadius,
    width,
  } = setStyle(buttonStyle)
  console.log(props)
  return (
    <StyledButton
      // className={className}
      background={background}
      border={border}
      borderRadius={borderRadius}
      color={fontColor}
      hoverBackground={hoverBackground}
      activeBackground={activeBackground}
      activeBorder={activeBorder}
      disabled={disabled ? disabled : false}
      width = {width}
      {...buttonProps}
    >
      {buttonText}
    </StyledButton>
  )
}
