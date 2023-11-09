/*function  areaOfTriangle(obj){
     var a = 1*obj.st1.value;
     var b = 1*obj.st2.value;
     var c = 1*obj.st3.value;
     var p = (a+b+c)/2;
    var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    obj.res.value=s.toFixed(2);
   
}*/

/*function  areaOfTriangle(obj){
    var a = 1*obj.st1.value;
    var b = 1*obj.st2.value;
    var c = 1*obj.st3.value;
    var p = (a+b+c)/2;
   var s = Math.random()*(b-a) + a;
   obj.res.value=s.toFixed(0);
}*/

function  areaOfTriangle(obj){
    var a = 1*obj.st1.value;
    var b = 1*obj.st2.value;
    var c = 1*obj.st3.value;
    let discriminant = b*b-4*a*c;
    if(discriminant > 0){
        let x1 = (-b + Math.sqrt(discriminant))/(2*a);
        let x2 = (-b - Math.sqrt(discriminant))/(2*a);
        obj.res.value=x1 + "," + x2;
    } else if (discriminant === 0){
        let x = -b/(2*a);
        obj.res.value=x;
    } else {
        obj.res.value= "корней нет";
    }
}
