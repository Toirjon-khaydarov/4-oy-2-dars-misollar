// if 1----------------------------

// let n =+prompt ("n sonni kiriting'");

// if (n>0) {
//   alert(n + 1);
// }
//   else {
//     alert(n + (" - manfiy son"))
//   }

//   // if2------------------------------

//   let n =+prompt ("n sonni kiriting'");

// if (n>0) {
//   alert(n + 1);
// }
//   else {
//     alert(n - 2)
//   }

// // if3---------------------------------------

// let n =+prompt ("n sonni kiriting'");
// if (n>0) {
//   alert(n + 1);
// }
//   else if (n==0) {
//     n=10
//     alert(n=10);
//   }

//   else {
//     alert(n-2);
//   }

// if4--------------------------------------------

// let a=+prompt ("birinchi songa qiymat kiriting")
// let b=+prompt ("ikkinch songa qiymat kiriting")
// let c=+prompt ("uchinchi songa qiymat kiriting")

// let musbatSon=0

// if (a>0) {
//   musbatSon+=1
// }
// if (b>0) {
//   musbatSon+=1
// }
// if (b>0) {
//   musbatSon+=1
// }

// alert(musbatSon + "ta musbat son bor")

// if5--------------------------------------------

// let a=+prompt ("birinchi songa qiymat kiriting")
// let b=+prompt ("ikkinch songa qiymat kiriting")
// let c=+prompt ("uchinchi songa qiymat kiriting")

// let musbatSon=0
// let manfiySon=0

// if (a>0) {
//   musbatSon+=1

// }
// else {
// manfiySon+=1
// }

// if (b>0) {
//   musbatSon+=1
// }
// else {
//   manfiySon+=1
//   }
// if (b>0) {
//   musbatSon+=1
// }
// else {
//   manfiySon+=1
//   }

// alert(musbatSon + " ta musbat, " + manfiySon + " ta manfiy son bor")

// if6--------------------------------------------

// let a=+prompt ("a ga qiymat kiriting")
// let b=+prompt ("b ga qiymat kiriting")

// if (a>b) {
// alert("kattasi a")

// }
// else {
// alert("kattasi b")
// }

// // if7-------------------------------------------------

// let a=+prompt ("a ga qiymat kiriting")
// let b=+prompt ("b ga qiymat kiriting")

// if (a<b) {
// alert("kichigi " +a)

// }
// else {
// alert("kichigi " +b)
// }

// // if8-------------------------------------------------

// let a = +prompt("a ga qiymat kiriting");
// let b = +prompt("b ga qiymat kiriting");

// let kichikSon;
// let kattaSon;

// if (a < b) {
//   kattaSon = b;
//   kichikSon = a;
// } else {
//   kattaSon = a;
//   kichikSon = b;
// }
// alert(kattaSon + " katta son " + kichikSon + " kichkina son")

// if9-------------------------------------------------------

// let a = +prompt("a ga qiymat kiriting");
// let b = +prompt("b ga qiymat kiriting");

// if (a > b) {
//   alert(a + " a katta: " + b + " b dan");

// } else {
//   (a = b + 1);
//  alert("endi a " + a +  " teng va b dan " + b + " katta" )
// }

// // if10-------------------------------------------------------

// let a = +prompt("a ga qiymat kiriting");
// let b = +prompt("b ga qiymat kiriting");

// if (a > b || b > a) {
//   a = a + b;
//   b = a;
//   alert("a va b " + a + " ga tenglashtirildi ");
// } else {
//   a = 0;
//   b = 0;
//   alert(" a va b " +a+ " ga tenglashtirildi ") 
// }


// // ----------hisoblash mashinasi-------------

// let a=+prompt("birinchi sonni kiriting");
// let b=+prompt("ikkinchi sonni kiriting");
// let amal=prompt("amalni kiriting")


// switch (amal) {
//   case '+':
//     alert("qo'shildi natija " + (a+b));
//     break;
//   case '-':
//     alert("ayrildi natija " + (a-b));
//     break;
//   case '*':
//     alert("ko'paytirildi natija " + (a*b));
//     break;
//   case '/':
//     alert("bo'lindi natija " + (a/b));
//     break;
// }