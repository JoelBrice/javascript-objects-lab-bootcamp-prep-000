var recipes = {
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value});
}

 function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key]=value;
   return object;
 }
// delete a key inside the object directly
function deleteFromObjectByKey(object, key){
  delete [key]
  return Object.assign({},object,[key]);
}
// develete a key using object

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
