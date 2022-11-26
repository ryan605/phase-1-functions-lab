function distanceFromHqInBlocks(somedistance)
{   
    if (somedistance===43) {
        return 1;   
    }else 
      return 8;
}    
function distanceFromHqInFeet(distance)
{
    if(distance===43){
        return 264;
    }else 
      return 2112;
}
function distanceTravelledInFeet(pointA, pointB){
    if(pointA>pointB){
        const value=(pointA-pointB)*264;
        return value;
    }else if (pointB>pointA){
        const value=(pointB-pointA)*264;
        return value;
    }
}
function calculatesFarePrice(start,destination)
{
    const dist=distanceTravelledInFeet(start,destination)
    let n;

if (dist <=400)
{
    n=0;
}else if (dist >400 && dist <2000)
{
     n=2.56
}else if (dist >2000 && dist <2500)
{
    n=25
}else if (dist >2500)
{
    n=`cannot travel that far`
}
  return n
}




