import Customer from "../models/customer.js"
import User from "../models/user.js"


console.log("User component yüklendi")

let userService= new UserService() //nesne oluşturuyoruz .New leme.

let user1=new User(1,"Sinan","Aykın","Muğla")

userService.add(user1)
userService.getById(1)
userService.list()



let customer={id:1,firstName="Sinan"}
customer.lastName ="Aykın"

console.log("..............");

userService.load()

let customerToAdd=new Customer(1,"Mehmet","Aykın","Muğla","sadasd")
customerToAdd.type="customer" //type ı yukarda vermedik çünkü modellerde tanımlamadık böyle verdik prototyping

console.log(customerToAdd)
console.log(userService.customer)
console.log(userService.employee)
console.log(userService.errors)
console.log(userService.getCustomersSorted())

