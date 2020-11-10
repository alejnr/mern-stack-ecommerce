import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Alex Menlah',
        email: 'alex@menlah.com',
        password: bcrypt.hashSync('menlah04', 10),
        isAdmin: true
    },
    {
        name: 'Guest 1',
        email: 'guest1@demo.com',
        password: bcrypt.hashSync('menlah04', 10),
    },
    {
        name: 'Guest 2',
        email: 'guest2@demo.com',
        password: bcrypt.hashSync('menlah04', 10),
    }
]

export default users