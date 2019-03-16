module.exports = (argv) => {
    const params = argv.slice(2);
    const operation = params.find(e => isNaN(e));
    if (!operation) throw new Error('you must specify operation');
    const operands = params
        .filter(e => !isNaN(e))
        .map(Number);

    return ({
        operation,
        operands
    });
};