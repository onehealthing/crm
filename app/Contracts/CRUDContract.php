<?php

namespace App\Contracts;

use App\Http\Resources\PaginationResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

interface CRUDContract
{

    /**
     * @return PaginationResource
     */
    public function get();

    /**
     * @param int $id
     * @return AnonymousResourceCollection
     */
    public function show(int $id);

    /**
     * @param array $data
     * @return void
     */
    public function store(array $data);

    /**
     * @param array $data
     * @param int $id
     * @return void
     */
    public function update(array $data, int $id);

    /**
     * @param int $id
     * @return void
     * @throws \Exception
     */
    public function delete(int $id);

}