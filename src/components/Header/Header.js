import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from "../../context/AuthProvider";
import { UserContext } from "../../context/UserProvider";
import logo from '../../assets/images/vetfest-logo.png'
import userIcon from '../../assets/icons/avatar-icon.svg'
import {Profile} from '../Profile'
import {IoReturnDownBackOutline} from 'react-icons/io5'
import { Link, useHistory } from 'react-router-dom';

const HeaderContainer = styled.div`
    position: relative;
    height: 88px;
    padding: 20px;
    box-shadow:
    inset 0 -3em 3em rgba(0,0,0,0.1),
          0 0  0 2px rgb(29, 38, 40),
          0.3em 0.3em 1em rgba(0,0,0,0.4);
    

    & > .exit-icon {
        position: absolute;
        top: 32px;
        left: 12px;
        width: 40px;
    }

    & > .header-logo {
        position: absolute;
        top: 32px;
        left: calc(50% - 160px/2);
        width: 160px;
    }

    & > .avatar-icon {
        position: absolute;
        top: 32px;
        right: 12px;
        width: 40px;
        border-radius: 50%;
    }


`       
const SideNav = styled.div`
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;

    & > .sideNavLink {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    & > .sideNavLink:hover {
        color: #f1f1f1;
    }

    & > #closeBtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
        cursor: pointer;
    }

    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sideNavLink {font-size: 18px;}
    }
`


export default function Header() {
    
    const { logout } = useContext(AuthContext);
    const {user}=useContext(UserContext);
    const [showProfile, setShowProfile] = useState(false)
    const handleClick = ()=>{
        setShowProfile((prev)=>!prev)
    }
    const [sideToggle, setSideToggle] = useState(true)

    const handleSideBarToggle = () => {
        setSideToggle(prevState => !prevState)
        console.log(sideToggle)
    }

    const history = useHistory()
    return (
        <HeaderContainer>
            { 
                sideToggle ?
                <div style={{alignContent: 'center', justifyContent: 'center'}}>
                    <IoReturnDownBackOutline 
                        style={{
                            boxSizing: 'border-box', 
                            width: '35px', 
                            height: '35px', 
                            cursor: 'pointer'
                        }}
                        onClick={() => history.goBack()} 
                    /> 
                            <span 
                                style={{fontSize:'30px',cursor:'pointer', padding: '10px'}} 
                                onClick={handleSideBarToggle}
                            >
                                &#9776; open
                            </span>
                </div>
                :
                <SideNav id='mySideNav'>
                    <a alt="close" id="closebtn" onClick={handleSideBarToggle}>&times;</a>
                    <a href='#' className='sideNavLink'>Test</a>
                    <a href='#' className='sideNavLink'>Test</a>
                    <a href='#' className='sideNavLink'>Test</a>
                </SideNav>
            }
            <Link className={'header-logo'} to='/'>
                <img 
                    src={logo} 
                    alt={'OP Veteran VetFest logo.'} 
                />
            </Link>
            <img 
                src={user.userImg === "" ? userIcon : user.userImg} 
                alt={'User is logged in.'} 
                className={'avatar-icon'} 
                onClick={handleClick}
            />
            {showProfile ? <Profile/> : <></>}
        </HeaderContainer>
    )
}

