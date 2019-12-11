export const numberWithCommas = (int: number) => int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
