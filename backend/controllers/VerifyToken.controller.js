import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).send({
      success: false,
      message: 'No token provided or invalid format',
    });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).send({
      success: false,
      message: 'No token provided',
    });
  }

  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return res.status(401).send({
        success: false,
        message: 'Failed to authenticate token',
      });
    }

    req.userId = decoded.userId;
    next();
  });
};

export {
  verifyToken,
};
