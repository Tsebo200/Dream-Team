import axios from "axios";

axios.get('https://balldontlie.io/api/v1/stats')
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);  
});