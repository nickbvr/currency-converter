export const getCurrency = (data, value) => {
    return Object.keys(data.rates)[Object.keys(data.rates).indexOf(value)];
};
