function dragEvent( event ) {
    console.log(event);
}
function eemaldaRida(elem) {
    console.log(elem);
    var t = document.getElementById( "tabel" );
    p = elem.parentNode.parentNode;
    t = p.parentNode;
    t.removeChild(p);
    t.innerHTML = document.getElementById("table").deleteRow(this);
    

}

function LiikumineUles(elem) {
    console.log(elem);

    var row = elem.parentNode.parentNode.parentNode;
        sibling = row.previousElementSibling,
        parent = row.parentNode;
    parent.insertBefore(row, sibling);


}

function fillTable( tId ) {
   var t = document.getElementById( tId );
   var t1 = document.getElementById("text").value;
   var t2 = document.getElementById("text1").value;
   if (t1 === '') {
    alert('Your input is Empty');
   }else{
    t.innerHTML +="<tr><td> "+t1+" </td> <td>"+t2+"</td>" +
            "<td><img src='miinus.png' draggable='true' height='48px' onclick='eemaldaRida(this);'></td>" +
            "<td><img src='up_arrow.png' draggable='true' height='48px' onclick='LiikumineUles(this);'></td>" +
            "</tr>";
   }
}



