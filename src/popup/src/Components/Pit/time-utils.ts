export const sum = (numbers: string) =>
    // eslint-disable-next-line
    eval(
        numbers
            .split(/\s/)
            .filter((e) => e.length)
            .map((str) => str.replace(',', '.'))
            .map((str) => str.trim())
            .join('+')
    )

function getMinutes(now: any, then: any) {
    return now.getMinutes() > then.getMinutes()
        ? now.getMinutes() - then.getMinutes()
        : 60 - (then.getMinutes() - now.getMinutes())
}

export interface Tid {
    hh: number
    mm: number
}
export const tid = (hh: number, mm: number = 0): Tid => {
    var start = new Date()
    start.setHours(hh)
    start.setMinutes(mm)

    var now = new Date()
    return {
        hh: now.getHours() - start.getHours(),
        mm: getMinutes(now, start),
    }
}
