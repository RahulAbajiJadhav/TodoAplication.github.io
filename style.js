var selectedrow = null;

function OnFunctionSubmit(e){
    event.preventDefault();
    var formData = readFormData();

    if(selectedrow ===  null ){
        insertNewRecord(formData);
    }
    else{

    }
}

// retrive the data

function readFormData(){
    var formData = {};
     
   

     formData['productcode'] = document.getElementById('pcode').value;
     formData['productname'] = document.getElementById('pname').value;
    formData['productqty']  = document.getElementById('pqty').value;
    formData['productprice'] = document.getElementById('pprice').value;

     return formData;
}

// insert the data

function insertNewRecord(data){
     var table = Document.getElementById('storelist').getElementsByTagName('tbody')[0];
     var newRow = table.insertRow(table.length);
     var cell1 = newRow.insertCell(0);
     cell1.innerHTML= data.productcode;

     var cell2 = newRow.insertCell(1);
     cell2.innerHTML= data.productname;

     var cell3 = newRow.insertCell(2);
     cell3.innerHTML= data.productqty;

     var cell4 = newRow.insertCell(3);
     cell4.innerHTML= data.productprice;

     var cell5 = newRow.insertCell(4);
     cell5.innerHTML= `<button>Edit</button>, <button>Delete</button>`;



}