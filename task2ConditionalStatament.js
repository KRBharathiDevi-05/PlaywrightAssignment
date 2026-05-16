var passMark = 40
function student(score){
switch(true)
{
    case score>= 90 && score<=100:
    console.log("Grand : A")
    break;
    case score>= 80 && score<=90:
    console.log("Grand : B")
    break;
    case score>= 70 && score<=80:
    console.log("Grand : C")
    break;
    case score>= 55 && score<= 70:
    console.log("Grand : D")
    break;
    default:
    console.log("F")
}
}
student(65)
