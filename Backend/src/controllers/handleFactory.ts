import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";
import { FindAndCountResult } from "./common/types";

const createOne = (Model: any) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc: object = await Model.create(req.body);

    // send responce
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const getAll = (Model: any) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Query Refactore
    let query: any = {};
    // Api Features
    function filter() {
      const queryObj = { ...req.query };
      const excludedFields = ["page", "sort", "limit", "fields"];
      excludedFields.forEach((el) => delete queryObj[el]);
      query.where = queryObj;
    }
    function sort() {
      const sortedFields = req?.query?.sort ?? [["created_at", "DESC"]];
      query.order = sortedFields;
    }
    function limitedField() {
      const selectedFields = req?.query?.excludeFields ?? null;
      query.attributes = { exclude: selectedFields };
    }
    function paginate() {
      let limit: number = Number(req.query.limit) || null;
      const page: number = Number(req.query.page) || 1;
      let offset = 0 + (page - 1) * limit;

      query.limit = limit;
      query.offset = offset;
    }

    // Call Api Features
    filter();
    limitedField();
    sort();
    paginate();

    const { count, rows } = await Model.findAndCountAll(
      query
    );

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: rows?.length,
      data: {
        data: rows,
      },
      total: count,
    });
  });

const getOne = (Model: any) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc: object = await Model.findOne({
      where: {
        id: req.params.id,
      },
    });

    // send responce
    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const updateOne = (Model: any) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Find the document by ID
    const doc: any = await Model.findOne({
      where: {
        id,
      },
    });

    // If the document doesn't exist, return an error
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    // Update the document based on the request body
    Object.assign(doc, req.body);
    await doc.save();

    // Send response
    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const deleteOne = (Model: any) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Find the document by ID
    const doc: any = await Model.findOne({
      where: {
        id,
      },
    });

    // If the document doesn't exist, return an error
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    // Remove the document
    await doc.destroy();

    // Send response
    res.status(204).json({
      status: "success",
      data: null,
    });
  });

const factory = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};
export = factory;
