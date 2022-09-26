export const dataFormat = (time: Date) => {
    const timeHour = new Date();
    const minutes = Math.floor(
        (timeHour.getTime() - time.getTime()) / 60000
        )  
    return minutes;
}