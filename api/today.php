<?php


    // 通过php获取豆瓣的数据，然后再返回我们自己的浏览器，从而解决了跨域限制的问题

    //$now = time() //获取当前时间戳

    //获取0000-00-00格式的日期

    $today = date('Y-m-d');

    $url = 'https://moment.douban.com/api/stream/date/'.$today.'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

    // $result = file_get_contents('./data_copy.json');
    $result = file_get_contents($url);


    echo $result;

?>