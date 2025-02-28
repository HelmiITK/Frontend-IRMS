import { FaFileAlt } from "react-icons/fa";

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

interface FormAddIncidentReportComponentProps {
  formData: IncidentForm;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const FormAddIncidentReportComponent: React.FC<
  FormAddIncidentReportComponentProps
> = ({ formData, handleChange, handleFileChange, handleSubmit }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:mx-52 mt-2 p-6 flex  flex-col justify-center items-center  bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaFileAlt className="text-red-500 text-2xl" />
          <span>Add Incident Report</span>
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 w-full">
          {/* col 1 */}
          <div className="w-full flex flex-col gap-4">
            {/* area */}
            <select
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            >
              <option value="">Select Area</option>
              <option value="Area 1">Area 1</option>
              <option value="Area 2">Area 2</option>
            </select>
            {/* location */}
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="p-2 border rounded"
              required
            />
            {/* date */}
            <input
              type="date"
              name="date_incident"
              value={formData.date_incident}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            {/* file img */}
            <input
              type="file"
              name="photos"
              accept="image/*"
              onChange={handleFileChange}
              className="p-2 border rounded"
              required
            />
            {/* basic cause */}
            <select
              name="basic_cause"
              value={formData.basic_cause}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            >
              <option value="" disabled>
                Select Basic Cause
              </option>
              <option value="Cause 1">Cause 1</option>
              <option value="Cause 2">Cause 2</option>
            </select>
            {/* early Corrective */}
            <input
              type="text"
              name="early_corrective"
              value={formData.early_corrective}
              onChange={handleChange}
              placeholder="Early Corrective"
              className="p-2 border rounded"
              required
            />
          </div>
          {/* col 2 */}
          <div className="w-full flex flex-col gap-4">
            {/* designation department */}
            <select
              name="designation_department"
              value={formData.designation_department}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            >
              <option value="" disabled>
                Select Department
              </option>
              <option value="Dept 1">Dept 1</option>
              <option value="Dept 2">Dept 2</option>
            </select>
            {/* category incident */}
            <select
              name="category_incident"
              value={formData.category_incident}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
            </select>
            {/* is there a chemical release */}
            <select
              name="is_there_a_chemical_release"
              value={formData.is_there_a_chemical_release}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            >
              <option value="" disabled>
                Is there a chemical release?
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {/* classification incident */}
            <select
              name="classification_incident"
              value={formData.classification_incident}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            >
              <option value="" disabled>
                Select Classification
              </option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
            </select>
            {/* file document */}
            <input
              type="file"
              name="upload_file"
              accept="application/pdf,application/msword"
              onChange={handleFileChange}
              className="p-2 border rounded"
              required
            />
            {/* description */}
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="p-2 border rounded"
              required
            />
          </div>
          {/* submit button */}
        </form>
        <button
          type="submit"
          className="p-2 mt-5 w-1/4 bg-primary  text-white rounded hover:bg-green-800 hover:shadow-md hover:shadow-green-100 duration-200 ease-in-out transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormAddIncidentReportComponent;
