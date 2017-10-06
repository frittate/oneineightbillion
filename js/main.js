

//generate 6 numbers from 49
//get user input of 6 numbers
//compare numbers and return rights and wrongs. 
//make payment for one bet and return field
/*function lottery(numbers,bet){
  let field = [];
  let draw = [];
  let rand;
  let win = [];

  for (let i=1;i<50;i++){
    field[i-1]=i;
  }

  for (let j=0;j<6;j++){
    rand = field[Math.floor(Math.random() * field.length)];
    field.splice(field.lastIndexOf(rand),1);
    draw.push(rand);  
  }

  for (let d of draw){
    for (let n of numbers) {
      if (d === n){
        win.push(d);
      }
    }
  }
  
  draw.sort(function(a,b){return a-b});
  win.sort(function(a,b){return a-b});
  
  let msg = 'You bet ' + bet + '$ on the numbers ' + numbers + '. The winning numbers were ' + draw + '. ';
  return (win.length === 0) ? msg + 'Sorry, no win' : msg + win.length + ' correct: ' + win;
  
}

lottery(numbers, bet);*/

let container = {
  numbers: [],
  wallet: null,
  pot: null,
  cashOut: null,

  cashIn: function(cashIn){
    this.pot += cashIn;
    this.wallet -= cashIn;
    view.createPot(this.pot, this.wallet);
  },

  cashOut: function(winnings){
    let share = this.pot;
    this.pot = this.pot - share;
    this.wallet += share;
    view.createPot(this.pot, this.wallet);
    view.createPayout(share);
  },

  winnings: function(correctGuesses){
  },

  lottery: function(numbers){
    let field = [];
    let draw = [];
    let rand;
    let win = [];
    let bet = 1;
    for (let i=1;i<36;i++){
      field[i-1]=i;
    }

    for (let j=0;j<6;j++){
      rand = field[Math.floor(Math.random() * field.length)];
      field.splice(field.lastIndexOf(rand),1);
      draw.push(rand);
      numbers[j] = Number.parseInt(numbers[j]);  
    }
    console.log(numbers);
    for (let d of draw){
      for (let n of numbers) {
        if (d === n){
          win.push(d);
        }
      }
    }
    
    draw.sort(function(a,b){return a-b});
    win.sort(function(a,b){return a-b});
    numbers.sort(function(a,b){return a-b});

    if (win !== 0){
      this.cashOut(win.length+1);
    }

    let msg = 'You bet ' + bet + ' ETH on the numbers ' + numbers + '. The winning numbers were ' + draw + '. ';
    return (win.length === 0) ? msg + 'Sorry, no win' : msg + win.length + ' correct: ' + win;
},
};

let handlers = {
  addNumber: function(number){
      container.numbers.push(number);
      console.log(container.numbers);
    },

    play: function(){
      console.log('go');
      let result = document.createElement('LI');
      result.innerHTML = container.lottery(container.numbers);
      document.getElementById('resultList').appendChild(result);
      container.cashIn(1);
      this.reset();
    },

    reset: function(){
      container.numbers = [];
      document.getElementById('chosenNumbers').innerHTML = '<li></li>';
      document.getElementById('submit').disabled = true;
      let c = document.getElementById('selectorDiv').children;
      for (let i=0;i<c.length;i++){
        c[i].disabled = false;
      }
    },

    setWallet: function(){
      let wallet = document.getElementById('wallet');
      wallet.innerHTML = document.getElementById('selectwallet').value;
      container.wallet = Number.parseInt(document.getElementById('selectwallet').value);
      debugger;
      document.getElementById('setwallet').disabled = true;
      document.getElementById('selectwallet').disabled = true;
    },

};

let view = {
  createField: function(){
    for (let s = 1;s<36;s++){
      let selector = document.createElement('BUTTON');
      selector.innerHTML = s;
      selector.onclick = function() {view.createNewBet(this.innerHTML)};
      selector.id = s;
      document.getElementById('selectorDiv').appendChild(selector);
    }
  },

  createNewBet: function(number){
    if (container.numbers.length < 6){
        let inputNumberItem = document.createElement('LI');
        let inputNumber = document.createTextNode(number);
        inputNumberItem.appendChild(inputNumber);
        document.getElementById('chosenNumbers').appendChild(inputNumberItem);
        handlers.addNumber(number);
        document.getElementById(number).disabled = true;
    };
    if(container.numbers.length === 6){
      this.enableSubmit();
    };
  },

  createPot: function(pot, wallet){
    document.getElementById('pot').innerText = pot;
    document.getElementById('wallet').innerText = wallet;
  },

  createPayout: function(payout){
    document.getElementById('payout').innerText = payout;
  },

  enableSubmit: function(){
    document.getElementById('submit').disabled = false;
  },

  counter: function(){
    let d = new Date();
    let counter = document.getElementById('number');
    counter.innerHTML = d.toLocaleTimeString();
    },

};

view.createField();
let timer = setInterval(view.counter,100);








