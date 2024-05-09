import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HRManagementState } from './hr-reducer';

export const selectDataState = createFeatureSelector<HRManagementState>('HR');

export const selectEmployeeData = createSelector(
    selectDataState,
    (state: HRManagementState) => state.employee
);

// Holiday
export const selectHolidayData = createSelector(
    selectDataState,
    (state: HRManagementState) => state.holiday
);

// Employee Leave
export const selectEmployeeLeave = createSelector(
    selectDataState,
    (state: HRManagementState) => state.leaveEmployee
);

// HR Leave
export const selectHRLeave = createSelector(
    selectDataState,
    (state: HRManagementState) => state.leaveHR
);

// Attendence
export const selectAttendence = createSelector(
    selectDataState,
    (state: HRManagementState) => state.attendance
);

// Department
export const selectDepartment = createSelector(
    selectDataState,
    (state: HRManagementState) => state.Department
);

// Estimates
export const selectEstimates = createSelector(
    selectDataState,
    (state: HRManagementState) => state.Estimate
);

// Expenses
export const selectExpenses = createSelector(
    selectDataState,
    (state: HRManagementState) => state.Expense
);

// Payroll Employee Salary
export const selectEmployeeSalary = createSelector(
    selectDataState,
    (state: HRManagementState) => state.Salary
);

export const selectDataLoading = createSelector(
    selectDataState,
    (state: HRManagementState) => state.loading
);

export const selectDataError = createSelector(
    selectDataState,
    (state: HRManagementState) => state.error
);

