<?php
header('Access-Control-Allow-Origin: *');
$f = '/tmp/vim-aviate.txt';
if (isset($_GET['str'])) {
    file_put_contents($f, $_GET['str'] . "\n");
    shell_exec("gnome-terminal -e 'vim $f'");
} else {
    echo file_get_contents($f);
}
