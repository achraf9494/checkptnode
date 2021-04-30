// const sum = (a,b,c) => a+b+c;
// const a = parseInt(process.argv[2]);
// const b = parseInt(process.argv[3]);
// const c = parseInt(process.argv[4]);
// const a = (process.argv[2]);
// const b = (process.argv[3]);
// const c = (process.argv[4]);

console.log(process.argv.slice(2).reduce(function(acc,curr){
    return +acc + +curr;
}));
