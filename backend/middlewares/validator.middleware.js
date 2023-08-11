import { ZodError } from 'zod';

const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).send(
        error.issues.map((issue) => ({ 
          path: issue.path,
          message: issue.message 
        }))
      );
    }
  }
};

export default validateSchema;