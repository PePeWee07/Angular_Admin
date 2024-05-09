import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 0,
        label: 'menu',
        isTitle: true,
    },
    {
        id: 1,
        label: 'dashboards',
        icon: 'monitor-dot',
        subItems: [
            {
                id: 1.1,
                label: 'analytics',
                link: '/dashboards-analytics',
                parentId: 1
            },
            {
                id: 1.2,
                label: 'ecommerce',
                link: '/',
                parentId: 1
            },
            {
                id: 1.3,
                label: 'email',
                link: '/dashboards-email',
                parentId: 1
            },
            {
                id: 1.4,
                label: 'hr',
                link: '/dashboards-hr',
                parentId: 1
            },
            {
                id: 1.5,
                label: 'social',
                link: '/dashboards-social',
                parentId: 1
            },
        ]
    },
    {
        id: 1_1,
        label: 'landing-page',
        icon: 'picture-in-picture-2',
        subItems: [
            {
                id: 1_1.1,
                label: 'one-page',
                link: '/onepage-landing',
                parentId: 1
            },
            {
                id: 1_1.2,
                label: 'product',
                link: '/product-landing',
                parentId: 1
            }
        ]
    },
    {
        id: 2,
        label: 'apps',
        isTitle: true,
    },
    {
        id: 2.1,
        label: 'chat',
        icon: 'messages-square',
        link: '/apps-chat',
        parentId: 2
    },
    {
        id: 2.2,
        label: 'email',
        icon: 'mail',
        link: '/apps-mailbox',
        parentId: 2
    },
    {
        id: 2.3,
        label: 'calendar',
        icon: 'calendar-days',
        parentId: 2,
        subItems: [
            {
                id: 2.4,
                label: 'default',
                link: '/apps-calendar',
                parentId: 2.3
            },
            {
                id: 2.5,
                label: 'month-grid',
                link: '/apps-calendar-month-grid',
                parentId: 2.3
            },
            {
                id: 2.6,
                label: 'multi-month-stack',
                link: '/apps-calendar-multi-month-stack',
                parentId: 2.3
            }
        ]
    },
    {
        id: 2.7,
        label: 'ecommerce',
        icon: 'shopping-bag',
        parentId: 2,
        subItems: [
            {
                id: 2.8,
                label: 'products',
                parentId: 2.7,
                subItems: [
                    {
                        id: 2.9,
                        label: 'list-view',
                        link: '/product-list',
                        parentId: 2.7
                    },
                    {
                        id: 2.10,
                        label: 'grid-view',
                        link: '/product-grid',
                        parentId: 2.7
                    },
                    {
                        id: 2.11,
                        label: 'Overview',
                        link: '/product-overview',
                        parentId: 2.7
                    },
                    {
                        id: 2.12,
                        label: 'Add New',
                        link: '/product-create',
                        parentId: 2.7
                    },
                ]
            },
            {
                id: 2.13,
                label: 'Shopping-Cart',
                link: '/ecommerce-cart',
                parentId: 2
            },
            {
                id: 2.14,
                label: 'checkout',
                link: '/ecommerce-checkout',
                parentId: 2
            },
            {
                id: 2.15,
                label: 'orders',
                link: '/ecommerce-order',
                parentId: 2
            },
            {
                id: 2.16,
                label: 'Order Overview',
                link: '/ecommerce-order-overview',
                parentId: 2
            },
            {
                id: 2.17,
                label: 'sellers',
                link: '/ecommerce-sellers',
                parentId: 2
            },

        ]
    },
    {
        id: 2.18,
        label: 'hr-management',
        icon: 'circuit-board',
        parentId: 2,
        subItems: [
            {
                id: 2.19,
                label: 'employees-list',
                link: '/hr-employee',
                parentId: 2.18
            },
            {
                id: 2.20,
                label: 'holidays',
                link: '/hr-holidays',
                parentId: 2.18
            },
            {
                id: 2.21,
                label: 'leaves-manage',
                parentId: 2.18,
                subItems: [
                    {
                        id: 2.22,
                        label: 'by-employee',
                        link: '/hr-leave-employee',
                        parentId: 2.21
                    },
                    {
                        id: 2.23,
                        label: 'add-leave-employee',
                        link: '/hr-create-leave-employee',
                        parentId: 2.21
                    },
                    {
                        id: 2.24,
                        label: 'by-hr',
                        link: '/hr-leave',
                        parentId: 2.21
                    },
                    {
                        id: 2.25,
                        label: 'add-leave-hr',
                        link: '/hr-create-leave',
                        parentId: 2.21
                    },
                ]
            },
            {
                id: 2.26,
                label: 'attendance',
                parentId: 2,
                subItems: [
                    {
                        id: 2.27,
                        label: 'attendance-hr',
                        link: '/hr-attendance',
                        parentId: 2.26
                    },
                    {
                        id: 2.28,
                        label: 'main-attendance',
                        link: '/hr-attendance-main',
                        parentId: 2.26
                    },
                ]
            },
            {
                id: 2.29,
                label: 'department',
                link: '/hr-department',
                parentId: 2,
            },
            {
                id: 2.30,
                label: 'sales',
                parentId: 2,
                subItems: [
                    {
                        id: 2.31,
                        label: 'estimates',
                        link: '/hr-sales-estimates',
                        parentId: 2.30
                    },
                    {
                        id: 2.32,
                        label: 'payments',
                        link: '/hr-sales-payments',
                        parentId: 2.30
                    },
                    {
                        id: 2.33,
                        label: 'expenses',
                        link: '/hr-sales-expenses',
                        parentId: 2.30
                    },
                ]
            },
            {
                id: 2.34,
                label: 'payroll',
                parentId: 2,
                subItems: [
                    {
                        id: 2.35,
                        label: 'employee-salary',
                        link: '/hr-payroll-employee-salary',
                        parentId: 2.34
                    },
                    {
                        id: 2.36,
                        label: 'payslip',
                        link: '/hr-payroll-payslip',
                        parentId: 2.34
                    },
                    {
                        id: 2.37,
                        label: 'create-payslip',
                        link: '/hr-payroll-create-payslip',
                        parentId: 2.34
                    },
                ]
            },

        ]
    },
    {
        id: 2.38,
        label: 'notes',
        icon: 'scroll-text',
        link: '/apps-notes',
        parentId: 2,
    },
    {
        id: 2.39,
        label: 'social',
        icon: 'radio-tower',
        parentId: 2,
        subItems: [
            {
                id: 2.40,
                label: 'friends',
                link: '/apps-social-friends',
                parentId: 2.39,
            },
            {
                id: 2.41,
                label: 'event',
                link: '/apps-social-event',
                parentId: 2.39,
            },
            {
                id: 2.42,
                label: 'watch-video',
                link: '/apps-social-video',
                parentId: 2.39,
            },
            {
                id: 2.43,
                label: 'marketplace',
                link: '/apps-social-marketplace',
                parentId: 2.39,
            },
        ]
    },
    {
        id: 2.44,
        label: 'invoices',
        icon: 'file-text',
        parentId: 2,
        subItems: [
            {
                id: 2.45,
                label: 'list-view',
                link: '/apps-invoice-list',
                parentId: 2.44,
            },
            {
                id: 2.46,
                label: 'add-new',
                link: '/apps-invoice-add-new',
                parentId: 2.44,
            },
            {
                id: 2.47,
                label: 'overview',
                link: '/apps-invoice-overview',
                parentId: 2.44,
            },
        ]
    },
    {
        id: 2.48,
        label: 'users',
        icon: 'user',
        parentId: 2,
        subItems: [
            {
                id: 2.49,
                label: 'list-view',
                link: '/apps-users-list',
                parentId: 2.48,
            },
            {
                id: 2.50,
                label: 'grid-view',
                link: '/apps-users-grid',
                parentId: 2.48,
            }
        ]
    },
    {
        id: 2,
        label: 'pages',
        isTitle: true,
    },
    {
        id: 3,
        label: 'authentication',
        icon: 'award',
        subItems: [
            {
                id: 3.1,
                label: 'login',
                parentId: 3,
                subItems: [
                    {
                        id: 3.2,
                        label: 'basic',
                        link: '/auth-login-basic',
                        parentId: 3.1,
                    },
                    {
                        id: 3.3,
                        label: 'cover',
                        link: '/auth-login-cover',
                        parentId: 3.1,
                    },
                    {
                        id: 3.4,
                        label: 'boxed',
                        link: '/auth-login-boxed',
                        parentId: 3.1,
                    },
                    {
                        id: 3.5,
                        label: 'modern',
                        link: '/auth-login-modern',
                        parentId: 3.1,
                    },
                ]
            },
            {
                id: 3.6,
                label: 'register',
                parentId: 3,
                subItems: [
                    {
                        id: 3.7,
                        label: 'basic',
                        link: '/auth-register-basic',
                        parentId: 3.6,
                    },
                    {
                        id: 3.8,
                        label: 'cover',
                        link: '/auth-register-cover',
                        parentId: 3.6,
                    },
                    {
                        id: 3.9,
                        label: 'boxed',
                        link: '/auth-register-boxed',
                        parentId: 3.6,
                    },
                    {
                        id: 3.10,
                        label: 'modern',
                        link: '/auth-register-modern',
                        parentId: 3.6,
                    },
                ]
            },
            {
                id: 3.11,
                label: 'verify-email',
                parentId: 3,
                subItems: [
                    {
                        id: 3.12,
                        label: 'basic',
                        link: '/auth-verify-email-basic',
                        parentId: 3.11,
                    },
                    {
                        id: 3.13,
                        label: 'cover',
                        link: '/auth-verify-email-cover',
                        parentId: 3.11,
                    },
                    {
                        id: 3.14,
                        label: 'modern',
                        link: '/auth-verify-email-modern',
                        parentId: 3.11,
                    },
                ]
            },
            {
                id: 3.15,
                label: 'two-steps',
                parentId: 3,
                subItems: [
                    {
                        id: 3.16,
                        label: 'basic',
                        link: '/auth-two-steps-basic',
                        parentId: 3.15,
                    },
                    {
                        id: 3.17,
                        label: 'cover',
                        link: '/auth-two-steps-cover',
                        parentId: 3.15,
                    },
                    {
                        id: 3.18,
                        label: 'boxed',
                        link: '/auth-two-steps-boxed',
                        parentId: 3.15,
                    },
                    {
                        id: 3.19,
                        label: 'modern',
                        link: '/auth-two-steps-modern',
                        parentId: 3.15,
                    },
                ]
            },
            {
                id: 3.20,
                label: 'logout',
                parentId: 3,
                subItems: [
                    {
                        id: 3.21,
                        label: 'basic',
                        link: '/auth-logout-basic',
                        parentId: 3.20,
                    },
                    {
                        id: 3.22,
                        label: 'cover',
                        link: '/auth-logout-cover',
                        parentId: 3.20,
                    },
                    {
                        id: 3.23,
                        label: 'boxed',
                        link: '/auth-logout-boxed',
                        parentId: 3.20,
                    },
                    {
                        id: 3.24,
                        label: 'modern',
                        link: '/auth-logout-modern',
                        parentId: 3.20,
                    },
                ]
            },
            {
                id: 3.25,
                label: 'reset-password',
                parentId: 3,
                subItems: [
                    {
                        id: 3.26,
                        label: 'basic',
                        link: '/auth-reset-password-basic',
                        parentId: 3.25,
                    },
                    {
                        id: 3.27,
                        label: 'cover',
                        link: '/auth-reset-password-cover',
                        parentId: 3.25,
                    },
                    {
                        id: 3.28,
                        label: 'boxed',
                        link: '/auth-reset-password-boxed',
                        parentId: 3.25,
                    },
                    {
                        id: 3.29,
                        label: 'modern',
                        link: '/auth-reset-password-modern',
                        parentId: 3.25,
                    },
                ]
            },
            {
                id: 3.30,
                label: 'create-password',
                parentId: 3,
                subItems: [
                    {
                        id: 3.31,
                        label: 'basic',
                        link: '/auth-create-password-basic',
                        parentId: 3.30,
                    },
                    {
                        id: 3.32,
                        label: 'cover',
                        link: '/auth-create-password-cover',
                        parentId: 3.30,
                    },
                    {
                        id: 3.33,
                        label: 'boxed',
                        link: '/auth-create-password-boxed',
                        parentId: 3.30,
                    },
                    {
                        id: 3.34,
                        label: 'modern',
                        link: '/auth-create-password-modern',
                        parentId: 3.30,
                    },
                ]
            },
        ]
    },

    {
        id: 4,
        label: 'pages',
        icon: 'codesandbox',
        subItems: [
            {
                id: 4.1,
                label: 'account',
                link: '/pages-account',
                parentId: 4
            },
            {
                id: 4.2,
                label: 'settings',
                link: '/pages-account-settings',
                parentId: 4
            },
            {
                id: 4.3,
                label: 'pricing',
                link: '/pages-pricing',
                parentId: 4
            },
            {
                id: 4.4,
                label: 'faqs',
                link: '/pages-faqs',
                parentId: 4
            },
            {
                id: 4.5,
                label: 'contact-us',
                link: '/pages-contact-us',
                parentId: 4
            },
            {
                id: 4.6,
                label: 'coming-soon',
                link: '/pages-coming-soon',
                parentId: 4
            },
            {
                id: 4.5,
                label: 'error-pages',
                parentId: 4,
                subItems: [
                    {
                        id: 4.6,
                        label: '404-error',
                        link: '/pages-404',
                        parentId: 4.5
                    },
                    {
                        id: 4.7,
                        label: 'offline',
                        link: 'pages-offline',
                        parentId: 4.5
                    },
                ]
            },
            {
                id: 4.8,
                label: 'maintenance',
                link: 'pages-maintenance',
                parentId: 4
            },
        ]
    },
    {
        id: 5,
        label: 'components',
        isTitle: true,
    },
    {
        id: 5,
        label: 'ui-elements',
        icon: "life-buoy",
        subItems: [
            {
                id: 5.1,
                label: 'alerts',
                link: '/ui-alerts',
                parentId: 5
            },
            {
                id: 5.2,
                label: 'avatar',
                link: '/ui-avatar',
                parentId: 5
            },
            {
                id: 5.3,
                label: 'buttons',
                link: '/ui-buttons',
                parentId: 5
            },
            {
                id: 5.4,
                label: 'label',
                link: '/ui-label',
                parentId: 5
            },
            {
                id: 5.5,
                label: 'cards',
                link: '/ui-cards',
                parentId: 5
            },
            {
                id: 5.6,
                label: 'collapse',
                link: '/ui-collapse',
                parentId: 5
            },
            {
                id: 5.7,
                label: 'countdown',
                link: '/ui-countdown',
                parentId: 5
            },
            {
                id: 5.8,
                label: 'drawer',
                link: '/ui-drawer',
                parentId: 5
            },
            {
                id: 5.9,
                label: 'dropdown',
                link: '/ui-dropdown',
                parentId: 5
            },
            {
                id: 5.10,
                label: 'gallery',
                link: '/ui-gallery',
                parentId: 5
            },
            {
                id: 5.11,
                label: 'lists',
                link: '/ui-lists',
                parentId: 5
            },
            {
                id: 5.12,
                label: 'notification',
                link: '/ui-notification',
                parentId: 5
            },
            {
                id: 5.13,
                label: 'modal',
                link: '/ui-modal',
                parentId: 5
            },
            {
                id: 5.14,
                label: 'spinners',
                link: '/ui-spinners',
                parentId: 5
            },
            {
                id: 5.15,
                label: 'timeline',
                link: '/ui-timeline',
                parentId: 5
            },
            {
                id: 5.16,
                label: 'progress-bar',
                link: '/ui-progress-bar',
                parentId: 5
            },
            {
                id: 5.17,
                label: 'tooltip',
                link: '/ui-tooltip',
                parentId: 5
            },
            {
                id: 5.18,
                label: 'video',
                link: '/ui-video',
                parentId: 5
            }
        ]
    },
    {
        id: 6,
        label: 'plugins',
        icon: "package-plus",
        subItems: [
            {
                id: 6.1,
                label: 'sweetalert',
                link: '/plugins-sweetalert',
                parentId: 6
            },
            {
                id: 6.2,
                label: 'simplebar',
                link: '/plugins-simplebar',
                parentId: 6
            },
            {
                id: 6.3,
                label: 'lightbox',
                link: '/plugins-lightbox',
                parentId: 6
            },
            {
                id: 6.4,
                label: 'swiper-slider',
                link: '/plugins-swiper-slider',
                parentId: 6
            },
            {
                id: 6.5,
                label: 'scroll-hint',
                link: '/plugins-scroll-hint',
                parentId: 6
            },
            {
                id: 6.6,
                label: 'video-player',
                link: '/plugins-video-player',
                parentId: 6
            }
        ]
    },
    {
        id: 7,
        label: 'navigation',
        icon: "locate-fixed",
        link: '/apps/widgets',
        subItems: [
            {
                id: 7.1,
                label: 'navbar',
                link: '/navigation-navbars',
                parentId: 7
            },
            {
                id: 7.2,
                label: 'tabs',
                link: '/navigation-tabs',
                parentId: 7
            },
            {
                id: 7.3,
                label: 'breadcrumb',
                link: '/navigation-breadcrumb',
                parentId: 7
            },
            {
                id: 7.4,
                label: 'pagination',
                link: '/navigation-pagination',
                parentId: 7
            }
        ]
    },
    {
        id: 8,
        label: 'forms',
        icon: 'file-text',
        subItems: [
            {
                id: 8.1,
                label: 'basic',
                link: '/forms-basic',
                parentId: 8
            },
            {
                id: 8.2,
                label: 'validation',
                link: '/forms-validation',
                parentId: 8
            },
            {
                id: 8.3,
                label: 'input-mask',
                link: '/forms-input-mask',
                parentId: 78
            },
            {
                id: 8.4,
                label: 'select',
                link: '/forms-select',
                parentId: 8
            },
            {
                id: 8.5,
                label: 'checkbox-radio',
                link: '/forms-checkbox-radio',
                parentId: 8
            },
            {
                id: 8.6,
                label: 'switches',
                link: '/forms-switches',
                parentId: 8
            },
            {
                id: 8.7,
                label: 'wizards',
                link: '/forms-wizard',
                parentId: 8
            },
            {
                id: 8.8,
                label: 'file-upload',
                link: '/forms-file-upload',
                parentId: 8
            },
            {
                id: 8.9,
                label: 'date-picker',
                link: '/forms-datepicker',
                parentId: 8
            },
            {
                id: 8.10,
                label: 'time-picker',
                link: '/forms-timepicker',
                parentId: 8
            },
            {
                id: 8.11,
                label: 'color-picker',
                link: '/forms-colorpicker',
                parentId: 8
            },

            {
                id: 8.13,
                label: 'input-spin',
                link: '/forms-input-spin',
                parentId: 8
            },
            {
                id: 8.14,
                label: 'clipboard',
                link: '/forms-clipboard',
                parentId: 8
            },
            {
                id: 8.15,
                label: 'editor',
                parentId: 8,
                subItems: [
                    // {
                    //     id: 8.16,
                    //     label: 'balloon',
                    //     link: '/forms-editor-balloon',
                    //     parentId: 8.15
                    // },
                    {
                        id: 8.17,
                        label: 'classic',
                        link: '/forms-editor-classic',
                        parentId: 8.15
                    },
                    // {
                    //     id: 8.18,
                    //     label: 'inline',
                    //     link: '/forms-editor-inline',
                    //     parentId: 8.15
                    // },
                ]
            }
        ]
    },
    {
        id: 9,
        label: 'tables',
        icon: 'table',
        subItems: [
            {
                id: 9.1,
                label: 'basic-tables',
                link: '/tables-basic',
                parentId: 9
            },
            {
                id: 9.2,
                label: 'datatable-tables',
                link: '/tables-datatable',
                parentId: 9
            },
        ]
    },
    {
        id: 10,
        label: 'apexcharts',
        icon: 'pie-chart',
        subItems: [
            {
                id: 10.1,
                label: 'area',
                link: '/charts-apex-area',
                parentId: 10
            },
            {
                id: 10.2,
                label: 'bar',
                link: '/charts-apex-bar',
                parentId: 10
            },
            {
                id: 10.3,
                label: 'boxplot',
                link: '/charts-apex-boxplot',
                parentId: 10
            },
            {
                id: 10.4,
                label: 'bubble',
                link: '/charts-apex-bubble',
                parentId: 10
            },
            {
                id: 10.5,
                label: 'candlstick',
                link: '/charts-apex-candlstick',
                parentId: 10
            },
            {
                id: 10.6,
                label: 'column',
                link: '/charts-apex-column',
                parentId: 10
            },
            {
                id: 10.7,
                label: 'funnel',
                link: '/charts-apex-funnel',
                parentId: 10
            },
            {
                id: 10.8,
                label: 'heatmap',
                link: '/charts-apex-heatmap',
                parentId: 10
            },
            {
                id: 10.9,
                label: 'line',
                link: '/charts-apex-line',
                parentId: 10
            },
            {
                id: 10.10,
                label: 'mixed',
                link: '/charts-apex-mixed',
                parentId: 10
            },
            {
                id: 10.11,
                label: 'pie',
                link: '/charts-apex-pie',
                parentId: 10
            },
            {
                id: 10.12,
                label: 'polar-area',
                link: '/charts-apex-polar',
                parentId: 10
            },
            {
                id: 10.13,
                label: 'radar',
                link: '/charts-apex-radar',
                parentId: 10
            },
            {
                id: 10.14,
                label: 'radialbar',
                link: '/charts-apex-radialbar',
                parentId: 10
            },
            {
                id: 10.15,
                label: 'range-area',
                link: '/charts-apex-range-area',
                parentId: 10
            },
            {
                id: 10.16,
                label: 'scatter',
                link: '/charts-apex-scatter',
                parentId: 10
            },
            {
                id: 10.17,
                label: 'timeline',
                link: '/charts-apex-timeline',
                parentId: 10
            },
            {
                id: 10.18,
                label: 'treemap',
                link: '/charts-apex-treemap',
                parentId: 10
            },
        ]
    },
    {
        id: 11,
        label: 'icons',
        icon: 'trophy',
        subItems: [
            {
                id: 11.1,
                label: 'remix',
                link: '/icons-remix',
                parentId: 11
            },
            {
                id: 11.2,
                label: 'lucide',
                link: '/icons-lucide',
                parentId: 11
            }
        ]
    },
    {
        id: 12,
        label: 'maps',
        icon: 'map',
        subItems: [
            {
                id: 12.1,
                label: 'google',
                link: '/maps-google',
                parentId: 12
            },

            {
                id: 12.2,
                label: 'leaflet',
                link: '/maps-leaflet',
                parentId: 12
            }
        ]
    },
    {
        id: 13,
        label: 'multi-level',
        icon: 'share-2',
        subItems: [
            {
                id: 13.1,
                label: 'level-1.1',
                parentId: 13
            },
            {
                id: 13.2,
                label: 'level-1.2',
                parentId: 13,
                subItems: [
                    {
                        id: 13.3,
                        label: 'level-2.1',
                        parentId: 13.2
                    },
                    {
                        id: 13.4,
                        label: 'level-2.2',
                        parentId: 13.2,
                        subItems: [
                            {
                                id: 13.5,
                                label: 'level-3.1',
                                parentId: 13.4
                            },
                            {
                                id: 13.6,
                                label: 'level-3.2',
                                parentId: 13.4,

                            }
                        ]
                    }
                ]
            }
        ]
    }
]