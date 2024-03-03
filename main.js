// Define the Telephone class
class Telephone {
    constructor() {
        this.phoneNumbers = []; // Array to store phone numbers
        this.observers = []; // Array to store observers
    }

    // Method to add a phone number
    addPhoneNumber(phoneNumber) {
        if (this.isValidPhoneNumber(phoneNumber)) {
            this.phoneNumbers.push(phoneNumber);
            console.log(`Phone number ${phoneNumber} added successfully.`);
        } else {
            console.log(`Invalid phone number: ${phoneNumber}`);
        }
    }

    // Method to remove a phone number
    removePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
            console.log(`Phone number ${phoneNumber} removed successfully.`);
        } else {
            console.log(`Phone number ${phoneNumber} not found.`);
        }
    }

    // Method to dial a phone number
    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            console.log(`Dialing phone number: ${phoneNumber}`);
            // Notify observers about the dialed phone number
            this.notifyObservers(phoneNumber);
        } else {
            console.log(`Phone number ${phoneNumber} not found.`);
        }
    }

    // Method to add an observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Method to remove an observer
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // Method to notify observers when a phone number is dialed
    notifyObservers(phoneNumber) {
        this.observers.forEach((observer) => observer.notify(phoneNumber));
    }

    // Helper method to validate phone number format (replace with your own validation logic)
    isValidPhoneNumber(phoneNumber) {
        // Remove non-numeric characters
        const cleanedInput = phoneNumber.replace(/\D/g, "")

        // Check if the input is empty or not a number
        if (!cleanedInput || isNaN(cleanedInput)) return false

        // Check if the length of the cleaned input matches typical phone number lengths
        const phoneNumberLengths = [7, 10, 11, 12, 13]
        if (!phoneNumberLengths.includes(cleanedInput.length)) return false

        // Check if the input starts with a valid country code (e.g., +234 for Nigeria)
        const vaildCountryCodes = ['234']
        const countryCode = cleanedInput.substring(0, 3)
        if (!vaildCountryCodes.includes(countryCode)) return false

        // Additional checks for specific country patterns can be added here

        // If all checks pass, return true
        return true
    }
}

// Define the Observer class
class Observer {
    constructor(name) {
        this.name = name;
    }

    // Method to be called when the telephone notifies about a dialed number
    notify(phoneNumber) {
        console.log(
            `${this.name} received notification: Phone number ${phoneNumber} dialed.`
        );
    }
}

// Create a Telephone object
const telephone = new Telephone();

// Create Observer objects
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

// Add observers to the telephone
telephone.addObserver(observer1);
telephone.addObserver(observer2);

// Add phone numbers
telephone.addPhoneNumber("123-456-7890");
telephone.addPhoneNumber("098-765-4321"); // Invalid phone number (according to the provided validation logic)

// Remove a phone number
telephone.removePhoneNumber("098-765-4321");

// Dial phone numbers
telephone.dialPhoneNumber("123-456-7890");
telephone.dialPhoneNumber("987-654-3210"); // Not found in the phone list
