//Given two dates, your function should return which one comes before the other.
// Example:Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

function getDateObject(date) {
    let dateArr = date.split("/");
    return {
        day : Number(dateArr[0]),
        month : Number(dateArr[1]),
        year : Number(dateArr[2])
    };
}

function minDate(date1, date2) {
    let date1Obj = getDateObject(date1);
    let date2Obj = getDateObject(date2);
    
    if (date1Obj.year < date2Obj.year) {
        return date1;
    }

    if (date2Obj.year < date1Obj.year) {
        return date2;
    }

    if (date1Obj.year == date2Obj.year) {
        if (date1Obj.month < date2Obj.month) {
            return date1;
        }
        if (date2Obj.month < date1Obj.month) {
            return date2;
        }

        if (date1Obj.day < date2Obj.day) {
            return date1;
        }

        if (date2Obj < date1Obj) {
            return date2;
        }

        return `${date1} & ${date2} are equal.`;
    }
}

console.log(minDate('02/05/2021', '24/01/2021'));