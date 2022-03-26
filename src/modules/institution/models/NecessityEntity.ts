import { Category } from "@/modules/shared/enums/Category";
import { Subcategory } from "@/modules/shared/enums/Subcategory";

export type NecessityEntity = {
  id: number;
  title: string;
  createdDate: Date;
  category: Category;
  subcategory: Subcategory;
  url: string;
  description: string;
};
