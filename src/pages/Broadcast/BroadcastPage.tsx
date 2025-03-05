import { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import iconBroadcast from "../../assets/broadcast.png";

const BroadcastPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("Pilih Subjek");
  const [message, setMessage] = useState<string>("");

  // Fungsi untuk menangani perubahan subject
  const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubject = event.target.value;
    setSubject(selectedSubject);

    // Update pesan berdasarkan subject yang dipilih
    if (selectedSubject === "Laporan Disetujui") {
      setMessage(
        "Laporan insiden Anda telah disetujui. Terima kasih telah melaporkan."
      );
    } else if (selectedSubject === "Peringatan Insiden") {
      setMessage(
        "Harap berhati-hati! Kami telah mendeteksi insiden di lokasi Anda."
      );
    } else {
      setMessage(""); // Jika "Pilih Subjek", kosongkan pesan
    }
  };

  // handle submit to email
  const handleSendBroadcast = () => {
    if (!email) {
      toast.error("Email tujuan wajib diisi!", { position: "top-right" });
      return;
    }
    if (subject === "Pilih Subjek") {
      toast.error("Silakan pilih subjek!", { position: "top-right" });
      return;
    }

    console.log("Mengirim email ke:", email);
    console.log("Subjek:", subject);
    console.log("Pesan:", message);

    toast.success("Broadcast berhasil dikirim!", { position: "top-right" });

    // Reset form setelah berhasil mengirim
    setEmail("");
    setSubject("");
    setMessage("");
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

      {/* form broadcast */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-4">
        {/* header */}
        <div className="flex flex-col gap-2 items-center justify-center">
          <img src={iconBroadcast} alt="icon broadcast" className="w-16 h-16" />
          <h2 className="text-lg font-semibold mb-4 capitalize">
            broadcast alert
          </h2>
        </div>

        {/* Input Email */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Email Tujuan
          </label>
          <input
            type="email"
            placeholder="Masukkan email pelapor"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-300"
          />
        </div>

        {/* Pilihan Subject */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Subjek
          </label>
          <select
            value={subject}
            onChange={handleSubjectChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-300"
          >
            <option value="pilih subjek">Pilih Subjek</option>
            <option value="Laporan Disetujui">Laporan Disetujui</option>
            <option value="Peringatan Insiden">Peringatan Insiden</option>
          </select>
        </div>

        {/* Input Pesan */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Pesan
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-300"
          />
        </div>

        {/* Tombol Kirim */}
        <button
          onClick={handleSendBroadcast}
          className=" capitalize bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full"
        >
          submit Broadcast
        </button>
      </div>
    </>
  );
};

export default BroadcastPage;
