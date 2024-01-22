let hour = new Date().getHours()


if (hour < 12) {
    console.log("good morning", hour);
}else if (hour < 16) {
    console.log("good evening", hour);
}else if (hour < 18) {
    console.log("evening night" , hour);
}else {
    console.log('good night' ,hour);
}
// console.log(hour);

// ++++++++++++ switch +++++++++++

let time = new Date().getDay()

switch (time) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
    default:
        break;
}

console.log(time);

//  ++++++++   default key use 

switch (time) {
    case 0:
        console.log("Sunday");
        break;
    // case 1:
    //     console.log("Monday");
    //     break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
    default:
        console.log("today is holiday");
        break;
}