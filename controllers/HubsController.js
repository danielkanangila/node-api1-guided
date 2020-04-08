const Hub = require("../models/Hub");

class HubsController {
    constructor(model) {
        this.model = model
    }
    /**
     * Retun hub list
     * @param {*} req 
     * @param {*} res 
     */
    index(req, res) {
    }

    /**
     * Create new hub an return the new created lesson
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res) {

    }

    /**
     * Return one hub
     * @param {*} req 
     * @param {*} res 
     */
    show(req, res) {

    }

    /**
     * Update hub and return updated lesson
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res) {

    }
    
    /**
     * Delete hub and return deleted id
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res) {

    }
}

module.exports = new HubsController(Hub)