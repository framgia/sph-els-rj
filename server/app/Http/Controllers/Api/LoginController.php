<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException as ValidationValidationException;

class LoginController extends Controller
{
    // retrieved the user from database filtered by email

    public function index(Request $request)
    {


        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid',
                'errors' => [
                    'password' => 'The password does not belong to the user account'
                ]
            ], 400);
        }
        $user = User::where('email', $request->email)->first();

        // if(!$user || !Hash::check($request->password, $user->password)) {
        //         return response()->json([
        //             'message'=> 'Invalid',
        //             'errors' => [
        //                 'password'=> 'The password does not belong to the user account'
        //             ]
        //             ], 400);
        // }

        // if(Auth::attempt($request->only('email', 'password'))) {
        //     return response()->json([Auth::user(), 'access_token' => Auth::user()->createToken('api-token')->plainTextToken, 200]);
        // }

        // throw ValidationValidationException::withMessages([
        //     'message' => ['The provided credentials are incorrect']
        // ]);




        //Return access token if the checking is successful

        return response()->json([
            'data' => ['first_name' => $user->first_name, 'last_name' => $user->last_name, 'email' => $user->email, 'is_admin' => $user->is_admin, 'avatar' => $user->avatar],
            'access_token' => $user->createToken('api-token')->plainTextToken,
        ], 200);
    }
}
