interface Document {
  id: number;
}
export interface Food extends Document {
  name: string;
  price: number;
  picture: string;
  restaurantId: number;
}

export interface Restaurant extends Document {
  name: string;
  description: string;
  address: string;
  picture: string;
}

export const restaurantList: Restaurant[] = [
  {
    id: 1,
    name: 'SuperSano',
    description: 'Authentic Italian cuisine with a modern twist.',
    address: '1st Street',
    picture:
      'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy.jpg',
  },
  {
    id: 2,
    name: 'SpiceLand',
    description: 'Explore the flavors of India in every bite.',
    address: '12 Spice Avenue',
    picture:
      'https://media-cdn.tripadvisor.com/media/photo-s/13/ea/9a/80/flavors-of-india.jpg',
  },
  {
    id: 3,
    name: 'Sushi Delight',
    description: 'Savor the freshest sushi in town, crafted with precision.',
    address: '5 Ocean View Lane',
    picture:
      'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/65fd12c6-9ed1-42ea-a73f-dfb718786a17.jpg',
  },
  {
    id: 4,
    name: 'Grill Haven',
    description: 'Indulge in juicy steaks and grilled delights.',
    address: '8 Flame Street',
    picture:
      'https://res.cloudinary.com/tf-lab/image/upload/w_600,h_310,c_fill,g_auto:subject,q_auto,f_auto/restaurant/dff47bb5-51e6-4e54-9ba0-1593ebb9ee16/8aaaa483-9f47-46ad-926d-7d3cebd88407.jpg',
  },
  {
    id: 5,
    name: 'Pasta Palace',
    description: 'Italian comfort food at its finest.',
    address: '3 Noodle Avenue',
    picture:
      'https://tb-static.uber.com/prod/image-proc/processed_images/6fbe4a53d81948d01ce4e32ebde1c1b3/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg',
  },
  {
    id: 6,
    name: 'Taco Terrace',
    description: 'Satisfy your craving for authentic Mexican tacos.',
    address: '7 Guacamole Street',
    picture:
      'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/1c0c2bd7-35c4-4e49-98b9-232adc7e7d1c.jpg',
  },
  {
    id: 7,
    name: 'Burger Barn',
    description: 'Home of the juiciest burgers in town.',
    address: '10 Beefy Boulevard',
    picture:
      'https://media-cdn.tripadvisor.com/media/photo-s/13/22/e4/90/great-burgers-fries-and.jpg',
  },
  {
    id: 8,
    name: 'Seafood Shack',
    description:
      'Delight in the taste of the ocean with our fresh seafood dishes.',
    address: '15 Coastal Avenue',
    picture:
      'https://www.theburn.com/wp-content/uploads/2023/10/59938145_413947672487533_2789330741899558912_n.jpg',
  },
  {
    id: 9,
    name: 'Pizza Paradise',
    description: 'Experience a slice of heaven with our gourmet pizzas.',
    address: '2 Cheesy Lane',
    picture:
      'https://images.squarespace-cdn.com/content/v1/627b7d55f783b2625a06fd92/b92f3d4d-e29c-4a17-b9e6-3c63826b163f/220328_PALM_HEIGHTS_PEDENMUNK_PARADISE_PIZZA_1318.jpg',
  },
  {
    id: 10,
    name: 'Café Cinnamon',
    description: 'Cozy café serving aromatic coffees and delectable pastries.',
    address: '20 Java Street',
    picture:
      'https://tiendaviaggio.com.ar/cdn/shop/articles/MicrosoftTeams-image_23_2048x.jpg?v=1688757974',
  },
  {
    id: 11,
    name: 'Noodle Nook',
    description:
      'Discover the flavors of Asia with our authentic noodle dishes.',
    address: '9 Ramen Road',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 12,
    name: 'BBQ Boulevard',
    description:
      'Feast on mouthwatering barbecue specialties grilled to perfection.',
    address: '6 Smokehouse Lane',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 13,
    name: 'Mediterranean Magic',
    description:
      'Savor the flavors of the Mediterranean with our authentic dishes.',
    address: '4 Olive Street',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 14,
    name: 'Veggie Village',
    description:
      'Delight in wholesome vegetarian creations bursting with flavor.',
    address: '11 Greens Avenue',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 15,
    name: 'Deli Delight',
    description: 'Enjoy a variety of sandwiches and salads made fresh daily.',
    address: '17 Deli Lane',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 16,
    name: 'Thai Terrace',
    description:
      'Embark on a culinary journey to Thailand with our flavorful dishes.',
    address: '22 Thai Street',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 17,
    name: 'Bakery Bliss',
    description: 'Indulge your sweet tooth with our freshly baked goodies.',
    address: '13 Pastry Place',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 18,
    name: 'Gourmet Grill',
    description:
      'Experience gourmet dining with our exquisite grilled specialties.',
    address: '19 Gourmet Avenue',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 19,
    name: 'Crepe Corner',
    description:
      'Delight in French-inspired crepes filled with sweet and savory goodness.',
    address: '14 Crepe Lane',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 20,
    name: 'Rooftop Bistro',
    description:
      'Elevated dining experience with panoramic views and gourmet cuisine.',
    address: '21 Skyline Terrace',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 21,
    name: 'Farmhouse Feast',
    description:
      'Experience farm-to-table dining with locally sourced ingredients.',
    address: '25 Harvest Lane',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 22,
    name: 'Bistro Bon Appétit',
    description:
      'French-inspired bistro serving classic dishes with a modern twist.',
    address: '30 Bon Appétit Avenue',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 23,
    name: 'Taste of Spain',
    description:
      'Savor the flavors of Spain with our authentic tapas and paella.',
    address: '35 Spanish Street',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 24,
    name: 'Café Italia',
    description:
      'Transport yourself to Italy with our aromatic coffee and delicious pastries.',
    address: '40 Espresso Boulevard',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 25,
    name: 'Steakhouse Supreme',
    description: 'Indulge in premium cuts of steak cooked to perfection.',
    address: '45 Prime Rib Road',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 26,
    name: 'Oriental Oasis',
    description:
      'Journey through the flavors of the East with our diverse menu.',
    address: '50 Bamboo Lane',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 27,
    name: 'Gourmet Garden',
    description: 'Dine amidst lush greenery with our gourmet delights.',
    address: '55 Garden Avenue',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 28,
    name: 'Fusion Flavors',
    description: 'Experience a fusion of cuisines from around the world.',
    address: '60 Fusion Street',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 29,
    name: 'Coastal Cuisine',
    description: 'Savor the taste of the coast with our fresh seafood dishes.',
    address: '65 Seaside Boulevard',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
  {
    id: 30,
    name: 'Pan-Asian Palace',
    description:
      'Embark on a culinary journey through Asia with our diverse menu.',
    address: '70 Asia Avenue',
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500,454',
  },
];

export const foodList: Food[] = [
  {
    id: 1,
    restaurantId: 1,
    name: 'Kuva Roast Rib-Eye',
    price: 298,
    picture: 'https://www.yoquiero.com.ar/Img_Productos/Prod_214_1.jpg',
  },
  {
    id: 2,
    restaurantId: 2,
    name: 'Tandoori Chicken Masala',
    price: 249,
    picture:
      'https://latashaskitchen.com/wp-content/uploads/2017/10/Butter-Chicken_117086992_UCR310_500k.jpg',
  },
  {
    id: 3,
    restaurantId: 3,
    name: 'Sake Nigiri',
    price: 120,
    picture:
      'https://bentosushi.lv/image/cache/catalog/products/Sake-nigiri-800x557.jpg',
  },
  {
    id: 4,
    restaurantId: 4,
    name: 'Grilled New York Strip',
    price: 325,
    picture:
      'https://www.grillseeker.com/wp-content/uploads/2021/05/How-to-Grill-the-Perfect-New-York-Strip-Steak-Feature-Image.jpg',
  },
  {
    id: 5,
    restaurantId: 5,
    name: 'Spaghetti Carbonara',
    price: 175,
    picture:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?quality=90&resize=440,400',
  },
  {
    id: 6,
    restaurantId: 6,
    name: 'Carnitas Tacos',
    price: 95,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 7,
    restaurantId: 7,
    name: 'Classic Cheeseburger',
    price: 150,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 8,
    restaurantId: 8,
    name: 'Grilled Salmon',
    price: 210,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 9,
    restaurantId: 9,
    name: 'Margherita Pizza',
    price: 180,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 10,
    restaurantId: 10,
    name: 'Cappuccino',
    price: 50,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 11,
    restaurantId: 11,
    name: 'Shoyu Ramen',
    price: 130,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 12,
    restaurantId: 12,
    name: 'BBQ Ribs',
    price: 275,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 13,
    restaurantId: 13,
    name: 'Hummus Platter',
    price: 90,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 14,
    restaurantId: 14,
    name: 'Veggie Burger',
    price: 140,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 15,
    restaurantId: 15,
    name: 'Greek Salad',
    price: 95,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 16,
    restaurantId: 16,
    name: 'Pad Thai',
    price: 150,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 17,
    restaurantId: 17,
    name: 'Croissant',
    price: 60,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 18,
    restaurantId: 18,
    name: 'Filet Mignon',
    price: 350,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 19,
    restaurantId: 19,
    name: 'Nutella Crepe',
    price: 80,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 20,
    restaurantId: 20,
    name: 'Rooftop Cocktail',
    price: 120,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 21,
    restaurantId: 1,
    name: 'Prime Rib Sandwich',
    price: 180,
    picture:
      'https://i2.wp.com/grillnationbbq.com/wp-content/uploads/2021/05/prib.jpg?fit=1440%2C1920',
  },
  {
    id: 22,
    restaurantId: 2,
    name: 'Butter Chicken',
    price: 220,
    picture:
      'https://cravinghomecooked.com/wp-content/uploads/2020/06/butter-chicken-1.jpg',
  },
  {
    id: 23,
    restaurantId: 3,
    name: 'Dragon Roll',
    price: 160,
    picture:
      'https://foreignfork.com/wp-content/uploads/2023/05/DragonRoll-FEATURE-500x375.jpg',
  },
  {
    id: 24,
    restaurantId: 4,
    name: 'Ribeye Steak',
    price: 295,
    picture:
      'https://healthyrecipesblogs.com/wp-content/uploads/2022/09/ribeye-steak-featured.jpg',
  },
  {
    id: 25,
    restaurantId: 5,
    name: 'Lasagna',
    price: 200,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 26,
    restaurantId: 6,
    name: 'Guacamole',
    price: 70,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 27,
    restaurantId: 7,
    name: 'Bacon Cheeseburger',
    price: 180,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 28,
    restaurantId: 8,
    name: 'Lemon Garlic Salmon',
    price: 240,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 29,
    restaurantId: 9,
    name: 'Pepperoni Pizza',
    price: 190,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 30,
    restaurantId: 10,
    name: 'Espresso',
    price: 60,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 31,
    restaurantId: 11,
    name: 'Miso Soup',
    price: 45,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 32,
    restaurantId: 12,
    name: 'BBQ Chicken Wings',
    price: 180,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 33,
    restaurantId: 13,
    name: 'Baba Ganoush',
    price: 85,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 34,
    restaurantId: 14,
    name: 'Quinoa Salad',
    price: 120,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 35,
    restaurantId: 15,
    name: 'Moussaka',
    price: 150,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 36,
    restaurantId: 16,
    name: 'Spring Rolls',
    price: 80,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 37,
    restaurantId: 17,
    name: 'Pain au Chocolat',
    price: 70,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 38,
    restaurantId: 18,
    name: 'Porterhouse Steak',
    price: 375,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 39,
    restaurantId: 19,
    name: 'Ham and Cheese Crepe',
    price: 95,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 40,
    restaurantId: 20,
    name: 'Mojito',
    price: 100,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 41,
    restaurantId: 1,
    name: 'Beef Sliders',
    price: 160,
    picture:
      'https://embed.widencdn.net/img/beef/nayzvbq4e3/360x360px/cheesehead-sliders.tif?keep=c&u=7fueml',
  },
  {
    id: 42,
    restaurantId: 2,
    name: 'Palak Paneer',
    price: 210,
    picture: 'https://timmitime.com/wp-content/uploads/2020/07/img_2429.jpg',
  },
  {
    id: 43,
    restaurantId: 3,
    name: 'California Roll',
    price: 140,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/California_Sushi_%2826571101885%29.jpg/1200px-California_Sushi_%2826571101885%29.jpg',
  },
  {
    id: 44,
    restaurantId: 4,
    name: 'Filet Mignon Sandwich',
    price: 280,
    picture:
      'https://www.wellplated.com/wp-content/uploads/2015/12/Mini-Steak-Sandwich-Recipe-with-Brie-1.jpg',
  },
  {
    id: 45,
    restaurantId: 5,
    name: 'Fettuccine Alfredo',
    price: 190,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 46,
    restaurantId: 6,
    name: 'Quesadillas',
    price: 85,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 47,
    restaurantId: 7,
    name: 'Mushroom Swiss Burger',
    price: 170,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 48,
    restaurantId: 8,
    name: 'Teriyaki Glazed Salmon',
    price: 220,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 49,
    restaurantId: 9,
    name: 'Four Cheese Pizza',
    price: 200,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
  {
    id: 50,
    restaurantId: 10,
    name: 'Café Latte',
    price: 70,
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
  },
];
