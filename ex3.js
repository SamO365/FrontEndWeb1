//boolean 
var flag = true;
console.log("The value assigne to flag is " + flag);
//number
var myNumber = 2334234.433;
console.log("the value assinged to myNumber is: " + myNumber);
//string 
var newstring = "bob";
console.log("The value assinged to newString is: " + newstring);
//any 
var unknown = "unknown data";
console.log("The value assinged yo unknown is: " + unknown);
//array
var myArray = ["test", "sklfjd", "ijfiods"];
var array2 = [2, 3, 7];
for (var i = 0; i < array2.length; i++) {
    console.log("Item: " + array2[i] + "is in array2");
}
array2.forEach(function (elem) {
    console.log("Element: " + elem);
});
