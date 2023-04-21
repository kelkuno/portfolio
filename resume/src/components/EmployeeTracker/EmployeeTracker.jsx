
function EmployeeTracker() {

    return (
        <>
            <h2>Employee Time Tracking App</h2>
            <h3>Full CRUD Application Overview:</h3>
            <p>This app was a group development project that I completed alongside 3 other talented developers at Prime Digital Academy. We worked with a real client and were successful in providing a solution to our client’s needs.</p>
            <p><b>Client:</b> Independent Living Care Services (ILCS)</p>
            <p><b>Project Objectives:</b></p>
            <ul>
                <li>Provide employees with an easy and quick way to clock into work</li>
                <li>Allow simple employee management and timesheet exportation to expedite and shorten admin duties</li>
            </ul>
            <p>ILCS App is a digital time tracking application that has an online dashboard for employees and for management. The app allows employees to submit or edit their work time sheets. It also includes organization tools for management to use to view, edit and filter employees time sheets. This was developed to be used internally by Independent Living Care Services (ILCS), which is a small company that provides in-home personal care at multiple locations across the Twin Cities.</p>
            <h3>Built with:</h3>
            <div className="technologies">
                <p>Node</p>
                <p>Express</p>
                <p>React</p>
                <p>Redux</p>
                <p>Redux-Saga</p>
                <p>SQL</p>
                <p>Postgresql</p>
                <p>CSS</p>
                <p>Sendgrid</p>
            </div>
            <div className="button-grouping">
                <button>
                    <a href="https://github.com/kelkuno/ilcs-client-project" target="blank">github repo</a>
                </button>
            </div>
        </>
    );
}

export default EmployeeTracker