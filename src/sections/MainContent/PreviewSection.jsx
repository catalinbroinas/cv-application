import CVHeader from "../../components/cv/CVHeader";

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
        </section>
    );
}

export default PreviewSection;
