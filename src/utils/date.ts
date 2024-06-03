import dayjs from 'dayjs';

export function isTomorrow(date: Date)  {
    return dayjs().add(1, "day").diff(date, "hours") < 24;
}

export function isToday(date: Date) {
    return dayjs().diff(date, "hours") < 24;
}
