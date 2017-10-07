

//generate 8 billion data points
//each one on hover generates a small line of information about the person: location, age, gender

let container = {
  persons: [],

  addPerson: function(id) {
    this.persons.push({
      personId: id,
      personCountry: container.newCountry(),
      personAge: '20',
      personGender: 'male',
    })
  },

  newCountry: function(){
    let country = 'China';
    return country;
  }
  /*numbers: [],
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
  },*/
};

let handlers = {
    namer: function(obj) {
      debugger;
      if (container.persons.length == 0 || container.persons[obj.currentTarget.id].personId == 0) {
        handlers.setName(obj.currentTarget.id);
      
      } else {

        handlers.getName(obj.currentTarget.id);

      }
    },

    setName: function(id) {
      container.addPerson(id);
      debugger;
      handlers.getName(id);
    },

    getName: function(id){
      let display = document.getElementById('display');
      let thisPerson = container.persons[id - 1];
        display.innerHTML  = '#' + thisPerson.personId + ', ' + thisPerson.personCountry + ', Age ' + thisPerson.personAge + ', ' + thisPerson.personGender;
    },

    default: function(){
      let display = document.getElementById('display');
      display.innerHTML = 'Hover over a dot';
    }

};

let view = {

  createPeople: function(){
    for (let i = 1;i<10;i++){
      let newPerson = document.createElement('BUTTON');
      newPerson.className = 'person';
      newPerson.id = i;
      newPerson.onmouseover = handlers.namer;
      newPerson.onmouseout = handlers.default;
      document.getElementById('personContainer').appendChild(newPerson);
    }

  }
  /*
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
*/
};

view.createPeople();
//let timer = setInterval(view.counter,100);








