<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Car;

class carController extends Controller
{
    function add(Request $request){
        $car = new car();
        $car->brand = $request->brand !== null ? $request->brand : '';
        $car->model = $request->model !== null ? $request->model : '';
        $car->year = $request->year !== null ? $request->year : '';
        $car->image = $request->image !== null ? $request->image : '';
        $car->price = $request->price !== null ? $request->price : '';
        $car->mileage = $request->mileage !== null ? $request->mileage : '';
        $car->description = $request->description !== null ? $request->description : '';
        $car->created_at = date("Y-m-d H:i:s");
        $car->updated_at = $car->created_at;
        // if($request->has('brand')){
        //     $car->brand = $request->brand;
        // }
        // if($request->has('year')){
        //     $car->year = $request->year;
        // }
        // if($request->has('image')){
        //     $car->image = $request->image;
        // }
        // if($request->has('price')){
        //     $car->price = $request->price;
        // }
        // if($request->has('mileage')){
        //     $car->mileage = $request->mileage;
        // }
        // if($request->has('description')){
        //     $car->description = $request->description;
        // }

        $car->save();

        return [
            'status' => 'done',
        ];
    }

    function all(Request $request){
        $records = car::query();
        $brand = $request->brand;
        $model = $request->model;
        $yearMin = $request->yearMin;
        $yearMax = $request->yearMax;
        $priceMin = $request->priceMin;
        $priceMax = $request->priceMax;
        $mileageMin = $request->mileageMin;
        $mileageMax = $request->mileageMax;
        if(!empty($brand)){
            $records = $records->where('brand', 'like', '%'.$brand.'%');
        }
        if(!empty($model)){
            $records = $records->where('model', 'like', '%'.$model.'%');
        }
        if($yearMin !== null || $yearMax !== null){
            if($yearMin == null){
                $yearMin = $records->min('year');
            }
            if($yearMax == null){
                $yearMax = $records->max('year');
            }
            $records = $records->whereBetween('year', [$yearMin, $yearMax]);
        }
        if($priceMin !== null || $priceMax !== null){
            if($priceMin == null){
                $priceMin = $records->min('price');
            }
            if($priceMax == null){
                $priceMax = $records->max('price');
            }
            $records = $records->whereBetween('price', [$priceMin, $priceMax]);
        }
        if($mileageMin !== null || $mileageMax !== null){
            if($mileageMin == null){
                $mileageMin = $records->min('mileage');
            }
            if($mileageMax == null){
                $mileageMax = $records->max('mileage');
            }
            $records = $records->whereBetween('mileage', [$mileageMin, $mileageMax]);
        }
        
        $records = $records->get();
        
        return response()->json($records);
    }

    function delete(Request $request){
        $id = $request->input('id');
        $record = car::find($id);
        $record->delete();
        return [
            'status' => 'done',
        ];
    }

    function singular(Request $request){
        $id = $request->input('id');
        $record = car::find($id);
        return response()->json($record);
    }
}
