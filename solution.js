//FUNCTION TO GET THE DAY OF THE PARTICULAR DATE USING TOMOHIKO SAKAMOTO'S ALGORITHM

function getDay(date) {
    let y = parseInt(date.substring(0, 4));
    let m = parseInt(date.substring(5, 7));
    let d = parseInt(date.substring(8));

    let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    y -= (m < 3) ? 1 : 0;
    return (y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + t[m-1] + d) % 7;
}



//FUNCTION SOLUTION (D){...}

function solution(D) {
    /*
        here indexing of the array newValues begins with sunday not monday i.e. 
        index 0 will refer to sunday, index 1 will refer to monday and so on...
    */
    let newValues = [0, 0, 0, 0, 0, 0, 0]

    for(let key in D) {
        let date = key;
        let value = D[key];
        newValues[getDay(date)] += value;
    }

    for(let i = 2; i < newValues.length; ++i) {
        if(newValues[i] == 0) {
            newValues[i] = 2*newValues[i-1]-newValues[i-2];
        }
    }

    let ans = {
        'Mon': newValues[1],
        'Tue': newValues[2],
        'Wed': newValues[3],
        'Thu': newValues[4],
        'Fri': newValues[5],
        'Sat': newValues[6],
        'Sun': newValues[0]
    }

    return ans;
}


//INPUT TEST CASE

const D =  {
    '2020-01-01':6,
    '2020-01-04':12,
    '2020-01-05':14,
    '2020-01-06':2,
    '2020-01-07':4
}

console.log(solution(D))