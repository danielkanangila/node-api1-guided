import Lesson from '../models/Lesson';

class LessonsController {
    constructor(model) {
        this.model = model
    }
    /**
     * Retun lessons list
     * @param {*} req 
     * @param {*} res 
     */
    index(req, res) {
        res
            .status(200)
            .json(this.model.findall());
    }

    /**
     * Create new lesson an return the new created lesson
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res) {
        if (!this.validate(req.body)) {
            return res.status(400).json({message: "Lesson 'name' is required in the request body."});
        }
        const lesson = this.model.create(req.body)

        return res.status(200).json(lesson);
    }

    /**
     * Return one lesson
     * @param {*} req 
     * @param {*} res 
     */
    show(req, res) {
        if (!parseInt(req.params.id)) return res.status(400).json({message: "No 'id' found in the request params."});
        const lesson = this.model.findone(req.params.id) || {}
        return res
                .status(200)
                .json(lesson);
    }

    /**
     * Update lesson and return updated lesson
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {
        if (!parseInt(req.params.id)) return res.status(400).json({message: "No 'id' found in the request params."});
        if (!this.validate(req.body)) {
            return res.status(400).json({message: "Lesson 'name' is required in the request body."});
        }

        const updatedLesson = this.model.update(req.params.id, req.body);

        return res.status(200).json(updatedLesson);
    }
    
    /**
     * Delete lesson and return deleted id
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {
        if (!req.params.id) return res.status(400).json({message: "No 'id' found in the request params."});
        
        const deletedId = this.model.delete(req.params.id);

        return res.status(200).json({id: deletedId});
    }

    validate(body) {
        if (!body.name) return false
        else if (body.name && !body.name.trim()) return false
        else return true;
    }
}

export default new LessonsController(new Lesson());