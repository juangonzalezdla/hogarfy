import categoryModel from '../model/category.schema.js';

const updateCategory = async (req, res) => {
  try {
    const { name, properties, parentId } = req.body;

    const categoryById = await categoryModel.findById(req.params.id);
    if (!categoryById)
      return res.status(404).json({ ok: false, message: 'Categoria no encontrada' });

    categoryById.name = name;
    categoryById.properties = properties.map(prop => ({
      name: prop.name,
      values: prop.values
    }))

    // Manejo de la relación de categoría padre
    if (parentId && parentId !== categoryById.parent) {
      // Remover de los hijos de la antigua categoría padre, si existe
      if (categoryById.parent) {
        const oldParent = await categoryModel.findById(categoryById.parent);
        if (oldParent) {
          oldParent.children.pull(categoryById._id);
          await oldParent.save();
        }
      }

      // Añadir a los hijos de la nueva categoría padre, si existe
      const newParent = await categoryModel.findById(parentId);
      if (newParent) {
        newParent.children.push(categoryById._id);
        await newParent.save();
      }
      categoryById.parent = parentId;
    }

    await categoryById.save();

    return res.status(201).json({ ok: true, message: 'Categoria actualizada' });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export default updateCategory;