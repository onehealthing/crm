<?php

namespace App\Contracts;

use App\Http\Resources\PaginationResource;

interface ClientContract
{

    /**
     * @param int $id
     * @return PaginationResource
     */
    public function companies(int $id);

}