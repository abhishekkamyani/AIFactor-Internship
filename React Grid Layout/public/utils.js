export const total_bill = [16.99, 10.34, 21.01, 23.68, 24.59, 25.29, 8.77, 26.88, 15.04, 14.78, 10.27, 35.26, 15.42, 18.43, 14.83, 21.58, 10.33, 16.29, 16.97, 20.65, 17.92, 20.29, 15.77, 39.42, 19.82, 17.81, 13.37, 12.69, 21.7, 19.65, 9.55, 18.35, 15.06, 20.69, 17.78, 24.06, 16.31, 16.93, 18.69, 31.27, 16.04, 17.46, 13.94, 9.68, 30.4, 18.29, 22.23, 32.4, 28.55, 18.04, 12.54, 10.29, 34.81, 9.94, 25.56, 19.49, 38.01, 26.41, 11.24, 48.27, 20.29, 13.81, 11.02, 18.29, 17.59, 20.08, 16.45, 3.07, 20.23, 15.01, 12.02, 17.07, 26.86, 25.28, 14.73, 10.51, 17.92, 27.2, 22.76, 17.29, 19.44, 16.66, 10.07, 32.68, 15.98, 34.83, 13.03, 18.28, 24.71, 21.16, 28.97, 22.49, 5.75, 16.32, 22.75, 40.17, 27.28, 12.03, 21.01, 12.46, 11.35, 15.38, 44.3, 22.42, 20.92, 15.36, 20.49, 25.21, 18.24, 14.31, 14.0, 7.25, 38.07, 23.95, 25.71, 17.31, 29.93, 10.65, 12.43, 24.08, 11.69, 13.42, 14.26, 15.95, 12.48, 29.8, 8.52, 14.52, 11.38, 22.82, 19.08, 20.27, 11.17, 12.26, 18.26, 8.51, 10.33, 14.15, 16.0, 13.16, 17.47, 34.3, 41.19, 27.05, 16.43, 8.35, 18.64, 11.87, 9.78, 7.51, 14.07, 13.13, 17.26, 24.55, 19.77, 29.85, 48.17, 25.0, 13.39, 16.49, 21.5, 12.66, 16.21, 13.81, 17.51, 24.52, 20.76, 31.71, 10.59, 10.63, 50.81, 15.81, 7.25, 31.85, 16.82, 32.9, 17.89, 14.48, 9.6, 34.63, 34.65, 23.33, 45.35, 23.17, 40.55, 20.69, 20.9, 30.46, 18.15, 23.1, 15.69, 19.81, 28.44, 15.48, 16.58, 7.56, 10.34, 43.11, 13.0, 13.51, 18.71, 12.74, 13.0, 16.4, 20.53, 16.47, 26.59, 38.73, 24.27, 12.76, 30.06, 25.89, 48.33, 13.27, 28.17, 12.9, 28.15, 11.59, 7.74, 30.14, 12.16, 13.42, 8.58, 15.98, 13.42, 16.27, 10.09, 20.45, 13.28, 22.12, 24.01, 15.69, 11.61, 10.77, 15.53, 10.07, 12.6, 32.83, 35.83, 29.03, 27.18, 22.67, 17.82, 18.78];


export const getBoxPlotData = (data = []) => {
    data.sort((a, b) => a - b);
    const min = data[0];
    const max = data[data.length - 1];
    const q1 = data[Math.floor(data.length * 0.25)];
    const median = data[Math.floor(data.length * 0.5)];
    const q3 = data[Math.floor(data.length * 0.75)];

    const iqr = q3 - q1;
    const lowerBound = q1 - 1.5 * iqr;
    const upperBound = q3 + 1.5 * iqr;


    const filteredData = data.filter(x => x >= lowerBound && x <= upperBound);
    const outliers = data.filter(value => (value < lowerBound) || (value > upperBound));



    return {
        boxData: [Math.min(...filteredData), q1, median, q3, Math.max(...filteredData)],
        outliers
    };
}