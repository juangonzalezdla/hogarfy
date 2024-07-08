import categoryModel from '../model/category.schema.js';

const updateCategory = async (req, res) => {
  try {
    const { name, properties, parentId } = req.body;

    const categoryById = await categoryModel.findById(req.params.id);
    if (!categoryById)
      return res.status(404).json({ ok: false, message: 'Categoria no encontrada' });

    categoryById.name = name;
    categoryById.properties = properties;

     // Manejo de la relación de categoría padre
     if (parentId && parentId !== category.parent) {
      // Remover de los hijos de la antigua categoría padre, si existe
      if (category.parent) {
        const oldParent = await Category.findById(category.parent);
        oldParent.children.pull(category._id);
        await oldParent.save();
      }

      // Añadir a los hijos de la nueva categoría padre, si existe
      const newParent = await Category.findById(parentId);
      if (newParent) {
        newParent.children.push(category._id);
        await newParent.save();
      }
      category.parent = parentId;
    }

    await categoryById.save();

    return res.status(201).json({ ok: true, message: 'Categoria actualizada' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: message.error });
  }
}

export default updateCategory;