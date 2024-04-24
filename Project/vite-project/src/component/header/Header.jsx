import React from 'react'
import { Logo, LogoutBtn, Container } from "../Index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.ststus)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Login',
      slug: "/Login",
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: "/Signup",
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: "/All-Posts",
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: "/Add-Post",
      active: authStatus
    },

  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button className='px-6 py-2 inline-block duration-200 hover: bg-blue-100 rounded-full'
                    onClick={() => navigate(item.slug)}>{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header