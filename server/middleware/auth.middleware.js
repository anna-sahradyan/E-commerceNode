import jwt from "jsonwebtoken";
//
// const secret = "test";
// const auth = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(" ")[1];
//         const isCustomAuth = token.length < 500;
//         let decodedData;
//         if (token && isCustomAuth) {
//             decodedData = jwt.verify(token, secret);
//             req.userId = decodedData?.id;
//         } else {
//             decodedData = jwt.decode(token);
//             req.userId = decodedData?.sub;
//         }
//         next();
//     } catch (err) {
//         console.log(err)
//     }
// }

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated!");
    }
};
export const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not alowed to do that!");
        }
    });
};

 export const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not alowed to do that!");
        }
    });
};


