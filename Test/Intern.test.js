// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Pablo', 90, 'pablo@gmail', 'UoM');
    
    expect(intern.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets intern school value', () => {
    const intern = new Intern('Pablo', 90, 'pablo@gmail', 'UoM');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const intern = new Intern('Pablo', 90, 'pablo@gmail', 'UoM');

    expect(intern.getRole()).toEqual("Intern");
});