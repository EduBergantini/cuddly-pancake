export class UnexpectedError extends Error {
  constructor () {
    super('Ops! Ocorreu um erro inesperado. Tente novamente mais tarde.')
    this.name = 'UnexpectedError'
  }
}
