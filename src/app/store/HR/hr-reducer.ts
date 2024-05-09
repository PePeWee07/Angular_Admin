import { Action, createReducer, on } from '@ngrx/store';
import { fetchDepartmentData, fetchDepartmentFailure, fetchDepartmentSuccess, fetchEmployeeSalaryData, fetchEmployeeSalaryFailure, fetchEmployeeSalarySuccess, fetchEstimateData, fetchEstimateFailure, fetchEstimateSuccess, fetchExpenseData, fetchExpenseFailure, fetchExpenseSuccess, fetchHRLeaveData, fetchHRLeaveFailure, fetchHRLeaveSuccess, fetchattendanceData, fetchattendanceFailure, fetchattendanceSuccess, fetchemployeeLeaveData, fetchemployeeLeaveFailure, fetchemployeeLeaveSuccess, fetchemployeeListData, fetchemployeeListFailure, fetchemployeeListSuccess, fetchholidayListData, fetchholidayListFailure, fetchholidayListSuccess } from './hr-action';

export interface HRManagementState {
  employee: any[];
  holiday: any[];
  leaveEmployee: any[];
  leaveHR: any[];
  attendance: any[];
  Department: any[];
  Estimate: any[];
  Expense: any[];
  Salary: any[];
  loading: boolean;
  error: any;
}

export const initialState: HRManagementState = {
  employee: [],
  holiday: [],
  leaveEmployee: [],
  leaveHR: [],
  attendance: [],
  Department: [],
  Estimate: [],
  Expense: [],
  Salary: [],
  loading: false,
  error: null,
};

export const HRManagementReducer = createReducer(
  initialState,
  on(fetchemployeeListData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchemployeeListSuccess, (state, { employee }) => {
    return { ...state, employee, loading: false };
  }),
  on(fetchemployeeListFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),

  // Holiday
  on(fetchholidayListData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchholidayListSuccess, (state, { holiday }) => {
    return { ...state, holiday, loading: false };
  }),
  on(fetchholidayListFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),

  // Employee Leave
  on(fetchemployeeLeaveData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchemployeeLeaveSuccess, (state, { leaveEmployee }) => {
    return { ...state, leaveEmployee, loading: false };
  }),
  on(fetchemployeeLeaveFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),

  // HR Leave
  on(fetchHRLeaveData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchHRLeaveSuccess, (state, { leaveHR }) => {
    return { ...state, leaveHR, loading: false };
  }),
  on(fetchHRLeaveFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),

  // Attendence
  on(fetchattendanceData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchattendanceSuccess, (state, { attendance }) => {
    return { ...state, attendance, loading: false };
  }),
  on(fetchattendanceFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),

  // Department
  on(fetchDepartmentData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchDepartmentSuccess, (state, { Department }) => {
    return { ...state, Department, loading: false };
  }),
  on(fetchDepartmentFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),

  // Estimates
  on(fetchEstimateData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchEstimateSuccess, (state, { Estimate }) => {
    return { ...state, Estimate, loading: false };
  }),
  on(fetchEstimateFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),

  // Expenses
  on(fetchExpenseData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchExpenseSuccess, (state, { Expense }) => {
    return { ...state, Expense, loading: false };
  }),
  on(fetchExpenseFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),


    // Payroll Employee Salary
    on(fetchEmployeeSalaryData, (state) => {
      return { ...state, loading: true, error: null };
    }),
    on(fetchEmployeeSalarySuccess, (state, { Salary }) => {
      return { ...state, Salary, loading: false };
    }),
    on(fetchEmployeeSalaryFailure, (state, { error }) => {
      return { ...state, error, loading: false };
    }),

)

// Selector
export function reducer(state: HRManagementState | undefined, action: Action) {
  return HRManagementReducer(state, action);
}
