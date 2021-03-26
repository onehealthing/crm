<?php

namespace App\Http\Controllers\API;

use App\Contracts\ClientContract;
use App\Contracts\CRUDContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\Client\StoreRequest;
use Illuminate\Http\JsonResponse;

class ClientController extends Controller
{

    /**
     * @var CRUDContract
     */
    private $clients;

    /**
     * @var ClientContract
     */
    private $client;

    /**
     * CompanyController constructor.
     * @param CRUDContract $clients
     * @param ClientContract $client
     */
    public function __construct(CRUDContract $clients, ClientContract $client)
    {
        $this->clients = $clients;
        $this->client = $client;
    }

    /**
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json($this->clients->get());
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function companies(int $id)
    {
        return response()->json($this->client->companies($id));
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id)
    {
        return response()->json($this->clients->show($id));
    }

    /**
     * @param StoreRequest $request
     * @return JsonResponse
     */
    public function store(StoreRequest $request)
    {
        $this->clients->store($request->validated());

        return response()->json(['message' => 'Client created.']);
    }

    /**
     * @param StoreRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(StoreRequest $request, int $id)
    {
        $this->clients->update($request->validated(), $id);

        return response()->json(['message' => 'Client updated.']);
    }

    /**
     * @param int $id
     * @return JsonResponse
     * @throws \Exception
     */
    public function destroy(int $id)
    {
        $this->clients->delete($id);

        return response()->json(['message' => 'Client deleted.']);
    }

}
