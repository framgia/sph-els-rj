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

    public function show($id)
    {
        return Word::find($id);
    }

    public function choices($id)
    {
        $word = Word::find($id);

        return $word->choices;
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
    public function update(Request $request, $id)
    {
        $word = Word::find($id);

        $word->word = $request->word;


        $word->save();

        return response()->json(['message' => 'Word Updated']);
    }
    public function destroy($id)
    {

        return Word::destroy($id);
    }
}
