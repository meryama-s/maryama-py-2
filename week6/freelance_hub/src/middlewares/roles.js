export function isAdmin(req, res, next) {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin role required' });
    next();
    }
    
    
    export function isOwnerOrAdmin(getResourceOwnerId) {
    return async function (req, res, next) {
    try {
    const ownerId = await getResourceOwnerId(req);
    if (!ownerId) return res.status(404).json({ message: 'Resource not found' });
    if (req.user.role === 'admin' || req.user.id === ownerId.toString()) return next();
    return res.status(403).json({ message: 'Forbidden' });
    } catch (err) {
    next(err);
    }
    };
    }