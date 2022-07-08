<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Choice;
use Illuminate\Support\Facades\DB;


class ChoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Choice::all();
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

        $request->validate([
            'choice_name' => 'required|unique:choices'
        ]);

        // $choice = Choice::create($request->all());

        if ($request->choice_name) {
            foreach ((array) $request->choice_name as $key => $index) {

                $record = [
                    'choice_name' => $request->choice_name[$key],
                    'is_correct' => $request->is_correct[$key],
                    'word_id' => $request->word_id,
                ];

                $records = DB::table('choices')->insert($record);
            }

            // dd($record);



            // dd($records);
        }

        return response()->json(['data' => $records, 'message' => 'Choice Created Successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

        return Choice::find($id);
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

        $choice = Choice::find($id);

        $choice->choice_name = $request->choice_name;
        $choice->is_correct = $request->is_correct;

        $choice->save();

        return response()->json(['message' => 'Choice Updated']);
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
        return Choice::destroy($id);
    }
}
