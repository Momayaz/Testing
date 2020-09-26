// let frankie = {
//     name: 'frankie',
//     age: 0,
//     likes: ['cuddling', 'napping', 'food'],
//     imagePath: 'img/frankie.jpg',
//     goodWithKids: true,
//     goodWithDogs: false,
//     goodWithOtherCats: true,
//     breed: 'persian',
//     getAge: function(min,max){
//         this.age = getRandomNumber(min, max);
//     },
//     render: function() {
//      let container = document.getElementById('kittenProfiles');
//      let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//      let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//      let pEl = document.createElement('p');
//         articleEl.appendChild(pEl);
//         pEl.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
//      let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for(var m=0; m<this.likes.length; m++) {
//          let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = this.likes[m];
//         } 
//         let imgEl = document.createElement('img');
//         articleEl.appendChild(imgEl);
//         imgEl.setAttribute('src', this.imagePath);


//     }
// };
// frankie.getAge(3,6);
// frankie.render();
// console.table(frankie);
let workHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let Seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookiesSales: 6.3,
    avgCookiesPerHour: [],
    
    getCusPerHour: function(){
    for(let m=0; m<workHours.length; m++){
        this.avgCookiesPerHour.push(Math.floor(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookiesSales));
    }
    },
    render: function(){
        let container = document.getElementById('Seattle');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for(let mo=0; mo<workHours.length; mo++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${workHours[mo]}: ${this.avgCookiesPerHour[mo]} cookie a day.`;
        }
    
    },
};
Seattle.render();
Seattle.getCusPerHour();
console.table(Seattle);

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min) + min); 
}




















































































  