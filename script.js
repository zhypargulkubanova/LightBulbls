
const tableElements = document.querySelectorAll('.white1')
function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(child)

        if(eventHandler.contains(closestChild)){
            what(event, closestChild)
        }
    }

    parent.addEventListener(when, eventHandlerFunction)
}

const table = document.querySelector('#table1')

function makeYellow(i, j) {
    let arrSize = table.rows.length

    let k = j + 1
    while (k < arrSize && !table.rows[i].cells[k].classList.contains('forblack')) {
        if (!table.rows[i].cells[k].classList.contains('newStyle')) {
            table.rows[i].cells[k].style.backgroundColor = '#faf87d'
        }
        k++
    }
    k = j - 1
    while (k >= 0 && !table.rows[i].cells[k].classList.contains('forblack')) {
        if (!table.rows[i].cells[k].classList.contains('newStyle')) {
            table.rows[i].cells[k].style.backgroundColor = '#faf87d'
        }
        k--
    }
    k = i + 1
    while (k < arrSize && !table.rows[k].cells[j].classList.contains('forblack')) {
        if (!table.rows[k].cells[j].classList.contains('newStyle')) { table.rows[k].cells[j].style.backgroundColor = '#faf87d' }
        k++
    }
    k = i - 1
    while (k >= 0 && !table.rows[k].cells[j].classList.contains('forblack')) {
        if (!table.rows[k].cells[j].classList.contains('newStyle')) { table.rows[k].cells[j].style.backgroundColor = '#faf87d' }
        k--
    }
}
function makeWhite(i, j) {
    let arrSize = table.rows.length

    let k = j + 1
    while (k < arrSize && !table.rows[i].cells[k].classList.contains('forblack')) {
        if (!table.rows[i].cells[k].classList.contains('newStyle')) {
            table.rows[i].cells[k].style.removeProperty("background-color");
        }
        k++
    }
    k = j - 1
    while (k >= 0 && !table.rows[i].cells[k].classList.contains('forblack')) {
        if (!table.rows[i].cells[k].classList.contains('newStyle')) {
            table.rows[i].cells[k].style.removeProperty("background-color");
        }
        k--
    }
    k = i + 1
    while (k < arrSize && !table.rows[k].cells[j].classList.contains('forblack')) {
        if (!table.rows[k].cells[j].classList.contains('newStyle')) { table.rows[k].cells[j].style.removeProperty("background-color"); }
        k++
    }
    k = i - 1
    while (k >= 0 && !table.rows[k].cells[j].classList.contains('forblack')) {
        if (!table.rows[k].cells[j].classList.contains('newStyle')) { table.rows[k].cells[j].style.removeProperty("background-color");}
        k--
    }
}


const arrOfCells = []
const forClick = document.querySelector('#table1')
    let v = document.querySelector('td')
    delegate(forClick, 'td', 'click', (event) => {   
        if(!event.target.classList.contains('forblack')){
            if(event.target.classList.contains('newStyle')) {
            event.target.classList.remove('newStyle')
            let col = event.target.cellIndex
            let row = event.target.parentNode.rowIndex
            makeWhite(row,col)
            

        } else if(!event.target.classList.contains('newStyle')) {
            let col1 = event.target.cellIndex
            let row1 = event.target.parentNode.rowIndex
            makeYellow(row1,col1)
            event.target.classList.add('newStyle')
            
            
        }       
       
        }      


 })


const input = document.querySelector('input')
const output = document.getElementById('output')

function logSubmit(event) {
    const ins = input.value
    log.textContent = `Name of player: ${ins}`;
    event.preventDefault();

    

  }
  
  const form = document.getElementById('form');



  var el = document.getElementById('secondsCounter');

const resetbtn = document.getElementById('resetButton')
resetbtn.addEventListener('click', () => {
    tableElements.forEach(cell => {
        cell.classList.remove("newStyle");
        cell.style.removeProperty("background-color")
        window.clearInterval(myTimer);
        var sc=0;
        myTimer = window.setInterval(function() {sc++; document.getElementById('secondsCounter4').innerText = "Time elapsed in seconds: " + sc}, 1000);
        document.getElementById('secondsCounter').style.display = 'none'
        document.getElementById('secondsCounter2').style.display = 'none'
        document.getElementById('secondsCounter3').style.display = 'none'
        document.getElementById('secondsCounter4').style.display = 'block'
    })
})

var myTimer 
const finishButton = document.getElementById('finishButton')
finishButton.addEventListener('click', () => {
    const cell1 = document.getElementById('cl1')
    const cell6 = document.getElementById('cl6')
    const cell11 = document.getElementById('cl11')
    const cell14 = document.getElementById('cl14')
    const cell23 = document.getElementById('cl23')
    const cell34 = document.getElementById('cl34')
    const cell36 = document.getElementById('cl36')
    const cell39 = document.getElementById('cl39')
    const cell42 = document.getElementById('cl42')
    const cell45 = document.getElementById('cl45')
    const cell47 = document.getElementById('cl47')


    if((cell1.classList.contains('newStyle')) && cell11.classList.contains('newStyle') && cell6.classList.contains('newStyle') && cell14.classList.contains('newStyle') && cell23.classList.contains('newStyle')
        && cell34.classList.contains('newStyle') && cell36.classList.contains('newStyle') && cell39.classList.contains('newStyle') && cell42.classList.contains('newStyle') && cell45.classList.contains('newStyle') && cell47.classList.contains('newStyle')

) {   

        var popup = document.getElementById("myPopup");
        popup.classList.add("show");
      
        popup.addEventListener('click', () => {
            tableElements.forEach(cell => {
                cell.classList.remove("newStyle");
                cell.style.removeProperty("background-color")
                popup.classList.remove("show");
                window.clearInterval(myTimer);
                var sc=0;
                myTimer = window.setInterval(function() {sc++; document.getElementById('secondsCounter3').innerText = "Time elapsed in seconds: " + sc}, 1000);
                document.getElementById('secondsCounter').style.display = 'none'
                document.getElementById('secondsCounter2').style.display = 'none'
                document.getElementById('secondsCounter3').style.display = 'block'
                document.getElementById('secondsCounter4').style.display = 'none'
            })
        }) 
        
        
} else{
    var popup = document.getElementById("myPopup2");
        popup.classList.add("show");
      
        popup.addEventListener('click', () => {
            tableElements.forEach(cell => {
                cell.classList.remove("newStyle");
                cell.style.removeProperty("background-color")
                popup.classList.remove("show"); 
                window.clearInterval(myTimer);
        var sc=0;
        myTimer = window.setInterval(function() {sc++; document.getElementById('secondsCounter2').innerText = "Time elapsed in seconds: " + sc}, 1000);
                document.getElementById('secondsCounter').style.display = 'none'
                document.getElementById('secondsCounter2').style.display = 'block'
                document.getElementById('secondsCounter3').style.display = 'none'
                document.getElementById('secondsCounter4').style.display = 'none'
                
            })
        }) 

}
}
)

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
  }

const startGameBtn = document.getElementById('startGame')
const popupMain = document.getElementById('myPopup1')
popupMain.classList.add("show")
var cancel
startGameBtn.addEventListener('click', () => {
    var x = document.getElementById("myText").value;
    test.firstName = x
    document.getElementById("demo").innerHTML = x;
    myTimer = window.setInterval(incrementSeconds1, 1000);
    const popupMain = document.getElementById('myPopup1')
    popupMain.classList.remove("show")
    document.getElementById('secondsCounter2').style.display = 'none'
    document.getElementById('secondsCounter3').style.display = 'none'
    document.getElementById('secondsCounter4').style.display = 'none'



})
console.log(document.getElementById("demo").value)


var startTime, endTime;

function start() {
  startTime = performance.now();
};

function end() {
  endTime = performance.now();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000; 

  var seconds = Math.round(timeDiff);

  
}




var seconds1 = 0;
function incrementSeconds1() {

    seconds1 +=1;
    el.innerText = "Time elapsed in seconds: " + seconds1
    test.time = seconds1
    

}





const test = {
    firstName: 'testFirstName',
    time: 'testTime'
  };


localStorage.setItem('testObject', JSON.stringify(test));

var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));


