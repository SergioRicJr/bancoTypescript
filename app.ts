import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/NewAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(1032)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(1111)
console.log(companyAccount)
const newAccount = new NewAccount('oioi', 340)
newAccount.deposit(500)
newAccount.withdraw(100)
console.log(newAccount)