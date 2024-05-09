import { Injectable } from "@angular/core";

import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { CrudService } from "../../core/services/crud.service";
import { fetchDepartmentData, fetchDepartmentFailure, fetchDepartmentSuccess, fetchEmployeeSalaryData, fetchEmployeeSalaryFailure, fetchEmployeeSalarySuccess, fetchEstimateData, fetchEstimateFailure, fetchEstimateSuccess, fetchExpenseData, fetchExpenseFailure, fetchExpenseSuccess, fetchHRLeaveData, fetchHRLeaveFailure, fetchHRLeaveSuccess, fetchattendanceData, fetchattendanceFailure, fetchattendanceSuccess, fetchemployeeLeaveData, fetchemployeeLeaveFailure, fetchemployeeLeaveSuccess, fetchemployeeListData, fetchemployeeListFailure, fetchemployeeListSuccess, fetchholidayListData, fetchholidayListFailure, fetchholidayListSuccess } from "./hr-action";


@Injectable()
export class HRManagementEffects {
    fetchEmployeeData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchemployeeListData),
            mergeMap(() =>
                this.CrudService.fetchData('/app/employee').pipe(
                    map((employee) => fetchemployeeListSuccess({ employee })),
                    catchError((error) =>
                        of(fetchemployeeListFailure({ error }))
                    )
                )
            ),
        ),
    )

    // Holiday
    fetchHolidayData$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fetchholidayListData),
        mergeMap(() =>
            this.CrudService.fetchData('/app/holidays').pipe(
                map((holiday) => fetchholidayListSuccess({ holiday })),
                catchError((error) =>
                    of(fetchholidayListFailure({ error }))
                )
            )
        ),
    ),
    )
    
    // Employee Leave
    fetchEmployeeLeaveData$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fetchemployeeLeaveData),
        mergeMap(() =>
            this.CrudService.fetchData('/app/leave_employee').pipe(
                map((leaveEmployee) => fetchemployeeLeaveSuccess({ leaveEmployee })),
                catchError((error) =>
                    of(fetchemployeeLeaveFailure({ error }))
                )
            )
        ),
    ),
    )
    
    // HR Leave
    fetchHRLeaveData$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fetchHRLeaveData),
        mergeMap(() =>
            this.CrudService.fetchData('/app/leave_hr').pipe(
                map((leaveHR) => fetchHRLeaveSuccess({ leaveHR })),
                catchError((error) =>
                    of(fetchHRLeaveFailure({ error }))
                )
            )
        ),
    ),
    )
    
     // Attendence
     fetchAttendence$ = createEffect(() =>
     this.actions$.pipe(
         ofType(fetchattendanceData),
         mergeMap(() =>
             this.CrudService.fetchData('/app/attendance').pipe(
                 map((attendance) => fetchattendanceSuccess({ attendance })),
                 catchError((error) =>
                     of(fetchattendanceFailure({ error }))
                 )
             )
         ),
     ),
    )
    
     // Department
     fetchDepartment$ = createEffect(() =>
     this.actions$.pipe(
         ofType(fetchDepartmentData),
         mergeMap(() =>
             this.CrudService.fetchData('/app/department').pipe(
                 map((Department) => fetchDepartmentSuccess({ Department })),
                 catchError((error) =>
                     of(fetchDepartmentFailure({ error }))
                 )
             )
         ),
     ),
    )
    
      // Estimate
      fetchEstimate$ = createEffect(() =>
      this.actions$.pipe(
          ofType(fetchEstimateData),
          mergeMap(() =>
              this.CrudService.fetchData('/app/estimate').pipe(
                  map((Estimate) => fetchEstimateSuccess({ Estimate })),
                  catchError((error) =>
                      of(fetchEstimateFailure({ error }))
                  )
              )
          ),
      ),
    )
    
      // Expenses
      fetchExpenses$ = createEffect(() =>
      this.actions$.pipe(
          ofType(fetchExpenseData),
          mergeMap(() =>
              this.CrudService.fetchData('/app/expense').pipe(
                  map((Expense) => fetchExpenseSuccess({ Expense })),
                  catchError((error) =>
                      of(fetchExpenseFailure({ error }))
                  )
              )
          ),
      ),
    )
    
    // Payroll Empoyee Salary
    fetchPayrollSalary$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fetchEmployeeSalaryData),
        mergeMap(() =>
            this.CrudService.fetchData('/app/salary').pipe(
                map((Salary) => fetchEmployeeSalarySuccess({ Salary })),
                catchError((error) =>
                    of(fetchEmployeeSalaryFailure({ error }))
                )
            )
        ),
    ),
)
   

    constructor(
        private actions$: Actions,
        private CrudService: CrudService
    ) { }
}
