<?php

namespace App\Repositories;

use App\Contracts\CompanyContract;
use App\Contracts\CRUDContract;
use App\Http\Resources\ClientResource;
use App\Http\Resources\CompanyResource;
use App\Http\Resources\PaginationResource;
use App\Models\Company;

class CompanyRepository implements CRUDContract, CompanyContract
{

    /**
     * @var Company
     */
    private $company;

    /**
     * CompanyRepository constructor.
     * @param Company $company
     */
    public function __construct(Company $company)
    {
        $this->company = $company;
    }

    /**
     * @inheritDoc
     */
    public function get()
    {
        return PaginationResource::make(
            CompanyResource::collection(
                $this->company->getList()
            )
        );
    }

    /**
     * @inheritDoc
     */
    public function show(int $id)
    {
        return CompanyResource::make(
            $this->company->getById($id)
        );
    }

    /**
     * @inheritDoc
     */
    public function clients(int $id)
    {
        return PaginationResource::make(
            ClientResource::collection(
                $this->company->getClientsById($id)
            )
        );
    }

    /**
     * @inheritDoc
     */
    public function store(array $data)
    {
        $this->company->store($data);
    }

    /**
     * @inheritDoc
     */
    public function update(array $data, int $id)
    {
        $this->company->updateOne($data, $id);
    }

    /**
     * @inheritDoc
     */
    public function delete(int $id)
    {
        $this->company->deleteById($id);
    }

}