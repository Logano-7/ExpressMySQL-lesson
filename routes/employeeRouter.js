import express from "express";
import employeesController from "../controllers/employees.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = id
      ? await employeesController.getOne(id)
      : await employeesController.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await employeesController.add(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await employeesController.update(id, req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await employeesController.remove(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
