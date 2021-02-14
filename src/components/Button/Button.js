import React from 'react'
import styled from 'styled-components'
import { setStyle } from './utils'

const StyledButton = styled.button`
    width: 136px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.25px;
    color: ${props => props.color};
    background: ${props => props.background};
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    border: 2px solid #618572;
    border-radius: 2px;
    outline: none;
`

export default function Button(props) {
    const { buttonText, buttonStyle } = props
    const { background, border, fontColor } = setStyle(buttonStyle)

    return (
        <StyledButton
            background={background} 
            border={border} 
            color={fontColor}
        >
            {buttonText}
        </StyledButton>
    )
}