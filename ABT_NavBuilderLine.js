   <script>
        document.addEventListener("DOMContentLoaded", () => {
            let dropDown = document.querySelectorAll(".dropdown");
            let menu = [...dropDown];
            let nav = document.getElementById("nav");
            let settings = document.querySelectorAll(".settingsLayout");
            let AddItemBtn = document.querySelectorAll(".AddBtn");
            let output = document.querySelector(".output");
            let copyBTN = document.querySelector(".CopiedBTNWrap");

        

function generateCode(btn, block){
    let defaultCode = `<!--  <script type='text/javascript'>
        document.addEventListener("DOMContentLoaded", () => { 
        class Navigation {
                constructor() {
                        this.navbarList = document.querySelector(".navbarList"),
                        this.dropDown = document.querySelectorAll(".dropdown"),
                        this.btn = document.querySelector("#navToggle"),
                        this.menu = [...this.dropDown];
                        this.toggleNav = this.toggleNav.bind(this);
                }

                toggleNav() {
                    this.navbarList.classList.toggle("Active");
                }
            }

            function ABT_Responsive(evnt){
                    if(evnt.target.nodeName == "LI"){
                     if(evnt.target.classList.contains("dropdown")){
                    if(evnt.target.lastChild.classList.contains("hidden")){
                     evnt.target.lastChild.classList.remove("hidden");
                 evnt.target.lastChild.classList.add("dropdownActive");
                     }else{
                    evnt.target.lastChild.classList.add("hidden");
                evnt.target.lastChild.classList.remove("dropdownActive");
                        }
                     }
                 }
             }
            
           
            let ABT = new Navigation();
            ABT.navbarList.addEventListener("click", ABT_Responsive)
            ABT.btn.addEventListener("click", ABT.toggleNav);

        });
  
 </script///>
 
<style>
:root {
--bgColor: black;
--textColor: rgb(255, 255, 255);
--border: #555658;
--dropDownColor: #000;
--fontSize: 15px;
--borderColor: red;
}

nav {
border: 2px solid var(--borderColor);
border-radius: var(--border) ;
}   

.nav * {
list-style: none;
margin: 0;
padding: 0;
box-sizing: border-box;
text-decoration: none;
color: var(--textColor);
}

.nav a {
    color: var(--textColor);
}

.nav {
    background: var(--bgColor);
}

.nav .navbarList {
    display: flex;
    text-align: center;
    border-bottom: 1px solid var(--border);
   
}

@keyframes ABT_HOVER {
    0% {
        top: 100vh;
        transform: rotate(360deg)
    }

    100% {
        top: 100%;
        transform: rotate(0deg)
    }
}

.dropContent {
    display: none;
    animation: ABT_HOVER .5s;
    animation-play-state: paused;
    animation-fill-mode: forwards;
    animation-play-state: paused;
    position: absolute;
    background-color: var(--bgColor);
    border-radius: var(--border) ;
    z-index: 123;
    width: 100%;
    left: 0px;
    top: 100%;
    animation-play-state: running;
    border: 1px solid var(--borderColor);
}

.nav li {
    padding: 18px 10px;
    color: inherit;
    margin: 0px;
    width: 100%;
}

.dropdown {
    position: relative;
}

.dropdown .dropContent {
    position: absolute;
    background-color: var(--bgColor);
    border-radius: var(--border) ;
}


.nav li:hover {
    cursor: pointer
}

.dropContent li {
    display: block;
    padding: 18px 10px;
    margin: 0px !important;
}

.dropContent li:not(:first-child) {
    border-top: 1px solid #555658;
}

.dropdown:hover {
    animation-play-state: running;
}

.hidden {
    display: none;
}

#navToggle {
    display: none;
}

@media screen and (min-width: 651px){
    .dropdown:hover .dropContent {
    display: block;
}
}

@media screen and (max-width: 650px) {

    .dropContent {
            position: relative!important;
            margin-top: 15px;
            }

@keyframes ABT_HOVER {
    0% {
        top: 100vh;
    }

    100% {
        top: 100%;
        transform: rotate(0deg)
    }
}

body {
    margin: 0px!important;
}

nav {
    box-sizing: border-box;
    width: 100%;
    position: relative;
    padding-top: 10px;
    padding-left: 10px;
}

#navToggle {
    display: block;
    font-size: 40px;
    cursor: pointer;
    color: var(--textColor);
}

.nav .navbarList {
    width: 100%;
    flex-wrap: wrap !important;
    display: none;
}

.Active {
    display: block !important;
}

.dropContent {
    animation: ABT_HOVER 1s;
    animation-play-state: paused;
    animation-fill-mode: forwards;
    animation-play-state: paused;
}

.dropdownActive {
    z-index: 123;
    display: block;
    width: 100%;
    left: 0px;
    top: 100%;
    animation-play-state: running;
}

.preview{
    max-width: 100%!important;
    width: 90%!important;
}


}

</style>

-->`;
    
    btn.addEventListener("click", () => {

        window.removeEventListener("scroll", changeFooterUI);
        copyBTN.style.display = 'inline-block';
        document.querySelector(".fixedUI").style.display = "none";
        document.querySelector(".GenerateCodeHereWrap").style.display = "block";
        block.innerText = "";
       // block.innerText = DefaultCode + output.innerHTML.trim();
       let patt = /(^<!--)|(-->$)/gm; //Remove Comments 
      let patt2 = /(<\/script\/\/\/>)/gm;
        let newBlock = defaultCode.trim().replace(patt, "");
      	let newestBlock = newBlock.replace(patt2, "<\/script>");
        block.innerText = newestBlock + output.innerHTML.trim();
        console.log(block.innerHTML)
       
        

        copyBTN.addEventListener("click", (e) => {
            document.querySelector("#tootip").innerText = "COPIED!";
            document.querySelector("#tootip").style.backgroundColor = "#449d44";
           // $("#tootip::after").style.borderColor = "green";
             window.getSelection().selectAllChildren(block);
            document.execCommand("copy");
        });

        copyBTN.addEventListener("mouseout", () => {
            var tooltip = document.getElementById("tootip");
            tooltip.innerHTML = "Click To Copy";
            document.querySelector("#tootip").style.backgroundColor = "#555";
        })


    });
}

let genBTN = document.querySelector("#generateCode");
let appendBOX = document.querySelector(".generatedCode");

generateCode(genBTN, appendBOX);


AddItemBtn.forEach((el) => {
    el.addEventListener("click", AppendElement);
});
            


            class Navigation {
                constructor() {
                        this.navbarList = document.querySelector(".navbarList"),
                        this.dropDown = document.querySelectorAll(".dropdown"),
                        this.btn = document.querySelector("#navToggle"),
                        this.menu = [...this.dropDown];
                        this.toggleNav = this.toggleNav.bind(this);
                }

                toggleNav() {
                    this.navbarList.classList.toggle("Active");
                }
            }

            function ABT_Responsive(evnt){
                    if(evnt.target.nodeName == "LI"){
                     if(evnt.target.classList.contains("dropdown")){
                    if(evnt.target.lastChild.classList.contains("hidden")){
                     evnt.target.lastChild.classList.remove("hidden");
                 evnt.target.lastChild.classList.add("dropdownActive");
                     }else{
                    evnt.target.lastChild.classList.add("hidden");
                evnt.target.lastChild.classList.remove("dropdownActive");
                        }
                     }
                 }
             }
            
           
            let ABT = new Navigation();
            console.log(ABT.navbarList)
            ABT.navbarList.addEventListener("click", ABT.ABT_Responsive)
            ABT.btn.addEventListener("click", ABT.toggleNav);

            handleUpdates(settings);
        

        let NavListItems = document.querySelector(".navbarList");
        let sidebarListName = document.querySelector("#getName");
        let sidebarListURL = document.querySelector("#getUrl");
        let navItems = document.querySelectorAll(".navbarList .MenuListItem");



   let hiddenNavDetails = document.querySelector(".hiddenNavDetails");
    let hiddenDropDownDetails = document.querySelector(".hiddenDropDownDetails");
    let clickCountMain = 0;   
NavListItems.addEventListener("click", (evnt) => {
    evnt.preventDefault();
  
    // Hiding GENERATOR
     document.querySelector(".GenerateCodeHereWrap").style.display = "none";
     document.querySelector(".CopiedBTNWrap").style.display = "none";

    //hIDING fOOTER UI
    if(  document.querySelector(".fixedUI").style.display === "none"){
         document.querySelector(".fixedUI").style.display = "block";
    }

    console.log(typeof evnt.target.nodeName)
    if(evnt.target.nodeName === "A" || evnt.target.classList.contains("MenuListItem")){

        let targetHelper = "";
if(evnt.target.nodeName === "A"){
    targetHelper = evnt.target.parentElement;
}else{
    targetHelper = evnt.target;
}
        let el = targetHelper;
        hiddenNavDetails.innerHTML = "";
        hiddenDropDownDetails.innerHTML = "";

            /* Add New Scripts In Between */



                 // Creating a div appended with label and Input with the value of current listed Item Inner Text
        console.log(navItems);
        
        //for(let i = 0; i < navItems.length; i++){
        changeNav(evnt, el);
      // }
        let mainDisplay = document.createElement("input");
        mainDisplay.type = "text";
        if(evnt.target.nodeName === "A"){
            mainDisplay.value = `${el.innerText}`;
            console.log(el.innerText)
        }else{
            mainDisplay.value = `${el.childNodes[0].textContent}`;
            console.dir(el)
        }
       
        let grpWhole = document.createElement("div");
        grpWhole.classList.add("grpWhole");
        grpWhole.classList.add(`${el.dataset.val}`);
        let DeleteWholeItem = document.createElement("button");
         DeleteWholeItem.classList.add("ABT_btns");
        DeleteWholeItem.classList.add(`${el.dataset.val}`);
        DeleteWholeItem.id="ABT_btns";
        DeleteWholeItem.innerText = "Delete";
        let Label = document.createElement("label");
        Label.setAttribute("for", `getName`);
        Label.innerText = "Enter Name:";
        mainDisplay.id = `getName`;
            console.log(grpWhole)
        grpWhole.append(...[Label, mainDisplay])
        hiddenNavDetails.append(...[grpWhole, DeleteWholeItem]);
        
        // Creating a div appended with label and Input with the value of current listed Item URL

        if(!targetHelper.classList.contains("dropdown")){
          
            mainDisplayURL = document.createElement("input");
            mainDisplayURL.id = `getUrl`;
            let grpWhole1 = document.createElement("div");
            grpWhole1.classList.add("grpWhole");
            grpWhole1.classList.add(`${el.dataset.val}`);
            mainDisplayURL.type = "URL";
            mainDisplayURL.value = targetHelper.firstElementChild.href;
            let Label1 = document.createElement("label");
            Label1.innerText = "Enter URL:";
            Label1.setAttribute("for", `getUrl`);
            grpWhole1.append(...[Label1, mainDisplayURL]);
            hiddenNavDetails.append(...[grpWhole, grpWhole1, DeleteWholeItem]);
        }
        
        DeleteWholeItem.addEventListener("click", () => {
            let allElements = document.querySelectorAll(`.${targetHelper.dataset.val}`);
            let wholeUI = document.querySelector(".fixedUI");
            console.log(wholeUI);
            allElements.forEach((el) => {
                            // console.log(el.classList.contains(deleteBtn.dataset.id))
                            if(el.classList.contains(`${el.dataset.val}`)){
                                hiddenNavDetails.innerText = "";
                                hiddenDropDownDetails.innerText = "";
                                  el.remove();
                                 //el.remove();
                                 //wholeUI.innerText = "";
                                 DeleteWholeItem.remove()
                            }
                    
                        });
        })


         grpWhole = document.querySelectorAll(".grpWhole input");
     hiddenDropDownDetails = document.querySelector(".hiddenDropDownDetails");
        grpWhole.forEach((element) => {
            console.log(element, el)
            element.addEventListener('change', (e) => {
                console.log(e.target)
                if(e.target.id === "getName"){
                    targetHelper.childNodes[0].textContent = e.target.value;
                    console.dir(targetHelper)
                }

                if(e.target.id === "getUrl"){
                    let href = e.target.value;
                    targetHelper.firstElementChild.href = href;
                }

               
            });
        }); // DROPDOWN NOT THERE




   // }// End Loop

    }
});
  
        
document.querySelector(".aside").addEventListener("click", (e) => {
    document.querySelector(".GenerateCodeHereWrap").style.display = "none";
    document.querySelector(".CopiedBTNWrap").style.display = "none";
});



});



        

    </script>
