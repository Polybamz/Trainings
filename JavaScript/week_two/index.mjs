//import { writeFile } from 'fs'
let dataList = []
let today = new Date().getSeconds()
console.log(today)
const randomNumber = Math.floor(Math.random() * 1000) + 1;
console.log(randomNumber)

class Employee {
    constructor(firstName, lastName, email, Eid) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.Eid = Eid

    }
}

class TimeChecker extends Employee {
    constructor(arrival_time) {
        super();
        this.arrival_time = arrival_time
        this.addData = function () {
            dataList.push({
                'id': this.firstName + this.arrival_time + this.lastName + randomNumber,
                'Eid':this.Eid,
                'firstName': this.firstName,
                'lasatName': this.lastName,
                'email':this.email,
                'arrival_time': this.arrival_time
            })
        }
    }



    displayData = () => {
        for (let i of dataList) {
            if (i['arrival_time'] === 9) {
                console.log(`${i['firstName']} is on time`)
            } else
                if (i['arrival_time'] < 9) {
                    console.log(`${i['firstName']} is Ealy ${i['id']}`)
                } else {
                    console.log(`${i['firstName']} is Late`)

                }
        }

    }

    delete = (id)=> dataList.forEach(element => {
        if (element['id'] == id) {
            dataList.pop(element)
        }
    });

}



let time = new TimeChecker(8)
time.firstName = 'John'
time.lastName = 'Wils'
time.addData()
console.log(time.displayData())

const nameN = document.getElementById('nameput')
const timen = document.querySelector('timeput')

addBtn=()=>{

}
