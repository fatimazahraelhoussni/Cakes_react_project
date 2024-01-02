// all images imported from images directory
 import product_01_image_01 from "../images/cake1.png";
import product_01_image_02 from "../images/cake1_1.png";
import product_01_image_03 from "../images/cake1_2.png";

import product_02_image_01 from "../images/cupcake.png";
import product_02_image_02 from "../images/cupcake1.png";
import product_02_image_03 from "../images/cupcake2.png";

import product_03_image_01 from "../images/cupcake3.png";
import product_03_image_02 from "../images/cupcake4.png";
import product_03_image_03 from "../images/cupcake5.png";

import product_04_image_01 from "../images/cupcake2.png";
import product_04_image_02 from "../images/cupcake4.png";
import product_04_image_03 from "../images/cupcake1.png";

 import product_05_image_01 from "../images/cake2.png";
 import product_05_image_02 from "../images/cake2_1.png";
import product_05_image_03 from "../images/cake2_2.png";

 import product_06_image_01 from "../images/cake3.png";
import product_06_image_02 from "../images/cake3_1.png";
import product_06_image_03 from "../images/cake3_2.png";

import product_07_image_01 from "../images/cake7.png";
import product_07_image_02 from "../images/cake7_1.png";
import product_07_image_03 from "../images/cake7.png";

import product_08_image_01 from "../images/cake4.png";
import product_08_image_02 from "../images/cake4_1.png";
import product_08_image_03 from "../images/cake4_2.png";

import product_09_image_01 from "../images/cake5.png";
import product_09_image_02 from "../images/cake5_1.png";
import product_09_image_03 from "../images/cake5_2.png";

import product_10_image_01 from "../images/cake6.png";
import product_10_image_02 from "../images/cake6_1.png";
import product_10_image_03 from "../images/cake6_2.png";

import product_11_image_01 from "../images/box.png";
import product_11_image_02 from "../images/box1.png";
import product_11_image_03 from "../images/box2.png";

import product_12_image_01 from "../images/cupcake5.png";
import product_12_image_02 from "../images/cupcake4.png";
import product_12_image_03 from "../images/cupcake3.png";

import product_13_image_01 from "../images/cupcake4.png";
import product_13_image_02 from "../images/cupcake4.png";
import product_13_image_03 from "../images/cupcake3.png";

import product_14_image_01 from "../images/cupcake1.png";
import product_14_image_02 from "../images/cupcake4.png";
import product_14_image_03 from "../images/cupcake3.png";

import product_15_image_01 from "../images/cake8.png";
import product_15_image_02 from "../images/cake8_1.png";
import product_15_image_03 from "../images/cake8_2.png";

import product_16_image_01 from "../images/product_08-1.png";
import product_16_image_02 from "../images/product_08-1-1.png";
import product_16_image_03 from "../images/product_08-1-2.png";



const products = [
  {
    id: "01",
    title: "Tea Party Cake",
    price: 20.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Cake",
    desc: "A delightful Tea Party Cake that combines the flavors of rich chocolate and aromatic tea. Perfect for any celebration or simply to enjoy with a cup of tea. Serves 8-10 people.",
  },
  {
    id: "02",
    title: "Merry Santa Cupcake",
    price: 2.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Cupcake",
    desc: "Spread holiday cheer with our Merry Santa Cupcake! A delicious vanilla cupcake topped with festive decorations. Great for holiday parties and gifting.",
  },
  {
    id: "03",
    title: "Chocolate Cupcake",
    price: 2.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Cupcake",
    desc: "Indulge in the rich and decadent taste of our Chocolate Cupcake. Moist chocolate cake topped with smooth chocolate frosting. A chocolate lover's dream!",
  },
  {
    id: "04",
    title: "Red Velvet Hearts Cupcake",
    price: 4.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Cupcake",
    desc: "Celebrate love with our Red Velvet Hearts Cupcake. Adorned with heart-shaped decorations, this cupcake is perfect for special occasions and romantic gestures.",
  },
  {
    id: "05",
    title: "Rose Two Tier Cake",
    price: 20.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Cake",
    desc: "Elegance meets indulgence in our Rose Two Tier Cake. Layers of moist cake with delicate rose flavor, topped with beautifully crafted rose decorations. Serves 12-15 people.",
  },
  {
    id: "06",
    title: "Red Velvet Layer Cake",
    price: 24.0,
    image01: product_07_image_01,
    image02: product_07_image_02,
    image03: product_07_image_03,
    category: "Cake",
    desc: "Experience the luxury of our Red Velvet Layer Cake. Velvety smooth texture, rich flavor, and beautifully layered. Perfect for special occasions and celebrations. Serves 10-12 people.",
  },
  {
    id: "07",
    title: "Dark Chocolate Cake",
    price: 115.0,
    image01: product_08_image_01,
    image02: product_08_image_02,
    image03: product_08_image_03,
    category: "Cake",
    desc: "Indulge in the decadence of our Dark Chocolate Cake. Intensely rich and moist, this cake is a chocolate lover's delight. Serves 16-20 people.",
  },
  {
    id: "08",
    title: "Vanilla Cloud Cake",
    price: 110.0,
    image01: product_09_image_01,
    image02: product_09_image_02,
    image03: product_09_image_03,
    category: "Cake",
    desc: "Treat yourself to the heavenly taste of our Vanilla Cloud Cake. Light and fluffy layers of vanilla goodness, topped with a dreamy cloud-like frosting. Serves 14-18 people.",
  },
  {
    id: "09",
    title: "Luxe Salted Caramel Cake",
    price: 110.0,
    image01: product_10_image_01,
    image02: product_10_image_02,
    image03: product_10_image_03,
    category: "Cake",
    desc: "Savor the sophistication of our Luxe Salted Caramel Cake. Layers of caramel-infused cake, salted caramel filling, and a luscious caramel frosting. Perfect for those who appreciate the finer things. Serves 14-18 people.",
  },
  {
    id: "10",
    title: "La Vie En Rose Cake",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Cake",
    desc: "Embrace the romance with our La Vie En Rose Cake. Layers of rose-flavored cake, adorned with edible roses. A symbol of love and beauty. Serves 10-12 people.",
  },
  {
    id: "11",
    title: "Winter Forest Box of 6",
    price: 9.0,
    image01: product_11_image_02,
    image02: product_11_image_01,
    image03: product_11_image_03,
    category: "Box",

    desc: "Capture the enchantment of winter with our Winter Forest Box of 6. Each cupcake is a winter wonderland delight, adorned with festive decorations. Perfect for gifting and spreading seasonal joy.",  },

    {
      id: "13",
      title: "Tipsy Winter Box of 6",
      price: 9.0,
      image01: product_11_image_03,
      image02: product_11_image_02,
      image03: product_11_image_01,
      category: "Box",
      desc: "Add a touch of merriment to your celebrations with our Tipsy Winter Box of 6. Each cupcake is infused with a hint of holiday cheer, making it a delightful treat for festive gatherings.",
    },
    {
      id: "14",
      title: "Cranberry Cupcake",
      price: 35.0,
      image01: product_12_image_01,
      image02: product_12_image_02,
      image03: product_12_image_03,
      category: "Cupcake",
      desc: "Experience the tangy sweetness of our Cranberry Cupcake. A perfect balance of flavors, this cupcake is a delightful indulgence for those who love a burst of fruity goodness.",
    },
    {
      id: "15",
      title: "Chocolate Heaven Cupcake",
      price: 3.0,
      image01: product_13_image_01,
      image02: product_13_image_02,
      image03: product_13_image_03,
      category: "Cupcake",
      desc: "Immerse yourself in chocolate bliss with our Chocolate Heaven Cupcake. A heavenly combination of rich chocolate cake and velvety chocolate frosting. A must-try for chocolate enthusiasts.",
    },
    {
      id: "16",
      title: "Festive & Fun Box of 6",
      price: 9.0,
      image01: product_11_image_01,
      image02: product_11_image_02,
      image03: product_11_image_03,
      category: "Box",
      desc: "Celebrate the joy of the season with our Festive & Fun Box of 6. Each cupcake is a burst of colors and flavors, making it a delightful addition to your festive celebrations.",
    },
    {
      id: "17",
      title: "Heart To Heart Cake",
      price: 24.0,
      image01: product_15_image_01,
      image02: product_15_image_02,
      image03: product_15_image_03,
      category: "Cake",
      desc: "Express your love with our Heart To Heart Cake. Layers of love and sweetness, this cake is perfect for anniversaries, weddings, or any heartfelt celebration. Serves 10-12 people.",
    },
    {
      id: "18",
      title: "Ring O' Roses Cake",
      price: 24.0,
      image01: product_16_image_01,
      image02: product_16_image_02,
      image03: product_16_image_03,
      category: "Cake",
      desc: "Celebrate the beauty of roses with our Ring O' Roses Cake. Each layer is a canvas of intricate rose designs, making it a stunning centerpiece for your special occasions. Serves 12-15 people.",
    },
    {
      id: "19",
      title: "Holly Heaven Cupcake",
      price: 3.0,
      image01: product_14_image_01,
      image02: product_14_image_02,
      image03: product_14_image_03,
      category: "Cupcake",
      desc: "Embrace the festive spirit with our Holly Heaven Cupcake. Topped with holly decorations, this cupcake is a merry addition to your holiday celebrations. Share the joy with friends and family.",
    },

  
];

export default products;
