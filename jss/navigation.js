$(function () {
    var bindDatePicker = function () {
        $(".date").datetimepicker({
            format: 'YYYY-MM-DD',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            }
        }).find('input:first').on("blur", function () {
            // check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
            // update the format if it's yyyy-mm-dd
            var date = parseDate($(this).val());

            if (!isValidDate(date)) {
                //create date based on momentjs (we have that)
                date = moment().format('YYYY-MM-DD');
            }

            $(this).val(date);
        });
    }

    var isValidDate = function (value, format) {
        format = format || false;
        // lets parse the date to the best of our knowledge
        if (format) {
            value = parseDate(value);
        }

        var timestamp = Date.parse(value);

        return isNaN(timestamp) == false;
    }

    var parseDate = function (value) {
        var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
        if (m)
            value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);

        return value;
    }

    bindDatePicker();
});
(function bday_array() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var fnames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var mnames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

    Date.prototype.getfName = function () {
        return fnames[this.getDay()];
    };
    Date.prototype.getmName = function () {
        return mnames[this.getDay()];
    };
    Date.prototype.getDayName = function () {
        return days[this.getDay()];
    };
})();

let year = parseInt(prompt("Year(XXXX)", ""));
let month = parseInt(prompt("Month (XX)", ""));
let day = parseInt(prompt("Day (XX)", ""));
let sex = prompt("Are you female?(Y/N)", "");
let month2 = month - 1;
let bday = new Date(year, month2, day);
let weekday = bday.getDayName();
let fname = bday.getfName();
let mname = bday.getmName();
console.log("You were born on " + weekday)
if (sex = "Y") {
    console.log("Your Akan name is " + fname);
} else {
    console.log("Your Akan name is " + mname)
}

