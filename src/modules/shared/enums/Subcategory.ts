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

function allEntries(): EntryType[] {
  return Object.entries(subcategoryStrings).map(([value, name]) => ({
    value,
    name
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const subcategoryStrings: SubcategoryString = {
  [Subcategory.health]: "Saúde",
  [Subcategory.professionalization]: "Profissionalização",
  [Subcategory.education]: "Educação",
  [Subcategory.food]: "Alimentação",
  [Subcategory.others]: "Outros",
};

interface EntryType {
  value: string,
  name: string,
}

interface SubcategoryString {
  [Subcategory.health]: string
  [Subcategory.professionalization]: string
  [Subcategory.education]: string
  [Subcategory.food]: string
  [Subcategory.others]: string
}

export default {
  toString,
  allEntries
};
