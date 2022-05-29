export const deserialize = (arr) => {
    let ans = [[], [] , []];

    arr.forEach((element, index) => {
        let loc = Math.floor(index / 3);
        ans[loc].push(element);
    });

    return ans;
}

export const serialize = (arr) => {
    let ans = [];

    arr.forEach(row => {
        row.forEach(col => {
            ans.push(col);
        });
    })

    return ans;
}

export const checkWinner = (arr, row, col) => {
    let symbol = arr[row][col];
    let size = arr.length;
    let count = 0
    for(let i = 0; i < size; i++){
        if(arr[i][i] === symbol)
            count++;
    }

    if(count === size)
        return true;

    count = 0;
    for(let i = 0; i< size; i++){
        if(arr[i][size -i - 1] === symbol)
            count++;
    }

    if(count === size)
        return true;

    // veritcal
    count = 0
    for(let i = 0; i < size; i++){
        if(arr[row][i] === symbol)
            count++;
    }

    if(count === size)
        return true;
    
    count = 0
    for(let i = 0; i< size; i++){
        if(arr[i][col] === symbol)
            count++;
    }

    if(count === size)
        return true;
};
