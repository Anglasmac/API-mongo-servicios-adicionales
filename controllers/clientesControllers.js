import Clientes from '../models/clientes.js'
//get all documents from clientes

export async function  getClientes (req,res){
    const clientes = await Clientes.find()//
    res.json(clientes)//
}
export async function postClientes (req,res){
    const body =req.body //Obtiene el body envia al post un formulario
    let msg ='Cliente inserted succesful'
    try {
        const clientes = new Clientes(body) //create the objet clientes (RAM)(lA RAM ES TEMPORAL, NO SIGNIFICA QUE CUANDO EL OBJETO ESTA EN LA RAM NO ESTA EN LA BASE DE DATOS)
        await clientes.save() //save the objet in the database
        res.json({msg})
    } catch (error) {
        msg = error
    } 
    res.json({msg:msg})
}
// Actualizar un cliente por nombre   
export async function putClientes(req, res) {
    const { nombrecliente,  clientes } = req.body
    let msg='cliente update succesfull'
    try {
        await findOneAndUpdate({nombrescliente:nombrecliente})
        res.json(updatedClientes);
    } catch (error) {
        res.json({ msg:msg});
    }
};

// Eliminar un vehículo por ID

export async function deleteClientes(req, res) {
    const _id = req.params.id;
    try {
        await findByIdAndDelete({_id:_id})
        res.json({ msg: 'cliente deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// export default {
//     getOwner,
//     postOwner,
//     putOwner,
//     deleteOwner
// };
