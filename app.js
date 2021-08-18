const express = require('express')
const { Sequelize } = require('sequelize');

const app = express()
const PORT = process.env.PORT || 9000
const router = express.Router()

const { database, username, password, host } = {
    database: '',
    username: '',
    password: '',
    host: ''
}

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: 'mysql'
});

router.get('/groups', async (req, res) => {
    const tbName = ''
    const colName = ''
    const [results, metadata] = await sequelize.query(`SELECT distinct(${colName}) from ${tbName}`);
    return res.json({ message: '/groups' })
})

router.get('/group_operations/:group', async (req, res) => {
    const tbName = ''
    const groupColName = ''
    const [results, metadata] = await sequelize.query(`SELECT * from ${tbName} where ${groupColName} = ${req.params.group}`);
    return res.json({ message: '/group_operations' })
})

router.get('/group_operation_locations/:group/:operation', async (req, res) => {
    const tbName = ''
    const groupColName = ''
    const operationColName = ''
    const [results, metadata] = await sequelize.query(`
        SELECT * 
        from ${tbName} 
        where ${groupColName} = ${req.params.group}
        and ${operationColName} = ${req.params.operation}
    `);
    return res.json({ message: '/group_operation_locations' })
})

app.use(router)
app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PROT ${PORT}`))