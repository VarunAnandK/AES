<?php

namespace App\Http\Controllers;

use App\Model\User;
use App\Model\user_role;
use App\Repository\Repository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class UserRoleController extends Controller
{
    protected $Repository;
    public function __construct(Repository $repository)
    {
        $this->Repository = $repository;
        $this->Repository->model = new user_role();
    }
    public function UserRoleList()
    {
        return $this->Repository->GetAll();
    }

    public function UserRoleInsert(Request $request)
    {
            $data = $request->all();
            return $this->Repository->Insert($data);
    }

    public function UserRoleUpdate(Request $request)
    {
            $data = $request->all();
            return $this->Repository->Update($data);
    }
}
