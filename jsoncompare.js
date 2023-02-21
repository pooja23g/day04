var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

// find keys 
keyObj1 = Object.keys(obj1); 
keyObj2 = Object.keys(obj2); 
     
// find values 
valueObj1 = Object.values(obj1); 
valueObj2 = Object.values(obj2); 
 
// find max length to iterate	 
if(keyObj1.length > keyObj2.length) { 
    var biggestKey = keyObj1.length; 
} else { 
    var biggestKey = keyObj2.length; 
} 
 
// now compare their keys and values  
for(var i=0; i<biggestKey; i++) { 
    if(keyObj1[i] == keyObj2[i] && valueobj1[i] == valueobj2[i]) { 
        console.log(valueobj2[i]);	 
    } else { 
        // it prints keys have different values 
        console.log('Obj1 value: '+ valueObj1[i] + '\nObj2 value: '+ valueObj2[i] +'\n'); 
    } 
}