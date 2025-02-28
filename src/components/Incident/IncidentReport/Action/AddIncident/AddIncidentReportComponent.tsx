import { useState } from "react";
import FooterComponent from "../../../../Footer/FooterComponent";
import HeaderAddIncidentComponent from "./AddComp/HeaderAddIncidentComponent";
import FormAddIncidentReportComponent from "./AddComp/FormAddIncidentReportComponent";

interface IncidentForm {
  area: string;
  location: string;
  date_incident: string;
  photos: File | null;
  basic_cause: string;
  early_corrective: string;
  designation_department: string;
  category_incident: string;
  is_there_a_chemical_release: string;
  classification_incident: string;
  upload_file: File | null;
  description: string;
}

const AddIncidentReportComponent: React.FC = () => {
  const [formData, setFormData] = useState<IncidentForm>({
    area: "",
    location: "",
    date_incident: "",
    photos: null,
    basic_cause: "",
    early_corrective: "",
    designation_department: "",
    category_incident: "",
    is_there_a_chemical_release: "",
    classification_incident: "",
    upload_file: null,
    description: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData((prevData) => ({ ...prevData, [e.target.name]: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col h-full justify-between gap-10">
      <div className="flex flex-col w-full">
        {/* header */}
        <HeaderAddIncidentComponent />
        {/* form create incident report */}
        <FormAddIncidentReportComponent
          formData={formData}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <FooterComponent />
    </div>
  );
};

export default AddIncidentReportComponent;
