function solution(array: Array<number>) {
    array.map(function(value, index) {
        for (let i = array.length-1; i>=0; i--) {
            if (index === i) {
                //do nothing
            }
            else if(value === array[i]){
                array.splice(i,1);
            }
        }
    });
    console.log(array.length);
    return array.length;
}
var array = [2,1,1,2,3,1]
var teste = solution(array);
