export enum Category {
  asset,
  service,
}

function toString(category: Category): string {
  return categoryStrings[category];
}

const categoryStrings = {
  [Category.asset]: "Bens",
  [Category.service]: "Serviços",
};

export default {
  toString,
};
