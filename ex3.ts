//boolean 
let flag: boolean = true;
console.log("The value assigne to flag is "+flag);

//number
let myNumber:number = 2334234.433;
console.log("the value assinged to myNumber is: "+myNumber);

//string 
let newstring:string ="bob";
console.log("The value assinged to newString is: "+newstring);

//any 
let unknown:any = "unknown data";
console.log("The value assinged yo unknown is: "+unknown);

//array
let myArray:Array<string> = ["test", "sklfjd", "ijfiods"];
let array2:number[] = [2, 3, 7];

for(let i = 0; i < array2.length;i++)
{
    console.log("Item: "+array2[i]+ "is in array2")
}

array2.forEach(
    elem=> {
        console.log("Element: "+elem)
    }
);