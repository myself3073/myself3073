<?php


    $allUrl = 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

    $recUrl = 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

    $allRes = file_get_contents($allUrl);

    $recRes = file_get_contents($recUrl);

    //转换成数组
    $allRes = json_decode($allRes,true);

    $recRes = json_decode($recRes,true);

    //没有上面转换成数组的步骤，就不能将$allRes $recRes返回
    $all = array($allRes,$recRes);

    echo json_encode($all);



