<?php

namespace Api;

class DogsApi
{
    protected const URL_BASE = 'https://dog.ceo/api/';
    
    public function getList()
    {
        $url = self::URL_BASE . 'breeds/list/all';
        $data = $this->sendRequest($url);
        return (json_decode($data, true));
    }

    public function getByBreed($breed)
    {
        $breed = strtolower($breed);
        $hyphenPos = strpos($breed, '-');
        if ($hyphenPos) {
            $breed = substr($breed, $hyphenPos+1, strlen($breed));
        }
        $url = self::URL_BASE . "breed/$breed/images/random";
        $data = $this->sendRequest($url);
        return (json_decode($data, true))['message'];
    }

    protected function sendRequest(string $url) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        $data = curl_exec($ch);
        curl_close($ch);
        return $data;
    }
}