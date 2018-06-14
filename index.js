var recipes = {
}
// Update the object with the key and value
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value});
}
// update the whole object using object, key and value;
 function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key]=value;
   return object;
 }
// delete a key inside the object directly
function deleteFromObjectByKey(object, key, value){
  delete object[key];
  return Object{{},object,{[key]: value}};
}
// develete a key using object

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
