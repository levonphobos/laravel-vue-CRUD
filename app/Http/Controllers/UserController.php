<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    function register(Request $request){
        $user = new User();

        $user->name = $request->username;
        $user->password = bcrypt($request->password);
        $user->save();

        return response($user, 201);
    }

    function login(Request $request){
        $user = User::where('name', $request->username)->first();

        if(Hash::check($request->password, $user->password)){
            return response($user, 201);
        }
    }

    function logout(){

    }

}
