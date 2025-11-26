import React from 'react'
import styles from './Button.module.css'

const Button = () => {
  return (
    <>
    <h3 className={`${styles.primaryButton} ${styles.large}`}>Button</h3>
    {/* <h3 className={styles.primaryButton}>Button</h3> */}
    </>
  )
}

export default Button