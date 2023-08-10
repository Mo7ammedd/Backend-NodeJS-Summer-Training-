const ckeckError = (response) => {
    return response.status(400).send('enter the correct data');
}

module.exports = ckeckError;