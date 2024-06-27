import Link from 'next/link'
import DarkModeToggle from './dark-mode-toggle'
import useServerDarkMode from '@/hooks/use-server-dark-mode'
import { createClient } from '@/lib/supabase/server';
import Button from './button';
import { KeyRound, UserCircle } from 'lucide-react';
import { sizes, variants } from '@/lib/variants';


const PageHeader = async ({ className }) => {
  const theme = useServerDarkMode();
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  return (
    <header className={`flex justify-between items-center ${className}`} >
      <Link href={"/dashboard"} className='text-xl hover:underline underline-offset-8 decoration-2'>Tas Finans</Link>
      <div className='flex items-center space-x-4'>
        <DarkModeToggle defaultMode={theme} />
        {user && <Button variant='ghost' size="sm" className="flex items-center space-x-1">
          <UserCircle/>
          <p>{user.email}</p> 
        </Button>}
        {!user && <Link href="/login" className={`${variants['ghost']} ${sizes["sm"]}`}>
        <KeyRound/>
        </Link>}
      </div>
    </header>
  )
}

export default PageHeader