
function PersonalDataForm() {
    return (
        <form id="personal-data-form" className="form-section">
            <h3 className="sub-title">Personal Information</h3>

            <div className="form-group">
                <div className="form-outline">
                    <input type="text" id="first-name" className="form-control" placeholder="First name" />
                    <label htmlFor="first-name" className="form-label">First name</label>
                </div>

                <div className="form-outline">
                    <input type="text" id="last-name" className="form-control" placeholder="Last name" />
                    <label htmlFor="last-name" className="form-label">Last name</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <input type="email" id="email" className="form-control" placeholder="Email address" />
                    <label htmlFor="email" className="form-label">Email address</label>
                </div>

                <div className="form-outline">
                    <input type="tel" id="phone" className="form-control" placeholder="Phone number" />
                    <label htmlFor="phone" className="form-label">Phone number</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <input type="text" id="address" className="form-control" placeholder="City, Country" />
                    <label htmlFor="address" className="form-label">City, Country</label>
                </div>
            </div>
        </form>
    );
}

export default PersonalDataForm;
