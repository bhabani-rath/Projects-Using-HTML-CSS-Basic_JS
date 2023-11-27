function dayname() {
    var inp = document.getElementById("in1");
    var out = document.getElementById("in2");
    var data;
    var key = parseInt(inp.value);

    switch (key) {
        case 1:
            data = "Monday";
            break;
        case 2:
            data = "Tuesday";
            break;
        case 3:
            data = "Wednesday";
            break;
        case 4:
            data = "Thursday";
            break;
        case 5:
            data = "Friday";
            break;
        case 6:
            data = "Saturday";
            break;
        case 7:
            data = "Sunday";
            break;
        default:
            data = "Invalid Entry";
            break;
    }
    out.value = data;
}