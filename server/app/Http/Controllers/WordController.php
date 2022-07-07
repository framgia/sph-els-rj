<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Word;

class WordController extends Controller
{
    //

    public function index()
    {

        return Word::all();
    }
    public function store(Request $request)
    {
        //
        $request->validate([
            'category_id' => 'required',
            'word' => 'required|unique:words'
        ]);

        $data = Word::create($request->all());

        return response()->json(['data' => $data, 'message' => 'Word Created Successfully']);
    }
}
