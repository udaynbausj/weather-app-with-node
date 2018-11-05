const request = require('request');

module.exports.geocodeAddress = function(address){
    var Encoded_location = encodeURI(address);
    console.log(Encoded_location);
    request({
        url : 'http://www.mapquestapi.com/geocoding/v1/address?key=R03EHcm0zfj8YWyhEcQnhAbnSa67aoNw\n' +
            `\n&location=${Encoded_location}`,
        json : true
    },(error,response,body) =>{
        //console.log(JSON.stringify(body,undefined,4));
        //console.log(body.results[0].locations[0].latLng);
        console.log(response.body.results.locations);
        if(error){
            console.log('Unable to reach the server :(');
            //window.alert('Unable to reach the server :(');
        }else if(body.status === 'ZERO_RESULTS'){
            console.log('Please enter valid address');
            //window.alert('Please enter valid address');
        }else{
            //window.alert(`Latitude is : ${body.results[0].locations[0].latLng.lat}`);
            //window.alert(`Longitude is : ${body.results[0].locations[0].latLng.lng}`);
            console.log(`Latitude is : ${body.results[0].locations[0].latLng.lat}`);
            console.log(`Longitude is : ${body.results[0].locations[0].latLng.lng}`);
        }
    });
};