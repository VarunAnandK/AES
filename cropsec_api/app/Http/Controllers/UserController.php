<?php

namespace App\Http\Controllers;

use App\Model\User;
use App\Repository\Repository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    private $apiToken;
    protected $Repository;
    public function __construct(Repository $repository)
    {
        $this->apiToken = uniqid(base64_encode(str_random(60)));
        $this->Repository = $repository;
        $this->Repository->model = new User();
    }
    public function UserList()
    {
        return $this->Repository->Include(['user_role']);
    }

    public function Register(Request $request)
    {
        $data = $request->all();
        $data["password"] = Crypt::encrypt($data["password"]);;
        return $this->Repository->Insert($data);
    }

    public function Login(Request $request)
    {
        $data = user::where("name", $request["name"])->first();
        if (!empty($data)) {
            if (Crypt::decrypt($data->password) == $request["password"]) {
                DB::table('user')
                    ->where('id', $data->id)
                    ->update(["api_token" => $this->apiToken]);
                $data->api_token = $this->apiToken;
                $resultdate = [
                    "User" => $data,
                ];
                return response(["Type" => "S", "Message" => "Login successfully", "AdditionalData" => $resultdate]);
            } else {
                return response(["Type" => "E", "Message" => "Invalid password", "AdditionalData" => "", "AdditionalDate" => ""]);
            }
        } else {
            return response(["Type" => "E", "Message" => "Invalid user name", "AdditionalData" => "", "AdditionalDate" => ""]);
        }
    }

    public function UserInsert(Request $request)
    {
        $data = $request->all();
        $data["password"] = Crypt::encrypt($data["password"]);;
        return $this->Repository->Insert($data);
    }

    public function UserUpdate(Request $request)
    {
        $data = $request->all();
        return $this->Repository->Update($data);
    }

    public function PasswordDecrypt($password)
    {
        return  Crypt::decrypt($password);
    }
}
