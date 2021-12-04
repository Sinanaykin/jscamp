//apiden gelen data imiş gibi düşünüyoruz burayı
//id,firstName,lastName,city,age,creditCardNumber
export const users = [
  {
    id: 1,
    firstName: "Sinan",  //firstName vermedim mesela  hata alıyor mu görmek için denerken
    lastName: "Aykın",
    city: "İstanbul",
    age: 36,//age: sds36 hata alsın diye number olarak vermedim örnekte
    creditCardNumber: "123456",

    type: "customer",
  },
  {
    id: 2,
    firstName: "Ali",
    lastName: "Yılmaz",
    city: "İzmir",
    age: 21,
    creditCardNumber: "654321",
    type: "customer",
  },
  {
    id: 3,
    firstName: "Veli",
    lastName: "Tok",
    city: "İstanbul",
    age: 20,
    salary: "8000",
    type: "employee",
  },
  {
    id: 4,
    firstName: "Mehmet",
    lastName: "S",
    city: "Ankara",
    age: 41,
    salary: "7000",
    type: "employee",
  },
  {
    id: 5,
    firstName: "Ceren",
    lastName: "Su",
    city: "Ordu",
    age: 36,
    salary: "9000",
    type: "employee",//type: "employe",denemek için type yanlıs yazılmıs bir şey olsun hata verebilsin diye userService de
  }
];
