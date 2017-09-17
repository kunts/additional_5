module.exports = function check(str, bracketsConfig) {
  var arr = [];
  var flag = 0;

  for (var i = 0; i < str.length; i++){
    for (var j = 0; j < bracketsConfig.length; j++){

      if (str[i] === bracketsConfig[j][0]){
            if(bracketsConfig[j][0] !== bracketsConfig[j][1] ){
               arr.push(str[i]);
            } else if (flag === 0){
               arr.push(str[i]);
               flag = 1;
            } else if(arr[arr.length -1] === bracketsConfig[j][0]){
               flag = 0 ;
               arr.pop();
               break;
          }


      } else if (str[i] === bracketsConfig[j][1] ){

        if (arr[arr.length - 1 ] === bracketsConfig[j][0] && arr.length != 0){

          arr.pop();
          break;
        } else {
          return false;
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
