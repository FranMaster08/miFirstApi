const fs = require("fs");
const path = require("path");

const HomeController = {
  getAllUsers: (req, res, next) => {
    const { saludokaren } = req.headers;
    const data = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./user.json"), { encoding: "utf8" })
    );
    if (saludokaren) {
      res.status(200).json({
        success: true,
        data,
      });
    } else {
      res.status(400).json({
        success: false,
        data: null,
      });
    }
  },
  createUser: (req, res, next) => {
    const { saludokaren } = req.headers;

    if (saludokaren) {
   
      const data = JSON.parse(
        fs.readFileSync(path.join(__dirname, "./user.json"), {
          encoding: "utf8",
        })
      );
      const body = req.body;
      if (body) {
        data.push(body);
        fs.writeFileSync(
          path.join(__dirname, "./user.json"),
          JSON.stringify(data),
          { encoding: "utf8" }
        );
        return res.status(200).json({
          success: true,
          data: body,
        });
      }

      return res.status(400).json({
        success: false,
        data: null,
      });
    } else {
      res.status(400).json({
        success: false,
        data: null,
      });
    }
  },
};

module.exports = HomeController;
