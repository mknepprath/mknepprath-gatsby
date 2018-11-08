import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div style={{ background: '#7DBB9F'}}>
    <div
      style={{
        height: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            listStyleType: 'none'
          }}
        >
          <li style={{ marginBottom: 0 }}>
            <Link
              to='/'
              style={{
                color: 'white',
                fontFamily: '-apple-system,BlinkMacSystemFont,sans-serif',
                marginRight: 16,
                textDecoration: 'none',
              }}
            >
              Home
            </Link>
          </li>
          <li style={{ marginBottom: 0 }}>
            <Link
              to='/about'
              style={{
                color: 'white',
                fontFamily: '-apple-system,BlinkMacSystemFont,sans-serif',
                textDecoration: 'none',
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
