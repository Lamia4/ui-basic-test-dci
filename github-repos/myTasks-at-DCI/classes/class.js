class Employee {
    constructor (firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
    
    this.email= this.firstname.toLowerCase() + "."+ this.lastname.toLowerCase() + "@company.com"
    this.fullName=this.firstname +" "+ this.lastname
    }
    }
    const person1= new Employee("Zeynep", "Gültekin");
    