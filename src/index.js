module.exports = function check(str, bracketsConfig) {
  var arr = [];
  for (var i = 0; i < str.length; i++){
    for (var j = 0; j < bracketsConfig.length; j++){
      if (str[i] === bracketsConfig[j][0]){
        arr.push(str[i]);
      
      } else if (str[i] === bracketsConfig[j][1]){
        if (arr[arr.length - 1 ] === bracketsConfig[j][0]){
          arr.pop();
        }

      }
    }
  }
  if (arr.length === 0){
    return true;
  } else {
    return false;
  }
}
