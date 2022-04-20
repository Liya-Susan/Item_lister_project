var form = document.getElementById('addform');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit',additem);
// delete event
itemlist.addEventListener('click', removeitem );
// filter event
filter.addEventListener('keyup',filteritems);

// Add item
function additem(e){
    e.preventDefault();

    // get input value
    var newitem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    

    // add textnode with input value
    li.appendChild(document.createTextNode(newitem));

    // create del button element
    var deletebtn = document.createElement('button');
    // add classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deletebtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deletebtn)

    //append text node
    itemlist.appendChild(li); 

}

//remove item
function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

//filter items
function filteritems(e){
   // convert text to lowercase
   var text = e.target.value.toLowerCase();
   console.log(text);
   // get lis
   var items = itemlist.getElementsByTagName('li');
   // convert to an array
   Array.from(items).forEach(function(item){
       var itemname = item.firstChild.textContent;
       if(itemname.toLowerCase().indexOf(text) != -1){
           item.style.display='block';
        } else {
           item.style.display= 'none' ;
       }
   })
}