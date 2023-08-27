/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here
class BaseSignal{
     // private variables
     #type;
    
     // constructor
     constructor(type){
         if(this.constructor.name === "BaseSignal"){
             throw new Error("This class cannot be instantiated");
         }
         this.#type = type;
     }
 
     // function
     send(){        
        if(this.#type=="TvSignal"){
            console.log("Sending tv signal");
        }else if(this.#type=="AirconSignal"){
            console.log("Sending aircon signal");
        }else if(this.#type=="DoorSignal"){
            console.log("Sending door signal");
        } else {
            console.log("Others");
        }
     }
}

class TvSignal extends BaseSignal {
    constructor(){
        // Add code here
        super("TvSignal")
    }
}

class AirconSignal extends BaseSignal {
    constructor(){
        // Add code here
        super("AirconSignal");
    }
}

class DoorSignal extends BaseSignal {
    constructor(){
        // Add code here
        super("DoorSignal");
    }
}

//To test the Base Class instantiation
//const bas = new BaseSignal();

const tv = new TvSignal();
tv.send(); // prints "Sending tv signal"

const door = new DoorSignal();
door.send(); // prints "Sending door signal"

const aircon = new AirconSignal();
aircon.send(); // prints "Sending aircon signal"