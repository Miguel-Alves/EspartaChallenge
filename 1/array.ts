function solution(array: Array<number>) {
    let unpaired: number = 0;
    array.map(function(value, index) {
        if(value !== array[index+2] && value !== array[index-2]){
            //As the problem states that all numbers are PAIRED, so this verification 
            //works specifically to this problem
            unpaired = value;
        }
        console.log('Anterior ', array[index-2], '\nPróximo: ', array[index+2]);

    })
    return unpaired;
}
var array = [1,3,1]
var teste = solution(array);