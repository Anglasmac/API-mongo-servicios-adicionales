import Servicios from '../models/servicios.js'
//get all documents from Owner

export async function getServicios(req,res){
    const servicios = await find()//
    res.json(servicios)//
}
export async function postServicios (req,res){
    const body =req.body //Obtiene el body envia al post un formulario
    let msg ='Servicio inserted succesful'
    try {
        const Servicios = new Servicios(body) //create the objet Owner (RAM)(lA RAM ES TEMPORAL, NO SIGNIFICA QUE CUANDO EL OBJETO ESTA EN LA RAM NO ESTA EN LA BASE DE DATOS)
        await Servicios.save() //save the objet in the database
    } catch (error) {
        msg = error
    } 
    res.json({msg:msg})
}
// Actualizar un vehículo por placa   
export async function putServicios(req, res) {
    const { nombreservicio,  servicios } = req.body
    let msg='Servicio update succesfull'
    try {
        await findOneAndUpdate({nombreservicio:nombreservicio})
        res.json(updatedServicios);
    } catch (error) {
        res.json({ msg:msg});
    }
};

// Eliminar un vehículo por ID
export async function deleteServicios(req, res) {
    const _id = req.params.id;
    try {
        await findByIdAndDelete({_id:_id})
        res.json({ msg: 'Servicio deleted successfully' });
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
