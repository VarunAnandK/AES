<?php

namespace App\Model;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable as AuditableContract;
use \OwenIt\Auditing\Auditable;
class User extends Model
//implements AuditableContract
{
    //use Auditable;

    protected $table = 'user';
    protected $guarded = [];
    public $timestamps = false;

    // protected $auditExclude = [
    //     'created_by_id',
    //     'created_on',
    //     'updated_by_id',
    //     'updated_on'
    // ];

    public function user_role()
    {
        return  $this->belongsTo('App\Model\user_role', "user_role_id", "id");
    }
}
