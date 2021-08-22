
class Employee {
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email =email;
    }
    getName(){
        return this.name
    }
    getId(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"

    }
}

const Jose = new Employee("Jose",13,"avaljose@hotmail.com")
console.log(Jose.getEmail())

module.exports = Employee;