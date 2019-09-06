<?php

namespace App\Repository;

use App\Helper\CommonHelper;
use App\Model\User;
use Illuminate\Database\QueryException;

class Repository implements IRepository
{
    public $model;

    public function GetAll()
    {
        $company_id = 0;
        if (CommonHelper::$CurrentUser != null) {
            $company_id = CommonHelper::$CurrentUser->company_id;
        }

        return $this->model->where('company_id', $company_id)->get();
    }

    public function GetById($id)
    {
        $company_id = 0;
        if (CommonHelper::$CurrentUser != null) {
            $company_id = CommonHelper::$CurrentUser->company_id;
        }

        $result = $this->model->where("id", $id)->where('company_id', $company_id)->first();
        return $result;
    }
    public function GetByAnyColumn($field, $value)
    {
        $company_id = 0;
        if (CommonHelper::$CurrentUser != null) {
            $company_id = CommonHelper::$CurrentUser->company_id;
        }
        $result = $this->model->where($field, $value)->where('company_id', $company_id)->get();
        return $result;
    }



    public function Insert(array $data)
    {
        if (CommonHelper::$CurrentUser == null) {
            $data["created_by_id"] = 0;
            $data["company_id"] = 0;
        } else {
            $data["created_by_id"] = CommonHelper::$CurrentUser->id;
            $data["company_id"] = CommonHelper::$CurrentUser->company_id;
        }
        return $this->model->create($data);
    }

    public function Update(array $data)
    {
        if (CommonHelper::$CurrentUser == null) {
            $data["updated_by_id"] = 0;
            $data["company_id"] = 0;
        } else {
            $data["updated_by_id"] = CommonHelper::$CurrentUser->id;
            $data["company_id"] = CommonHelper::$CurrentUser->company_id;
        }
        $result = $this->model->where('id', $data['id']);
        return $result->update($data);
    }

    public function Delete($id)
    {
        $result = $this->model->find($id);
        return $result->delete();
    }


    public function GetByAnyColumnInclude($field, $value, $array = [])
    {
        $company_id = 0;
        if (CommonHelper::$CurrentUser != null) {
            $company_id = CommonHelper::$CurrentUser->company_id;
        }
        $result = $this->model->where($field, $value)->where('company_id', $company_id)->with($array)->get();
        return $result;
    }

    public function Include($array = [])
    {
        $company_id = 0;
        if (CommonHelper::$CurrentUser != null) {
            $company_id = CommonHelper::$CurrentUser->company_id;
        }

        return $this->model->with($array)->where('company_id', $company_id)->get();
    }


    public function GetByPage($page = 1, $limit = 10)
    {
        $result = new \stdClass;
        $result->page = $page;
        $result->limit = $limit;
        $result->totalItems = 0;
        $result->items = [];
        $query = $this->model;
        $model = $query
            ->skip($limit * ($page - 1))
            ->take($limit)
            ->get();
        $result->totalItems = $this->model->count();
        $result->items = $model->all();
        return $result;
    }
}
