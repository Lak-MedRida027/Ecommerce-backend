class ApiFeatures {
  constructor(mongooseQuery, queryString) {
    this.mongooseQuery = mongooseQuery; //* productModule.find()
    this.queryString = queryString;     //* req.query
  }

  filter() {
    const queryStringObj = { ...this.queryString };
    const excludesFields = ["page", "sort", "limit", "fields", "Keyword"]; //* must removed from queryStringObj
    excludesFields.forEach((field) => delete queryStringObj[field]);

    //* Traduire the query to string
    let queryStr = JSON.stringify(queryStringObj);

    //* add the '$' to the query fields
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.mongooseQuery = this.mongooseQuery.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.sort(sortBy);
    } else {
      this.mongooseQuery = this.mongooseQuery.sort("-createAt");
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.select(fields);
    } else {
      this.mongooseQuery = this.mongooseQuery.select("-__v");
    }
    return this;
  }

  search(nameModule) {
    if (this.queryString.Keyword) {
      let query = {};
      if (nameModule === 'Products') {
        query.$or = [
          { title: { $regex: this.queryString.Keyword, $options: 'i' } },
          { description: { $regex: this.queryString.Keyword, $options: 'i' } },
        ];
      } else  {
        query = { name: { $regex: this.queryString.Keyword, $options: 'i' } };
      }
      this.mongooseQuery = this.mongooseQuery.find(query);
    }
    return this;
  }

  paginate(documentsCount) {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 50;
    const skip = (page - 1) * limit;
    const endIndex = page * limit;

    const pagination = {};

    pagination.currentPage = page;
    pagination.limit = limit;
    pagination.numberOfPages = Math.ceil(documentsCount / limit);

    if (endIndex < documentsCount) {
      pagination.nextPage = page + 1;
    }

    if (skip > 0) {
      pagination.previousPage = page - 1;
    }

    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);
    this.paginationResult = pagination;
    return this;
  }
}

module.exports = ApiFeatures;
