<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserCollection;
use Illuminate\Support\Facades\Hash;



class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return new UserCollection(User::all());

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        // $request->validate([
        //     'first_name' => 'required',
        //     'last_name' =>  'required',
        //     'email'=> 'required|email|unique:users'
        // ]);

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
    
        return response()->json([ 'data'=> $user, 'message' => 'Successfully added the user'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return response()->json($user, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
