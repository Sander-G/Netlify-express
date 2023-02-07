const express = require('express');
const cors = require("cors");

const serverless = require('serverless-http');


const app = express ();
app.use(cors())

const router = express.Router();

router.get('/' , (req, res) => {

    res.json({

        'hello' : 'hi!'
    });

});

router.get('/products' , (req, res) => {
    const products = [


        {
          "id":"1",
          "title":"KRUX K5 MARBIE MILLER DLK 8.5 TRUCK",
          "desc":"Get creative just like Marbie Miller on the Krux 8.50 K5 Marbie Miller DLK Skateboard Truck!",
          "category":"Parts",
          "price":"38.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663597410/SkippySkateboards/1_twpie2.jpg",
        },
        {
          "id":"2",
          "title":"INDEPENDENT 149 STAGE 11 SLAYER TRUCK",
          "desc":"Made in special collaboration with heavy metal band Slayer.",
          "category":"Parts",
          "price":"39.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663597410/SkippySkateboards/2_rk3he9.jpg",
        },
        {
          "id":"3",
          "title":"ACE TRUCKS 60 AF1 SKATEBOARD TRUCK",
          "desc":"Years in development, the ACE AF1 has a 70% increase in structural integrity, making it the strongest cast Truck on the market!",
          "category":"Parts",
          "price":"37.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663597410/SkippySkateboards/3_itvbdx.jpg",
        },
        {
          "id":"4",
          "title":"GRIND KING DISRUPTOR TRUCK 6.0",
          "desc":"Grind King is back with the Disruptor Truck to take your skating to the next level and give you the smoothest grinds!",
          "category":"Parts",
          "price":"27.50",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663597410/SkippySkateboards/4_nbvyuw.jpg",
        },
        {
          "id":"5",
          "title":"MOB SKATEBOARD GRIPTAPE 10 Inch",
          "desc":"MOB Grip tape 10 Inch - Black",
          "category":"Parts",
          "price":"8.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663596007/SkippySkateboards/5_wvjicp.jpg",
        },
        {
          "id":"6",
          "title":"POWELL-PERALTA RIPPER CHARCOAL GRIPTAPE",
          "desc":"Ripper Charcoal Checker Grip 9 Inch griptape sheet for your skateboard deck",
          "category":"Parts",
          "price":"18.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663595490/SkippySkateboards/6_d8j6na.jpg",
        },
        {
          "id":"7",
          "title":"PRIMITIVE VIANNA BLISS 8.38",
          "desc":"Surf the vaporwave with this beautiful board.",
          "category":"Reissue",
          "price":"76.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663661080/SkippySkateboards/7_b1lzkx.jpg",
        },
        {
          "id":"8",
          "title":"ALMOST YOUNESS REN & STIMPY ROOM MATE R7",
          "desc":"Has a Width of 8 and a Length of 31.7 inch. This deck is made in special collaboration with the infamous animated show, Ren & Stimpy.",
          "category":"Reissue",
          "price":"59.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663594203/SkippySkateboards/8_mcrk8m.jpg",
        },
        {
          "id":"9",
          "title":"SANTA CRUZ SCREAMING HAND 8.80",
          "desc":"The Santa Cruz Screaming Hand Skateboard Deck. One of the most famous graphics in skateboarding.",
          "category":"Reissue",
          "price":"79.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663594203/SkippySkateboards/9_knzyr4.jpg",
        },
        {
          "id":"10",
          "title":"POWELL-PERALTA FLIGHT CABALLERO FACTION",
          "desc":"Powell-Peralta FLIGHT Caballero Faction II SkateboardDeck.",
          "category":"Reissue",
          "price":"134.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663594203/SkippySkateboards/10_m8fyn7.jpg",
        },
        {
          "id":"11",
          "title":"RIPNDIP LORD NERMAL FUCKIN FUCK 8.5",
          "desc":"Width: 21.6cm / 8.5 Inch - Made in USA",
          "category":"Reissue",
          "price":"79.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663594203/SkippySkateboards/11_z1p1fa.jpg",
        },
        {
          "id":"12",
          "title":"BONES SUPER SWISS 6 BEARINGS",
          "desc":"Bones Super Swiss, 6balls Bearings, built with swiss precision in Switzerland. Bones Swiss 6 - 8mm Axle - Spacers Included",
          "category":"Parts",
          "price":"129.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663594203/SkippySkateboards/12_qwqnxg.jpg",
        },
        {
          "id":"13",
          "title":"BRONSON G3 SPEED CO BEARING",
          "desc":"Steel Bearings. Regular skateboard Bearings (no Built- in style) Size: 8 mm Pre-lubricated Removable bearing shields Including metal storage box, bearing spacers and speed rings",
          "category":"Parts",
          "price":"42.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663594203/SkippySkateboards/13_laz8gn.jpg",
        },
        {
          "id":"14",
          "title":"Powell Peralta Nicky Guerrero Mask Skateboard",
          "desc":"Hailing from Denmark, Nicky joined Powell Peralta in 1989. Graphic drawn by Sean Cliver, inspired from a book on Polynesian art.",
          "category":"Reissue",
          "price":"89.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663658494/SkippySkateboards/14_j5f98r.jpg",
        },
        {
          "id":"15",
          "title":"Powell Peralta Mike Vallely Elephant Skateboard",
          "desc":"In 1988 a young Mike Vallely was asked to join the Powell-Peralta team and quickly rose to fame as a premier street skater.",
          "category":"Reissue",
          "price":"119.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663658791/SkippySkateboards/15_teo8vp.jpg",
        },
        {
          "id":"16",
          "title":"Powell Peralta Steve Caballero Chinese Dragon",
          "desc":"Blacklight Shape 150 10.0 - including free Griptape Sheet!",
          "category":"Reissue",
          "price":"124.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663659143/SkippySkateboards/16_hwtngi.jpg",
        },
        {
          "id":"17",
          "title":"Powell Peralta Tony Hawk Black Skull Skateboard",
          "desc":"Produced to celebrate the release of Stacy Peralta's film Bones Brigade: An Autobiography.",
          "category":"Reissue",
          "price":"275.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663659771/SkippySkateboards/17_grsaza.jpg",
        },
        {
          "id":"18",
          "title":"Bones SPF Hawk T-Bones II Wheel P5 84B 60mm",
          "desc":"Tony Hawks' wheels of choice",
          "category":"Parts",
          "price":"69.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663660080/SkippySkateboards/18_pyu5ot.jpg",
        },
        {
          "id":"19",
          "title":"Spitfire Formula Four Wheels 101D 52mm",
          "desc":"The Spitfire Formula Four wheels offers high performance, are reliable and always a good investment.",
          "category":"Parts",
          "price":"59.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663660182/SkippySkateboards/19_rinjwk.jpg",
        },
        {
          "id":"20",
          "title":"Snot Wheel Co Clear Snots Wheels Blue 101A 55mm",
          "desc":"The Snot Wheel Co Clear Snots will supply you with grippyness on your ride",
          "category":"Parts",
          "price":"55.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663660622/SkippySkateboards/20_hyupln.jpg",
        },
        {
          "id":"21",
          "title":"Hazard Swirl CP Radial Wheels White 51mm",
          "desc":"Perfect balance profile of width and radius for greatest all around performance on any conditions.",
          "category":"Parts",
          "price":"34.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663660625/SkippySkateboards/21_hfbmey.jpg",
        },
        {
          "id":"22",
          "title":"HUF X Hulk Radiate Deck Green 8.25",
          "desc":"The HUF x Marvel Radiate Skate Deck is part of the Incredible Hulk 60th Anniversary capsule, in collaboration with Marvel Comics.",
          "category":"NewArrival",
          "price":"79.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1666793669/SkippySkateboards/hulkdeck_reafuw.png",
        },
        {
          "id":"23",
          "title":"Tired Seats - Blank Skateboard Deck 8.0",
          "desc":"including free Griptape Sheet!",
          "category":"NewArrival",
          "price":"76.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1666793669/SkippySkateboards/tired1_knexcl.png",
        },
        {
          "id":"24",
          "title":"Primitive Biggie Smalls Deck Multi 8.0",
          "desc":"including free Griptape Sheet!",
          "category":"NewArrival",
          "price":"79.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1666793669/SkippySkateboards/primitive_biggie_xfpjoi.png",
        },
      
        {
          "id":"25",
          "title":"Blind Jason Lee Hamburger Skateboard 1991",
          "desc":"Skated and Enjoyed - Sold as shown and described",
          "category":"Vintage",
          "price":"499.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663663123/SkippySkateboards/25_wtjgwt.jpg",
        },
        {
          "id":"26",
          "title":"World Industries Jeremy Klein Candy Bar 1991",
          "desc":"Original - Not a Re-Issue - Skated and Enjoyed - Sold as shown and described",
          "category":"Vintage",
          "price":"499.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/v1663663466/SkippySkateboards/26_cxqbtb.jpg",
        },
        {
          "id":"27",
          "title":"Vintage 1981 Powell Peralta RODNEY MULLEN Pro",
          "desc":"Fairly light use, comes with composite tracker trucks-they need new rubber. The Kryptonic CS-62 wheels have little wear.",
          "category":"Vintage",
          "price":"1485.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663663718/SkippySkateboards/27_yrbbnd.jpg",
        },
        {
          "id":"28",
          "title":"1986 Powell Peralta Tony Hawk Chicken Skull",
          "desc":"Gripped but never set up, has good amount of storage marks, scuffs, scratches etc.",
          "category":"Vintage",
          "price":"1799.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663664037/SkippySkateboards/28_zqoo3v.jpg",
        },
        {
          "id":"29",
          "title":"Vision Gullwings - Tom Groholski Skateboard",
          "desc":"Complete with Gullwing Pro III Trucks and Powell Peralta Bones Wheels",
          "category":"Vintage",
          "price":"1299.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663664206/SkippySkateboards/29_r76nlu.jpg",
        },
        {
          "id":"30",
          "title":"Santa Cruz Skateboard 1988 Rob Roskopp Target 5",
          "desc":"Used condition, awesome rare green dip, drilled for rails, nose and tail. Has some noticeable tail wear.",
          "category":"Vintage",
          "price":"473.95",
          "image":"https://res.cloudinary.com/ordinator/image/upload/c_scale,w_250/v1663664568/SkippySkateboards/30_n6dh5b.jpg",
        },
      ];

    res.json(products);

});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);