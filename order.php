<?php
$tip = '';
$address = '';
if($_POST['n'] == 2){
    if($_POST['self_address'] == 0){
        exit;
    } elseif($_POST['self_address'] == 1) {
        $address = 'Ул.Радищева 6/1, магазин "Эконом"';
    } elseif($_POST['self_address'] == 2) {
        $address = 'Ул.Ульяновская 195, рынок "АЛИ", павильон 3, место 3';
    } elseif($_POST['self_address'] == 3) {
        $address = 'Ул.Автобусная 75/1, магазин "Эконом"';
    } elseif($_POST['self_address'] == 4) {
        $address = 'Ул.Суворова 49 А, магазин "Ветеран плюс"';
    } elseif($_POST['self_address'] == 5) {
        $address = 'Ул. Гамарника 72 А, магазин "Дилан"';
    }
    $tip = 'Самовывоз';
}

$name = trim(htmlspecialchars($_POST['name_client']));
$from = trim(htmlspecialchars($_POST['email']));
$tel = trim(htmlspecialchars($_POST['tel']));
$other = trim(htmlspecialchars($_POST['other']));
$ord = trim($_POST['Ord']);
if($_POST['n'] == 1){
    $address = trim(htmlspecialchars($_POST['address']));
    $tip = 'Доставка';
}
$to = "rabotavadkoles@mail.ru";
$message = "
Заказчик: $name;  \n
e-mail: $from;  \n
Телефон: $tel;  \n
$tip: $address;  \n
Примечания: $other;  \n
Заказ: $ord
";
$headers = "From: $from". "\r\n". "Reply-To: $from". "\r\n". "X-Mailer: PHP/". phpversion(); 
if(mail($to, "Заказ", $message, $headers)) {
    echo "<script>
    if(!localStorage.getItem('doing')){
        localStorage.setItem('doing', JSON.stringify([]))
    }    
    let doing = JSON.parse(localStorage.getItem('doing'))
    doing = [1]
    localStorage.setItem('doing', JSON.stringify(doing))
    window.location.href = 'index.html';
    </script>";
} else {
    echo "<script>
    if(!localStorage.getItem('doing')){
        localStorage.setItem('doing', JSON.stringify([]))
    }
    let doing = JSON.parse(localStorage.getItem('doing'))
    doing = [2]
    localStorage.setItem('doing', JSON.stringify(doing))
    window.location.href = 'index.html';
    </script>";
}

?>