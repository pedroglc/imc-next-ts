/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ThemeButton } from '../theme/theme-button';

export default function Navbar() {
  return (
    <header className='flex lg:justify-around h-20 w-full shrink-0 items-center px-4 md:px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>          
          <Link href='#' className='mr-6 hidden lg:flex' prefetch={false}>
            IMC
            <span className='sr-only'>Acme Inc</span>
          </Link>
          <div className='grid gap-2 py-6'>
            <Link
              href='https://master--fabulous-speculoos-40aa34.netlify.app/'
              target='_blank'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Using MUI
            </Link>
            <Link
              href='https://github.com/pedroglc'
              target='_blank'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Github
            </Link>
            <Link
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Contact
            </Link>
            <ThemeButton />
          </div>
        </SheetContent>
      </Sheet>
      <Link href='#' className='mr-6 hidden lg:flex' prefetch={false}>
        IMC
        <span className='sr-only'>Acme Inc</span>
      </Link>
      <nav className='hidden lg:flex gap-6'>
        <Link
          href='https://master--fabulous-speculoos-40aa34.netlify.app/'
          target='_blank'
          className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
          prefetch={false}
        >
          Using MUI
        </Link>
        <Link
          href='https://github.com/pedroglc'
          target='_blank'
          className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
          prefetch={false}
        >
          Github
        </Link>
        <Link
          href='#'
          className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href='#'
          className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
          prefetch={false}
        >
          Contact
        </Link>
        <ThemeButton />
      </nav>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

