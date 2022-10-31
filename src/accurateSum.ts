const accurateSum = (a: number, b: number, decimalPositions: number) => {
    const factor = 10 ** decimalPositions;
    return (a * factor + b * factor) / factor;
};

export default accurateSum;
