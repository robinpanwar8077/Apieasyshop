const Product = require("../models/products");

const getAllProducts = async (req, res) => {
    const { company, productName, sort, select } = req.query;

    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }

    if (productName) {
        queryObject.productName = { $regex: productName, $options: "i" };
    }
    if (productCategory) {
        const categoryRegex = new RegExp(`^${productCategory}$`, 'i');
        queryObject.productCategory = categoryRegex;
      }
      

    let apidata = Product.find(queryObject);


    if (sort) {
        let sortFix = sort.replace(",", " ");
        apidata = apidata.sort(sortFix);
    }

    if (select) {
        let selectortFix = select.split(",").join(" ");
        apidata = apidata.select(selectortFix);
    }

    const pageLimit = Number(req.query.pageLimit) || 10;
    const pageNo = Number(req.query.pageNo) || 1;
    const skip = (pageNo - 1) * pageLimit;

    apidata = apidata.skip(skip).limit(pageLimit);

    try {
        const myData = await apidata;
        res.status(200).json({ myData, nbHits: myData.length });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const getAllProductstest = async (req, res) => {
    res.status(200).json({ msg: "allrighttest" });
};

module.exports = { getAllProducts, getAllProductstest };
