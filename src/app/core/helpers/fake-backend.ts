import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { AttendanceData, DepartmentsListData, EmployeeListData, EmployeeSalaryData, EstimatesData, EventData, ExpensesData, FriendsData, GridViewData, HolidaysData, LeaveManageEmployeeData, LeaveManageHRData, ListViewData, NotesData, OrderListData, SellersData, UserGridViewData, UserListViewData, events } from '../../data';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { 
     }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // tslint:disable-next-line: max-line-length
        const users: any[] = JSON.parse(sessionStorage.getItem('users')!) || [{ username: 'admin', email: 'admin@themesbrand.com', password: '123456' }];

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                const filteredUsers = users.filter(user => {
                    return user.email === request.body.email && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    const user = filteredUsers[0];
                    const body = {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return of(new HttpResponse({ status: 200, body }));
                } else {
                    // else return 400 bad request
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }

            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application

                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: users }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    // tslint:disable-next-line: no-shadowed-variable
                    const matchedUsers = users.filter(user => user.id === id);
                    const user = matchedUsers.length ? matchedUsers[0] : null;

                    return of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                const newUser = request.body;

                // validation
                const duplicateUser = users.filter(user => user.username === newUser.username).length;
                if (duplicateUser) {
                    return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                }

                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                sessionStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            sessionStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }

                    // respond 200 OK
                    return of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get Product List
            if (request.url.endsWith('/app/product') && request.method === 'GET') {
                if (ListViewData) {
                    return of(new HttpResponse({ status: 200, body: ListViewData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get Product Grid
            if (request.url.endsWith('/app/productgrid') && request.method === 'GET') {
                if (GridViewData) {
                    return of(new HttpResponse({ status: 200, body: GridViewData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get order
            if (request.url.endsWith('/app/order') && request.method === 'GET') {
                if (OrderListData) {
                    return of(new HttpResponse({ status: 200, body: OrderListData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get seller
            if (request.url.endsWith('/app/seller') && request.method === 'GET') {
                if (SellersData) {
                    return of(new HttpResponse({ status: 200, body: SellersData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get hr employee
            if (request.url.endsWith('/app/employee') && request.method === 'GET') {
                if (EmployeeListData) {
                    return of(new HttpResponse({ status: 200, body: EmployeeListData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get hr holidays
            if (request.url.endsWith('/app/holidays') && request.method === 'GET') {
                if (HolidaysData) {
                    return of(new HttpResponse({ status: 200, body: HolidaysData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get leave manage employee
            if (request.url.endsWith('/app/leave_employee') && request.method === 'GET') {
                if (LeaveManageEmployeeData) {
                    return of(new HttpResponse({ status: 200, body: LeaveManageEmployeeData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get leave manage employee
            if (request.url.endsWith('/app/leave_hr') && request.method === 'GET') {
                if (LeaveManageHRData) {
                    return of(new HttpResponse({ status: 200, body: LeaveManageHRData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get Attendence
            if (request.url.endsWith('/app/attendance') && request.method === 'GET') {
                if (AttendanceData) {
                    return of(new HttpResponse({ status: 200, body: AttendanceData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get department
            if (request.url.endsWith('/app/department') && request.method === 'GET') {
                if (DepartmentsListData) {
                    return of(new HttpResponse({ status: 200, body: DepartmentsListData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get Estimates
            if (request.url.endsWith('/app/estimate') && request.method === 'GET') {
                if (EstimatesData) {
                    return of(new HttpResponse({ status: 200, body: EstimatesData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get Expenses
            if (request.url.endsWith('/app/expense') && request.method === 'GET') {
                if (ExpensesData) {
                    return of(new HttpResponse({ status: 200, body: ExpensesData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get Payroll Employee Salary
            if (request.url.endsWith('/app/salary') && request.method === 'GET') {
                if (EmployeeSalaryData) {
                    return of(new HttpResponse({ status: 200, body: EmployeeSalaryData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get Notes Data
            if (request.url.endsWith('/app/notes') && request.method === 'GET') {
                if (NotesData) {
                    return of(new HttpResponse({ status: 200, body: NotesData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get Friends Data
            if (request.url.endsWith('/app/friends') && request.method === 'GET') {
                if (FriendsData) {
                    return of(new HttpResponse({ status: 200, body: FriendsData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get Event Data
            if (request.url.endsWith('/app/event') && request.method === 'GET') {
                if (EventData) {
                    return of(new HttpResponse({ status: 200, body: EventData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get User List
            if (request.url.endsWith('/app/userlist') && request.method === 'GET') {
                if (UserListViewData) {
                    return of(new HttpResponse({ status: 200, body: UserListViewData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get User Grid
            if (request.url.endsWith('/app/usergrid') && request.method === 'GET') {
                if (UserGridViewData) {
                    return of(new HttpResponse({ status: 200, body: UserGridViewData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get Calnedar
            if (request.url.endsWith('/app/calendar') && request.method === 'GET') {
                if (events) {
                    return of(new HttpResponse({ status: 200, body: events }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // Add Calenedar
            if (request.url.endsWith('/app/calendar') && request.method === 'POST') {
                const newUser = request.body;
                if (events) {
                    return of(new HttpResponse({ status: 200, body: newUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // Update Calenedar
            if (request.url.endsWith('/app/calendar') && request.method === 'PUT') {
                const updatedUser = request.body;
                if (events) {
                    return of(new HttpResponse({ status: 200, body: updatedUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // delete Calenedar
            if (request.url.endsWith('/app/calendar') && request.method === 'DELETE') {
                const updatedUser = request.body;
                if (events) {
                    return of(new HttpResponse({ status: 200, body: updatedUser })); // respond 200 OK
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // pass through any requests not handled above
            return next.handle(request);

        }))

            // tslint:disable-next-line: max-line-length
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}
