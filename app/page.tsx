import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { Flex, Text } from '@radix-ui/themes';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-100">
      <Flex justify="between" align="center" className="px-0 md:px-10">
        <div className="shrink-0 rounded-lg">
          <AcmeLogo />
        </div>
        <Flex gap="4">
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 rounded-lg text-gray-400 px-4 py-2 text-sm font-medium transition-colors hover:text-black md:px-6 md:py-3 md:text-base"
          >
            <Text as="span">Log in</Text>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 md:px-6 md:py-3 md:text-base"
          >
            <Text as="span">Sign up</Text>
          </Link>
        </Flex>
      </Flex>

      <div className="mt-10 flex flex-col gap-4 md:gap-8">
        <Flex direction="column" justify="center" align="center" className="text-center gap-6 rounded-lg bg-gray-50 mx-2 px-6 py-10 md:mx-10 md:px-20">
          <div className="w-full lg:w-1/2">
            <Text as="p" className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              Uninotes is your new home for ideas, records, tasks, and lists. Enjoy efficient note-taking without the hassle.
            </Text>
          </div>
          <Link
            href="/login"
            className="flex items-center gap-5 self-center rounded-lg bg-blue-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 md:text-base"
          >
            <Text as="span">Get Started</Text>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </Flex>

        {/* Hero Images */}
        <Flex justify="center" align="center" className="p-6 md:w-full md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1280}
            height={720}
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block"
          />
          {/* Hero Mobile */}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            alt="Screenshots of the dashboard project showing mobile version"
            className="block md:hidden"
          />
        </Flex>
      </div>

    </main>
  );
}
