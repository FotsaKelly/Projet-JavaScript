
let count = 0;
document.getElementById('result').innerText = count
document.getElementById('input-value').addEventListener('input', (event) => {
    count = event.target.value;
  
});

const increment =()=> {
    count = parseInt(count) + 1;
    document.getElementById('result').innerText = count;
}

document.getElementById('increment-button').addEventListener('click', increment);

;