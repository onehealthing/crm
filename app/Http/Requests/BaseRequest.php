<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BaseRequest extends FormRequest
{

    /**
     * @inheritDoc
     */
    public function wantsJson()
    {
        return true;
    }

    /**
     * @inheritDoc
     */
    public function expectsJson()
    {
        return true;
    }

}
