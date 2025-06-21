const authorizeRole = (...allowedRoles) => {
    return (req, res, next) => {
        if(!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({message: "Forbidden: you are not allowed to acess this role"})
        }

        next();
    }
}

module.exports = {authorizeRole}