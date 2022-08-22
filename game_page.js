function send() {
    player1_name_input = document.getElementById("player1_name_input").value
    player2_name_input = document.getElementById("player1_name_input").value
    actual_answer =parseInt(player1_name_input)* parseInt(player2_name_input)
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
    input_box = "<br> Answer : <input type= 'text' id = 'input_check_box'>"
    check_button = "<br> <br> <button class 'btn btn-info' onclick='check()' >Check</button"
    row = question_number + input_box + check_button
    document.getElementById("output").innerHTML = row
    document.getElementById("player1_name_input").value= ""
    document.getElementById("player2_name_input").value= ""
}