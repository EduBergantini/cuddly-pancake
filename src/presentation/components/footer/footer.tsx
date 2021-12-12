import React, { memo } from 'react'
import Styles from './footer-styles.scss'

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <p>copyright EduBergantini.net {new Date().getFullYear()}</p>
    </footer>
  )
}

export default memo(Footer)
