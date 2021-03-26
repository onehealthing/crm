<?php

namespace App\Http\Requests\Company;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{

    /**
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:255|string|unique:companies,id,' . $this->route('company'),
            'clients' => 'nullable|array|exists:clients,id'
        ];
    }

}
