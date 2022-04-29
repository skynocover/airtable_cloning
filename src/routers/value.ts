import express, { Request, Response, NextFunction } from "express";
import { Resp } from "../resp/resp";
import { prisma } from "../database/db";

const routes = express.Router();

// redirect
routes.get("/redirect", async (req, res) => {
  res.status(200).json(Resp.success);
});

routes.get("/model", async (req, res: Response) => {
  try {
    const { model, height, width, WG } = req.query;

    const records = await prisma.row_value.findMany({
      include: {
        rows: true,
        columns: { include: { types: true, tables: true } },
      },
    });

    let data = records;
    res.json({ ...Resp.success, data });
  } catch (error: any) {
    res.json({ ...Resp.sqlExecFail, error: error.message });
  }
});

routes.get("/table", async (req, res: Response) => {
  try {
    const table = await prisma.tables.findFirst({
      include: {
        columns: { include: { types: true } },
        rows: { include: { row_value: true } },
      },
    });

    let data = table;
    res.json({ ...Resp.success, data });
  } catch (error: any) {
    res.json({ ...Resp.sqlExecFail, error: error.message });
  }
});

routes.get("/value", async (req, res: Response) => {
  try {
    const table = await prisma.row_value.findMany({
      include: {
        // columns: { include: { types: true } },
        columns: true,
        rows: { include: { row_value: true } },
      },
    });

    let data = table;
    res.json({ ...Resp.success, data });
  } catch (error: any) {
    res.json({ ...Resp.sqlExecFail, error: error.message });
  }
});

routes.get("/row", async (req, res: Response) => {
  try {
    const table = await prisma.rows.findMany({
      include: {
        row_value: { include: { columns: true } },
      },
    });

    let data = table;
    res.json({ ...Resp.success, data });
  } catch (error: any) {
    res.json({ ...Resp.sqlExecFail, error: error.message });
  }
});

export { routes as model };
