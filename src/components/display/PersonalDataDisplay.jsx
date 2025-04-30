
function PersonalDataDisplay({ personalData, onEdit }) {
    const { firstName, lastName, email, phone, address } = personalData;
    const fullName = firstName + ' ' + lastName;

    const handleEditClick = () => onEdit();

    return (
        <div className="display-data">
            <div className="display-data-content">
                <p className="text fw-bold">{fullName}</p>
                <p className="text">{email}</p>
                <p className="text">{phone}</p>
                <p className="text">{address}</p>
            </div>

            <div className="display-data-action">
                <button className="btn btn-secondary" type="button" onClick={handleEditClick}>Edit</button>
            </div>
        </div>
    );
}

export default PersonalDataDisplay;
