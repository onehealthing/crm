<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

/**
 * @property array companies
 * @property array clients
 */
class Company extends Model
{

    use HasFactory;

    const ITEMS_PER_PAGE = 20;

    /**
     * @var array
     */
    protected $fillable = [
        'title',
    ];

    /**
     * @return BelongsToMany
     */
    public function clients()
    {
        return $this->belongsToMany(Client::class, 'companies_clients');
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
     * @return mixed
     */
    public function getClientsById(int $id)
    {
        return $this->getById($id)->clients()->paginate(Client::ITEMS_PER_PAGE);
    }

    /**
     * @param array $data
     * @return void
     */
    public function store(array $data)
    {
        try {

            DB::beginTransaction();

            $company = $this->create(['title' => $data['title']]);
            $company->clients()->sync($data['clients'] ?? []);

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

            $company = $this->getById($id);

            $company->update(['title' => $data['title']]);
            $company->clients()->sync($data['clients'] ?? $company->clients);

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

            $company = $this->getById($id);

            $company->clients()->detach();
            $company->delete();

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
