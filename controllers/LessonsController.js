const Lesson = require("../models/Lesson");

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
    }

    /**
     * Create new lesson an return the new created lesson
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res) {

    }

    /**
     * Return one lesson
     * @param {*} req 
     * @param {*} res 
     */
    show(req, res) {

    }

    /**
     * Update lesson and return updated lesson
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

    }
    
    /**
     * Delete lesson and return deleted id
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

    }
}

module.exports = new LessonsController(Lesson);