const fetchRandomData=()=>{
  return axios.get('https://randomuser.me/api')
  .then(res => {
    // handle success
    console.log(res);
  })
  .catch(err => {
    // handle error
    console.log(err);
  });
}