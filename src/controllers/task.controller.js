import Task from '../models/Tarea'

export const findAllTask = async(req, res) => {
    const tareas = await Task.find()
    res.json(tareas)
}

export const createTask = async (req, res) =>{
    if(!req.body.titulo){
        return res.status(400).send({message: 'no contiene el titulo'})
    }

    try{
        const newTask = new Task({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            done: req.body.done ? req.body.done : false
        })
        const tareaGuardada = await newTask.save();
        console.log(tareaGuardada);
        res.json('tarea guardada')
    }
    catch(error){
        res.status(500).json({
            message: error.message || 'algo salio mal'
        })
    }

}


export const findOneTask = async (req, res) =>{

    const {id} = req.params;
    try{
        const task = await Task.findById(id)
        if(!task)
            return res
                .status(404)
                .json({message: `tarea con el id ${id} no existe` })
        res.json(task)
    }catch(error){
        res.status(500).json({
            message: error.message || 'algo salio mal'
        })
    }
    
    
}


export const deleteTask =  async (req, res) =>{

    const {id} = req.params;
    try{
        await Task.findByIdAndDelete(req.params.id)
        res.json({
        message: 'tarea eliminada satisfactoriamente'
    })
    }catch(error){
        res.status(500).json({
            message: error.message || 'algo salio mal al momento de eliminar el id'
        })
    }
    
}


export const findAllDoneTask = async(req, res) =>{
    const task = await Task.find({done: true})
    res.json(task)
}

export const updateTask = async(req,res) =>{
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: 'tarea actualizada exitosamente'})
}