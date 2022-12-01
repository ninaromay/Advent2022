// How many calories does the elf carrying most calories
// 1 - sum up elves' calories
// 2 - who has most

// Array of array of calories each carry

// function syncReadFile(filename) {
//     const contents = readFileSync(filename, 'utf-8');
  
//     const arr = contents.split(/\r?\n/);
  
//     console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
  
//     return arr;
// }
  
// syncReadFile('input.txt');

const input = [
    [10130, 9819, 4257, 8400, 10994, 3758, 8326], 
    [9002, 15602, 1193, 6805, 10797],
    [9435, 6559, 11512, 12051, 2687, 2850, 3752],
    [6656, 5869, 5033, 7164, 1708, 3689, 2218, 6642, 1913, 1494, 1403, 4269]
]

const fattest = (data) => {
    let sum = 0;
    const fat = [];
    data.forEach(elf => {
        
        elf.map((cal) => {
            sum = sum + cal;
            // console.log(sum);
            return sum;
        }, 0)
        // console.log('elf:' + sum);
        fat.push(sum);
        console.log(fat);
    });
    // console.log(data);
    let fatty = 0;
    for(let x = 0; x < fat.length; x++){
        if(x === 0){
            fatty = fat[x];
        } else {
            if(fat[x] > fat[x - 1]){
                fatty = fat[x];
            } else {
                fatty = fat[x - 1];
            }
        }
    }
    console.log(fatty);
}

fattest(input);