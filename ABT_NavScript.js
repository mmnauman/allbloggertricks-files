// We will have helper functions here that will be invoked from

function $(el, boolean = false) {
    return boolean ? document.querySelectorAll(`${el}`) : document.querySelector(`${el}`);
}

function changeNav(evnt, el, i) {
    evnt.preventDefault();

    let grpWhole = document.querySelectorAll(".grpWhole input");
    let hiddenDropDownDetails = document.querySelector(".hiddenDropDownDetails");
    let fixedUI = document.querySelector(".fixedUI");



    if (el.classList.contains("dropdown")) {

        let nestedItems = el.querySelectorAll("li");
        //console.dir(nestedItems)
        for (let i = 0; i < nestedItems.length; i++) {
            let grp = document.createElement("div");
            grp.classList.add(`inputSet${i}`);
            let deleteBtn = document.createElement("input");
            deleteBtn.type = 'submit';
            deleteBtn.value = 'DELETE';
            deleteBtn.classList.add("deleteItem");
            deleteBtn.dataset.id = `inputSet${i}`;
            grp.classList.add("DrpdownSection");
            let grp1 = document.createElement("div");
            let label = document.createElement("label");
            let label2 = document.createElement("label");
            let input = document.createElement("input");
            input.type = 'text';
            let input2 = document.createElement("input");
            input2.type = "URL";
            label2.setAttribute("for", `dropDownItemURL${i}`);
            input2.id = `dropDownItemURL${i}`;
            let remainingDropdowns;

            deleteBtn.addEventListener("click", (e) => {
                e.preventDefault();

                let getInputSet = document.querySelectorAll(`.${e.target.dataset.id}`);
                getInputSet = [...getInputSet];
                if (getInputSet) {
                    getInputSet.forEach((el) => {
                        if (el.classList.contains(deleteBtn.dataset.id)) {
                            el.remove();
                            el.remove();
                            deleteBtn.remove();
                        }

                    });


                }


            });


            input2.value = nestedItems[i].firstElementChild.href;
            label.innerText = `Dropdown ${i + 1}`;
            label2.innerText = `URL ${i + 1}`;
            label.setAttribute("for", `dropdownItem${i}`);
            input.id = `dropdownItem${i}`;
            input.value = nestedItems[i].firstElementChild.innerText;
            grp.append(...[label, input, label2, input2, deleteBtn]);
            hiddenDropDownDetails.append(...[grp]);
            fixedUI.appendChild(hiddenDropDownDetails);
            fixedUI.style.visibility = "visible";
        }

        let DropDownSection = document.querySelectorAll(".DrpdownSection input[type='text']");
        let DropDownSectionURL = document.querySelectorAll(".DrpdownSection input[type='url']");

        if (hiddenDropDownDetails.innerText != "") {
            let dropDowns = document.querySelectorAll(".hiddenDropDownDetails input");
            if (dropDowns !== undefined) {
            
                console.log(DropDownSection, DropDownSectionURL);

                DropDownSection.forEach((el, index) => {
                    let theValue, HREF = "";
                    DropDownSectionURL.forEach((url, urlIndex) => {
                        url.addEventListener("change", () => {
                            for (let i = 0; i < DropDownSectionURL.length; i++) {
                                
                                if (index === i) {

                                    theValue = DropDownSectionURL[i].value;
                                    nestedItems[i].firstElementChild.href = theValue;
                                   
                                }
                            }

                        });

                    })

                    el.addEventListener("change", (e) => {

                        for (let i = 0; i < DropDownSection.length; i++) {
                            
                            if (index === i) {
                                
                                if (e.target.type === "text") {
                                   
                                    theValue = DropDownSection[i].value;
                                    nestedItems[i].firstElementChild.innerText = theValue;
                                    
                                }


                            }
                        }

                    });
                });
            }

        }

    };

}





function handleUpdates(arrayOfInputs) {
    arrayOfInputs.forEach(element => {
        
        let total = document.querySelector(".changBorder label").offsetWidth;
         document.querySelector(".fontValue").style.left = `${total}px`;
        element.addEventListener("click", (e) => {
            if (e.target.nodeName === "INPUT") {
                e.target.addEventListener("change", (evn) => {
                    let varName = e.target.name;
                   
                    nav.style.setProperty(`--${varName}`, e.target.name === "border" ? e.target.value + "px" : e.target.name === "fontSize" ? e.target.value + "px" : e.target.value);

                });

            }


        }); // End Click Event

         document.querySelector(".sideMenu").addEventListener("change", (e) => {
            if (e.target.name === "border") {
                 document.querySelector(".fontValue").innerText = e.target.value + "px";
                let total = document.querySelector(".changBorder label").offsetWidth + Number(e.target.value);
                document.querySelector(".fontValue").style.left = `${total}px`;
                nav.style.setProperty(`--${e.target.name}`, e.target.value + "px");
            }
        })

         document.querySelector(".sideMenu").addEventListener("mousemove", (e) => {
          
            if (e.target.name === "border") {
                document.querySelector(".fontValue").innerText = e.target.value + "px";
                let total = document.querySelector(".changBorder label").offsetWidth + Number(e.target.value);
                 document.querySelector(".fontValue").style.left = `${total}px`;
                nav.style.setProperty(`--${e.target.name}`, e.target.value + "px");
            }


        });



    });
}
let count = 1;
let clickCount = 0;
let AppendingItem;
function AppendElement() {
    console.log(this)
    let menuType = this.dataset.type;
    let NavList = document.querySelector(".navbarList");
    clickCount++;
    if (menuType === 'normal') {
        AppendingItem = document.createElement("li");
        AppendingItem.className = "MenuListItem";
        AppendingItem.classList.add(`ABT_ListItem${clickCount}`);
        AppendingItem.dataset.val = `ABT_ListItem${clickCount}`;
        let anchor = document.createElement("a");
        anchor.href = `/example.html`;
        AppendingItem.append(...[anchor]);
        anchor.textContent = "Example";
        NavList.appendChild(AppendingItem);

    }
    let input, span, btn, label = "";
    if (menuType === 'dropdown') {
        span = document.querySelector(".hiddenDropdownDetails");
        if (span.innerText === "") {
            label = document.createElement("label");
            label.innerText = "Total Dropdowns:";
            label.setAttribute("for", "AddDropdownInput");
            input = document.createElement("input");
            input.id = "AddDropdownInput";
            input.type = "number";
            btn = document.createElement("input");
            btn.type = "submit";
            btn.id = 'btn';
            btn.classList.add("ABT_btns");
            let grpDropdown = document.createElement("div");
            grpDropdown.append(...[label, input, btn]);
            span.appendChild(grpDropdown);


            let li = document.createElement("li");
            li.classList.add("dropdown");
            li.classList.add(`ABT_ListItem${clickCount}`);
            li.dataset.val = `ABT_ListItem${clickCount}`;
            li.classList.add("MenuListItem");
            let innerSpan = document.createElement("span");
            li.innerText = 'DropDown';
            let icon = document.createElement("i");
            icon.innerHTML = "&#9660;";
            li.append(...[icon]);
            let nestedUL = document.createElement("ul");
            nestedUL.classList.add("dropContent");
            nestedUL.classList.add("ABT_HoverClass");
            nestedUL.classList.add("hidden");
            
            if (btn) {
                btn.addEventListener("click", (e) => {
                   
                    e.preventDefault();
                    for (let j = 0; j < input.value; j++) {

                        let nestedLI = document.createElement("li");
                        let nestedAnchors = document.createElement("a");
                        nestedAnchors.innerText = `text${j}`;
                        nestedLI.appendChild(nestedAnchors);
                        nestedLI.classList.add(`inputSet${j}`);
                        nestedUL.appendChild(nestedLI);
                        li.appendChild(nestedUL);

                        NavList.appendChild(li);
                        span.innerText = "";


                    }
                })
            }

        }



    }
}



window.addEventListener("scroll", changeFooterUI);

function changeFooterUI(e) {
    if (window.scrollY <= (document.querySelector(".secondPage").offsetTop - document.querySelector(".fixedUI").offsetTop)) {
        document.querySelector(".fixedUI").style.display = "none";
    } else if (window.scrollY >= document.querySelector(".secondPage").offsetTop) {
        document.querySelector(".fixedUI").style.display = "block";
        document.querySelector(".fixedUI").style.visibility = "visible";
    }
}
