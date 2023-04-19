const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: 'Day of Reconciliation',
    date: new Date(`16 December ${currentYear}`),
  },
  1: {
    id: 1,
    name: 'Workers Day',
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: 'Day of Goodwill',
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: 'New Year Day',
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: 'Womens Day',
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: 'Heritage Day',
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: 'Christmas Day',
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: 'Youth Day',
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: 'Human Rights Day',
    date: new Date(`21 March ${currentYear}`)
  },
};

const christmas = 6;
const futureId = 9;

// Check if an item has been assigned to the 9 key
if (holidays.hasOwnProperty(futureId)) {
  console.log(holidays[futureId].name);
} else {
  console.log(`ID ${futureId} not created yet`);
}

// Create a copy of the Christmas object and update the name and date
let copied = Object.assign({}, holidays[christmas]);
copied.name = 'X-mas Day';
copied.date = new Date(`25 December ${currentYear} 13:25`);
copied.date.setHours(0, 0, 0, 0);

// Check if the new date is earlier than the current date
const isEarlier = copied.date.getTime() < holidays[christmas].date.getTime();
console.log('New date is earlier:', isEarlier);

// If the new date is earlier, update the copied object
if (isEarlier) {
  holidays[christmas] = copied;
}

// Log the changes made to the copied object
console.log(`ID change: false`);
console.log(`Name change: ${copied.name}`);
console.log(`Date change: ${copied.date.getDate().toString().padStart(2, '0')}/${(copied.date.getMonth() + 1).toString().padStart(2, '0')}/${copied.date.getFullYear()}`);

// Find the first and last holiday in the year
const randomHoliday = holidays[Math.floor((Math.random() * 9))];
var firstHoliday = holidays[0];
var lastHoliday = holidays[8];
var i = 0;

while (i < 9) {
  if (holidays[i].date.getTime() < firstHoliday.date.getTime()) {
    firstHoliday = holidays[i];
  }
  if (holidays[i].date.getTime() > lastHoliday.date.getTime()) {
    lastHoliday = holidays[i];
  }
  i++;
}

console.log(`First holiday in the year: ${firstHoliday.date.getDate().toString().padStart(2, '0')}/${(firstHoliday.date.getMonth() + 1).toString().padStart(2, '0')}/${firstHoliday.date.getFullYear()}`);
console.log(`Last holiday in the year: ${lastHoliday.date.getDate().toString().padStart(2, '0')}/${(lastHoliday.date.getMonth() + 1).toString().padStart(2, '0')}/${firstHoliday.date.getFullYear()}`);
console.log(`Random holiday: ${randomHoliday.date.getDate().toString().padStart(2, '0')}/${(randomHoliday.date.getMonth() + 1).toString().padStart(2, '0')}/${randomHoliday.date.getFullYear()}`);


