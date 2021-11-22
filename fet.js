const axios = require('axios').default;
axios
    .get('https://fortnite-api.com/v1/playlists')
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })