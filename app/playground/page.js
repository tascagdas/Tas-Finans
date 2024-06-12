import Button from '@/components/button'
import Input from '@/components/input'
import Label from '@/components/label'
import PageHeader from '@/components/page-header'
import Select from '@/components/select'
import Seperator from '@/components/seperator'
import Skeleton from '@/components/skeleton'
import TransactionItem from '@/components/transaction-item'
import TransactionSummaryItem from '@/components/transaction-summary-item'
import Trend from '@/components/trend'


export const metadata = {
    title: "Playground"
};


const Page = () => {
    return (
        <main className='space-y-8 mb-44'>
            <h1 className='text-4xl mt-8'>
                Playground
            </h1>

            <div className='border border-gray-500 '>
                <h2 className='mb-4 text-lg font-mono'>PageHeader</h2>
                <Seperator />
                <div>
                    <PageHeader />
                </div>
            </div>
            <div className='border border-gray-500 '>
                <h2 className='mb-4 text-lg font-mono'>Trend</h2>
                <Seperator />
                <div className='flex space-x-4'>
                    <Trend type="Income" amount={1000} prevAmount={1100} />
                    <Trend type="Expense" amount={1700} prevAmount={1500} />
                    <Trend type="Investment" amount={300} />
                    <Trend type="Saving" amount={700} />
                </div>
            </div>
            <div className='border border-gray-500 '>
                <h2 className='mb-4 text-lg font-mono'>Transferler</h2>
                <Seperator />
                <div className='space-y-4 '>
                    <TransactionItem type="Income" description="Maaş" amount={17000} />
                    <TransactionItem type="Expense" category="Gıda" description="Dışarıda yemek" amount={7000} />
                    <TransactionItem type="Saving" category="Kişisel" description="Bilgisayar için" amount={1000} />
                    <TransactionItem type="Investment" description="Borsa" amount={9000} />
                </div>
            </div>
            <div className='border border-gray-500 '>
                <h2 className='mb-4 text-lg font-mono'>Transfer toplam</h2>
                <Seperator />
                <div className='space-y-4 '>
                    <TransactionSummaryItem date="27/7/2024" amount={3500} />
                    <Seperator />
                    <TransactionItem type="Income" description="Maaş" amount={17000} />
                    <TransactionItem type="Expense" category="Gıda" description="Dışarıda yemek" amount={7000} />
                    <TransactionItem type="Saving" category="Kişisel" description="Bilgisayar için" amount={1000} />
                    <TransactionItem type="Investment" description="Borsa" amount={9000} />
                </div>
            </div>
            <div className='border border-gray-500 '>
                <h2 className='mb-4 text-lg font-mono'>Butonlar</h2>
                <Seperator />
                <div className='space-x-4 '>
                    <Button>Hello</Button>
                    <Button variant="outline">Hello</Button>
                    <Button variant="ghost">Hello</Button>

                    <Button size="xs">Hello</Button>
                    <Button size="sm">Hello</Button>
                    <Button size="lg">Hello</Button>
                </div>
            </div>
            <div className='border border-gray-500 '>
                <h2 className='mb-4 text-lg font-mono'>Formlar</h2>
                <Seperator />
                <div className='grid grid-cols-2 gap-4 '>
                    <div>
                        <Label className="mb-1">Adınız</Label>
                        <Input type='text' placeholder='Adınızı giriniz babo' />
                    </div>
                    <div>
                        <Label className="mb-1">Şehir</Label>
                        <Select>
                            <option value="">İstanbul</option>
                            <option value="">Hakkari</option>
                            <option value="">Kars</option>
                            <option value="">Ankara</option>
                            <option value="">Eskişehir</option>
                        </Select>
                    </div>
                    <div className='flex items-center'>
                        <Input type='checkbox' id='terms' />
                        <Label className="ml-2" htmlFor='terms'>Babamı Yalayabilirisiniz.</Label>
                    </div>
                </div>
            </div>
            <div className='border border-gray-500 '>
                <h2 className='mb-4 text-lg font-mono'>Loading Skeleton</h2>
                <Seperator />
                <div className='space-y-8'>
                    <div className='flex space-x-4'>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                    <div className='space-y-4'>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page