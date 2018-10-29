import axios from "axios"


export default {
// Gets all Products
getProducts: function() {
    return axios.get("/api/products");
  },
getProduct: function(id){
  console.log("proxy hit")
  return axios.get("/api/products/"+id)
},
getProductsByCategory: function(type){
  console.log(type)
  return axios.get("/api/products/category/"+type)
},
getWorkout: function(params){
  console.log(params)
  return axios.get("/api/workouts/"+params.level+"/"+params.body_part)
},
saveUser: function(userData){
  return axios.post("/api/users", userData)
},
saveSession: function(sessionData){
  return axios.post("/api/sessions", sessionData)
},
getSessionsByEmail: function(email){
  return axios.get("/api/sessions/"+ email)
},
getSessions: function(){
  return axios.get("/api/sessions")
}

}
