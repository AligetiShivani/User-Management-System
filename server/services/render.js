const axios=require('axios');
const { render } = require('ejs');

exports.homeRoutes=(req,res)=>{
     //make a get request to /api/users
     axios.get("http://localhost:8080/api/users")
     .then(function(response){
        console.log(response)
        res.render('index',{ users : response.data});
     })
     .catch(err=>{
        res.send(err);
        console.log(err);
     })

}
exports.addUser=(req,res)=>{
    return res.render("addUser");
}
exports.updateUser=(req,res)=>{
    axios.get("http://localhost:8080/api/users",{params:{id:req.query.id}})
    .then(
        (userdata)=>{
            res.render("updateUser",{ user : userdata.data});
        }
    )
    .catch(err=>{
        res.send(err);
    })
}
exports.viewUser=(req,res)=>{
    axios.get("http://localhost:8080/api/users",{params:{id:req.query.id}})
    .then(
        (userdata)=>{
            res.render("viewUser",{ user : userdata.data});
        }
    )
    .catch(err=>{
        res.send(err);
    })
}
