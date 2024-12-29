const newUser= {
    name: 'Naimul Hasan',
    email: 'naim.microdeft@gmail.com',
    password: '12345678'

};


fetch('https://react-interview.crd4lc.easypanel.host/api/register',{
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(newUser) 
}).then(res =>{
    if(!res.ok){
        console.log('Problem');
        return;
    }
    return res.json();
})
.then(data => {
    console.log('success');
})
.catch(error =>{
    console.log(error);
})