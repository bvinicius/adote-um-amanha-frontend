import { EnumerableObject } from "../types/EnumerableObject";

export enum Category {
  asset,
  service,
}

function toPluralString(category: Category): string {
  return pluralCategoryStrings[category];
}

function toSingularString(category: Category): string {
  return singularCategoryStrings[category];
}

function allPluralObjects(): EnumerableObject[] {
  return allObjects(pluralCategoryStrings);
}

function allSingularObjects(): EnumerableObject[] {
  return allObjects(singularCategoryStrings);
}

function toPluralObject(category: Category): EnumerableObject {
  return toObject(category, pluralCategoryStrings);
}

function toSingularObject(category: Category): EnumerableObject {
  return toObject(category, singularCategoryStrings);
}

function toObject(
  category: Category,
  categoryMap: CategoryMap
): EnumerableObject {
  return {
    value: category,
    name: categoryMap[category],
  };
}

function allObjects(categoryMap: CategoryMap): EnumerableObject[] {
  return Object.entries(categoryMap).map(([value, name]) => ({
    value,
    name,
  }));
}

const pluralCategoryStrings: CategoryMap = {
  [Category.asset]: "Bens Materiais",
  [Category.service]: "Serviços",
};

const singularCategoryStrings: CategoryMap = {
  [Category.asset]: "Bem Material",
  [Category.service]: "Serviço",
};

type CategoryMap = {
  [Category.asset]: string;
  [Category.service]: string;
};

export default {
  toPluralString,
  toSingularString,
  allPluralObjects,
  allSingularObjects,
  toPluralObject,
  toSingularObject,
};
