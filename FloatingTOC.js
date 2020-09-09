function ABT(el, boolean = false) {
return boolean ? document.querySelectorAll(`${el}`) : document.querySelector(`${el}`);
}

window.addEventListener("scroll", () => {
if(window.scrollY >= widget.offsetTop){
widget.style.position = "fixed"
}

if(window.scrollY <= widget.offsetTop){ widget.style.position="sticky" } }); // scrollToFixed function
    ABT_TOC(container, elementToFind) { let allElements=ABT(`${container} ${elementToFind}`, true); if (allElements) {
    let ABT_PREFIX="ABT_Accordian" ; let ABT_TOC_Contents=document.createElement("div"); let
    ABT_AutoId=document.createElement("div"); ABT_AutoId.id="TOC" ; let ABT_ol=document.createElement("ol");
    ABT_TOC_Contents.classList.add("ABT_TOC_Contents"); let ABT_TOC_Head=document.createElement("span");
    ABT_TOC_Head.classList.add("ABT_TOC_Head"); ABT_TOC_Head.innerHTML="TABLE OF CONTENTS &#9660;" ;
    ABT_AutoId.insertAdjacentElement("afterbegin", ABT_TOC_Head); allElements.forEach((el, i, array)=> {
    let ABT_listItems = document.createElement("li");
    let ABT_listAnchorItems = document.createElement("a");
    ABT_listAnchorItems.href = `#${ABT_PREFIX + (i+1)}`;
    el.id = `${ABT_PREFIX + (i+1)}`;
    ABT_listAnchorItems.textContent = el.textContent;
    ABT_listItems.appendChild(ABT_listAnchorItems);
    ABT_ol.append(...[ABT_listItems]);
    });
    ABT_TOC_Contents.appendChild(ABT_ol);
    ABT_AutoId.appendChild(ABT_TOC_Contents);
    ABT(`${container}`).insertAdjacentElement("afterbegin", ABT_AutoId);

    ABT(".ABT_TOC_Contents ol a", true).forEach((anchor, i) => {
    anchor.addEventListener("click", (evnt) => {
    ABT(`${container} ${elementToFind}`, true).forEach((elem) => {
    elem.classList.remove("ABT_Animate");
    });
    let tgtId = evnt.target.hash;
    ABT(`${tgtId}`).classList.add("ABT_Animate");
    setTimeout(() => {
    ABT(`${tgtId}`).classList.remove("ABT_Animate");
    }, 500)
    });
    });

    if (ABT(".ABT_TOC_Head")) {
    ABT(".ABT_TOC_Head").addEventListener("click", () => {
    if (ABT(".ABT_TOC_Contents").style.display === "none") {
    ABT(".ABT_TOC_Contents").style.display = "block";
    ABT_TOC_Head.innerHTML = "TABLE OF CONTENTS &#9660;";
    } else {
    ABT(".ABT_TOC_Contents").style.display = "none";
    ABT_TOC_Head.innerHTML = "TABLE OF CONTENTS &#9650;";
    }
    });
    }
    }
    }
