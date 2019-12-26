<?php

namespace App\Http\Controllers;

use App\Models\Phonebook;
use Illuminate\Http\Request;
use App\Http\Requests\PhonebookRequest;
use Symfony\Component\HttpFoundation\Response;

class PhonebookController extends Controller
{
    public function index()
    {  
        $phonebook = Phonebook::orderBy('brand_name')->get();
        return response()->json(['phonebook'=>$phonebook]);
    }
    public function getPhonebooks()
    {  
        $phonebooks = Phonebook::orderBy('brand_name')->get();
        return response(['phonebooks'=>$phonebooks]);
    }

    public function create()
    {
        //
    }

    public function store(PhonebookRequest $request)
    {
        $phonebook = new Phonebook();
        $phonebook->brand_name = $request['brand'];
        $phonebook->mobile_name = $request['model'];
        $phonebook->price = $request['price'];
        $phonebook->warranty = $request['warranty'];
        if($phonebook->save()){
            return response(['message'=>'Phonebook details saved successfully.'],Response::HTTP_OK);
        }
      return response(['message'=>'Something went wrong.'],Response::HTTP_BAD_REQUEST);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Phonebook  $phonebook
     * @return \Illuminate\Http\Response
     */
    public function show(Phonebook $phonebook)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Phonebook  $phonebook
     * @return \Illuminate\Http\Response
     */
    public function edit(Phonebook $phonebook)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Phonebook  $phonebook
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Phonebook $phonebook)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Phonebook  $phonebook
     * @return \Illuminate\Http\Response
     */
    public function destroy(Phonebook $phonebook)
    {
        //
    }
}
