import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Pencil2Icon } from '@radix-ui/react-icons'

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-gray-800 transition-colors hover:text-blue-800`}
    >
      <Pencil2Icon className="h-8 w-8" />
      <p className="text-2xl ml-2">Uninotes</p>
    </div>
  );
}

