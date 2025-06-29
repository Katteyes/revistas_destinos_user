import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

interface VideoItem {
  id: number;
  name: string;
  url: string;
  highlighted: boolean;
  order: number;
}

export default function InteractiveVideos() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [controlsState, setControlsState] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    fetch('https://backend-destinos.impplac.com/api/interactive-videos/featured')
      .then(response => {
        if (!response.ok) throw new Error('Error al obtener los videos interactivos');
        return response.json();
      })
      .then(data => setVideos(data))
      .catch(error => console.error(error));
  }, []);

  const handleMouseEnter = (index: number) => {
    setControlsState(prev => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index: number) => {
    setControlsState(prev => ({ ...prev, [index]: false }));
  };

  if (videos.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'backIn' }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full mt-10 bg-[#323c96] pb-10 mb-4 rounded-3xl lg:rounded-none shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 md:px-10 lg:px-8">
        <h1 className="text-white font-medium text-2xl sm:text-3xl pt-3 my-5 text-center">
          Contenidos Interactivos
        </h1>

        <div className="flex flex-col md:flex-col lg:flex-row gap-4 lg:h-[500px]">

          {/* Columna grande izquierda */}
          <div className="w-full lg:flex-[0_0_70%] h-full">
            {videos[0] && (
              <div
                className="relative w-full h-full rounded-xl overflow-hidden bg-black shadow-xl"
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
              >
                <div className="absolute top-2 left-2 bg-[rgba(47,59,92,0.8)] text-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur max-w-[80%] break-words whitespace-normal">
                  {videos[0].name}
                </div>
                <ReactPlayer
                  url={videos[0].url}
                  width="100%"
                  height="100%"
                  controls={controlsState[0]}
                  playing={true}
                  muted={true}
                  loop={true}
                />
              </div>
            )}
          </div>

          {/* Columna pequeña derecha */}
          <div className="w-full flex flex-col gap-4 md:flex-row md:h-[200px] lg:flex-col lg:flex-[0_0_30%] lg:h-full">
            {videos.slice(1, 3).map((video, index) => (
              <div
                key={video.id}
                className="relative flex-1 rounded-xl overflow-hidden bg-black shadow-xl"
                onMouseEnter={() => handleMouseEnter(index + 1)}
                onMouseLeave={() => handleMouseLeave(index + 1)}
              >
                <div className="absolute top-2 left-2 bg-[rgba(47,59,92,0.8)] text-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur max-w-[80%] break-words whitespace-normal">
                  {video.name}
                </div>
                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="100%"
                  controls={controlsState[index + 1]}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
}
