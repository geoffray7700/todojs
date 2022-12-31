const office = {
    data: [],

};

office.init = async function () {
    //get DOM elements
    office.tableContent = document.querySelector('#container-list table tbody')
    //console.log(office.tableContent,'office.tableContent')

    office.data = await office.getAll().catch( ()=> {
        alert('Impossible de recupérer les bureaux');
        return [];
    });


    //console.log('Initialisation du controller office');
    office.renderTable();
}

office.renderTable = () => {
    let content = '';
    office.data.forEach((e, index) => {
        content += `
        <tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>
            <button class="btn btn-primary" onclick="office.edit(${index})">M</button>
            <button class="btn btn-danger" onclick="office.remove(${index})">S</button>
            </td>
        </tr>
        `;
    });
    //console.log(content);
    office.tableContent.innerHTML = content;
    
}

office.toggleForm = () => {
    $('#office-form form input').val('');
    $('#container-list,#office-form').toggle();
}

office.edit = (index)=>{
    console.log('edit');
    office.toggleForm();
    if (index !== undefined) {
        office.fillForm(index);
    }
}

office.save = async(event) => {
    event.preventDefault();
    const id = $('input[name="id"]').val();
    const name = $('input[name="name"]').val();
    if (name.trim().length === 0) {
        alert('Tous les champs sont obligatoires !!');
        return;
    }
    
    // console.log('id', id);
    // console.log('name', name);

    const record = office.data.find(d => d.id == id);
    //EDITION
    try {
    if (record) {
             const officeSaved = await $.ajax({
        type: 'PUT',
        url: `${app.api}/office/${record.id}`,
        data:{ name }
   })
        record.name = officeSaved.name;
    }
    //AJOUT
    else {
         const officeSaved = await $.ajax({
        type: 'POST',
        url: `${app.api}/office`,
        data:{ name }
   })

        office.data.push();
        

    }
    office.renderTable();
    office.toggleForm();
    } catch(e){
        alert (record ?'Impossible de modifier ce bureau' : 'Impossible d\'ajouter ce bureau')
    }

}

office.fillForm = (index) => {
    const record = office.data[index];
    if (record != null) {
        $('input[name="id"]').val(record.id);
        $('input[name="name"]').val(record.name);

    }
}

office.remove = async (index) => {
    //console.log('Remove', index);
    const record = office.data[index];
    if (record != null &&confirm(`Voulez-vous vraiment supprimer ce bureau: ${record.name}? `)) 
   {
try {
          await $.ajax(
            {
            type: 'DELETE',
             url: `${app.api}/office/${record.id}`,
        
            })
        
            office.data.splice(index, 1);
        
            office.renderTable();
    } catch (e){
        alert('Impossible de supprimer ce bueau !')
    }
   }

}

office.getAll = () => {
   return $.ajax({
        type: 'GET',
        url: `${app.api}/office`,
   })
};

app.controllers.office = office;