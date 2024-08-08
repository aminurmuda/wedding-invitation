// to match format of encoded url for google calendar
export const encodedString = (normalString: string)=> {
    return encodeURIComponent(normalString).replace(/%20/g, '+').replace(/%0A/g, '%0D%0A');
}
