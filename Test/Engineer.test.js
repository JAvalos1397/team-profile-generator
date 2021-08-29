const Engineer = require('../lib/Engineer.js')

//construct testing
describe('Engineer', () => {
    it("Can Instanntiate Engineer instance", () => {
        const e = new Engineer();
        expect(typeof (e)).toBe("object");
    })

    it("Can set name via contructor arguments", () => {
        const name = "Jose";
        const e = new Engineer(name);
        expect(e.name).toBe(name);
    })

    it("Can set id via contructor arguments", () => {
        const id = "13";
        const e = new Engineer(id);
        expect(e.id).toBe(id);
    })

    it("Can set email via contructor arguments", () => {
        const email = "test@test.com";
        const e = new Engineer(email);
        expect(e.email).toBe(email);
    })



    //method testing
    describe("getName", () => {
        it('Can return name via getName', () => {
            const name = "Jose";
            const e = new Engineer(name);
            expect(e.name).toBe(name);
        });
    });

    describe("getId", () => {
        it('Can return id via getId', () => {
            const id = "13";
            const e = new Engineer("Jose", id);
            expect(e.id).toBe(id);
        });
    });

    describe("getEmail", () => {
        it('Can return email via getEmail', () => {
            const email = "test@test.com";
            const e = new Engineer('Jose', 13, email)
            expect(e.email).toBe(email);
        });
    });

    describe('getRole', () => {
        it('Can return name via getRole', () => {
            const role = 'Engineer';
            const e = new Engineer('Jose', 13, 'test@test.com')
        });
    });


});