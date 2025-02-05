const getTypeFromUrl = (url) => {
    return url.split('/')[4]
}

const getIdFromUrl = (url) => {
    return url.split('/')[5]
}

module.exports = {getTypeFromUrl, getIdFromUrl};