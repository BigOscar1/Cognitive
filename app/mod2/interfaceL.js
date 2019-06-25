class InterfaceL{

 
    // ProEmp/credential-user/:login/:password

    login(login,pass){
        let url = cnxL.getUrl();
        url += `/ProEmp/credential-user/${login}/${pass}`;
        cnxL.get(url)
        .then(res =>{
            console.log(res.credential);
            if(res.credential.length > 0){
                location.href = 'index.html';
            }else{  
                alert('Verifique sus credenciales o registrese');
            }
        })
        .catch(err =>console.log(err));
    }

}