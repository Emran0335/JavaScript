// behavioral pattern


// old interface
function Shipping() {
    this.request = function(zipStart, zipEnd, weight) {
        return "$49.75"
    }
}
// new interface
function AdvancedShipping() {
    this.login = function(credentials) {    };
    this.setStart = function(start) {    };
    this.setDestination = function(destination) {    };
    this.calculate = function(weight) { return "$39.50"};
}
// adapter interface
function ShippingAdapter(credentials) {
    let adShipping = new AdvancedShipping();
    adShipping.login(credentials);
    return {                                            // object return
        request: function(zipStart, zipEnd, weight) {
            adShipping.setStart(zipStart);
            adShipping.setDestination(zipEnd);
            return adShipping.calculate(weight);
        }
    }
}
// run function
function run() {
    let shipping = new Shipping();
    let credentials = {token: "30a8-6ee1"};                // declare by own
    let adapter = new ShippingAdapter(credentials);
    // original shipping object and interface
    let cost = shipping.request("78701", "10010", "2 lbs");
    console.log("Old Cost", cost);
    // new shipping object with adapter interface
    cost = adapter.request("78701", "10010", "2 lbs");
    console.log("New Adapter Cost", cost);
}
run();


// AbstractFactory

function Employee(name) {
    this.name = name;

    this.say = function() {
        console.log("I am employee, " + name);  
    }
}

function Vendor(name) {
    this.name = name;

    this.say = function() {
        console.log("I am vendor, " + name);     
    }
}

// factory
function EmployeeFactory() {
    this.create = function(name) {
        return new Employee(name)
    }
}

function VendorFactory() {
    this.create = function(name) {
        return new Vendor(name)
    }
}

function factoryRun() {
    let persons = [];

    let employeeFactory = new EmployeeFactory();
    let vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("Emran Hossain"));
    persons.push(employeeFactory.create("Emran Hossain"));
    persons.push(vendorFactory.create("Farjana Akter Maya"));
    persons.push(vendorFactory.create("Farjana Akter Maya"));
    //console.log(persons[0].name)
    for (let i = 0; i < persons.length; i++) {
        persons[i].say();
        //console.log(persons[i].name)  
    }
}

factoryRun()


function reviver(key, value) {
    let num = Date.parse(value);

    if(num) {
        return new Date(num);
    }

    return value;
}

let json = '{"firstName": "Hossain", "registrationDate": "2012-05-20T11:20:00.000Z"}';
let student = JSON.parse(json)
// console.log(reviver(student.registrationDate));



// Builder

function Shop() {
    this.construct = function(builder) {
        builder.step1();           // return new Car() constructor function

        builder.step2();        // add the addParts()

        return builder.get();
    }
}
function Car() {
    this.doors = 0;
    this.addParts = function() {
        this.doors = 4
    };
    this.say = function() {
        console.log("I am a " + this.doors + "-door car.")
    }
}
function Truck() {
    this.doors = 0;
    this.addParts = function() {
        this.doors = 2;
    }
    this.say = function() {
        console.log("I am a " + this.doors + "-door truck.")
    }
}
function CarBuilder() {
    this.car = null;        // takes the Car() constructor
    this.step1 = function() {
        this.car = new Car();
    }
    this.step2 = function() {
        this.car.addParts(); // this addParts() is invoked here and add 4 doors to the this.car object;
    }
    this.get = function() {
        return this.car;
    }
 }
function TruckBuilder() {
    this.truck = null;
    this.step1 = function() {
        this.truck = new Truck();
    };
    this.step2 = function() {
        this.truck.addParts();
    }
    this.get = function() {
        return this.truck
    }
}

function builderRun() {
    let shop = new Shop()
    // console.log(shop)
    let carbuilder = new CarBuilder();
    // console.log(carbuilder)
    let truckbuilder = new TruckBuilder();
    // console.log(truckbuilder);
    let car = shop.construct(carbuilder);
    // console.log(car)
    let truck = shop.construct(truckbuilder)
    // console.log(truck)
    car.say();
    // car.addParts();          does not return the value
    truck.say();
    // truck.addParts();        does not return the value
}

builderRun()



// Factory Method

let Factory = function() {
    this.createEmployee = function(type) {
        let employee;
        if(type === "fulltime") {
            employee = new FullTime();
        } else if(type === "parttime") {
            employee = new PartTime();
        } else if(type === "temporary") {
            employee = new Temporary();
        } else if(type === "contractor") {
            employee = new Contractor();
        }
        employee.type = type;       // {type: "any type value"}
        employee.say = function() {
            console.log(this.type + ": rate " + this.hourly + "/hour")
        }
        return employee;   
    }
}

let FullTime = function() {
    this.hourly = "$12";
}
let PartTime = function() {
    this.hourly = "$10";
}
let Temporary = function() {
    this.hourly = "$9";
}
let Contractor = function() {
    this.hourly = "$8";
}

function methodRun() {
    let employees = [];
    let factory = new Factory();

    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("contractor"));

    for (let i = 0, len = employees.length; i<len; i++) { // i and len is variabled by let. so comma is used.
        employees[i].say();
    }
}
methodRun()


// Prototype pattern

function CustomerPrototype(proto) {
    this.proto = proto;

    this.clone = function() {
        let customer = new Customer();
        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;

        return customer;
    }
}

function Customer(first, last, status) {
    t                              

    this.say = function() {
        console.log("name: " + this.first + " " + this.last + ", status: " + this.status)
    }
}

// console.log(CustomerPrototype())

function protoRun() {
    let proto = new Customer("Emran", "Hossain", "Teacher");
    let prototype = new CustomerPrototype(proto);
    let customer = prototype.clone();
    customer.say()          // console.log is used here.
    // customer.first;
    // customer.last;
}
protoRun()
