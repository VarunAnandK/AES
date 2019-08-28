<?php

namespace App\Helper;

class UserResolver implements \OwenIt\Auditing\Contracts\UserResolver
{
    /**
     * {@inheritdoc}
     */
    public static function resolve()
    {
        if (CommonHelper::$CurrentUser == null) {
            return null;
        } else {
            return CommonHelper::$CurrentUser->id;
        }
    }
}
