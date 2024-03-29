import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../context/AuthProvider'
//import { UserContext } from '../../context/UserProvider'
import { VendorContext } from '../../context/VendorProvider'
//import { CanvasContext } from '../../context/CanvasProvider'
import { CartContext } from '../../context/CartProvider'
import logo from '../../assets/images/vetfest-logo.png'
// import userIcon from '../../assets/icons/avatar-icon.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import opveteranLogo from '../../assets/icons/OPVeteranLogo.png'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Profile } from '../Profile'
import StatusMessage from '../../components/StatusMessage'
import { Button } from '../../components/Button'
import { IoChevronBackSharp, IoCloseOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import ToDoList from '../../pages/VendorView/ToDoList'

const HeaderContainer = styled.div`
  position: relative;
  padding: 10px;
  height: 65px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  & > .exit-icon {
    position: absolute;
    top: 32px;
    left: 12px;
    width: 40px;
  }

  & .avatar-icon {
    right: 12px;
    width: 40px;
    border-radius: 50%;
  }
`
const Cart = styled.div`
  margin: 0px 30px 30px 30px;
  border: 1px solid #e6e6e6;
  border-radius: 0.5rem;

  div:last-child {
    border: none;
  }
`
const LocalCart = styled.div`
  p {
    font-weight: bold;
    color: #2980b9;
  }
`
const Head = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  color: #fff;
  background-color: #1a3300;
  padding: 10px;
  width: 100%;
  text-align: center;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom: 1px solid #e6e6e6;
`
// const EmptyCart = styled.p`
//   font-weight: bold;
//   color: #e67e22;
//   padding: 10px;
// `
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;

  p {
    margin: 5px;
  }
`

// const Product = styled.div`
//   display: flex;
//   justify-content: space-between;

//   p {
//     font-weight: bold;
//     color: #16a085;
//   }
// `

// const ProductOptions = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   & > p {
//     font-weight: bold;
//   }
// `

// const TrashButton = styled.a`
//   color: #c0392b;
//   opacity: 0.7;
//   cursor: pointer;
//   font-size: 1.5rem;
//   margin-left: 5px;

//   &:hover {
//     opacity: 1;
//   }
// `
const SideNav = styled.div`
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #004c00;
  overflow-x: hidden;
  transition: 0.5s;
  padding: 30px 0;

  & > .sideNavContainer {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    height: 100%;

    & > .sideNavLinks {
      & > .sideNavLink {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #bababa;
        display: block;
        transition: 0.3s;
        cursor: pointer;
      }

      & > .sideNavLink:hover {
        color: #f1f1f1;
      }
    }
  }

  & > .closeBtn {
    position: absolute;
    top: 0;
    right: 25px;
    padding: 10px;
    font-size: 36px;

    cursor: pointer;
    color: #818181;
  }

  & > .closeBtn:hover {
    color: #f1f1f1;
  }

  & > .logout {
    display: flex;
    height: 1500px;
    align: center;
    justify: center;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    cursor: pointer;
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sideNavLink {
      font-size: 18px;
    }
  }
`

const List = styled.div`
  & a {
    text-decoration: none;
  }
`

const ListItem = styled.li`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
  font-weight: ${(props) => (props.current ? 'bold' : 'normal')};
  z-index: ${(props) => (props.current ? 3 : null)};
  cursor: ${(props) => (props.current ? 'pointer' : null)};
`

const Header2 = styled(ListItem)``

const LogOut = styled.span`
  & > h1 {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    cursor: pointer;
  }
`
// const Paragraph = styled.p``
// const Logo = styled.img`
//   width: 40px;
//   height: 40px;
// `

export default function Header() {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)
  // const { user } = useContext(UserContext)
  // const { cart, changeQuantity, localCart, openCart } = useContext(CartContext)
  const { localCart} = useContext(CartContext)
  // const { currentVendor, updateCurrentVendor } = useContext(VendorContext)
  const { currentVendor } = useContext(VendorContext)
  // const { currentBooth } = useContext(CanvasContext)

  // const [showProfile, setShowProfile] = useState(false)

  // const handleClick = () => {
  //   setShowProfile((prev) => !prev)
  // }

  const [sideToggle, setSideToggle] = useState(true)

  const handleSideBarToggle = () => {
    setSideToggle((prevState) => !prevState)
    console.log(sideToggle)
  }
  // const [info, setInfo] = useState({
  //   organization:
  //     currentVendor !== null ? currentVendor.organization : 'Not registered',
  //   description:
  //     currentVendor !== null ? currentVendor.description : 'Not registered',
  //   logo: currentVendor !== null ? currentVendor.logo : opveteranLogo,
  //   primaryBooth:
  //     currentVendor !== null ? currentVendor.primaryBooth : 'Not registered',
  //   secondaryBooth:
  //     currentVendor !== null ? currentVendor.secondaryBooth : 'Not registered',
  //   address: currentVendor !== null ? currentVendor.address : 'Not registered',
  //   rep: currentVendor !== null ? currentVendor.rep : 'Not registered',
  //   repEmail:
  //     currentVendor !== null ? currentVendor.repEmail : 'Not registered',
  //   sponsorship:
  //     currentVendor !== null ? currentVendor.sponsorship : 'Not registered',
  // })

  return (
    <HeaderContainer>
      {sideToggle ? (
        <></>
      ) : (
        // Drawer menu -- toggle different component render states. See Vendor component render logic.
        <SideNav id='mySideNav'>
          <span className='closeBtn' alt='close' onClick={handleSideBarToggle}>
            <IoCloseOutline />
          </span>
          {/* The 'Home' link is not working right now */}
          <div className='sideNavContainer'>
            <div className='sideNavLinks'>
              <Link to='/' className='sideNavLink'>
                <span className='sideNavLink'>Home</span>
              </Link>
              {/* <Link to='/registration' className='sideNavLink'>
                <span>Register</span>
              </Link> */}
              <Link to='/sponsorship' className='sideNavLink'>
                <span>Sponsor Tiers</span>
              </Link>
              {/* <Link to='/booth' className='sideNavLink'>
                <span>Booth Select</span>
              </Link> */}
              {/* <Link to='/finalize' className='sideNavLink'>
                <span>Finalize</span>
              </Link> */}
            </div>
            <Profile />

            <Cart>
              <LocalCart>
                <Head style={{ color: '#3498db' }}>Cart Items</Head>
                <ProductWrapper>
                  <p>
                    Booth Selection:{' '}
                    <span style={{ fontFamily: 'Roboto Mono' }}>
                      {localCart.primaryBoothId}
                    </span>
                  </p>
                </ProductWrapper>
                <ProductWrapper>
                  <p>
                    Adjacent Booth Selection:{' '}
                    <span style={{ fontFamily: 'Roboto Mono' }}>
                      {localCart.secondaryBoothId}
                    </span>
                  </p>
                </ProductWrapper>
              </LocalCart>
            </Cart>

            {!currentVendor ? (
              <>
                <StatusMessage
                  className={'status-message'}
                  message={
                    'You must register to checkout. Please register to continue.'
                  }
                  animationTime={5000}
                />
                <Button
                  buttonText='Register to continue'
                  buttonStyle='primary'
                  onClick={() => navigate('/registration')}
                />
              </>
            ) : // cart.length === 0 ? (  //changed to attempt to utilize the localCart to flip button instead
            Object.values(localCart).every((val) => val === '') ? (
              <Button
                buttonText='Continue to Booth selection'
                buttonStyle='primary'
                onClick={() => navigate('/booth-selection')}
              />
            ) : (
              <Button
                buttonText='Continue to checkout'
                buttonStyle='primary'
                onClick={() => navigate('/finalize')}
              />
            )}

            <ToDoList List={List} ListItem={ListItem} Header2={Header2} />

            <LogOut>
              <h1 onClick={logout}>Logout</h1>
            </LogOut>
          </div>
        </SideNav>
      )}
      <div>
        <span style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
          <IoChevronBackSharp />
        </span>
        <span
          style={{ fontSize: '30px', cursor: 'pointer', padding: '10px' }}
          onClick={handleSideBarToggle}
        >
          &#9776;
        </span>
      </div>
      <div>
        <Link className={'header-logo'} to='/'>
          <img src={logo} alt={'OP Veteran VetFest logo.'} />
        </Link>
      </div>
      {/* <div>
        <img
          src={user.userImg === '' ? userIcon : user.userImg}
          alt={'User is logged in.'}
          className={'avatar-icon'}
          onClick={handleClick}
        />
        {showProfile ? <Profile /> : <></>}
      </div> */}
    </HeaderContainer>
  )
}
