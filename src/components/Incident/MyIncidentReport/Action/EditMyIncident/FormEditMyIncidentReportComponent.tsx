import { RiFileEditFill } from "react-icons/ri";

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

interface FormEditMyIncidentComponentProps {
  formData: IncidentForm;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const FormEditMyIncidentComponent: React.FC<
  FormEditMyIncidentComponentProps
> = ({ formData, handleChange, handleFileChange, handleSubmit }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 w-full bg-gray-200  justify-center py-2">
        <RiFileEditFill className="text-green-500 text-2xl" />
        <span>Edit My Incident Report</span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-2 lg:p-6  grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {/* col 1 */}
        <div className=" flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="area" className="text-sm text-gray-500 capitalize">
              area
            </label>
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
          </div>
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
        <div className=" flex flex-col gap-4">
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
        <div className="w-full hidden lg:flex justify-center col-span-2">
          <button
            type="submit"
            className="p-2 w-1/3 bg-primary  text-white rounded hover:bg-green-800 hover:shadow-md hover:shadow-green-100 duration-200 ease-in-out transition-all"
          >
            Save Changes
          </button>
        </div>
      </form>
      {/* mode hp */}
      <div className=" flex lg:hidden justify-center p-2 bg-white rounded-lg shadow-lg w-full mt-2">
        <button
          type="submit"
          className="p-2 px-10 bg-primary  text-white rounded hover:bg-green-800 hover:shadow-md hover:shadow-green-100 duration-200 ease-in-out transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default FormEditMyIncidentComponent;
