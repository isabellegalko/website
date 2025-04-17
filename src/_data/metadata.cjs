module.exports = function (configData) {
    let metadata = {
        "title": "Isabelle Galko",
        "url": "https://isabellegalko.com",
        "language": "en",
        "description": "Isabelle's personal website",
        "author": {
            "name": "Isabelle Galko",
        },
        "feedUrl": "https://isabellegalko.com/feed.xml"
    };

    let dev = {
        "title": "DEV - Isabelle Galko",
        "url": "http://localhost:8080"
    }

    if (configData.eleventy.env.runMode === "serve") {
        return Object.assign({}, metadata, dev);
    } else {
        return metadata;
    }
};