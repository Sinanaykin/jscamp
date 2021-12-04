import DataError from "../models/dataError.js"
import { users } from "./data/users.js"

export default class UserService{
 constructor(){
     this.employee=[]
     this.customer=[]
     this.errors=[]

 }
    load(){
      for (const user of users) {//forof döngüsü yapıyoruz elimizdeki arrayı dönmeyi sağlar
          switch (user.type) {//user daki type alanı için 
              case "customer": //eğer customer ise
              if (!this.checkCustomerValidityForErrors(user)) { //Eğer validation hatası yok ise
                this.customer.push(user)//Müşteri olarak ekleriz Userı
              }    
             
                  break;
                  case "employee": //eğer employee ise
                  if (!this.checkEmployeeValidityForErrors(user)) { //Eğer validation hatası yok ise
                  this.employee.push(user)//Employee olarak ekleriz Userı
                  }
                  break;
          
              default:
                  this.errors.push(new DataError("Wrong user type",user)) //yukardakiler dısında ise bu hatayı versin dedik ve bu datayı getirsin
                  break;
          }
      }
    }

    checkCustomerValidityForErrors(user){
        let requiredFields="id firstName lastName age city".split(" ") //her boşluktan sonrasını array yap 
        let hasError=false //ilk başta validation hatası yokmuş gibi varsayım yaptık eğer var ise true olur
        for (const field of requiredFields) {
            hasError=true //validation hatası var ise hasError= true olur
            if (!user.field) {//user.js bu alnlardan biri yoksa aşağıdaki hatayı versin
                this.errors.push(new DataError(`Validation problem. ${field} is required`,user))//
            }
        }
        if (Number.İsNaN(Number.parseInt(user.age))) {//Kullanıcının yaşını sayıya çevirmek istediğimde bu bir sayı değilse(İsNaN=is not a nmber) hata var diyoruz
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`,user))
        }
        return hasError
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields="id firstName lastName age city salary".split(" ") //her boşluktan sonrasını array yap .Burda yazdıklarımız zorunlu olsun 
        let hasError=false //ilk başta validation hatası yokmuş gibi varsayım yaptık eğer var ise true olur
        for (const field of requiredFields) {
            hasError=true //validation hatası var ise hasError= true olur
            if (!user.field) {//user.js bu alnlardan biri yoksa aşağıdaki hatayı versin
                this.errors.push(new DataError(`Validation problem. ${field} is required`,user))//
            }
        }
        if (Number.İsNaN(Number.parseInt(+user.age))) {//Kullanıcının yaşını sayıya çevirmek istediğimde bu bir sayı değilse(İsNaN=is not a nmber) hata var diyoruz
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`,user))
        }
        return hasError
    }

    add(user){
      switch (user.type) { //user ın type ına bak 
          case "customer"://eğer customer  ise 
          if (!this.checkCustomerValidityForErrors(user)) { //Eğer validation hatası yok ise
            this.customer.push(user)//Müşteri olarak ekleriz Userı
          }    
              break;
              case "employee"://eğer employee  ise 
              if (!this.checkEmployeeValidityForErrors(user)) { //Eğer validation hatası yok ise
                this.employee.push(user)//Employee olarak ekleriz Userı
                }
              break;
          default:
            this.errors.push(new DataError("This user can not be added.Wrong user type",user)) //yukardakiler dısında ise bu hatayı versin dedik ve bu datayı getirsin
              break;
      }
    }

    listCustomer(){
       return this.customers
    }

     getCustomerById(id){
        return this.customers.find(u=>u.id===id)
    }
    getCustomersSorted(){//sort fonksiyonu ile sıralama yaptık
      return  this.customers.sort((customer1,customer2)=>{
            if (customer1.firstName>customer2.firstName) {
                return 1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return -1
            }
        })
    }
}