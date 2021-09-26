const Income = require('../models/income');

const getAllIncome = async (req, res) => {
    await Income.find().then((data) => {
        res.status(200).json({ incomeList: data });
    }, err => {
        console.log(err);
        res.status(500).json({ error: err });
    })
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
        if (err) {
            console.log(err); res.status(500).json(err);
        }
        res.status(201).json({
            message: 'Incoem added successfully',
            newIncomeObj: newIncomeObj,
        });
    })
}

const updateIncome = async(req, res) => {
    let id = req.params.id;
    Income.findByIdAndUpdate(id, req.body).then((data, err) => {
        if(err) res.status(500).json({error: err});
        res.status(200).json({
            message: 'Item Updated Successfully',
            upatedIncome: data
        });
    }, err => {
        res.status(500).json({error: err});
    });
}

const deleteIncome = async(req, res) => {
    let id = req.params.id;
    Income.findByIdAndDelete(id).then(data => {
        res.status(200).json({message: 'Item Deleted Successfully'});
    }, err => {
        res.status(500).json({error: err});
    });
}

module.exports = {
    getAllIncome,
    addIncome,
    updateIncome,
    deleteIncome
}
