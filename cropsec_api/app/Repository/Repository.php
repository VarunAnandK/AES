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
        return $this->model->get();
    }

    public function GetById($id)
    {
        $result = $this->model->where("id", $id)->first();
        return $result;
    }
    public function GetByAnyColumn($field, $value)
    {
        $result = $this->model->where($field, $value)->get();
        return $result;
    }

    public function Insert(array $data)
    {
        try {
            if (CommonHelper::$CurrentUser == null) {
                $data["created_by_id"] = 0;
            } else {
                $data["created_by_id"] = CommonHelper::$CurrentUser->id;
            }
            $result = $this->model->create($data);
            return response(["Type" => "S", "Message" => "Data inserted successfully", "AdditionalData" => [], "Id" => $result["id"]]);
        } catch (QueryException $exception) {
            return response(["Type" => "E", "Message" => $exception->errorInfo[2]]);
        }
    }

    public function Update(array $data)
    {
        try {
            if (CommonHelper::$CurrentUser == null) {
                $data["updated_by_id"] = 0;
            } else {
                $data["updated_by_id"] = CommonHelper::$CurrentUser->id;
            }
            $result = $this->model->where('id', $data['id']);
            $result->update($data);
            return response(["Type" => "S", "Message" => "Data updated successfully"]);
        } catch (QueryException $exception) {
            return response(["Type" => "E", "Message" => $exception->errorInfo[2]]);
        }
    }

    public function Delete($id)
    {
        try {
            $result = $this->model->find($id);
            $result->delete();
            return response(["Type" => "S", "Message" => "Data deleted successfully"]);
        } catch (QueryException $exception) {
            return response(["Type" => "E", "Message" => $exception->errorInfo[2]]);
        }
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
