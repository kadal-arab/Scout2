import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-center h-screen grid">
      <div>
        <p className="text-center font-serif">SELAMAT DATANG DI APLIKASI SKU</p>
        <p className="text-center font-serif">SALAM PRAMUKA</p>
      </div>

      <div>
        <img src="logo.png" className="opacity-50 "></img>
      </div>
      <div className="grid justify-center ">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-light rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-stone-900 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font font-serif"
        >
          Masuk Sebagai Guru
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-light rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-stone-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-serif"
        >
          Masuk Sebagai Siswa
        </button>
      </div>
    </div>
  );
}
