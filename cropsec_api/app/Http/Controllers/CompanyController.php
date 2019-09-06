<?php

namespace App\Http\Controllers;

use App\Helper\CommonHelper;
use App\Model\Company;
use App\Model\User;
use App\Model\user_role;
use App\Repository\Repository;
use DB;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class CompanyController extends Controller
{
    protected $Repository;
    protected $UserRoleRepository;
    public function __construct(Repository $repository, Repository $userrolerepository)
    {
        $this->Repository = $repository;
        $this->Repository->model = new Company();
        $this->UserRoleRepository = $userrolerepository;
        $this->UserRoleRepository->model = new user_role();
    }
    public function CompanyList()
    {
        return $this->Repository->GetAll();
    }

    public function CompanyById($id)
    {
        return $this->Repository->GetById($id);
    }
    public function CompanyInsert(Request $request)
    {
        try {
            $data = $request->all();
            $result =  $this->Repository->Insert($data);
            // $user = new User();
            // $user['name'] = $data["user_name"];
            // $user['user_role_id'] = '1';
            // $user['password'] = Crypt::encrypt($data["password"]);
            // $user['email'] = $data["email"];
            // $user['company_id'] = $result["id"];
            // $user_result = $this->UserRoleRepository->Insert($user->toArray());
            // DB::update('update user set company_id = ' . $result["id"] . ' where id = ' . $user_result["id"]);
            return response(["Type" => "S", "Message" => "Company inserted successfully", "AdditionalData" => [], "Id" => $result["id"]]);
        } catch (QueryException $exception) {
            return response(["Type" => "E", "Message" => $exception->errorInfo[2]]);
        }
    }
    public function CompanyUpdate(Request $request)
    {
        $data = $request->all();
        return $this->Repository->Update($data);
    }
}
