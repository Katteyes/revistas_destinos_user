export default function SideBar() {
  const placeholders = Array(4).fill(null);

  return (
    <aside className="max-w-[25rem] w-full mx-auto">
      <div className="grid grid-cols-1 gap-6">
        {placeholders.map((_, index) => (
          <div key={`placeholder-${index}`}>
            <div className="aspect-video bg-[#D9D9D9] w-full h-36 opacity-40" aria-hidden="true" />
            {index < placeholders.length - 1 && <div className="h-0.5 w-full bg-blue-800 mt-6" />}
          </div>
        ))}
      </div>

      <div className="border-2 border-[#111C85] flex items-center p-4 sm:p-6 gap-4 sm:gap-6 mt-12 sm:mt-16 hover:bg-blue-50 transition-colors cursor-pointer">
        <div className="flex-1">
          <div className="overflow-hidden h-16 max-w-[14rem]">
            <img
              src="/imageSideBar.webp"
              alt="Imagen promocional"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm sm:text-base mt-2">
            <strong>REGISTRATE</strong> y No te pierdas de las revistas más novedosas del momento!
          </p>
        </div>

        <img
          src="/icons/chevronright.svg"
          className="w-auto h-10 sm:h-16 flex-shrink-0"
          alt="Flecha derecha"
        />
      </div>
    </aside>
  );
}
