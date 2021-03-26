<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

/**
 * @property Collection collection
 * @method LengthAwarePaginator lastPage()
 * @method LengthAwarePaginator currentPage()
 * @method LengthAwarePaginator nextPageUrl()
 * @method LengthAwarePaginator previousPageUrl()
 */
class PaginationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection,
            'pagination' => [
                'total_pages' => $this->lastPage(),
                'next_page' => $this->nextPageUrl(),
                'previous_page' => $this->previousPageUrl(),
                'curr_page' => $this->currentPage(),
            ]
        ];
    }
}
