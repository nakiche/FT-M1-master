
function checkSeatStatus(row , number) {

if (typeof row != 'string') {throw new TypeError('First parameter is not a string')}
if (row.length > 1 || row.length==0) {throw new TypeError('First parameter is not a single letter')}
if (typeof number != 'number') {throw new TypeError('Second parameter is not a number')}  
if (number>3){return 'Debe ingresar alguna de las columnas 0 1 2 3'}  

var seat = getSeat(row,number);
return seat.booked;  

}

const layout = [
  [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
  [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
  [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
  [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
  [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
];

function getRowNumber(row) {
  // body...
  var rowNumber = row.charCodeAt(0) - 65;
  
  if (rowNumber >=0 && rowNumber <=4)
  {
    return rowNumber;
  }
  else
  {
    return 'Debe ingresar alguna de las letras A B C D E'
  }  
}

function book(row , number) {
  // body...
  if (checkSeatStatus(row , number)) {
    return 'Seat in '+row+number+' is already booked'
  }
  else
  {
    //var rowNumber = getRowNumber(row);
    var seat =getSeat(row,number);
    seat.booked = true;
    //layout[rowNumber][number].booked=true;
    return 'Seat in '+row+number+' successfully booked'
  } 
}

function getSeat(row,number){
  //getRowNumber(row);
  return layout[getRowNumber(row)][number];
}  
 

module.exports = { checkSeatStatus, getRowNumber, book, getSeat };