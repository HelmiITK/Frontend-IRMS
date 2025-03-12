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
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 w-full bg-gray-200  justify-center py-2">
        <FaFileAlt className="text-red-500 text-2xl" />
        <span>Add Incident Report</span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className=" bg-white shadow-lg rounded-lg w-full p-2 lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* col 1 */}
        <div className=" flex flex-col gap-4">
          {/* area */}
          <div className="flex flex-col gap-1">
            <label htmlFor="area" className="capitalize text-sm text-black">
              area
            </label>
            <select
              name="area"
              id="area"
              value={formData.area}
              onChange={handleChange}
              required
              className="p-2 border rounded text-sm placeholder-gray-400"
            >
              <option value="" disabled hidden className="text-gray-400">
                Please Select
              </option>
              <option value="Area 1" className="text-black">
                Area 1
              </option>
              <option value="Area 2" className="text-black">
                Area 2
              </option>
              <option value="Area 3" className="text-black">
                Area 3
              </option>
            </select>
          </div>

          {/* location */}
          <div className="flex flex-col gap-1">
            <label htmlFor="location" className="text-sm text-black capitalize">
              location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              required
              className="p-2 border rounded text-sm"
            />
          </div>
          {/* date */}
          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="capitalize text-black text-sm">
              date incident
            </label>
            <input
              type="date"
              name="date_incident"
              id="date"
              value={formData.date_incident}
              onChange={handleChange}
              required
              className="p-2 border rounded text-sm"
            />
          </div>
          {/* basic cause */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="basic_cause"
              className="capitalize text-black text-sm"
            >
              basic cause
            </label>
            <select
              name="basic_cause"
              id="basic_cause"
              value={formData.basic_cause}
              onChange={handleChange}
              required
              className="p-2 border rounded text-sm"
            >
              <option value="" disabled hidden>
                Please Select
              </option>
              <option value="Cause 1">Cause 1</option>
              <option value="Cause 2">Cause 2</option>
            </select>
          </div>
          {/* early Corrective */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="early_corrective"
              className="capitalize text-black text-sm"
            >
              early Corrective
            </label>
            <input
              type="text"
              name="early_corrective"
              id="early_corrective"
              value={formData.early_corrective}
              onChange={handleChange}
              placeholder="Early Corrective"
              required
              className="p-2 border rounded text-sm"
            />
          </div>
        </div>
        {/* col 2 */}
        <div className="flex flex-col gap-4">
          {/* designation department */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="designation_department"
              className="text-black text-sm capitalize"
            >
              designation department
            </label>
            <select
              name="designation_department"
              value={formData.designation_department}
              id="designation_department"
              onChange={handleChange}
              required
              className="p-2 border rounded text-sm"
            >
              <option value="" disabled hidden>
                Please Select
              </option>
              <option value="Dept 1">Dept 1</option>
              <option value="Dept 2">Dept 2</option>
            </select>
          </div>
          {/* category incident */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="category_incident"
              className="capitalize text-black text-sm"
            >
              category incident
            </label>
            <select
              name="category_incident"
              id="category_incident"
              value={formData.category_incident}
              onChange={handleChange}
              required
              className="p-2 border rounded text-sm"
            >
              <option value="" disabled hidden>
                Please Select
              </option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
            </select>
          </div>
          {/* is there a chemical release */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="is_there_a_chemical_release"
              className="capitalize text-black text-sm"
            >
              is there a chemical release
            </label>
            <select
              name="is_there_a_chemical_release"
              id="is_there_a_chemical_release"
              value={formData.is_there_a_chemical_release}
              onChange={handleChange}
              required
              className="p-2 border rounded text-sm"
            >
              <option value="" disabled hidden>
                Plesae Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {/* classification incident */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="classification_incident"
              className="capitalize text-black text-sm"
            >
              classification incident
            </label>
            <select
              name="classification_incident"
              id="classification_incident"
              value={formData.classification_incident}
              onChange={handleChange}
              required
              className="p-2 border rounded text-sm"
            >
              <option value="" disabled hidden>
                Please Select
              </option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
            </select>
          </div>
          {/* description */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="description"
              className="capitalize text-black text-sm"
            >
              description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="p-2 border rounded text-sm"
              required
            />
          </div>
        </div>
        {/* col 3 file*/}
        <div className="flex flex-col gap-4">
          {/* upload file */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="upload_file"
              className="capitalize text-black text-sm"
            >
              upload file
            </label>
            <input
              type="file"
              name="upload_file"
              id="upload_file"
              accept="application/pdf,application/msword"
              onChange={handleFileChange}
              required
              className="p-2 border rounded text-sm"
            />
          </div>
          {/* file img */}
          <div className="flex flex-col gap-1">
            <label htmlFor="photos" className="capitalize text-sm text-black">
              photos
            </label>
            <input
              type="file"
              name="photos"
              id="photos"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="p-2 border rounded text-sm"
            />
          </div>
          {/* submit button */}
          <div className="w-full hidden lg:flex justify-center">
            <button
              type="submit"
              className="p-2 w-full bg-primary  text-white rounded hover:bg-green-800 hover:shadow-md hover:shadow-green-100 duration-200 ease-in-out transition-all"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {/* mode hp */}
      <div className="flex lg:hidden justify-center p-2 bg-white rounded-lg shadow-lg w-full mt-2">
        <button
          type="submit"
          className="p-2 px-10 bg-primary  text-white rounded hover:bg-green-800 hover:shadow-md hover:shadow-green-100 duration-200 ease-in-out transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormAddIncidentReportComponent;
