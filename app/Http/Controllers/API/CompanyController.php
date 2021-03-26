<?php

namespace App\Http\Controllers\API;

use App\Contracts\CompanyContract;
use App\Contracts\CRUDContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\Company\StoreRequest;
use App\Http\Requests\Company\UpdateRequest;
use Illuminate\Http\JsonResponse;

class CompanyController extends Controller
{

    /**
     * @var CRUDContract
     */
    private $companies;

    /**
     * @var CompanyContract
     */
    private $company;

    /**
     * CompanyController constructor.
     * @param CRUDContract $companies
     * @param CompanyContract $company
     */
    public function __construct(CRUDContract $companies, CompanyContract $company)
    {
        $this->companies = $companies;
        $this->company = $company;
    }

    /**
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json($this->companies->get());
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id)
    {
        return response()->json($this->companies->show($id));
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function clients(int $id)
    {
        return response()->json($this->company->clients($id));
    }

    /**
     * @param StoreRequest $request
     * @return JsonResponse
     */
    public function store(StoreRequest $request)
    {
        $this->companies->store($request->validated());

        return response()->json(['message' => 'Company created.']);
    }

    /**
     * @param UpdateRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(UpdateRequest $request, int $id)
    {
        $this->companies->update($request->validated(), $id);

        return response()->json(['message' => 'Company updated.']);
    }

    /**
     * @param int $id
     * @return JsonResponse
     * @throws \Exception
     */
    public function destroy(int $id)
    {
        $this->companies->delete($id);

        return response()->json(['message' => 'Company deleted.']);
    }

}
