const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

const adapter = new FileAsync('./db.json');

let db;
low(adapter).then((_db) => {
    db = _db;
    db.defaults({ addresses: {} }).write();
});

function globName(name) {
    return name.replace(" ", "_");
}

async function getAllAddresses() {
    const addresses = await db.get('addresses').value();
    return addresses;
}

async function addAddress(address) {
    return updateAddress(globName(address.name), address);
}

async function updateAddress(id, address) {
    await db.set(`addresses.${id}`, address).write();
    return address;
}

async function deleteAddress(id) {
    await db.unset(`addresses.${id}`).write();
    return id;
}

module.exports = {
    getAllAddresses,
    addAddress,
    updateAddress,
    deleteAddress
}