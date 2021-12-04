import User from "./user.js"

export default class Customer extends Userer{ //Customer modeli oluşturuyoruz  bunu User modelinden extend ediyoruz aynı değerler olduğu için
    constructor(id,firstName,lastName,city,age,creditCardNumber){
        super(id,firstName,lastName,city,age)
        this.creditCardNumber=creditCardNumber
    }
}