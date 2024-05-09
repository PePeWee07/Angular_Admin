export interface EmployeeModel {
    id?: any;
    employeeId?: string;
    name?: string;
    img?: string;
    designation?: string;
    email?: string;
    phone?: number;
    location?: string;
    experience: boolean;
    joinDate: string;
}

export interface HolidayModel {
    id?: any;
    day?: string;
    date?: string;
    holidayName?: string;
    type?: string;
}

export interface EmployeeLeaveModel{
    id?: any;
    leaveType?: string;
    reason?: string;
    noOfDays: string;
    from: string;
    to: string;
    approvedBy: string;
    status: string;
    action:string
}

export interface HRLeaveModel{
    id?: any;
    employeeName?: string;
    leaveType?: string;
    reason: string;
    noOfDays: string;
    from: string;
    to: string;
    status: string
}

export interface AttendanceModel{
    id?: any;
    day?: string;
    date?: string;
    checkIn: string;
    checkOut: string;
    mealBreak: string;
    workHours: string;
    overtime: string
}


export interface DepartmentModel{
    id?: any;
    departmentName: string;
    HOD: string;
    phone: string;
    email: string;
    employee:string
}


export interface EstimateModel{
    id?: any;
    estimateNumber: string;
    clientName: string;
    estimateBy: string;
    estimateDate: string;
    expiryDate: string;
    amount: string;
    status:string
}


export interface ExpenseModel{
    id?: any;
    purchaseDate: string;
    item: string;
    purchasedBy: string;
    paidBy: string;
    amount:string
}

export interface SalaryModel{
    id?: any;
    employeeId?: string;
    joiningDate?: string;
    name?: string;
    img?: string;
    designation?: string;
    emailId?: string;
    phoneNumber?: string;
    salary?: string;
    bonus?: string;
}