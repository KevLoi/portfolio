import AnalyticsNav from './pictures/analytics-nav.png';
import ApproveMsg from './pictures/approve-msg.png';
import CareReports from './pictures/care-reports.png';
import ClinicSiteFilter from './pictures/clinic-site-filter.png';
import LowBatteryReport from './pictures/low-battery-report.png';
import PtCareTaskbar from './pictures/pt-care-taskbar.png';
import ReleaseNotes from './pictures/release-notes.png';
import SearchFilter from './pictures/search-filter.png';
import UserProfile from './pictures/user-profile-page.png';
import OnTapSorters from './pictures/onTapSorters.png';
import ApprovalDate from './pictures/approval-date-model.png';


export const contributions = [
    {
        title: 'OnTap Sorters',
        img: OnTapSorters,
        date: 'May, 2021',
        description: [
            'Created a new component that contains headers for onTap list. ',
            'Implemented logic that allow users to sort columns by selecting on headers. ',
            'Improved user experience by providing visual treatment that allow users to know what the default/selected column is.'
        ]
    },
    {
        title: 'Approval Date Model',
        img: ApprovalDate,
        date: 'April, 2021',
        description: [
            'Worked with senior engineers to determine the necessary data points and APIs to implement a new billing model for clinics. ',
            'Added verbiage, allowing users to know whether the clinic is using an Approval Date Model through patient and clinic level. ',
            'Developed logic to determine specific visual treatment in the timeline visualization and generated dockets.',
        ]
    },
    {
        title: 'Analytics',
        img: AnalyticsNav,
        date: 'March, 2021',
        description: [
            'With a little bit of HTML, CSS, and vanilla Javascript, I developed a component that not only serves as a page title, but also a dropdown.',
            'Users are able to hover over the title and select different links that display a unique set of data analytics created by Murj.',
        ],
    },
    {
        title: 'Approve Message',
        img: ApproveMsg,
        date: 'March, 2021',
        description: [
            'Implemented and styled an alert message that creates a better user experience for doctors that are reviewing patients in the patient care report workflow. ',
            'Alert informs doctors that they have completed reviews of a specific set of care reports. ',
            'Alert also informs doctors of any patients that may have been skipped in the process of their patient care workflow. '
        ],
    },
    {
        title: 'Care Reports',
        img: CareReports,
        date: 'February, 2021',
        description: [
            'Used code splitting to break down patient care reports into three different pages. ',
            'Created three popover links in the sidenav that allow users to access different patient care reports. ',
            'Developed CSS classes that are used to maintain consistency between layouts of different patient care reports. ',
            'Implemented different filters to allow users to narrow down search '
        ],
    },
    {
        title: 'Patient Care Taskbar',
        img: PtCareTaskbar,
        date: 'February, 2021',
        description: [
            'Dropdown header that allow users to view the current list of patients that they selected from the patient care reports. ',
            'Used css to style the dropdown button, bringing a snazzy wireframe to life. ',
            'Adjusted the layout of each row in the list, providing users with an easier experience while working through the patient care workflow. '
        ],
    },
    {
        title: 'Clinic Site Filter',
        img: ClinicSiteFilter,
        date: 'February, 2021',
        description: [
            'Produced reusable code that allow users to filter lists and tables across all pages of the application. ',
            'Filters allow users to select one or more dropdown options to display the desired set of data to view. ',
            'Clinic site filter is implemented across the platform to improve performance and flexibility.'
        ],
    },
    {
        title: 'Low Battery Report',
        img: LowBatteryReport,
        date: 'August, 2020',
        description: [
            'Used Murj technology to create a new table to that displays information regarding patients with low battery indicators. ',
            'Implemented color treatment to the table, allowing clinicians to know which patients require priority over others. '
        ],
    },
    {
        title: 'Release Notes',
        img: ReleaseNotes,
        date: 'January, 2021',
        description: [
            'Pair programmed with lead engineer to make refactor release notes page. ',
            'Increased user experience and but providing more accessibility to past release notes. ',
            'Used React.lazy and code splitting to dynamically render different release notes.', 
        ],
    },
    {
        title: 'Search Filter',
        img: SearchFilter,
        date: 'March, 2020',
        description: [
            'Added a dropdown for users to search for patients through a specific set of data points. ',
            'Dropdown improves performance by shortening the list of patients displayed when searching for patients, allowing or faster loading times. '
        ],
    },
    {
        title: 'User Profile',
        img: UserProfile,
        date: 'January, 2021',
        description: [
            'Maximized user experience by rearranging content into two columns, minimizing the need to scroll. ',
            'Implemented a section for users to activate or deactivate Multi-factor Authentication.'
        ],
    },
];
