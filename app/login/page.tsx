import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen bg-gray-100">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full justify-center items-end rounded-lg p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Link
              href="/"
            >
              <AcmeLogo />
            </Link>

          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}