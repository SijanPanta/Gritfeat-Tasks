function getDayMessage(dayNumber) {
    let message;

    switch (dayNumber) {
        case 1:
            message = "Sunday";
            break;
        case 2:
            message = "Monday";
            break;
        case 3:
            message = "Tuesday";
            break;
        case 4:
            message = "Wednesday";
            break;
        case 5:
            message = "Thursday";
            break;
        case 6:
            message = "Friday";
            break;
        case 7:
            message = "Saturday";
            break;
        default:
            message = "Invalid day number. Please enter a number between 1 and 7.";
    }

    return message;
}
 console.log(getDayMessage(2));