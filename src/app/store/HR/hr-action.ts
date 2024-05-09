import { createAction, props } from '@ngrx/store';
import { AttendanceModel, DepartmentModel, EmployeeLeaveModel, EmployeeModel, EstimateModel, ExpenseModel, HRLeaveModel, HolidayModel, SalaryModel } from './hr.model';

export const fetchemployeeListData = createAction('[Data] Fetch employeeList');
export const fetchemployeeListSuccess = createAction('[Data] Fetch employeeList Success',props<{ employee: EmployeeModel[] }>());
export const fetchemployeeListFailure = createAction('[Data] Fetch employeeList Failure', props<{ error: string }>());

// Holidays
export const fetchholidayListData = createAction('[Data] Fetch holidayList');
export const fetchholidayListSuccess = createAction('[Data] Fetch holidayList Success',props<{ holiday: HolidayModel[] }>());
export const fetchholidayListFailure = createAction('[Data] Fetch holidayList Failure', props<{ error: string }>());

// Employee Leave
export const fetchemployeeLeaveData = createAction('[Data] Fetch employeeLeave');
export const fetchemployeeLeaveSuccess = createAction('[Data] Fetch employeeLeave Success',props<{ leaveEmployee: EmployeeLeaveModel[] }>());
export const fetchemployeeLeaveFailure = createAction('[Data] Fetch employeeLeave Failure',props<{ error: string }>());

// HR Leave
export const fetchHRLeaveData = createAction('[Data] Fetch HRLeave');
export const fetchHRLeaveSuccess = createAction('[Data] Fetch HRLeave Success',props<{ leaveHR: HRLeaveModel[] }>());
export const fetchHRLeaveFailure = createAction('[Data] Fetch HRLeave Failure', props<{ error: string }>());

// Attendance
export const fetchattendanceData = createAction('[Data] Fetch attendance');
export const fetchattendanceSuccess = createAction('[Data] Fetch attendance Success',props<{ attendance: AttendanceModel[] }>());
export const fetchattendanceFailure = createAction('[Data] Fetch attendance Failure', props<{ error: string }>());

// Department
export const fetchDepartmentData = createAction('[Data] Fetch Department');
export const fetchDepartmentSuccess = createAction('[Data] Fetch Department Success',props<{ Department: DepartmentModel[] }>());
export const fetchDepartmentFailure = createAction('[Data] Fetch Department Failure', props<{ error: string }>());

// Estimates
export const fetchEstimateData = createAction('[Data] Fetch Estimate');
export const fetchEstimateSuccess = createAction('[Data] Fetch Estimate Success',props<{ Estimate: EstimateModel[] }>());
export const fetchEstimateFailure = createAction('[Data] Fetch Estimate Failure',props<{ error: string }>());


// Expenses
export const fetchExpenseData = createAction('[Data] Fetch Expense');
export const fetchExpenseSuccess = createAction('[Data] Fetch Expense Success',props<{ Expense: ExpenseModel[] }>());
export const fetchExpenseFailure = createAction('[Data] Fetch Expense Failure', props<{ error: string }>());

// Payroll Employee Salary
export const fetchEmployeeSalaryData = createAction('[Data] Fetch EmployeeSalary');
export const fetchEmployeeSalarySuccess = createAction('[Data] Fetch EmployeeSalary Success',props<{ Salary: SalaryModel[] }>());
export const fetchEmployeeSalaryFailure = createAction('[Data] Fetch EmployeeSalary Failure',props<{ error: string }>());


