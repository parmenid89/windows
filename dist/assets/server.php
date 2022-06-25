<?php
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
echo var_dump($_POST);

