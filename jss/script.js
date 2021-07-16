


function handleSubmit() {
    console.log("Function has been hit!!!");
    let birthday2 = (document.getElementById("birthday").value);
    console.log(birthday2)
    let sex = (document.getElementById("sex").value);
    console.log(sex)
    const birthday3 = birthday2.split("-");
    console.log(birthday3)
    let year = birthday3[0]
    let month = parseInt(birthday3[1])
    let day = parseInt(birthday3[2])
    
    console.log(year)
    console.log(month)
    console.log(day)
    if (month >= 1 && month <= 12) {
    } else {
        alert("Enter a valid date");
        return
    }
    if (day >= 1 && day <= 31) {
    } else {
        alert("Enter a valid date");
        return
    }
    if (year >= 1900 && year <= 2021) {
    } else {
        alert("Enter a valid date");
        return
    }
    let answer = getWeekday(year, month, day, sex)

}


function getWeekday(year, month, day, sex) {

    let text = "";
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const fnames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    const mnames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];


    let month2 = month - 1
    let cc = year.slice(0, 2)
    let yy = year.slice(2, 4)

    let weekday = Math.round(
        (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (month2 + 1) / 10)) + day) % 7)

    console.log(cc)
    console.log(yy)
    console.log(day)
    console.log(month2)
    console.log(sex)
    console.log(weekday)

    let weekdayname = days[parseInt(weekday)];
    let fname = fnames[parseInt(weekday)]
    let mname = mnames[parseInt(weekday)];
    console.log(weekdayname)
    if (sex == "Y") {
        var akanname = fname;
    } else {
        var akanname = mname
    }
    console.log(akanname)
    document.getElementById("output").innerHTML = "You were born on " + weekdayname + " and your Akan name is " + akanname + "!"

}

