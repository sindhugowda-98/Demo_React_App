export interface Product {
  id: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

const productCatalog: Product[] = [
  {
    id: "evaporated-milk",
    name: "Evaporated Milk",
    category: "Dairy · Concentrated",
    summary: "Smooth, concentrated milk for everyday drinks and cooking.",
    description: "Evaporated milk is made by removing part of the water from milk, creating a smooth, concentrated dairy product. Its creamy taste makes it a versatile choice for beverages, sauces, soups, and baking.",
    image: "/images/evaporated-milk.jpg",
    imageAlt: "Fresh milk in a glass with dairy ingredients",
    highlights: ["Smooth, creamy milk flavour", "Useful in beverages and recipes", "Versatile pantry ingredient"],
  },
  {
    id: "cream",
    name: "Cream",
    category: "Dairy · Cream",
    summary: "A rich dairy ingredient for desserts, sauces, and savoury dishes.",
    description: "Cream brings a rich texture and rounded dairy flavour to cooking and baking. It can be used in desserts, sauces, soups, and other recipes where a creamy finish is desired.",
    image: "/images/cream.jpg",
    imageAlt: "Creamy dessert topped with fresh berries",
    highlights: ["Rich dairy character", "Suitable for sweet and savoury recipes", "A versatile kitchen ingredient"],
  },
  {
    id: "condensed-milk",
    name: "Condensed Milk",
    category: "Dairy · Sweetened",
    summary: "Thick, sweetened milk for desserts, baking, and beverages.",
    description: "Condensed milk is concentrated milk with sugar added, giving it a thick consistency and sweet flavour. It is commonly used in desserts, baking, confectionery, and specialty drinks.",
    image: "/images/condensed-milk.jpg",
    imageAlt: "A glass of milk served with a fresh dairy breakfast",
    highlights: ["Thick, sweet dairy flavour", "Popular in desserts and baking", "Adds body to drinks and recipes"],
  },
  {
    id: "flavoured-milk",
    name: "Flavoured Milk",
    category: "Dairy · Ready to enjoy",
    summary: "Milk blended with flavour for a convenient, enjoyable drink.",
    description: "Flavoured milk combines milk with flavour ingredients for a ready-to-enjoy beverage. It can be served chilled as a refreshing drink or enjoyed as part of a snack.",
    image: "/images/flavoured-milk.jpg",
    imageAlt: "A chilled fruit and milk smoothie in a glass",
    highlights: ["Ready-to-enjoy beverage", "Serve chilled", "Available in a range of flavour styles"],
  },
  {
    id: "frozen-dessert",
    name: "Frozen Dessert",
    category: "Frozen · Dessert",
    summary: "A chilled dessert with a smooth texture and inviting flavours.",
    description: "Frozen dessert is served chilled or frozen and can be developed in a variety of flavours and formats. It offers a sweet treat for sharing, serving after meals, or enjoying as a snack.",
    image: "/images/frozen-dessert.jpg",
    imageAlt: "A colourful frozen dessert topped with fruit",
    highlights: ["Serve frozen", "A variety of flavour possibilities", "Enjoy as a dessert or snack"],
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    category: "Frozen · Dairy dessert",
    summary: "A classic frozen dairy treat made for scooping and sharing.",
    description: "Ice cream is a familiar frozen dairy dessert enjoyed on its own or alongside other treats. It can be served in cones, cups, or as part of desserts, with a variety of flavour options.",
    image: "/images/ice-cream.jpg",
    imageAlt: "Scoops of ice cream in colourful cones",
    highlights: ["Classic frozen dairy treat", "Serve in cones, cups, or desserts", "A range of flavour options"],
  },
];

/** Central product catalogue service; replace with an API call when available. */
export function getProducts(): Product[] {
  return productCatalog;
}
