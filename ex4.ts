//will work to find spaces
function CountSpaces(value:string):number
{
    return value.length;

}

console.log(CountSpaces("test 1"));

function countNoSpaces(value:string):number
{
    return value.trim().length;
}

console.log(countNoSpaces("test 1"));

function countBoth(value:string, spaces?:boolean):number
{
    let length:number;

    if(spaces)
    {
        length = value.length;
    }
    else
    {
        length = value.trim().length;
    }
    return length;
}
console.log(countBoth("test1"));

