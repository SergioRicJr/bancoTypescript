export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.balance += valor
    }
  }

  withdraw = (valor: number): void => {
    if(this.validateStatus()) {
      if(this.balance >= valor) {
        this.balance -= valor
      }
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance(valor:number) {
    if(this.validateStatus()) {
      this.balance +=valor
    }
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
