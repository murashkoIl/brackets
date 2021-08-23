module.exports = function check(str, bracketsConfig) {
  let a = str.split('');
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if ( a[i] === bracketsConfig[j][0] && a[i + 1] === bracketsConfig[j][1] ) {
        a.splice (i, 2);
        i = -1;
        continue; 
      }
    }
  }
  return a.length === 0 ? true : false;
}
