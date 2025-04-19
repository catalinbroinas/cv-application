
function CVHeader({ fullName, email, phone, address }) {
    return (
        <div className="cv-header">
            <h3 id="" className="title">{fullName}</h3>

            <div className="cv-contact">
                <span className="text">{email}</span>
                <span className="text">{phone}</span>
                <span className="text">{address}</span>
            </div>
        </div>
    );
}

export default CVHeader;
