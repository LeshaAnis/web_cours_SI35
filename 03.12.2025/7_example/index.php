<?php


function generatePassword($length) {
    if ($length < 1) {
        return '';
    }


    $characters = array_merge(
        range('a', 'z'),
        range('A', 'Z'),
        range('0', '9')
    );

    $characters = implode('', $characters);

    $charCount = strlen($characters);

    $password = '';
    for ($i = 0; $i < $length; $i++) {
 
        $randomIndex = random_int(0, $charCount - 1);
        $password .= $characters[$randomIndex];
    }

    return $password;
}

echo generatePassword(10);
?>