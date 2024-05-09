import { Route } from "@angular/router";
import { IndexComponent } from "./dashboard/index/index.component";
import { DrawerComponent } from "./ui/drawer/drawer.component";
import { AnalyticsComponent } from "./dashboard/analytics/analytics.component";
import { EmailComponent } from "./dashboard/email/email.component";
import { HrComponent } from "./dashboard/hr/hr.component";
import { SocialComponent } from "./dashboard/social/social.component";
import { ChatComponent } from "./apps/chat/chat.component";
import { ListComponent } from "./ecommerce/products/list/list.component";
import { GridComponent } from "./ecommerce/products/grid/grid.component";
import { CollapseComponent } from "./ui/collapse/collapse.component";
import { SweetalertComponent } from "./plugins/sweetalert/sweetalert.component";
import { SimplebarComponent } from "./plugins/simplebar/simplebar.component";
import { LightboxComponent } from "./plugins/lightbox/lightbox.component";
import { VideoPlayerComponent } from "./plugins/video-player/video-player.component";
import { OverviewComponent } from "./ecommerce/products/overview/overview.component";
import { CreateComponent } from "./ecommerce/products/create/create.component";
import { CartComponent } from "./ecommerce/cart/cart.component";
import { CheckoutComponent } from "./ecommerce/checkout/checkout.component";
import { OrdersComponent } from "./ecommerce/orders/orders.component";
import { OrderOverviewComponent } from "./ecommerce/order-overview/order-overview.component";
import { SellersComponent } from "./ecommerce/sellers/sellers.component";
import { EmployeeComponent } from "./hr/employee/employee.component";
import { HolidaysComponent } from "./hr/holidays/holidays.component";
import { LeaveEmployeeComponent } from "./hr/leaves/leave-employee/leave-employee.component";
import { CreateLeaveEmployeeComponent } from "./hr/leaves/create-leave-employee/create-leave-employee.component";
import { LeaveComponent } from "./hr/leaves/leave/leave.component";
import { CreateLeaveComponent } from "./hr/leaves/create-leave/create-leave.component";
import { AttendanceHrComponent } from "./hr/attendance/attendance-hr/attendance-hr.component";
import { AttendanceMainComponent } from "./hr/attendance/attendance-main/attendance-main.component";
import { DepartmentComponent } from "./hr/department/department.component";
import { EstimatesComponent } from "./hr/sales/estimates/estimates.component";
import { PaymentsComponent } from "./hr/sales/payments/payments.component";
import { ExpensesComponent } from "./hr/sales/expenses/expenses.component";
import { ScrollHintComponent } from "./plugins/scroll-hint/scroll-hint.component";
import { SwiperSliderComponent } from "./plugins/swiper-slider/swiper-slider.component";
import { BasicComponent } from "./forms/basic/basic.component";
import { ValidationComponent } from "./forms/validation/validation.component";
import { InputMaskComponent } from "./forms/input-mask/input-mask.component";
import { SelectComponent } from "./forms/select/select.component";
import { CheckboxRadioComponent } from "./forms/checkbox-radio/checkbox-radio.component";
import { SwitchesComponent } from "./forms/switches/switches.component";
import { WizardComponent } from "./forms/wizard/wizard.component";
import { FileUploadComponent } from "./forms/file-upload/file-upload.component";
import { DatepickerComponent } from "./forms/datepicker/datepicker.component";
import { TimepickerComponent } from "./forms/timepicker/timepicker.component";

import { AreaComponent } from "./charts/area/area.component";
import { BarComponent } from "./charts/bar/bar.component";
import { BoxplotComponent } from "./charts/boxplot/boxplot.component";
import { BubbleComponent } from "./charts/bubble/bubble.component";
import { CandlstickComponent } from "./charts/candlstick/candlstick.component";
import { ColumnComponent } from "./charts/column/column.component";
import { FunnelComponent } from "./charts/funnel/funnel.component";
import { HeatmapComponent } from "./charts/heatmap/heatmap.component";
import { LineComponent } from "./charts/line/line.component";
import { EmployeeSalaryComponent } from "./hr/payroll/employee-salary/employee-salary.component";
import { PayslipComponent } from "./hr/payroll/payslip/payslip.component";
import { CreatePayslipComponent } from "./hr/payroll/create-payslip/create-payslip.component";
import { NotesComponent } from "./apps/notes/notes.component";
import { FriendsComponent } from "./social/friends/friends.component";
import { EventComponent } from "./social/event/event.component";
import { VideoComponent } from "./social/video/video.component";
import { MarketplaceComponent } from "./social/marketplace/marketplace.component";
import { ListViewComponent } from "./invoice/list-view/list-view.component";
import { AddNewComponent } from "./invoice/add-new/add-new.component";
import { InvoiceOverviewComponent } from "./invoice/invoice-overview/invoice-overview.component";
import { UsersListComponent } from "./user/users-list/users-list.component";
import { UsersGridComponent } from "./user/users-grid/users-grid.component";
import { CalendarComponent } from "./calendar/calendar/calendar.component";
import { colorPickrComponent } from "./forms/colorpicker/colorpicker.component";
import { InputSpinComponent } from "./forms/input-spin/input-spin.component";
import { ClipboardComponent } from "./forms/clipboard/clipboard.component";
import { BalloonComponent } from "./forms/editors/balloon/balloon.component";
import { InlineComponent } from "./forms/editors/inline/inline.component";
import { ClassicComponent } from "./forms/editors/classic/classic.component";
import { BasicComponents } from "./table/basic/basic.component";
import { DatatableComponent } from "./table/datatable/datatable.component";
import { NavbarComponent } from "./navigation/navbar/navbar.component";
import { TabComponent } from "./navigation/tab/tab.component";
import { BreadcrumbComponent } from "./navigation/breadcrumb/breadcrumb.component";
import { PaginationComponent } from "./navigation/pagination/pagination.component";
import { AlertComponent } from "./ui/alert/alert.component";
import { AvatarComponent } from "./ui/avatar/avatar.component";
import { ButtonsComponent } from "./ui/buttons/buttons.component";
import { LabelComponent } from "./ui/label/label.component";
import { CardsComponent } from "./ui/cards/cards.component";
import { CountdownComponent } from "./ui/countdown/countdown.component";
import { DropdownComponent } from "./ui/dropdown/dropdown.component";
import { GalleryComponent } from "./ui/gallery/gallery.component";
import { ListsComponent } from "./ui/lists/lists.component";
import { NotificationComponent } from "./ui/notification/notification.component";
import { ModalComponent } from "./ui/modal/modal.component";
import { SpinnersComponent } from "./ui/spinners/spinners.component";
import UITimelineComponents from "./ui/timeline/timeline.component";
import { ProgressBarComponent } from "./ui/progress-bar/progress-bar.component";
import { TooltipComponent } from "./ui/tooltip/tooltip.component";
import UIVideoComponents from "./ui/video/video.component";
import { MixedComponent } from "./charts/mixed/mixed.component";
import { PieComponent } from "./charts/pie/pie.component";
import { PolarComponent } from "./charts/polar/polar.component";
import { RadarComponent } from "./charts/radar/radar.component";
import { RadialbarComponent } from "./charts/radialbar/radialbar.component";
import { RangeAreaComponent } from "./charts/range-area/range-area.component";
import { ScatterComponent } from "./charts/scatter/scatter.component";
import { TimelineComponent } from "./charts/timeline/timeline.component";
import { TreemapComponent } from "./charts/treemap/treemap.component";
import { RemixComponent } from "./icons/remix/remix.component";
import { GoogleComponent } from "./maps/google/google.component";
import { LeafletComponent } from "./maps/leaflet/leaflet.component";
import { AccountComponent } from "./extrapages/account/account.component";



import { LucideComponent } from "./icons/lucide/lucide.component";

import { AccountSettingsComponent } from "./extrapages/account-settings/account-settings.component";
import { PricingComponent } from "./extrapages/pricing/pricing.component";
import { ContactUsComponent } from "./extrapages/contact-us/contact-us.component";
import { FaqsComponent } from "./extrapages/faqs/faqs.component";




import EmailComponents from "./apps/email/email.component";

import { MonthGridComponent } from "./calendar/month-grid/month-grid.component";
import { MultiMonthStackComponent } from "./calendar/multi-month-stack/multi-month-stack.component";


export const PAGE_ROUTES: Route[] = [
    { path: '', component: IndexComponent },
    { path: 'dashboards-analytics', component: AnalyticsComponent },
    { path: 'dashboards-email', component: EmailComponent },
    { path: 'dashboards-hr', component: HrComponent },
    { path: 'dashboards-social', component: SocialComponent },
    { path: 'apps-chat', component: ChatComponent },
    { path: 'apps-mailbox', component: EmailComponents },
    { path: 'apps-calendar', component: CalendarComponent },
    { path: 'apps-calendar-month-grid', component: MonthGridComponent },
    { path: 'apps-calendar-multi-month-stack', component: MultiMonthStackComponent },
    { path: 'product-list', component: ListComponent },
    { path: 'product-grid', component: GridComponent },
    { path: 'product-overview', component: OverviewComponent },
    { path: 'product-create', component: CreateComponent },
    { path: 'ecommerce-cart', component: CartComponent },
    { path: 'ecommerce-checkout', component: CheckoutComponent },
    { path: 'ecommerce-order', component: OrdersComponent },
    { path: 'ecommerce-order-overview', component: OrderOverviewComponent },
    { path: 'ecommerce-sellers', component: SellersComponent },
    { path: 'hr-employee', component: EmployeeComponent },
    { path: 'hr-holidays', component: HolidaysComponent },
    { path: 'hr-leave-employee', component: LeaveEmployeeComponent },
    { path: 'hr-create-leave-employee', component: CreateLeaveEmployeeComponent },
    { path: 'hr-leave', component: LeaveComponent },
    { path: 'hr-create-leave', component: CreateLeaveComponent },
    { path: 'hr-attendance', component: AttendanceHrComponent },
    { path: 'hr-attendance-main', component: AttendanceMainComponent },
    { path: 'hr-department', component: DepartmentComponent },
    { path: 'hr-sales-estimates', component: EstimatesComponent },
    { path: 'hr-sales-payments', component: PaymentsComponent },
    { path: 'hr-sales-expenses', component: ExpensesComponent },
    { path: 'hr-payroll-employee-salary', component: EmployeeSalaryComponent },
    { path: 'hr-payroll-payslip', component: PayslipComponent },
    { path: 'hr-payroll-create-payslip', component: CreatePayslipComponent },
    { path: 'apps-notes', component: NotesComponent },
    { path: 'apps-social-friends', component: FriendsComponent },
    { path: 'apps-social-event', component: EventComponent },
    { path: 'apps-social-video', component: VideoComponent },
    { path: 'apps-social-marketplace', component: MarketplaceComponent },
    { path: 'apps-invoice-list', component: ListViewComponent },
    { path: 'apps-invoice-add-new', component: AddNewComponent },
    { path: 'apps-invoice-overview', component: InvoiceOverviewComponent },
    { path: 'apps-users-list', component: UsersListComponent },
    { path: 'apps-users-grid', component: UsersGridComponent },
    { path: 'ui/drawer', component: DrawerComponent },
    { path: 'ui-drawer', component: DrawerComponent },
    { path: 'ui-collapse', component: CollapseComponent },
    { path: 'ui-alerts', component: AlertComponent },
    { path: 'ui-avatar', component: AvatarComponent },
    { path: 'ui-buttons', component: ButtonsComponent },
    { path: 'ui-label', component: LabelComponent },
    { path: 'ui-cards', component: CardsComponent },
    { path: 'ui-countdown', component: CountdownComponent },
    { path: 'ui-dropdown', component: DropdownComponent },
    { path: 'ui-gallery', component: GalleryComponent },
    { path: 'ui-lists', component: ListsComponent },
    { path: 'ui-notification', component: NotificationComponent },
    { path: 'ui-modal', component: ModalComponent },
    { path: 'ui-spinners', component: SpinnersComponent },
    { path: 'ui-timeline', component: UITimelineComponents },
    { path: 'ui-progress-bar', component: ProgressBarComponent },
    { path: 'ui-tooltip', component: TooltipComponent },
    { path: 'ui-video', component: UIVideoComponents },
    { path: 'plugins-sweetalert', component: SweetalertComponent },
    { path: 'plugins-simplebar', component: SimplebarComponent },
    { path: 'plugins-lightbox', component: LightboxComponent },
    { path: 'plugins-video-player', component: VideoPlayerComponent },
    { path: 'plugins-scroll-hint', component: ScrollHintComponent },
    { path: 'plugins-swiper-slider', component: SwiperSliderComponent },
    { path: 'forms-basic', component: BasicComponent },
    { path: 'forms-validation', component: ValidationComponent },
    { path: 'forms-input-mask', component: InputMaskComponent },
    { path: 'forms-select', component: SelectComponent },
    { path: 'forms-checkbox-radio', component: CheckboxRadioComponent },
    { path: 'forms-switches', component: SwitchesComponent },
    { path: 'forms-wizard', component: WizardComponent },
    { path: 'forms-file-upload', component: FileUploadComponent },
    { path: 'forms-datepicker', component: DatepickerComponent },
    { path: 'forms-timepicker', component: TimepickerComponent },
    { path: 'forms-colorpicker', component: colorPickrComponent },
    { path: 'forms-input-spin', component: InputSpinComponent },
    { path: 'forms-clipboard', component: ClipboardComponent },
    { path: 'forms-editor-balloon', component: BalloonComponent },
    { path: 'forms-editor-inline', component: InlineComponent },
    { path: 'forms-editor-classic', component: ClassicComponent },
    { path: 'tables-basic', component: BasicComponents },
    { path: 'tables-datatable', component: DatatableComponent },
    { path: 'navigation-navbars', component: NavbarComponent },
    { path: 'navigation-tabs', component: TabComponent },
    { path: 'navigation-breadcrumb', component: BreadcrumbComponent },
    { path: 'navigation-pagination', component: PaginationComponent },


    // Chart
    { path: 'charts-apex-area', component: AreaComponent },
    { path: 'charts-apex-bar', component: BarComponent },
    { path: 'charts-apex-boxplot', component: BoxplotComponent },
    { path: 'charts-apex-bubble', component: BubbleComponent },
    { path: 'charts-apex-candlstick', component: CandlstickComponent },
    { path: 'charts-apex-column', component: ColumnComponent },
    { path: 'charts-apex-funnel', component: FunnelComponent },
    { path: 'charts-apex-heatmap', component: HeatmapComponent },
    { path: 'charts-apex-line', component: LineComponent },
    { path: 'charts-apex-mixed', component: MixedComponent },
    { path: 'charts-apex-pie', component: PieComponent },
    { path: 'charts-apex-polar', component: PolarComponent },
    { path: 'charts-apex-radar', component: RadarComponent },
    { path: 'charts-apex-radialbar', component: RadialbarComponent },
    { path: 'charts-apex-range-area', component: RangeAreaComponent },
    { path: 'charts-apex-scatter', component: ScatterComponent },
    { path: 'charts-apex-timeline', component: TimelineComponent },
    { path: 'charts-apex-treemap', component: TreemapComponent },

    // extrapages
    { path: 'pages-account', component: AccountComponent },
    { path: 'pages-account-settings', component: AccountSettingsComponent },
    { path: 'pages-pricing', component: PricingComponent },
    { path: 'pages-contact-us', component: ContactUsComponent },
    { path: 'pages-faqs', component: FaqsComponent },

    // Icons
    { path: 'icons-remix', component: RemixComponent },
    { path: 'icons-lucide', component: LucideComponent },


    // Maps
    { path: 'maps-google', component: GoogleComponent },
    { path: 'maps-leaflet', component: LeafletComponent },



];