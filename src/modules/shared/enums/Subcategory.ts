export enum Subcategory {
  health,
  professionalization,
  education,
  food,
  others,
}

function toString(subcategory: Subcategory): string {
  return subcategoryStrings[subcategory];
}

const subcategoryStrings = {
  [Subcategory.health]: "Saúde",
  [Subcategory.professionalization]: "Profissionalização",
  [Subcategory.education]: "Educação",
  [Subcategory.food]: "Alimentação",
  [Subcategory.others]: "Outros",
};

export default {
  toString,
};
