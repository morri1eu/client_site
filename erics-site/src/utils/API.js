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
}
}
