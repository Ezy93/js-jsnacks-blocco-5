const people = [
    {
        name : "Giovanni",
        surname : "Glascow",
        age : 12,
    },
    {
        name : "Fernando",
        surname : "Bellonna",
        age :24,
    },
    {
        name : "Giuseppe",
        surname : "Mannarino",
        age :18,
    },
    {
        name : "Romolo",
        surname : "Remolo",
        age : 6,
    },
]


const driveAge = people.map((element) => {
    let drivingAgeStatement = (element.age >= 18) ?  "puo guidare" : "non puo guidare";
    return `${element.name} ${element.surname} ${drivingAgeStatement}`
})

console.log(driveAge);