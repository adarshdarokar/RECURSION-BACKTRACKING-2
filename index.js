function solve(ans,curr, i ,arr){
    if (i === arr.length){
        ans.push ([...curr]);
        return;
    }
 
    curr.push(arr [i]);
    solve(ans,curr,i+1,arr);
    curr.pop();
    while (i+1 <arr.length && arr[i] === arr[i +1]){
        i++;
    }
        curr.pop();
    solve =(ans,curr,i+1,arr);
}
let arr= [1,2,2];
let ans = [];
solve (ans,[],0,arr);
console.log(ans);
