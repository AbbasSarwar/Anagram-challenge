module.exports = function (str1,str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    str1 = str1.replace(/[^a-z0-9]/g, "");
    str2 = str2.replace(/[^a-z0-9]/g, "");
    str1Arr = str1.split('').sort();
    str2Arr = str2.split('').sort();
    if(str1Arr.join('') === str2Arr.join('')){
      return true;
    }else{
      return false
    }
}