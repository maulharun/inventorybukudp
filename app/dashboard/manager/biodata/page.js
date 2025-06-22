"use client";
import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { User } from "lucide-react";
import { useState } from "react";

export default function ManagerBiodataPage() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Data biodata statis sesuai permintaan
    const biodata = {
        nama: "Dea Pradestiawati",
        ttl: "Sumedang, 29 April 2005",
        jenisKelamin: "Perempuan",
        alamat: "Kp. BojongBolang dsn. Sukadana Kec. Cimanggung Kab. Sumedang",
        agama: "Islam",
        kewarganegaraan: "Indonesia",
        status: "Mahasiswa",
        kontak: "089656122902 / tiawatideaprades@gmail.com",
        hobi: "Menonton dan Membaca",
        skills: "Microsoft Excel / Word, Akuntansi Keuangan, Web Development, Kerja Sama Tim"
    };

    return (
        <div className="flex h-screen bg-gradient-to-br from-pink-200 via-blue-100 to-yellow-100">
            <Sidebar isOpen={sidebarOpen} userRole="manager" />
            <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"}`}>
                <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <main className="pt-24 px-4 flex justify-center items-center h-full">
                    <div className="bg-white/90 rounded-3xl shadow-2xl border-4 border-pink-200 max-w-3xl w-full p-0 flex flex-col md:flex-row items-stretch overflow-hidden">
                        <div className="md:w-1/3 w-full min-h-[260px] md:min-h-[360px] relative bg-pink-100 flex items-center justify-center">
                            <Image
                                src="/image/profile-default.jpeg"
                                alt="Foto Biodata"
                                fill
                                style={{ objectFit: "cover" }}
                                className="w-full h-full rounded-none border-4 border-pink-200"
                                priority
                            />
                            <div className="absolute bottom-4 right-4 bg-pink-400 rounded-xl px-3 py-1 flex items-center gap-2 shadow-lg border-2 border-white/60">
                                <User className="w-5 h-5 text-white" />
                                <span className="text-xs text-white font-semibold">Manager</span>
                            </div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-center bg-gradient-to-br from-white via-pink-50 to-blue-50">
                            <h2 className="text-2xl font-extrabold text-pink-600 mb-4 flex items-center gap-3 drop-shadow">
                                Biodata Pengguna
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4 text-base">
                                <div>
                                    <span className="block text-pink-400 text-xs mb-1 font-semibold">Nama Lengkap</span>
                                    <span className="font-bold text-gray-800">{biodata.nama}</span>
                                </div>
                                <div>
                                    <span className="block text-pink-400 text-xs mb-1 font-semibold">Tempat, Tanggal Lahir</span>
                                    <span className="font-bold text-gray-800">{biodata.ttl}</span>
                                </div>
                                <div>
                                    <span className="block text-pink-400 text-xs mb-1 font-semibold">Jenis Kelamin</span>
                                    <span className="font-bold text-gray-800">{biodata.jenisKelamin}</span>
                                </div>
                                <div>
                                    <span className="block text-pink-400 text-xs mb-1 font-semibold">Alamat</span>
                                    <span className="font-bold text-gray-800">{biodata.alamat}</span>
                                </div>
                                <div>
                                    <span className="block text-pink-400 text-xs mb-1 font-semibold">Agama</span>
                                    <span className="font-bold text-gray-800">{biodata.agama}</span>
                                </div>
                                <div>
                                    <span className="block text-pink-400 text-xs mb-1 font-semibold">Kewarganegaraan</span>
                                    <span className="font-bold text-gray-800">{biodata.kewarganegaraan}</span>
                                </div>
                                <div>
                                    <span className="block text-pink-400 text-xs mb-1 font-semibold">Status</span>
                                    <span className="font-bold text-gray-800">{biodata.status}</span>
                                </div>
                                <div>
                                    <span className="block text-pink-400 text-xs mb-1 font-semibold">Nomor HP / Email</span>
                                    <span className="font-bold text-gray-800">{biodata.kontak}</span>
                                </div>
                                <div>
                                    <span className="block text-pink-400 text-xs mb-1 font-semibold">Hobi</span>
                                    <span className="font-bold text-gray-800">{biodata.hobi}</span>
                                </div>
                                <div>
                                    <span className="block text-pink-400 text-xs mb-1 font-semibold">Skills</span>
                                    <span className="font-bold text-gray-800">{biodata.skills}</span>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <span className="text-pink-400 text-sm flex items-center gap-2 font-semibold">
                                    <span className="animate-pulse">🌸</span>
                                    Data ini hanya dapat dilihat oleh Anda
                                    <span className="animate-pulse">🌸</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}