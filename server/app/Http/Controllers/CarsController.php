<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cars;


class CarsController extends Controller
{
    public function index(){
        return Cars::all();
    }

    public function show($id){
        return Cars::find($id);
    }

    public function store(Request $request){
        return Cars::create($request->all());
    }

    public function update(Request $request, $id){
        $task = Cars::findOrFail($id);
        $task->update($request->all());

        return $task;
    }

    public function delete(Request $request, $id){
        $task = Cars::findOrFail($id);
        $task->delete();

        return 204;
    }
}
