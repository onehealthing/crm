<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{

    use HasFactory, HasApiTokens;

    /**
     * @var array
     */
    protected $fillable = [
        'email',
        'password',
    ];

    /**
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    /**
     * @param string $login
     * @return Model
     */
    public function findForPassport(string $login)
    {
        return $this->where('login', $login)->first();
    }

    /**
     * @return string
     */
    public function getAccessTokenId()
    {
        return $this->token()->id;
    }

    /**
     * @return void
     */
    public function deleteAccessTokens()
    {
        $this->tokens()->delete();
    }

}
