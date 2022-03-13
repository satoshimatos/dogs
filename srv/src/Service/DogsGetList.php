<?php

use Api\DogsApi;

    require(__DIR__ . '/../Api/DogsApi.php');
    
    $service = new DogsApi();
    $response = ($service->getList())['message'];    
    foreach($response as $dog => $prefixes) {
        if (! empty($prefixes)) {
            foreach($prefixes as $prefix) {
                $dogsList[] = "$prefix $dog";
            }
        } else {
            $dogsList[] = $dog;
        }
    }
