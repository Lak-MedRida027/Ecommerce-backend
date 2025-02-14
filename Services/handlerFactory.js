const asyncHandler = require("express-async-handler");
const ApiFeatures = require("../utils/ApiFeatures");
const ApiError = require("../utils/apiError");

exports.deleteOne = (Module) =>
  asyncHandler(async (req, res, next) => {
    //* delete document
    const document = await Module.findByIdAndDelete(req.params.id);
    if (!document)
      return next(new ApiError(`No document for this id: ${req.params.id}`, 404));

    //* Trigger "deleteOne" event when we update the document 
    await document.deleteOne();
    res.status(200).send({ message: "document deleted" });
  });

exports.updateOne = (Module) =>
  asyncHandler(async (req, res, next) => {
    //* update document
    const document = await Module.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!document)
      return next(
        new ApiError(`No document for this id: ${req.params.id}`, 404)
      );

    //* Trigger "save" event when we update the document 
    document.save()
    res.status(200).json({ data: document });
  });

exports.createOne = (Module) =>
  asyncHandler(async (req, res) => {
    //* create newDocument
    const newDocument = await Module.create(req.body);
    res.status(201).json({ data: newDocument });
  });

exports.getOne = (Module, populationOpt) =>
  asyncHandler(async (req, res, next) => {
    //* build query
    let query = Module.findById(req.params.id);
    if(populationOpt){
      query = query.populate(populationOpt)
    }

    //* execute the query
    const document = await query
    if (!document)
      return next(
        new ApiError(`No document for this id: ${req.params.id}`, 404)
      );
    res.status(200).json({ data: document });
  });

exports.getAll = (Module ,moduleName = '') => asyncHandler(async (req, res) => {
  let filter = {};
  if(req.filterObj){
    filter = req.filterObj;
  }
  //* Build query
  const documentsCount = await Module.countDocuments();
  const apiFeatures = new ApiFeatures(Module.find(filter), req.query)
    .filter()
    .paginate(documentsCount)
    .sort()
    .limitFields()
    .search(moduleName);

  //* Execute query
  const {mongooseQuery ,paginationResult} = apiFeatures;  
  const documents = await mongooseQuery;
  res.status(200).json({ resaults: documents.length, paginationResult, data: documents });
});