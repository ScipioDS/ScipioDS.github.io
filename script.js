function move(elem){
    elem.parentNode.removeChild(elem);

    var new_elem = document.createElement("button");
    new_elem.innerHTML = "<strong>No</strong>"
    new_elem.style.position = "absolute"
    var left = Math.random() * 500 + 500;
    var top = Math.random() * 500;

    console.log(left)

    new_elem.style.left = left + "px";
    new_elem.style.top = top + "px";
    new_elem.setAttribute("onclick","move(this)")

    document.getElementsByTagName("body")[0].append(new_elem)
}
