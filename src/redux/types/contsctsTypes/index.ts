export type contact = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default interface Contacts {
    contacts: contact[]
}