<?php
header('Access-Control-Allow-Origin: *');
$f = '/tmp/vim-aviate.txt';
if (isset($_GET['str'])) {
    file_put_contents($f, $_GET['str'] . "\n");
    shell_exec(sprintf(file_get_contents('cmd.sh'), $f));
} else {
    echo file_get_contents($f);
}
