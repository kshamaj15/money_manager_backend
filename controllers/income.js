const Income = require('../models/income');
const asyncWrapper = require('../middleware/async.js')

const getAllIncome = async (req, res) => {
    console.log('daskjdjas');
    const incomeList = await Income.find();
    console.log('dasdas');
    res.status(200).json({incomeList});
}

const addIncome = async (req, res) => {
    let newIncomeObj = new Income({
        source: req.body.source,
        sourceId: req.body.sourceId,
        date: new Date(),
        amount: req.body.amount,
        userId: req.body.userId
    });
    
    await newIncomeObj.save((err) => {
    if(err){
        console.log(err); res.status(500).json(err);}
        res.status(201).json('Income added successfully');
    })
    // await newIncomeObj.save().then((income, err) => {
    //     res.status(201).json(income);
    // }).catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // })
    // const income = await Income.create(req.body)
    // res.status(201).json({ income })
}

module.exports = {
    getAllIncome,
    addIncome
}
