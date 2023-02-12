'use strict'

import axios from "axios"
import { storageService } from '@/services/storage.service.js'

const KEY = 'bitCoinDB'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    let res = storageService.load(KEY + 'Rate')
    if (!res) {
        res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1&cors=true')
            .then((response) => response.data)
        storageService.save(KEY + 'Rate', res)
    }
    return res
}

async function getMarketPriceHistory() {
    let res = storageService.load(KEY + 'MarketPriceHistory')
    if (!res) {
        res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        storageService.save(KEY + 'MarketPriceHistory', res)
    }
    return res
}

async function getAvgBlockSize() {
    let res = storageService.load(KEY + 'AvgBlockSize')
    if (!res) {
        res = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
        storageService.save(KEY, res)
    }
    return res

}