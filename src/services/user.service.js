import { dbService } from './db.service'

export const userService = {
    getUser,
}

const KEY = 'userDB'

const user = {
    name: "Puki Ben David",
    balance: 100,
    transactions: []
}

async function getUser(userId) {
    // return await dbService.get(KEY,userId)
    return user
}
