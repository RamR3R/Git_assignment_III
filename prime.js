let n =83;
let flag = true;
for(let i = 2 ; i<= Math.sqrt(n) ; i++)
{
if(n%i == 0)
{
flag = flase;
break;
}
}
if(flag)
console.log("Yes Prime number");
else
console.log("No Not a Prime");