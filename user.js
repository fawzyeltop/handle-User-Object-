// Include File System
const fileSystem = require('fs')

// User Object
const User = {
    first_name: 'Abdulrahman',
    last_name: 'Fawzy',
    age: 22,
    gender: 'male',
    location: 'Ismailia'
}

// Convert the User Object to JSON String and make user.json with the JSON Data
const userJSON = JSON.stringify(User)
fileSystem.writeFileSync('user.json', userJSON)

// Get the JSON String from user.json to convert it to User Object in order to update the age and overwrite user.json
const dataBuffer = fileSystem.readFileSync('user.json')
const userObject = JSON.parse(dataBuffer.toString())
userObject["age"] = 25
fileSystem.writeFileSync('user.json', JSON.stringify(userObject))

