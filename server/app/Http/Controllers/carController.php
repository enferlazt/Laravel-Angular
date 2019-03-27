<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Car;

class carController extends Controller
{
    function add(Request $request){
        $brand = $request->input('brand');
        $model = $request->input('model');
        $year = $request->input('year');
        $image = $request->input('image');
        $price = $request->input('price');
        $mileage = $request->input('mileage');
        $description = $request->input('description');
        $date = $request->input('date');

        $car = new car();
        $car->brand = $brand;
        $car->model = $model;
        $car->year = $year;
        $car->image = $image;
        $car->price = $price;
        $car->mileage = $mileage;
        $car->description = $description;
        $car->date = $date;

        $car->save();

        return $car;
    }

    function get(){
        $records = car::all();
        return response()->json($records);
    }

    function delete(Request $request){
        $id = $request->input('id');

        $record = car::find($id);
        $record->delete();

        return $record;
    }

    function singular(Request $request){
        $id = $request->input('id');
        $record = car::find($id);
        return response()->json($record);
    }
}
