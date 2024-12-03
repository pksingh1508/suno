
export const convertSecondToTime = (second: number) => {
    let minutes = Math.floor(second / 60);
    let seconds = second - (60 * minutes);
    return `${minutes} : ${seconds}`;
}