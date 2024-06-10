import Link from 'next/link'
import DarkModeToggle from './dark-mode-toggle'
import useServerDarkMode from '@/hooks/use-server-dark-mode'


const PageHeader = ({ className }) => {
  const theme = useServerDarkMode();

  return (
    <header className={`flex justify-between items-center ${className}`} >
      <Link href={"/dashboard"} className='text-xl hover:underline underline-offset-8 decoration-2'>Tas Finans</Link>
      <div className='flex items-center space-x-4'>
        <DarkModeToggle defaultMode={theme} />
        <div>Kullanıcı bilgileri</div>
      </div>
    </header>
  )
}

export default PageHeader