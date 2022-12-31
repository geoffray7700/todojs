const {v4: uuidv4} =  require('uuid');

const data = [
    {
        id:'4a74f322-8a0b-471e-badf-7dbf28961b31',
        name:'Bureau 1',
    },
    {
        id:'2eef6397-1e71-47de-8132-fa40392382f8',
        name:'Bureau 2 ',
    }
];
//affficher un bureau
const getAll = (req, res) => {
    res.json(data);
}

const get = (req, res) => {
    const {id} = req.params;
    const office = data.find(o => {
        return o.id === id });
        if(office===undefined){
return res.status(404).json({error: 'Record not found'});
        }
res.json(office);
}
//ajouter un bureau
const add = (req, res) => {
    const {name} = req.body;
    if(name == null){
        return res.status(400).json({error: 'Missing parameter'});
    }
    const office = {
        id: uuidv4(),
        name
    } ;
data.push(office);
res.json(office);

}


//supprimer un bureau


const remove = (req, res) => {
    const {id} = req.params;
    const officeIndex = data.findIndex(o=> o.id == id);
    if( officeIndex===-1 ){
        return res.status(404).json({error: 'Record not found !'});
}

data.splice(officeIndex, 1);

return res.status(204).send();
}

//modifier un bureau

const edit = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
        if(name == null){
        return res.status(400).json({error: 'Missing parameter'});
    }
const office = data.find(o => o.id === id);
if(office === undefined){
return res.status(404).json({error: 'Record not found'});    
}

office.name = name;

return res.json(office);
}





module.exports = {
    getAll: getAll,
    get: get,
    add: add,
    remove: remove,
    edit: edit,
}