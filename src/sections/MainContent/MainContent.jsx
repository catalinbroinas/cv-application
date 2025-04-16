import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";

function MainContent() {
    return (
        <div className="container">
            <div className="main-content">
                <FormSection />
                <PreviewSection />
            </div>
        </div>
    );
}

export default MainContent;
