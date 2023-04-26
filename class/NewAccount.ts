import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }
    
    deposit = (valor: number): void => {
        this.setBalance(valor + 10)
    }
 }