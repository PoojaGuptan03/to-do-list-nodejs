function delete_content(){
    let checkboxes = document.querySelectorAll("#checkbox");
    let checked_boxes = ""
    
    for(let checkbox of checkboxes){
        if(checkbox.checked){
            checked_boxes+=checkbox.value+","
        }
    }

    window.location.replace(`/delete-content/?id=${checked_boxes}`)
}