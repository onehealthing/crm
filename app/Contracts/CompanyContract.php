<?php

namespace App\Contracts;

use App\Http\Resources\PaginationResource;

interface CompanyContract
{

    /**
     * @param int $id
     * @return PaginationResource
     */
    public function clients(int $id);

}