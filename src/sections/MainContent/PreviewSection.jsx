import CVHeader from "../../components/cv/CVHeader";
import CVEducation from "../../components/cv/CVEducation";

function PreviewSection() {
    return (
        <section className="preview">
            <h2 className="title">CV generated</h2>

            <CVHeader
                fullName="Catalin Broinas"
                email="catalinbroinas@yahoo.com"
                phone="0765 xxx xxx"
                address="Oradea, Romania"
            />

            <div className="cv-body">
                <CVEducation 
                    schoolName="Universitatea Oradea"
                    schoolLocation="Oradea"
                    degree="Calculatoare și Tehnologia Informației"
                    startDate="01.10.2015"
                    endDate="12.09.2019"
                />
            </div>
        </section>
    );
}

export default PreviewSection;
