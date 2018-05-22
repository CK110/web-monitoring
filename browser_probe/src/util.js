import _ from 'lodash';
function params(data){
    var str='';
    _.forEach(data,function(val,key){
        str+='&'+key+'='+encodeURIComponent(val);
    });
    return str.substr(1,str.length);
}


export {
    params
} 