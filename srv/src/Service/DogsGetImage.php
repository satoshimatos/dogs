<?php

use Api\DogsApi;

$service = new DogsApi();

if (isset($_GET['getByBreed'])) {
    $breed = str_replace(' ', '-', $_GET['getByBreed']);
    $img = (
        '<div class="container">' .
        '<img src=' . ($service->getByBreed($breed)) . ' alt="dog" class="center-image"></img>' .
        '<div class="centered">' . ucfirst($_GET['getByBreed']). '</div>' .
        '</div>'
    );
}
