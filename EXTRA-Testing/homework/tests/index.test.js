  const { checkSeatStatus, getRowNumber, book, getSeat } = require('../homework');

describe('checkSeatStatus is a function', () => {  
  it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
  });
});

describe('checkSeatStatus 1st parameter', () => {  
  it('should throw a TypeError if first parameter is not a string', () => {
      expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
    });

  it('should throw a TypeError if second parameter is not a number', () => {
      expect(() => checkSeatStatus('A','B')).toThrow(new TypeError('Second parameter is not a number'));
    });  
});

describe('getRowNumber', () => {  
  it('should return 1 if the letter given is an A', () => {
    expect(getRowNumber('A')).toBe(0);
  });

  it('should return 3 if the letter given is a C', () => {
    expect(getRowNumber('C')).toBe(2);
  });
});

describe('checkSeatStatus booked', () => {
  it('should return true if the given seat defined by row and column is booked', () => {
    expect(checkSeatStatus('A', 1)).toBe(true);
  });

  it('should return false if the given seat defined by row and column is not booked', () => {
    expect(checkSeatStatus('E', 3)).toBe(false);
   });
});

describe('book a seat', () => {
  it('if seat is avaialble should return Seat in XX successfully booked', () => {
    expect(book('E', 3)).toBe('Seat in E3 successfully booked');
  });

  it('Si el asiento está reservado debería dejarlo como estaba y retorna', () => {
    expect(book('A', 1)).toBe('Seat in A1 is already booked');
  });
});

describe('other tests I', () => {  
  it('should throw a TypeError if first parameter is not a letter', () => {
      expect(() => checkSeatStatus('AB')).toThrow(new TypeError('First parameter is not a single letter'));
    });

 it('should throw a TypeError if first parameter is not a letter or is empty', () => {
      expect(() => checkSeatStatus('')).toThrow(new TypeError('First parameter is not a single letter'));
    }); 
});

describe('other tests II', () => {  
  it('should return error if the letter given is different than A B C D E', () => {
    expect(getRowNumber('F')).toBe('Debe ingresar alguna de las letras A B C D E');
  });

  it('should return error if the letter given is different than A B C D E', () => {
    expect(getRowNumber('H')).toBe('Debe ingresar alguna de las letras A B C D E');
  });
});

describe('other tests III', () => {  
  it('should return error if the colummn given is greater than 3', () => {
    expect(checkSeatStatus('A',4)).toBe('Debe ingresar alguna de las columnas 0 1 2 3');
  });

  it('should return error if the colummn given is greater than 3', () => {
    expect(checkSeatStatus('A',5)).toBe('Debe ingresar alguna de las columnas 0 1 2 3');
  });
});




