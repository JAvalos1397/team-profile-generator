const Manager = require('../lib/Manager.js')

//construct testing
describe('Manager', () => {
    it("Can Instanntiate Manager instance", () => {
        const e = new Manager();
        expect(typeof (e)).toBe("object");
    })

    it("Can set name via contructor arguments", () => {
        const name = "Jose";
        const e = new Manager(name);
        expect(e.name).toBe(name);
    })

    it("Can set id via contructor arguments", () => {
        const id = "13";
        const e = new Manager(id);
        expect(e.id).toBe(id);
    })

    it("Can set email via contructor arguments", () => {
        const email = "test@test.com";
        const e = new Manager(email);
        expect(e.email).toBe(email);
    })



    //method testing
    describe("getName", () => {
        it('Can return name via getName', () => {
            const name = "Jose";
            const e = new Manager(name);
            expect(e.name).toBe(name);
        });
    });

    describe("getId", () => {
        it('Can return id via getId', () => {
            const id = "13";
            const e = new Manager("Jose", id);
            expect(e.id).toBe(id);
        });
    });

    describe("getEmail", () => {
        it('Can return email via getEmail', () => {
            const email = "test@test.com";
            const e = new Manager('Jose', 13, email)
            expect(e.email).toBe(email);
        });
    });

    describe('getRole', () => {
        it('Can return name via getRole', () => {
            const role = 'Manager';
            const e = new Manager('Jose', 13, 'test@test.com')
        });
    });


});