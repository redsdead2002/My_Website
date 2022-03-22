


function openNav(){
                   document.getElementById("mySidenav").style.width ="250px";}


function closeNav(){
                    document.getElementById("mySidenav").style.width ="0";}






/* Javascript section 1 start*/


function changeColor(element){
   var currentColor = element.style.backgroundColor;
    if(currentColor == "red"){
        element.style.backgroundColor = "green";
        } else{
            element.style.backgroundColor = "red";
            }
            }

document.getElementById("btn1").onclick = function(){
     alert("I am a Dialog Box!")
    }


/* what can javascript do*/

function dem2(){
              document.getElementById("demo2").innerHTML = "Hello Everyone!";
			  }


function dem3(){
               document.getElementById("demo3").style.color = "green";
               document.getElementById("demo3").style.fontWeight = "bold";
               document.getElementById("demo3").style.fontSize = "45px";
			   }


/*Sow/hide*/
function show(){
             document.getElementById("showHide").style.display = "block";
             }
function hide(){
             document.getElementById("showHide").style.display = "none";
             }


  /* Event demo 1 */           
			 let btn = document.getElementById("demo1");

			 // This it the event handler
			 btn.onclick = function(){
				 alert("The button was clicked.");
			 };

/* event demo 2 */
function myFunc1(){
    alert("Hello World!");
}

/* event demo 3 */
var but1 = document.getElementById("but1"); 
 
 but1.addEventListener("click", function(){
			alert("And another alert")
		});

/* demo 4*/

document.getElementById("mySelect").addEventListener("change",myFunc);
	
function myFunc(){
let val = document.getElementById("mySelect").value;
	document.getElementById("demo4").innerHTML = 'You Selected: ' +  val;
}

/* demo 5*/

let elem = document.getElementById("demo5");
					 
					elem.addEventListener("mouseover", function() {
						elem.innerHTML = "Hello World!";
					});

/* demo 6 */
let area = document.getElementById("area");

				area.addEventListener("focus", function(){
					area.style.background = "red";
				});

 /* demo 7 */

 let area1 = document.getElementById("area1");
			
				area1.addEventListener("focus", function(){
					area1.style.background = "red";
				});
                area1.addEventListener("blur", function(){
					area1.style.background = "white";
				});

/* demo 8*/

window.addEventListener("resize", function() {
    document.getElementById("windowWidth").innerHTML = window.innerWidth;
    document.getElementById("windowHeight").innerHTML = window.innerHeight;
    });


	

    /* javascript section 1 ends */


    



    /* javascript section 2 starts */








    /* javascript section 2 ends */