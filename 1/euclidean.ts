function solution(N: number, M: number) {
    let chocolatesEaten: number = 0;
    let counter: number = 0
    let emptyWrappers: Array<number> = [];
    
    for (let i = 0; i<N; i++) {
        counter += M;
        if ( emptyWrappers.includes(counter%N) ) 
            return chocolatesEaten;
        chocolatesEaten++;
        emptyWrappers.push(counter % N);
    }
    return chocolatesEaten;
}
var teste = solution(10, 4);