

function roll(){
   return (Math. floor(Math. random() * 6) + 1);
}



function game(){
   var my_roll = roll()
   var op_roll = roll()
   if (my_roll > op_roll) {
      alert("You Win");
}  else if (my_roll == op_roll){
      alert("Draw");
    }else {
      alert("You Lose");
    }
}


//funtion dice(){
 //  var my_dice = []
 //  var op_dice = []
 //  const dice = [dieface1.png, dieface2.png, dieface3.png, dieface4.png, dieface5.png, dieface6.png]
 //  let my_dice = dice[my_roll()]
 //  let op_dice = dice[op_roll()]

 //  return
//}