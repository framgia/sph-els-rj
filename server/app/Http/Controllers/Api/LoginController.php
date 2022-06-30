<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    // retrieved the user from database filtered by email

    public function index(Request $request)
    {


        $request->validate([
            'email'=> 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email' , $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)) {
                return response()->json([
                    'message'=> 'Invalid',
                    'errors' => [
                        'password'=> 'The password does not belong to the user account'
                    ]
                    ], 400);
        }

        //Return access token if the checking is successful

        return response()->json([
            'data' => [ 'first_name' => $user->first_name, 'last_name' => $user->last_name, 'email' => $user->email, 'is_admin' => $user->is_admin, 'avatar' => $user->avatar],
            'access_token' => $user->createToken('api-token')->plainTextToken,  
            'type' => 'bearer',
        ], 200);
    }
}
