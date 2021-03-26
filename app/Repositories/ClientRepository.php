<?php

namespace App\Repositories;

use App\Contracts\ClientContract;
use App\Contracts\CRUDContract;
use App\Http\Resources\ClientResource;
use App\Http\Resources\CompanyResource;
use App\Http\Resources\PaginationResource;
use App\Models\Client;

class ClientRepository implements CRUDContract, ClientContract
{

    /**
     * @var Client
     */
    private $client;

    /**
     * ClientRepository constructor.
     * @param Client $client
     */
    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    /**
     * @inheritDoc
     */
    public function get()
    {
        return PaginationResource::make(
            ClientResource::collection(
                $this->client->getList()
            )
        );
    }

    /**
     * @inheritDoc
     */
    public function show(int $id)
    {
        return ClientResource::make(
            $this->client->getById($id)
        );
    }

    /**
     * @inheritDoc
     */
    public function companies(int $id)
    {
        return PaginationResource::make(
            CompanyResource::collection(
                $this->client->getCompaniesById($id)
            )
        );
    }

    /**
     * @inheritDoc
     */
    public function store(array $data)
    {
        $this->client->store($data);
    }

    /**
     * @inheritDoc
     */
    public function update(array $data, int $id)
    {
        $this->client->updateOne($data, $id);
    }

    /**
     * @inheritDoc
     */
    public function delete(int $id)
    {
        $this->client->deleteById($id);
    }

}