const request = require('request');

module.exports.geocodeAddress = function(address){
    var Encoded_location = encodeURI(address);
    console.log(Encoded_location);
    request({
        url : `https://geocode.xyz/${Encoded_location}?json=1`,
        //url : `https://maps.googleapis.com/maps/api/geocode/json?address=${Encoded_location}key=YOURKEY`,
        json : true
    },(error,response,body) =>{
        //console.log(JSON.stringify(body,undefined,4));
        //console.log(body.results[0].locations[0].latLng);
        //console.log(response.body);
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
            module.exports.latitude = body.results[0].locations[0].latLng.lat;
            module.exports.longitude =body.results[0].locations[0].latLng.lng;

            //integrating weather app
            request({
                    //url: `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`,
                    url:`https://api.darksky.net/forecast/YOURKEY/${body.results[0].locations[0].latLng.lat},${body.results[0].locations[0].latLng.lng}`,
                    json:true
                },(error,response,body) => {
                    console.log(body);
                }
            );
        }
    });
};
