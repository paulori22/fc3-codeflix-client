import { Movies } from '@/types/movie';
import Image from 'next/image';

type MovieRowProps = {
  sectionTitle: string;
  movies: Movies;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => {
  return (
    <div
      key={index}
      className='group relative h-28 min-w-[200px] transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:z-50 md:h-36 md:min-w-[260px] md:hover:scale-110
                '
    >
      <Image
        src={`/item_${index}.png`}
        fill={true}
        alt='Image'
        className='rounded'
      />
    </div>
  );
};

export default function MovieRow({ sectionTitle, movies }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
        {movies.map((movie, index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
