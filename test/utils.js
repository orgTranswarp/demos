
var utils = {

	trim: function(text) {
    var trimLeft = /^\s+/, trimRight = /\s+$/;
    return text.toString().replace( trimLeft, "" ).replace( trimRight, "" );
  },

  replace: function(text) {
    return text && text.replace(/[\.\d\s]/g, '');
  },

  isIp: function(ip) {
    if(!ip || utils.replace(ip).length>0) return false;

    var arr = utils.trim(ip).split('.');
    if (arr.length > 4) return false;

    var swap = '';
    var flag = arr.some(function(item, idx){
      swap = utils.trim(item);
      return (+swap>255 || 
      	+swap.toString()+''==='NaN'|| 
      		swap.indexOf('0')===0 && +swap!=0||
      			(idx==0||idx==3)&& +swap===0
      			);
    });
    return !flag;
  },

  convertIPTo32bitInteger: function(ip) {
  	if(!utils.isIp) return false;

    var arr = ip.split('.');
    var result = 0;
    var faciend = 256*256*256;
    arr.map(function(item){
      result += item*faciend;
      faciend = faciend/256;
    });
    return result;
  }

}

module.exports = utils;