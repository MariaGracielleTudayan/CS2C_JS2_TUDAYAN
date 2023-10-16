//instantiate four (4) variables Name, Address, Age, and Class Roles
let name = "Maria Gracielle Tudayan";
let address = "Patac, Galimuyod, Ilocos Sur";
let age = 19;

// set 1 only among: Officer, Student, and Teacher
let classRole = "Student"; // you can change the Class Role to check

const course = "BSCS"; // one constant for courses: BSCS, BSM, and BAEL

let password = "yourMariyaBSCS"; // you can try other password to check

//Protective layers to check the password of the student.
//If successful, print the Name of the student and print the student "Address" multiple times using Age as a counter.
switch (course){
    case "BSCS":
        switch (classRole){
            case "Officer":
                if (password.length >= 12 && password.includes(course)){
                    console.log("Name: " + name);
                    for (let i = 0; i < age; i++){
                        console.log("Address: " + address, i);
                    }
                }else{
                    console.error("Invalid Password");
                }
            break;

            case "Student":
                if (password.length >= 12 && password.includes(course)){
                    console.log("Name: " + name);
                    for (let i = 0; i < age; i++){
                        console.log("Aaddress: " + address, i);
                    }
                }else{
                    console.error("Invalid Password");
                }
            break;

            case "Teacher":
                if (password.length >= 12 && password.includes(course)){
                    console.log("Name: " + name);
                    for (let i = 0; i < age; i++){
                        console.log("Address: " + address, i)
                    }
                }else{
                    console.log("Invalid Password");
                }
            break;

            default:
                console.error("Invalid Class Role input.");
            }
            break;

            default:
                console.error("Invalid Course input.");
        


}


