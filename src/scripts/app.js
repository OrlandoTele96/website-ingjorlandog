
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

function truncate(Content,n){
  var subs = Content.substring(0,n);
  subs += "\t..."
  return subs
}

for (var i=0;i<containers.length;i++)
{
  var ID = containers[i].id;
  var container_children = containers[i].children;
  if(ID == "Posts-recent")
  {
    //console.log(container_children);
    for(var j=0;j<container_children.length;j++)
    {
      if(container_children[j].className=="post-recent")
      {
        var posts_container = container_children[j].children;
        for (var k=0;k<posts_container.length;k++)
        {
          var content = posts_container[k].children;
          var content_trun = truncate(content[1].textContent,60)
          content[1].textContent = content_trun;
        }
      }
    }
  }
  if(ID == "proyects")
  {
    //console.log(container_children);
    var proyects_container = container_children[1].children;
    for(var j=0;j<proyects_container.length;j++)
    {
      //console.log(proyects_container[j]);
      var proyect_content = proyects_container[j].lastElementChild;
      var para = proyect_content.children;
      var para_trun = truncate(para[0].textContent,100);
      para[0].textContent = para_trun;
    }
  }
}
