<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use PhpParser\Node\Expr\Cast\Object_;

class EmployeeController extends Controller
{
    function index()
    {
        return Employee::all();
    }

    function create(Request $request)
    {
        $employee = new Employee();
        $uploadFile = $request->photo;
        $uploadFile->store('public/uploads');
        $filename = $uploadFile->store('');

        $employee->name = $request->name;
        $employee->lastname = $request->lastname;
        $employee->email = $request->email;
        $employee->phone = $request->phone;
        $employee->photo = $filename;
        $employee->save();

        return Employee::latest('updated_at', 'desc')->first();
    }

    function show($id)
    {
        return Employee::findOrFail($id);
    }

    function update(Request $request, $id)
    {
        $currentEmployee = Employee::findOrFail($id);

        $currentEmployee->name = $request->name;
        $currentEmployee->lastname = $request->lastname;
        $currentEmployee->email = $request->email;
        $currentEmployee->phone = $request->phone;

        $currentEmployee->save();

        return $currentEmployee;
    }

    function destroy($id)
    {
        $currentEmployee = Employee::findOrFail($id);
        $currentEmployee->delete();
        return $id;
    }
}
