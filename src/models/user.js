export default class User{ //modeli bu şekilde oluşturuyoruz
    constructor(id,firstName,lastName,city,age){
         this.id=id //this(User) de id diye bişey olsun onada parametre olarak gönderilen id olsun
        this.firstName=firstName
        this.lastName=lastName
        this.city=city
        this.age=age
    }
}