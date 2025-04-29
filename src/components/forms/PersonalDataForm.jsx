import { useState } from "react";

function PersonalDataForm({ onSave }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSaveClick = () => {
        onSave({firstName, lastName, email, phone, address});
    };

    return (
        <form 
            id="personal-data-form" 
            className="form-section"
            onSubmit={(e) => e.preventDefault()}
        >
            <h3 className="sub-title">Personal Information</h3>

            <div className="form-group">
                <div className="form-outline">
                    <input 
                        type="text" 
                        id="first-name" 
                        className="form-control" 
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="first-name" className="form-label">First name</label>
                </div>

                <div className="form-outline">
                    <input 
                        type="text" 
                        id="last-name" 
                        className="form-control" 
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="last-name" className="form-label">Last name</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control" 
                        placeholder="Email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email" className="form-label">Email address</label>
                </div>

                <div className="form-outline">
                    <input 
                        type="tel" 
                        id="phone" 
                        className="form-control" 
                        placeholder="Phone number" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="phone" className="form-label">Phone number</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <input 
                        type="text" 
                        id="address" 
                        className="form-control" 
                        placeholder="City, Country"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} 
                    />
                    <label htmlFor="address" className="form-label">City, Country</label>
                </div>
            </div>

            <button className="btn btn-primary" type="submit" onClick={handleSaveClick}>Save</button>
        </form>
    );
}

export default PersonalDataForm;
