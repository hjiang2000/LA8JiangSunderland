
hmbMenu.onclick=function(s){
if(typeof(s)== "object"){
return
} else{
  
  switch(s){
case "Dessert Voting":
  ChangeForm(dessertVoting)
  break
  
case "Describe You":
  ChangeForm(describeYou)
  break
  
case "Favorite Excercises":
  ChangeForm(favExcercises)
  break

case "Mobile Nav":
  ChangeForm(mobileNav)
  break
  }
  }
}