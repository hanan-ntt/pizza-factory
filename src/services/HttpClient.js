const axios = require('axios').default;

const MakeApiCall = async (url) => {
    const res = await axios.get(url)
    .then(function (response){
        console.log("response from HttpClient.js", response.data);
        return response.data;

            /*for (var i=0; i<response.data.length; i++ ){
                pizzaToppings.append(response.data[i]);
            }*/
            /*console.log("done appending");
            for (var j=0; j<pizzaToppings.length; j++){
            }*/

    })
    .catch(function (error) {
            console.log(error);
    });
    return res;
}

export {MakeApiCall};