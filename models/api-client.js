const axios = require('axios');

module.exports = class ApiClient {

    static async post(url, args, headers) {


        //console.log(url);
        //console.log('HEADERS:',headers);
        //console.log('XML:',xml);
    
        const resp = await axios.post(url, args, headers);

        //console.log(resp);

        return resp;
        
        /*
        try {
            const resp = await axios.post(url, xml, headers);
            console.log(resp);

        } catch (error) {
            console.error(error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }



        return resp;
        */
    }

}


