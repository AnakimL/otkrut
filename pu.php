<?php
$img= 'assets/img/pt.jpg';
$img2= 'assets/img/pr1.jpg';
$text1 = $_REQUEST['text1'];
$text2 = $_REQUEST['text2'];
$text3 = $_REQUEST['text3'];
$text4 = $_REQUEST['text4'];
$text5 = $_REQUEST['text5'];
$im = imagecreate(500, 1000);
$color= imagecolorallocate($im, 128, 128, 128);
$font = 'assets/fonts/Vegur-Regular.ttf';
$pic = ImageCreateFromjpeg($img); //открываем рисунок в формате JPEG
ImageTTFtext($pic, 26, 0,80 , 900, $color, $font, $text1);
ImageTTFtext($pic, 26, 0, 80,950 , $color, $font, $text2);
ImageTTFtext($pic, 26, 0, 80,1000 , $color, $font, $text3);
ImageTTFtext($pic, 26, 0, 80,1050 , $color, $font, $text4);
ImageTTFtext($pic, 26, 0, 500,930 , $color, $font, $text5);
$pic2 = ImageCreateFromjpeg($img2); //открываем рисунок в формате JPEG




imagecopymerge($pic, $pic2, 10, 9, 0, 0, 899, 644, 100);



$file = "assets/img/cards/".time().".jpg";

Imagejpeg($pic,$file); //сохраняем рисунок в формате JPEG



header('Content-Description: File Transfer');
header("Content-type: image/jpeg");
header('Content-Disposition: attachment; filename="some.jpg"');
header('Content-Transfer-Encoding: binary');
header ("Accept-Ranges: bytes");
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
header('Content-Length: ' . filesize($file));
// читаем файл и отправляем его пользователю
readfile($file);


ImageDestroy($file); //освобождаем память и закрываем изображение
if (@readfile($file)) {
	unlink($file);
}







?>
