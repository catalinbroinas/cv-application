import CVHeader from "../../components/cv/CVHeader";
import CVEducation from "../../components/cv/CVEducation";
import CVExperience from "../../components/cv/CVExperience";

function PreviewSection({ personalData }) {
    return (
        <section className="preview">
            <h2 className="sr-only">CV generated</h2>

            <div className="cv">
                <CVHeader personalData={personalData} />

                <div className="cv-body">
                    <CVEducation 
                        schoolName="Universitatea Oradea"
                        schoolLocation="Oradea"
                        degree="Calculatoare și Tehnologia Informației"
                        startDate="01.10.2015"
                        endDate="12.09.2019"
                    />
                    <CVExperience
                        company="SDG Webs"
                        job="Full stack developer"
                        description="Build website with PHP and MySQL"
                        startDate="30.09.2018"
                        endDate="30.11.2018"
                    />
                </div>
            </div>
        </section>
    );
}

export default PreviewSection;
