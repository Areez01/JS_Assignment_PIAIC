var ord_num = [1,2,3,4,5,6,7,8,9];

for(var i=0;i<ord_num.length;i++){
if(ord_num[i] == 1)
{
console.log(""+ord_num[i]+"st");
}
else if(ord_num[i] == 2)
{
  console.log(""+ord_num[i]+"nd");
}
else if(ord_num[i] == 3)
{
  console.log(""+ord_num[i]+"rd");
}

else if(ord_num[i] > 3)
{
  console.log(""+ord_num[i]+"th");
}


}
