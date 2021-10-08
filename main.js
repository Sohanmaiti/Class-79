var array_student_list = [];
function change() {
    var name_1 = document.getElementById("input_1").value;
    var name_2 = document.getElementById("input_2").value;
    var name_3 = document.getElementById("input_3").value;
    var name_4 = document.getElementById("input_4").value;
    array_student_list.push(name_1);
    array_student_list.push(name_2);
    array_student_list.push(name_3);
    array_student_list.push(name_4);
    console.log(array_student_list);
    document.getElementById("display_name").innerHTML = array_student_list;
    document.getElementById("button_submit").style.display = "none";
    document.getElementById("button_sort").style.display = "inline-block";
}
function sorting() {
    array_student_list.sort();
    console.log(array_student_list);
    document.getElementById("display_name").innerHTML = array_student_list;
}