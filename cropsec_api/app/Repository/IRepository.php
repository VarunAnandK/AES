<?php
namespace App\Repository;

interface IRepository
{
    public function GetAll();

    public function GetById($id);

    public function GetByAnyColumn($field, $value);

    public function Insert(array $data);

    public function Update(array $data);

    public function Delete($id);

    public function GetByPage($page = 1, $limit = 10);

}
