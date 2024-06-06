import Link from 'next/link'


const PageHeader = ({className}) => {
  return (
      <header className={`flex justify-between items-center ${className}`} >
          <Link href={"/dashboard"} className='text-xl hover:underline underline-offset-8 decoration-2'>Tas Finans</Link>
          <div className='flex items-center space-x-4'>
              <div>Karanlık Mod</div>
              <div>Kullanıcı bilgileri</div>
          </div>
    </header>
  )
}

export default PageHeader