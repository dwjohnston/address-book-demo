const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

const adapter = new FileAsync('./db.json');

let db;
low(adapter).then((_db) => {
    db = _db;
    db.defaults({ addresses: {} }).write();
});

async function getAllAddresses() {
    const addresses = await db.get('addresses').value();
    return Object.values(addresses);
}

async function addAddress(address) {
    return updateAddress(address);
}

async function updateAddress(address) {
    console.log(address);
    await db.set(`addresses.${address.name}`, address).write();
    return address;
}

async function deleteAddress(addressId) {
    await db.unset(`addresses.${addressId}`).write();
    return addressId;
}

module.exports = {
    getAllAddresses,
    addAddress,
    updateAddress,
    deleteAddress
}