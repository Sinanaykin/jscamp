import User from "./user.js"

export default class Employee extends Userser{ //Employee modeli oluşturuyoruz  bunu User modelinden extend ediyoruz aynı değerler olduğu için
    constructor(id,firstName,lastName,city,age,salary){//ayriyetten salary bilgisi var onu aşağıda belirtiyoruz
        super(id,firstName,lastName,city,age)
        this.salary=salary
    }
}