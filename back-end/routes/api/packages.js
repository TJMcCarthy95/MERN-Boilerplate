const express = require("express");
const router = express.Router();

const Dispatch = require("../../utils").Dispatcher;
const package_controller = require("../../controllers/packages");

/**
 * @route GET api/packages/initialize
 * @description Initialize default packages
 * @access Public
 */
router.get("/initialize", (req, res) => {
  package_controller.add_default_packages((err, packages) =>
    Dispatch(res, err, packages, "Initilized Packages"))
})

/**
 * @route GET api/packages
 * @description Get All Packages
 * @access Public
 */
router.get("/", (req, res) => {
  package_controller.get_packages((err, packages) =>
    Dispatch(res, err, packages, "Get Packages")
  )
})

/**
 * @route GET api/packages/lean
 * @description Get ALL packages with defined data
 * @access Public
 */
router.get("/lean", (req, res) => {
  package_controller.get_packages_lean(null, req.query.fields, (err, packages) =>
    Dispatch(res, err, packages, "Get Packages Lean")
  )
})

/**
 * @route GET api/packages/package?id
 * @description Get a package
 * @access Public
 */
router.get("/package", (req, res) => {
  package_controller.get_package_by_id(req.query.id, (err, package) =>
    Dispatch(res, err, package, `Get Package ${req.query.id}`)
  )
})

/**
 * @route POST api/packages/package
 * @description Add a package
 * @access Public
 */
router.post("/package", (req, res) => {
  package_controller.add_package(req.body, (err, package) =>
    Dispatch(res, err, package, "Post Package")
  )
})

/**
 * @route PUT api/packages/package?id
 * @description Update a package
 * @access Public
 */
router.put("/package", (req, res) => {
  package_controller.update_package(req.query.id, req.body, (err, package) =>
    Dispatch(res, err, package, `Update Package ${req.query.id}`)
  )
})

/**
 * @route DELETE api/packages/package?id
 * @description Delete a Package
 * @access Public
 */
router.delete('/package', (req, res) => {
  package_controller.delete_package(req.query.id, (err, package) =>
    Dispatch(res, err, package, `Delete Package ${req.query.id}`)
  )
})

module.exports = router;
