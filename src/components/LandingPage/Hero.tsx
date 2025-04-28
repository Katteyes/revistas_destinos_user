import '@justinribeiro/lite-youtube';
export default function Hero() {
  const gridItems = Array(5).fill(null);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="overflow-hidden h-70 max-w-[70rem] rounded-3xl">
        <img
          src="/imageHero.webp"
          className="w-300 h-auto -translate-y-25"
          alt="Hero image"
          loading="eager"
        />
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-11 max-w-[70rem] mt-11">
        <lite-youtube videoid="MnmAmCvyp-U"></lite-youtube>
        {gridItems.map((_, index) => (
          <div
            key={`grid-item-${index}`}
            className={index > 2 ? `col-start-${index - 2} row-start-2` : ''}
          >
            <div className="aspect-video bg-[#D9D9D9] w-auto h-48 opacity-50"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
