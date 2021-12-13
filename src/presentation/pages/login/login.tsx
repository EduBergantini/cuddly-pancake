import CustomInput from '@/presentation/components/custom-input/custom-input'
import Footer from '@/presentation/components/footer/footer'
import Logo from '@/presentation/components/logo/logo'
import Spinner from '@/presentation/components/spinner/spinner'
import React from 'react'
import Styles from './login-styles.scss'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <Logo />
        <h1>Cuddly Pancake</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <CustomInput type="email" name="email" placeholder="Digite seu e-mail"/>
        <CustomInput type="password" name="password" placeholder="Digite seu senha"/>
        <button className={Styles.loginSubmit} type="submit">Entrar</button>
        <span className={Styles.createAccount}>Crie sua conta</span>
        <div className={Styles.errorContainer}>
          <span className={Styles.errorMessage}>Erro</span>
          <Spinner className={Styles.externalSpinner} />
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
