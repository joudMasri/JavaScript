// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function ( btn ){
    btn.addEventListener("click" , function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')) count++;
        else
        if(styles.contains('decrease'))count--;
        else
        count= 0;

        if(count>0){
            value.style.color = "Green"
        }
        if(count<0){
            value.style.color = "Red"
        }
        if(count === 0){
            value.style.color = "Black"
        }

        value.textContent =count
    })
    
})

