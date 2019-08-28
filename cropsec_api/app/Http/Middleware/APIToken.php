<?php

namespace App\Http\Middleware;

use App\Helper\CommonHelper;
use Auth;
use Closure;
use Illuminate\Support\Facades\DB;

class APIToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->header('Authorization')) {
            $user = DB::table('user')->where('api_token', $request->header('Authorization'))->first();
            if ($user) {
                CommonHelper::$CurrentUser = $user;
                return $next($request);
            } else {
                return response()->json([
                    'message' => 'Not a valid API request.',
                ]);
            }
        }
        return response()->json([
            'message' => 'Not a valid API request.',
        ]);
    }
}
