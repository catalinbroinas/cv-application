
function CVHeader({ personalData }) {
    const { firstName, lastName, email, phone, address } = personalData;
    const fullName = firstName + ' ' + lastName;
    
    return (
        <div className="cv-header">
            <h3 id="" className="title">{fullName}</h3>

            <div className="cv-contact">
                <p className="text">{email}</p>
                <p className="text">{phone}</p>
                <p className="text">{address}</p>
            </div>
        </div>
    );
}

export default CVHeader;
