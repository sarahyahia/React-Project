class Api {
    static async getMovies(){
        let res = await fetch("https://reqres.in/api/users?page=2",{
            method:"GET",    
            headers:{
                "content-type":"application/json"
            }
        })
        res = await res.json();
    console.log(res);
        return res.data;
    }
    static async login(user){
		
        let res = await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        });

        res = await res.json();
        let ret = {}
        
        if(res.error){
            ret.error =res.error
        }else if(res.token){
            localStorage.token=res.token;
            ret.token = res.token;
        }

        return ret;
		
    }
}


export default Api;