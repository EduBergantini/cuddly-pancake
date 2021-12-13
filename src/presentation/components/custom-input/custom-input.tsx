import React from 'react'
import Styles from './custom-input-styles.scss'

type CustomInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const CustomInput: React.FC<CustomInputProps> = (props: CustomInputProps) => {
  return (
    <div className={Styles.inputContainer}>
      <input {...props} />
      <span className={Styles.inputStatus}>
      &#128308;
      </span>
    </div>
  )
}

export default CustomInput
