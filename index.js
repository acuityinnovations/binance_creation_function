const axios = require("axios");

exports.handler = async (event) => {
        console.info(event)

        const {method, url, headers, body} = event;

        const config = {
            method: method.toLowerCase(),
            url: url,
            headers: headers
        }

        if (body) {
            config.data = body;
        }

        return await axios(config)
            .then(response => {
                console.info(response.data);
            })
            .catch(error => {
                console.warn(error);
            });

};
