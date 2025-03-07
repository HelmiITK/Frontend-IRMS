import { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import iconBroadcast from "../../assets/broadcast.png";
import LoaderComponent from "../../Loader/LoaderComponent";
import { AiOutlineCalendar } from "react-icons/ai";

const BroadcastPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("Pilih Subjek");
  const [message, setMessage] = useState<string>("");
  const [requestNo, setRequestNo] = useState<string>("");
  const [classification, setClassification] = useState<string>(
    "Pilih Klasifikasi Insiden"
  );
  const [description, setDescription] = useState<string>("");
  const [requestedBy, setRequestedBy] = useState<string>("");
  const [requestDate, setRequestDate] = useState<string>(
    new Date().toLocaleString()
  );
  const [loading, setLoading] = useState<boolean>(false);

  // Fungsi untuk menangani perubahan subject
  const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubject = event.target.value;
    setSubject(selectedSubject);

    // Update pesan berdasarkan subject yang dipilih
    if (
      selectedSubject === "[Approved] Laporan Disetujui - PT.KPI - IRMS System"
    ) {
      setMessage(
        "Laporan insiden Anda telah disetujui. Terima kasih telah melaporkan."
      );
    } else if (
      selectedSubject === "[Reminder] Peringatan Insiden - PT.KPI - IRMS System"
    ) {
      setMessage(
        "Harap berhati-hati! Kami telah mendeteksi insiden di lokasi Anda."
      );
    } else {
      setMessage(""); // Jika "Pilih Subjek", kosongkan pesan
    }
  };

  // handle submit to email
  const handleSendBroadcast = async () => {
    if (!email.trim()) {
      toast.error("Email tujuan wajib diisi!", { position: "top-right" });
      return;
    }
    if (subject.toLowerCase() === "pilih subjek") {
      toast.error("Silakan pilih subjek yang valid!", {
        position: "top-right",
      });
      return;
    }
    if (!message.trim()) {
      toast.error("Pesan tidak boleh kosong!", { position: "top-right" });
      return;
    }
    if (
      !requestNo.trim() ||
      !classification.trim() ||
      !description.trim() ||
      !requestedBy.trim() ||
      !requestDate.trim()
    ) {
      toast.error("Semua field wajib diisi!", { position: "top-right" });
      return;
    }

    // loading sent data
    setLoading(true);

    // Ambil nama sebelum @ dari email
    const userName = email.split("@")[0];

    // HTML Template Email (React JSX ke string HTML)
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background-color: #f5f5f5; text-align: center;">
        <h2 style="background-color: #1D8000; color: white; padding: 15px; border-radius: 10px 10px 0 0;">
          Incident Report Monitoring System (IRMS)
        </h2>
        <div style="padding: 20px; background: white; border-radius: 0 0 10px 10px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); text-align: left;">
          <p style="font-size: 16px;">Dear <strong>${userName}</strong>,</p>
          <p style="font-size: 14px; color: #333;">${message}</p>

          <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ddd;" />

          <p><strong>Request No:</strong> ${requestNo}</p>
          <p><strong>Classification Incident:</strong> ${classification}</p>
          <p><strong>Description:</strong> ${description}</p>
          <p><strong>Requested By:</strong> ${requestedBy}</p>
          <p><strong>Request Date:</strong> ${requestDate}</p>

          <a href="https://irms.vercel.app/" style="display: block; margin-top: 15px; padding: 10px 20px; background-color: #1D8000; color: white; text-decoration: none; border-radius: 5px; text-align: center;">
            View Detail
          </a>

          <p style="font-size: 12px; color: #777; margin-top: 15px; text-align: center;">
            or link to: <a href="https://irms.vercel.app" style="color: #1D8000; text-decoration: none;">https://irms.vercel.app</a>
          </p>

          <p style="font-size: 12px; color: #777; margin-top: 10px; text-align: center; font-weight: bold;">
            - IRMS System
          </p>
        </div>
      </div>
    `;

    try {
      const response = await fetch("http://localhost:5000/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message: emailTemplate,
          requestNo,
          classification,
          description,
          requestedBy,
          requestDate,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Broadcast berhasil dikirim!", { position: "top-right" });
        // Reset form setelah sukses
        setEmail("");
        setSubject("Pilih Subjek");
        setMessage("");
        setRequestNo("");
        setClassification("Pilih Klasifikasi Insiden");
        setDescription("");
        setRequestedBy("");
        setRequestDate("");
      } else {
        toast.error(`Gagal mengirim: ${data.message}`, {
          position: "top-right",
        });
      }

      console.log("Data yang dikirim:", {
        to: email,
        subject: subject,
        message: message,
        requestNo: requestNo,
        classification: classification,
        description: description,
        requestedBy: requestedBy,
        requestDate: requestDate,
      });
    } catch (error) {
      console.error("Error saat mengirim email:", error);
      toast.error("Terjadi kesalahan, coba lagi!", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* header */}
      <HeaderComponent
        title="broadcast"
        routeOne="dashboard"
        routeTwo="broadcast"
      />
      {/* Toast Container */}
      <ToastContainer />
      {/* Form Broadcast */}
      <div className="relative bg-white p-6 rounded-lg shadow-md shadow-gray-300 max-w-xl mx-auto mt-4">
        {/* Header Form */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconBroadcast} alt="icon broadcast" className="w-16 h-16" />
          <h2 className="text-lg font-semibold mb-4 capitalize">
            broadcast alert
          </h2>
        </div>
        {/* Input Email */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 capitalize">
            destination email
          </label>
          <input
            type="email"
            placeholder="Enter the reporter's email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-300 placeholder:text-sm"
          />
        </div>
        {/* Pilihan Subject */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 capitalize">
            subject
          </label>
          <select
            value={subject}
            onChange={handleSubjectChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-300 text-sm"
          >
            <option value="pilih subjek">Pilih Subjek</option>
            <option value="[Approved] Laporan Disetujui - PT.KPI - IRMS System">
              Laporan Disetujui
            </option>
            <option value="[Reminder] Peringatan Insiden - PT.KPI - IRMS System">
              Peringatan Insiden
            </option>
          </select>
        </div>
        {/* Input Pesan */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 capitalize">
            message
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-300"
          />
        </div>
        {/* Input Request No */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 capitalize">
            Request No
          </label>
          <input
            type="text"
            placeholder="Enter the request number"
            value={requestNo}
            onChange={(e) => setRequestNo(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-300 placeholder:text-sm"
          />
        </div>
        {/* Pilihan Classification */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 capitalize">
            Classification Incident
          </label>
          <select
            value={classification}
            onChange={(e) => setClassification(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-300 text-sm"
          >
            <option value="Pilih Klasifikasi Insiden">
              Pilih Klasifikasi Insiden
            </option>
            <option value="Minor">Minor</option>
            <option value="Major">Major</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
        {/* Input Description */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 capitalize">
            Description
          </label>
          <textarea
            rows={3}
            placeholder="Enter the chronology of events"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-300 placeholder:text-sm"
          />
        </div>
        {/* Input Requested By */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 capitalize">
            Requested By
          </label>
          <input
            type="text"
            placeholder="Enter the reporter's name"
            value={requestedBy}
            onChange={(e) => setRequestedBy(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-300 placeholder:text-sm"
          />
        </div>
        {/* Input Request Date */}
        <div className="mb-3 relative">
          <label
            htmlFor="requestDate"
            className="block mb-2 text-sm font-medium text-gray-700 capitalize"
          >
            Request Date & Time
          </label>
          <div className=" w-full relative">
            <input
              type="datetime-local"
              name="requestDate"
              id="requestDate"
              value={requestDate}
              onChange={(e) => setRequestDate(e.target.value)}
              className="w-full flex-none lg:pl-11 p-2 pr-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-300 [&::-webkit-calendar-picker-indicator]:hidden"
            />
            <AiOutlineCalendar
              className="hidden lg:block absolute left-3 top-2 transform text-green-700 cursor-pointer hover:scale-105 hover:bg-green-500 hover:text-white hover:rounded-md duration-200 ease-in-out"
              size={24}
              onClick={() => {
                const input = document.getElementById(
                  "requestDate"
                ) as HTMLInputElement;
                if (input) {
                  input.showPicker();
                }
              }}
            />
          </div>
        </div>
        {/* Tombol Kirim */}
        <button
          onClick={handleSendBroadcast}
          disabled={loading}
          className="capitalize bg-green-600 text-white px-4 py-2 rounded-md w-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 hover:shadow-lg hover:shadow-green-200 duration-200 ease-in-out transition-all"
        >
          Submit Broadcast
        </button>
        <LoaderComponent loading={loading} />
      </div>
    </>
  );
};

export default BroadcastPage;
