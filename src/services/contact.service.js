'use strict'

import { dbService } from "./db.service"

const contact = {
    _id: "I6ebsuqLXN",
    name: "Doris Aubut",
    email: "LSjaardema@tortor.gov",
    phone: "(774)563-9173"
}

const KEY = 'contsct'

export const contactService = {
    query,
    getById,
    remove,
    save
}

async function query() {
    return contact
}


async function getById(contsctId) {
    return await dbService.get(KEY, contsctId)
}

async function remove(contsctId) {
    return await dbService.remove(KEY, contsctId)
}

async function save(contact) {
    if (contact._id) return await dbService.put(KEY, contact)
    else return await dbService.post(KEY, contact)
}