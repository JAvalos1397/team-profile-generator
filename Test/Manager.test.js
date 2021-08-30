// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Pablo', 90, 'pablo@gmail', 'UoM');
    
    expect(manager.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets manager Office Number value', () => {
    const manager = new Manager('Pablo', 90, 'pablo@gmail', 'UoM');

    expect(manager.getgetOfficeNumber()).toEqual(expect.stringContaining(manager.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const manager = new Manager('Pablo', 90, 'pablo@gmail', 'UoM');

    expect(manager.getRole()).toEqual("Manager");
});