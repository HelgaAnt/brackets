module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.join(',');
  bracketsConfig = bracketsConfig.split(',');
  let arr = [];
  let temp = '';
  let tt =  '';
   
  for (let i = 0; i < bracketsConfig.length; i = i + 2){
  
    if ( bracketsConfig[i] == '(' || bracketsConfig[i] == '[' || bracketsConfig[i] == '{' || bracketsConfig[i] == '|' )  
      tt = '\\' + bracketsConfig[i] + '\\' +  bracketsConfig[i+1];
    else
      tt = bracketsConfig[i] + bracketsConfig[i+1];
   
    temp = RegExp(tt, 'g');    
    arr.push(temp);
  }

  let fl = 1;  
  let iter = 0;    
  while ( fl != 0) {   
    let arrfl = []; 
    fl = 0;
    for (let i = 0; i< arr.length; i++){
    
        if (arr[i].test(str)){ 
          str = str.replace(arr[i], '');
          arrfl[i] = 1;
        }  
        else
          arrfl[i] = 0;

    }
    for (let i = 0; i<arrfl.length; i++){
      fl = fl + arrfl[i];
    }
    console.log('fl = '+fl);
    console.log(str.length);
  }

    console.log('результат str = ', str);
    
    return (str.length == 0)? true : false;
  
}

