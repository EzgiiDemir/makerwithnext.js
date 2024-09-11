
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-5 font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center bg-transparent p-4 shadow-lg">
        <div className="text-white text-2xl font-bold">
          Brand
        </div>
        <ul className="hidden sm:flex gap-8 text-white">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
        <button className="sm:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Main content */}
      <div className="relative flex w-full sm:w-3/4 lg:w-2/3 mx-auto">
        <main className="flex flex-col gap-8 w-full">
          {/* First Content: Sevgiline Web Sitesi Yap */}
          <div className="flex flex-col items-center sm:items-start">
            <img src="https://via.placeholder.com/400x300" alt="Sevgiline Web Sitesi Yap" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="mt-4">
              <h2 className="text-2xl font-bold">Sevgiline Web Sitesi Yap</h2>
              <p className="text-gray-700 mt-2">
                Sevgilinize özel, onunla ilgili fotoğraflar, anılar ve kişisel dokunuşlar içeren bir web sitesi yaparak onu şaşırtın!
              </p>
              <a href="lovers" className="text-blue-500 hover:underline mt-4 block">
                Nasıl Yapılır?
              </a>
            </div>
          </div>

          {/* Second Content: Hangi Alanda İyisin? */}
          <div className="flex flex-col items-center sm:items-start">
            <img src="https://via.placeholder.com/400x300" alt="Hangi Alanda İyisin?" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="mt-4">
              <h2 className="text-2xl font-bold">Hangi Alanda İyisin? Hangi Kariyer Senin İçin Daha Uygun?</h2>
              <p className="text-gray-700 mt-2">
                Kariyer yolculuğunuzda hangi alanlarda başarılı olduğunuzu öğrenmek ve sizin için en uygun kariyer yolunu keşfetmek ister misiniz?
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">
                Kariyer Testini Keşfet
              </a>
            </div>
          </div>

          {/* Third Content: Ortak Filminizi Bulun */}
          <div className="flex flex-col items-center sm:items-start">
            <img src="https://via.placeholder.com/400x300" alt="Ortak Film Bulun" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="mt-4">
              <h2 className="text-2xl font-bold">Film Zevkinizi Birleştirin ve Ortak Filminizi Bulun</h2>
              <p className="text-gray-700 mt-2">
                Sizin ve partnerinizin film zevklerini bir araya getirip, ortak bir film bulma konusunda zorlanıyorsanız, doğru yerdesiniz!
              </p>
              <a href="#" className="text-blue-500 hover:underline mt-4 block">
                Ortak Filminizi Keşfedin
              </a>
            </div>
          </div>
        </main>

        {/* Right section: Fixed Advertisement */}
        <aside className="hidden lg:block w-1/4 sticky top-8 ml-8">
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Reklam Alanı</h3>
            <div className="bg-gray-300 h-64 flex items-center justify-center">
              <span className="text-gray-600">Reklam İçeriği</span>
            </div>
          </div>
        </aside>

      </div>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}
