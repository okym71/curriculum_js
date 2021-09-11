let scores = [10,15,20,25];
for (i = 0; i < scores.length; i++ ){
  if(scores[i] % 2 == 0){
    console.log(scores[i] + 'は偶数です');
  }
}

let car = {
  gass: 20.5,
  num: 1234
};

for(let key in car){
  console.log(car[key]);
}