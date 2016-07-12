var numbers = [2,4,56,43,3,5,6,9]
function doubleAll(arr){
  return numbers.map( function(e,i,arr){
        return e*2;
  })
}

doubleAll(numbers);

function squareAll(arr){
  return arr.map( function(e,i,arr){
    return e*e;
  })
}
squareAll(numbers);

function misterfyAll(arr){
  return arr.map( function(e){
    return "Mr. "+e;
  });
}
function wrapInTag (arr, tag){
  return arr.map(function(e){
        return "<"+tag+">"+e+"</"+tag+">";
  });
}

var passengers = [ ["Thomas", "Meeks"],
                    ["Gregg", "Pollak"]
                  ];

var passengers = passengers.map (function(e){
        return passengers.map;
        return = e[0] +" " + e[1];
});

var puzzlers = [
  function (i) { return 3*1 - 8; },
  function (i) { return Math.pow(i+2, 3); },
  function (i) {return i*i-9; },
  function (i) {return i%4; }
];

function adventureSelector(userChoice) {
  if (userChoice === 1)
  return function (){
    alert("you selected the vines of doom!");
  }
  else if (userChoice === 2) {

  }
}
