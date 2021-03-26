<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class Client extends Model
{

    use HasFactory;

    const ITEMS_PER_PAGE = 20;

    /**
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * @return BelongsToMany
     */
    public function companies()
    {
        return $this->belongsToMany(Company::class, 'companies_clients');
    }

    /**
     * @return Collection
     */
    public function getList()
    {
        return $this->latest('id')->paginate(self::ITEMS_PER_PAGE);
    }

    /**
     * @param int $id
     * @return LengthAwarePaginator
     */
    public function getCompaniesById(int $id)
    {
        return $this->getById($id)->companies()->paginate(Company::ITEMS_PER_PAGE);
    }

    /**
     * @param array $data
     * @return void
     */
    public function store(array $data)
    {
        try {

            DB::beginTransaction();

            $client = $this->create(['name' => $data['name']]);
            $client->companies()->attach($data['companies'] ?? []);

            DB::commit();

        } catch (\Exception $e) {
            DB::rollBack();
        }
    }

    /**
     * @param array $data
     * @param int $id
     * @return void
     */
    public function updateOne(array $data, int $id)
    {
        try {

            DB::beginTransaction();

            $client = $this->getById($id);

            $client->update(['name' => $data['name']]);
            $client->companies()->sync($data['companies'] ?? $client->companies);

            DB::commit();

        } catch (\Exception $e) {
            DB::rollBack();
        }
    }

    /**
     * @param int $id
     * @return void
     * @throws \Exception
     */
    public function deleteById(int $id)
    {
        try {

            DB::beginTransaction();

            $client = $this->getById($id);

            $client->companies()->detach();
            $client->delete();

            DB::commit();

        } catch (\Exception $e) {
            DB::rollBack();
        }
    }

    /**
     * @param int $id
     * @return Company
     */
    public function getById(int $id)
    {
        return $this->findOrFail($id);
    }

}
