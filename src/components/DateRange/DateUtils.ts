import CustomDate from '../DatePicker/Date';

export function getFirstDayOfTheWeek() {
    return getWeekBorder(true);
}

export function getLastDayOfTheWeek() {
    return getWeekBorder(false);
}

function getWeekBorder(start: boolean = true) {
    let d = new Date();
    let day = d.getDay();
    let diff = d.getDate() - day + (start ? 0 : 6);
    return toCustomDate(new Date(d.setDate(diff)));
}

export function getFirstDayOfTheMonth() {
    let d = new Date();
    return toCustomDate(new Date(d.getFullYear(), d.getMonth(), 1));
}
    
export function getFirstDayOfTheYear() {
    let d = new Date();
    return toCustomDate(new Date(d.getFullYear(), 0, 1));
}

export function getNow() {
    return toCustomDate(new Date());
}

function toCustomDate(date: Date): CustomDate {
    return {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
    };
}