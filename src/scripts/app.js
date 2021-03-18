
function Shadower()
{
  this.style.boxShadow="1px 1px 2px #000";
}
function unShadow()
{
  this.style.boxShadow="None";
}
var containers = document.getElementsByClassName("container");
for (var i=0;i<containers.length;i++)
{
  containers[i].addEventListener('mouseenter',Shadower);
  containers[i].addEventListener('mouseleave',unShadow);
}
