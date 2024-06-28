import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import { faker } from '@faker-js/faker'

dotenv.config({ path: '.env.local' })


const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE
)

const categories = ["Other", "House", "Transportation", "Health", "Food", "Education"]

async function seedUsers() {
    for (let index = 0; index < 5; index++) {
        try {
            const { data, error } = await supabase.auth.admin.createUser({
                email: faker.internet.email(),
                password: 'example-password',
            })
            if (error) {
                throw new Error(error)
            }
            console.log("kullanici eklendi")
        } catch (error) {
            console.error("kullanici eklenirken hata ile karsilasildi.");
        }
    }
}

async function Seed() {
    await seedUsers()
    let transactions = []


    const { data: { users }, error: listUsersError } = await supabase.auth.admin.listUsers()


    if (listUsersError) {
        console.error(`kullanicilar listelenemiyor, islem durduruldu`);
        return
    }

    const userIds = users?.map(user => user.id)

    for (let index = 0; index < 10; index++) {
        const transaction_date = faker.date.recent({ days: 180 });
        let type, category = null;

        const user_id = faker.helpers.arrayElement(userIds)

        const typeBias = Math.random();

        if (0 < typeBias < 0.50) {
            type = 'Expense'
            category = faker.helpers.arrayElement(categories)
        } else if (0.50 < typeBias < 0.90) {
            type = 'Income'
        } else {
            type = faker.helpers.arrayElement(
                ['Saving', 'Investment']
            )
        }

        let amount
        switch (type) {
            case 'Income':
                amount = faker.number.int({ min: 500, max: 20000 })
                break;
            case 'Expense':
                amount = faker.number.int({ min: 10, max: 10000 })
                break;
            case 'Investment':
            case 'Saving':
                amount = faker.number.int({ min: 1000, max: 30000 })
                break;
            default:
                break;
        }

        transactions.push({
            transaction_date,
            amount,
            type,
            category,
            description: faker.lorem.sentence({ min: 2, max: 5 }),
            user_id
        })
    }
    const { error } = await supabase.from('transactions').insert(transactions)
    if (error) {
        console.log('Hata oluştu')
    } else {
        console.log(`${transactions.length} islem eklendi.`)
    }
}

Seed().catch(console.error)