import React, {useRef, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Row, Button } from 'reactstrap'
import './header.css'

const nav_links = [
    {
        path: "/home",
        display: "Home"
    },
    {
        path: "/about",
        display: "About"
    },
    {
        path: "/tour",
        display: "Tours"
    },
]
const Header = () => {
    return (
        <nav className='header'>
            <Container>
                <Row>
                    <div className="flex justify-evenly items-center">
                        {/* logo */}
                        <div className="logo font-bold text-4xl">
                            <h1>Travel<span className='text-amber-600'>Xpress</span></h1>
                        </div>
                        {/* menu  */}
                        <div className="navigation">
                            <ul className='flex mb-0 gap-10'>
                                {
                                    nav_links.map((item, index) => (
                                        <li key={index} className='nav_item list-none'>
                                            <NavLink to={item.path} className={navClass=>navClass.isActive?'active_link':""}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* right side */}
                        <div className='nav-right flex gap-4'>
                            <div className='nav-btns flex gap-4'>
                                {/* login and signup */}
                                <Button className='secondary__btn font-bold'><Link to='/login'>Login</Link></Button>
                                <Button className='primary__btn font-bold text-white bg-amber-500'><Link to='/register'>Register</Link></Button>
                                <span className='mobile_menu'>
                                    <i class="ri-menu-line"></i>
                                </span>
                            </div>

                        </div>
                    </div>
                </Row>
            </Container>
        </nav>
    )
}
export default Header
