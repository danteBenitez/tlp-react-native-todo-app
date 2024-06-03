import dayjs from 'dayjs';
import isTomorrowPlugin from 'dayjs/plugin/isTomorrow';
import isTodayPlugin from 'dayjs/plugin/isToday';

dayjs.extend(isTomorrowPlugin);
dayjs.extend(isTodayPlugin)

export function isTomorrow(date: Date) {
    return dayjs(date).isTomorrow();
}
export function isToday(date: Date) {
    return dayjs(date).isToday();
}
export function diff(a: Date, b: Date) {
    return dayjs(a).diff(b, "milliseconds");
}

export function fromToday(date: Date) {
    return diff(date, dayjs().toDate());
}
