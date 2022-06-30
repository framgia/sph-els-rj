<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    
    public function register(Request $request) {

        $validator = Validator::make($request->all(),[
            'first_name' => ['required'],
            'last_name' =>  ['required'],
            'email' => ['required', 'email', Rule::unique('users', 'email')], 
        ]);

        if($validator->fails()){
                return response()->json([
                    'message' =>  $validator->errors(), 
                ], 201);
        }

       

        $requestData = array_merge($request->all(), [
            'password' => Hash::make($request->password),
            'avatar' => 'dummy.png'
        ]);

    
        $user = User::create($requestData);

        $token = $user->createToken('api-token')->plainTextToken;

        $response = [
            'data' => $user,
            'token' => $token
        ];
    
        return response()->json([ $response, 'message' => 'Successfully added the user'], 200);
    }
}
