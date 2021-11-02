import en from 'javascript-time-ago/locale/en.json'
import TimeAgo from 'javascript-time-ago'

TimeAgo.addDefaultLocale(en)

export const timeAgo = (period) => {
    const timeAgo = new TimeAgo('en-US');
    return timeAgo.format(new Date(period).getTime())
}
