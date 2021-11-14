var selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
   if(validate()){

    if(selectedRow == null)
        insertNewRecord(formData);
        else
        updateRecord(formData);
    resetForm();
   }
}
function readFormData(){
    var formData = {};
    formData["codigo"] = document.getElementById("codigo").value;
    formData["nombre"] = document.getElementById("nombre").value;
    formData["lugarNac"] = document.getElementById("lugar-nac").value;
    return formData;
}
function insertNewRecord(data){
    var table = document.getElementById("employe-list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML =data.codigo;    
    cell2 = newRow.insertCell(1);
    cell2.innerHTML =data.nombre;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML =data.lugarNac;    
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)"> Editar</a>
                       <a onClick="onDelete(this)"> Eliminar</a>   
                    `;

}
function resetForm(){
    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("lugar-nac").value = "";
    selectedRow= null;
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("codigo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nombre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lugar-nac").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.codigo;
    selectedRow.cells[1].innerHTML=formData.nombre;
    selectedRow.cells[2].innerHTML=formData.lugarNac;  
}
function onDelete(td){
    if(confirm('Estás seguro de borrar este elemento?')){
        row = td.parentElement.parentElement;
        document.getElementById("employe-list").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate(){
    isValid = true;
    if(document.getElementById("codigo").value == ""){
        isValid = false;
        document.getElementById("codigoValidationError").classList.remove("hide");
    }else{
        isValid = true;
        if(!document.getElementById("codigoValidationError").classList.contains("hide")){
            document.getElementById("codigoValidationError").classList.add("hide");
        }
    }
    return isValid;
}