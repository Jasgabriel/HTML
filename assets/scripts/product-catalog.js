(function () {
  const collections = {
    "New & Trending": {
      "New Arrivals": [
        { id: "new-cream-bomber-jacket", name: "Cream Bomber Jacket", price: 3100, type: "jacket", color: "#e8d8c7", image: "assets/images/cream-bomber-jacket.png" },
        { id: "new-mint-striped-shorts", name: "Mint Striped Shorts", price: 1250, type: "shorts", color: "#b8ded6", image: "assets/images/mint-striped-shorts.png" },
        { id: "new-white-gray-retro-sneakers", name: "White and Gray Retro Sneakers", price: 2650, type: "shoe", color: "#d6d8dd", image: "assets/images/white-gray-retro-sneakers.png" },
        { id: "new-lavender-evening-gown", name: "Lavender Galaxy Evening Gown", price: 3800, type: "dress", color: "#9b72df", image: "assets/images/lavender-galaxy-evening-gown.png" },
        { id: "new-taupe-shoulder-bag", name: "Taupe Gathered Shoulder Bag", price: 2450, type: "bag", color: "#9b8776", image: "assets/images/taupe-gathered-shoulder-bag.png" },
        { id: "new-royal-blue-tee", name: "Royal Blue Basic Tee", price: 900, type: "shirt", color: "#2460b2", image: "assets/images/royal-blue-basic-tee.png" }
      ],
      VIP: [
        { id: "vip-black-leather-jacket", name: "Black Leather Jacket", price: 4500, type: "jacket", color: "#17171a", image: "assets/images/black-leather-jacket.png" },
        { id: "vip-rose-embroidered-gown", name: "Rose Pink Embroidered Gown", price: 4200, type: "dress", color: "#df7eaa", image: "assets/images/rose-pink-embroidered-gown.png" },
        { id: "vip-espresso-oversized-tote", name: "Espresso Oversized Tote", price: 3200, type: "bag", color: "#44322f", image: "assets/images/espresso-oversized-tote.png" },
        { id: "vip-brown-double-monk-shoes", name: "Brown Double Monk Shoes", price: 3450, type: "formal-shoe", color: "#644737", image: "assets/images/brown-double-monk-formal-shoes.png" },
        { id: "vip-black-top-hat", name: "Black Top Hat", price: 1750, type: "hat", color: "#17191e", image: "assets/images/black-top-hat.png" },
        { id: "vip-black-premium-tee", name: "Black Premium Tee", price: 1100, type: "shirt", color: "#202024", image: "assets/images/black-premium-tee.png" }
      ]
    },
    Shoes: {
      Running: [
        { id: "coral-speed-running-shoes", name: "Coral Speed Running Shoes", price: 3200, type: "shoe", color: "#f04c50", image: "assets/images/coral-speed-running-shoes.png" },
        { id: "mint-trail-running-shoes", name: "Mint Trail Running Shoes", price: 3400, type: "shoe", color: "#8ab9aa", image: "assets/images/mint-trail-running-shoes.png" },
        { id: "black-stride-running-shoes", name: "Black Stride Running Shoes", price: 2850, type: "shoe", color: "#202126", image: "assets/images/black-stride-running-shoes.png" },
        { id: "mint-coral-running-shoes", name: "Mint Coral Running Shoes", price: 3300, type: "shoe", color: "#a8d4c8", image: "assets/images/mint-coral-running-shoes.png" },
        { id: "gray-mesh-running-shoes", name: "Gray Mesh Running Shoes", price: 3050, type: "shoe", color: "#9ba0a9", image: "assets/images/gray-mesh-running-shoes.png" },
        { id: "black-cushion-running-shoes", name: "Black Cushion Running Shoes", price: 3600, type: "shoe", color: "#222329", image: "assets/images/black-cushion-running-shoes.png" }
      ],
      Originals: [
        { id: "white-blue-retro-sneakers", name: "White and Blue Retro Sneakers", price: 2700, type: "shoe", color: "#e8e3d8", image: "assets/images/white-blue-retro-sneakers.png" },
        { id: "navy-canvas-originals", name: "Navy Canvas Originals", price: 2350, type: "shoe", color: "#263a5a", image: "assets/images/navy-canvas-originals.png" },
        { id: "black-court-sneakers", name: "Black Court Sneakers", price: 3150, type: "shoe", color: "#202126", image: "assets/images/black-court-sneakers.png" },
        { id: "white-green-stripe-sneakers", name: "White and Green Stripe Sneakers", price: 2850, type: "shoe", color: "#e8e8df", image: "assets/images/white-green-stripe-sneakers.png" },
        { id: "white-gray-retro-sneakers", name: "White and Gray Retro Sneakers", price: 2650, type: "shoe", color: "#d6d8dd", image: "assets/images/white-gray-retro-sneakers.png" },
        { id: "black-leather-low-tops", name: "Black Leather Low-Tops", price: 2950, type: "shoe", color: "#202126", image: "assets/images/black-leather-low-tops.png" }
      ],
      Formal: [
        { id: "black-slip-on-formal-shoes", name: "Black Slip-On Formal Shoes", price: 2850, type: "formal-shoe", color: "#252326", image: "assets/images/black-slip-on-formal-shoes.png" },
        { id: "brown-derby-formal-shoes", name: "Brown Derby Formal Shoes", price: 3100, type: "formal-shoe", color: "#76513b", image: "assets/images/brown-derby-formal-shoes.png" },
        { id: "burgundy-slip-on-formal-shoes", name: "Burgundy Slip-On Formal Shoes", price: 2950, type: "formal-shoe", color: "#4b292b", image: "assets/images/burgundy-slip-on-formal-shoes.png" },
        { id: "black-lace-up-formal-shoes", name: "Black Lace-Up Formal Shoes", price: 3200, type: "formal-shoe", color: "#252326", image: "assets/images/black-lace-up-formal-shoes.png" },
        { id: "cognac-derby-formal-shoes", name: "Cognac Derby Formal Shoes", price: 3050, type: "formal-shoe", color: "#97633e", image: "assets/images/cognac-derby-formal-shoes.png" },
        { id: "brown-double-monk-formal-shoes", name: "Brown Double Monk Shoes", price: 3450, type: "formal-shoe", color: "#644737", image: "assets/images/brown-double-monk-formal-shoes.png" }
      ]
    },
    Clothing: {
      "T-Shirts & Tank Tops": [
        { id: "red-classic-cotton-tee", name: "Red Classic Cotton Tee", price: 950, type: "shirt", color: "#c82f3a", image: "assets/images/red-classic-cotton-tee.png" },
        { id: "black-premium-tee", name: "Black Premium Tee", price: 1100, type: "shirt", color: "#202024", image: "assets/images/black-premium-tee.png" },
        { id: "white-essential-tee", name: "White Essential Tee", price: 850, type: "shirt", color: "#f0f0ee", image: "assets/images/white-essential-tee.png" },
        { id: "white-stripe-sports-tee", name: "White Stripe Sports Tee", price: 1250, type: "shirt", color: "#e9e8ec", image: "assets/images/white-stripe-sports-tee.png" },
        { id: "forest-green-cotton-tee", name: "Forest Green Cotton Tee", price: 950, type: "shirt", color: "#315b37", image: "assets/images/forest-green-cotton-tee.png" },
        { id: "royal-blue-basic-tee", name: "Royal Blue Basic Tee", price: 900, type: "shirt", color: "#2460b2", image: "assets/images/royal-blue-basic-tee.png" }
      ],
      Dress: [
        { id: "burgundy-spaghetti-strap-dress", name: "Burgundy Spaghetti-Strap Dress", price: 2450, type: "dress", color: "#79152a", image: "assets/images/burgundy-spaghetti-strap-dress.png" },
        { id: "scarlet-strapless-midi-dress", name: "Scarlet Strapless Midi Dress", price: 2250, type: "dress", color: "#ec273a", image: "assets/images/scarlet-strapless-midi-dress.png" },
        { id: "lavender-galaxy-evening-gown", name: "Lavender Galaxy Evening Gown", price: 3800, type: "dress", color: "#9b72df", image: "assets/images/lavender-galaxy-evening-gown.png" },
        { id: "rose-pink-embroidered-gown", name: "Rose Pink Embroidered Gown", price: 4200, type: "dress", color: "#df7eaa", image: "assets/images/rose-pink-embroidered-gown.png" },
        { id: "ivory-flutter-sleeve-dress", name: "Ivory Flutter-Sleeve Dress", price: 2850, type: "dress", color: "#e7e4dc", image: "assets/images/ivory-flutter-sleeve-dress.png" },
        { id: "ice-blue-ruched-mini-dress", name: "Ice Blue Ruched Mini Dress", price: 1950, type: "dress", color: "#cdeaf2", image: "assets/images/ice-blue-ruched-mini-dress.png" }
      ],
      Shorts: [
        { id: "white-athletic-shorts", name: "White Athletic Shorts", price: 950, type: "shorts", color: "#f4f4f2", image: "assets/images/white-athletic-shorts.png" },
        { id: "white-casual-shorts", name: "White Casual Shorts", price: 1100, type: "shorts", color: "#f6f5f0", image: "assets/images/white-casual-shorts.png" },
        { id: "mint-striped-shorts", name: "Mint Striped Shorts", price: 1250, type: "shorts", color: "#b8ded6", image: "assets/images/mint-striped-shorts.png" },
        { id: "charcoal-pinstripe-shorts", name: "Charcoal Pinstripe Shorts", price: 1450, type: "shorts", color: "#555462", image: "assets/images/charcoal-pinstripe-shorts.png" },
        { id: "black-sport-shorts", name: "Black Sport Shorts", price: 1050, type: "shorts", color: "#171719", image: "assets/images/black-sport-shorts.png" },
        { id: "blue-denim-shorts", name: "Blue Denim Shorts", price: 1650, type: "shorts", color: "#7194b2", image: "assets/images/blue-denim-shorts.png" }
      ],
      Pants: [
        { id: "ivory-wide-leg-trousers", name: "Ivory Wide-Leg Trousers", price: 1850, type: "pants", color: "#e9e3d3", image: "assets/images/ivory-wide-leg-trousers.png" },
        { id: "blue-straight-leg-jeans", name: "Blue Straight-Leg Jeans", price: 2100, type: "pants", color: "#6386a8", image: "assets/images/blue-straight-leg-jeans.png" },
        { id: "brown-tailored-trousers", name: "Brown Tailored Trousers", price: 2250, type: "pants", color: "#8c6b4d", image: "assets/images/brown-tailored-trousers.png" },
        { id: "pink-check-trousers", name: "Pink Check Trousers", price: 1950, type: "pants", color: "#c9a7a5", image: "assets/images/pink-check-trousers.png" },
        { id: "blue-denim-jeans", name: "Blue Denim Jeans", price: 2050, type: "pants", color: "#2d83bd", image: "assets/images/blue-denim-jeans.png" },
        { id: "khaki-cotton-trousers", name: "Khaki Cotton Trousers", price: 1850, type: "pants", color: "#b58a57", image: "assets/images/khaki-cotton-trousers.png" }
      ],
      Jackets: [
        { id: "brown-zip-bomber-jacket", name: "Brown Zip Bomber Jacket", price: 3250, type: "jacket", color: "#8b6044", image: "assets/images/brown-zip-bomber-jacket.png" },
        { id: "cream-bomber-jacket", name: "Cream Bomber Jacket", price: 3100, type: "jacket", color: "#e8d8c7", image: "assets/images/cream-bomber-jacket.png" },
        { id: "navy-puffer-jacket", name: "Navy Puffer Jacket", price: 3950, type: "jacket", color: "#303243", image: "assets/images/navy-puffer-jacket.png" },
        { id: "purple-gray-hooded-jacket", name: "Purple and Gray Hooded Jacket", price: 3600, type: "jacket", color: "#796a86", image: "assets/images/purple-gray-hooded-jacket.png" },
        { id: "black-bomber-jacket", name: "Black Bomber Jacket", price: 3400, type: "jacket", color: "#202026", image: "assets/images/black-bomber-jacket.png" },
        { id: "black-leather-jacket", name: "Black Leather Jacket", price: 4500, type: "jacket", color: "#17171a", image: "assets/images/black-leather-jacket.png" }
      ]
    },
    Accessories: {
      Bags: [
        { id: "tan-structured-handbag", name: "Tan Structured Handbag", price: 2450, type: "bag", color: "#a75f36", image: "assets/images/tan-structured-handbag.png" },
        { id: "taupe-gathered-shoulder-bag", name: "Taupe Gathered Shoulder Bag", price: 2100, type: "bag", color: "#80776b", image: "assets/images/taupe-gathered-shoulder-bag.png" },
        { id: "blush-bow-handbag", name: "Blush Bow Handbag", price: 2250, type: "bag", color: "#dfbcb9", image: "assets/images/blush-bow-handbag.png" },
        { id: "espresso-oversized-tote", name: "Espresso Oversized Tote", price: 2800, type: "bag", color: "#44322f", image: "assets/images/espresso-oversized-tote.png" },
        { id: "dark-brown-shoulder-tote", name: "Dark Brown Shoulder Tote", price: 2600, type: "bag", color: "#493b36", image: "assets/images/dark-brown-shoulder-tote.png" },
        { id: "burgundy-buckle-satchel", name: "Burgundy Buckle Satchel", price: 2950, type: "bag", color: "#531d2b", image: "assets/images/burgundy-buckle-satchel.png" }
      ],
      Hats: [
        { id: "brown-flat-cap", name: "Brown Flat Cap", price: 1000, type: "hat", color: "#8a6658", image: "assets/images/brown-flat-cap.png" },
        { id: "black-cowboy-hat", name: "Classic Black Cowboy Hat", price: 1500, type: "hat", color: "#303234", image: "assets/images/black-cowboy-hat.png" },
        { id: "black-top-hat", name: "Black Top Hat", price: 1750, type: "hat", color: "#17191e", image: "assets/images/black-top-hat.png" },
        { id: "charcoal-baseball-cap", name: "Charcoal Logo Baseball Cap", price: 850, type: "hat", color: "#55545b", image: "assets/images/charcoal-baseball-cap.png" },
        { id: "black-patterned-bucket-hat", name: "Black Patterned Bucket Hat", price: 1100, type: "hat", color: "#202326", image: "assets/images/black-patterned-bucket-hat.png" }
      ],
      Socks: [
        { id: "ivory-crew-socks", name: "Ivory Everyday Crew Socks", price: 350, type: "socks", color: "#f1eee2", image: "assets/images/ivory-crew-socks.png" },
        { id: "colorblock-pattern-socks", name: "Colorblock Pattern Socks", price: 550, type: "socks", color: "#256aa5", image: "assets/images/colorblock-pattern-socks.png" },
        { id: "black-ankle-socks", name: "Black Performance Ankle Socks", price: 450, type: "socks", color: "#17191c", image: "assets/images/black-ankle-socks.png" },
        { id: "black-stripe-crew-socks", name: "Black Stripe Crew Socks", price: 400, type: "socks", color: "#17191c", image: "assets/images/black-stripe-crew-socks.png" },
        { id: "burgundy-crew-socks", name: "Burgundy Ribbed Crew Socks", price: 450, type: "socks", color: "#4a2631", image: "assets/images/burgundy-crew-socks.png" },
        { id: "light-gray-crew-socks", name: "Light Gray Everyday Socks", price: 350, type: "socks", color: "#b8babc", image: "assets/images/light-gray-crew-socks.png" }
      ]
    },
    Sale: {
      Shoes: [
        { id: "sale-court-sneakers", name: "Court Classic Sneakers", price: 1890, type: "shoe", color: "#bc805e", originalPrice: 2700, image: "assets/images/black-court-sneakers.png" },
        { id: "sale-canvas-trainers", name: "Canvas Trainers", price: 1365, type: "shoe", color: "#778b77", originalPrice: 1950, image: "assets/images/navy-canvas-originals.png" },
        { id: "sale-retro-runners", name: "Retro Runner Sneakers", price: 1995, type: "shoe", color: "#71849a", originalPrice: 2850, image: "assets/images/white-blue-retro-sneakers.png" },
        { id: "sale-coral-speed-running-shoes", name: "Coral Speed Running Shoes", price: 2240, type: "shoe", color: "#f04c50", originalPrice: 3200, image: "assets/images/coral-speed-running-shoes.png" },
        { id: "sale-mint-trail-running-shoes", name: "Mint Trail Running Shoes", price: 2380, type: "shoe", color: "#8ab9aa", originalPrice: 3400, image: "assets/images/mint-trail-running-shoes.png" },
        { id: "sale-black-stride-running-shoes", name: "Black Stride Running Shoes", price: 1995, type: "shoe", color: "#202126", originalPrice: 2850, image: "assets/images/black-stride-running-shoes.png" }
      ],
      Clothing: [
        { id: "sale-cotton-tee", name: "Everyday Cotton Tee", price: 665, type: "shirt", color: "#71849a", originalPrice: 950, image: "assets/images/white-essential-tee.png" },
        { id: "sale-linen-shorts", name: "Easy Linen Shorts", price: 735, type: "shorts", color: "#b49d78", originalPrice: 1050, image: "assets/images/white-casual-shorts.png" },
        { id: "sale-midi-dress", name: "Pleated Midi Dress", price: 1645, type: "dress", color: "#a96972", originalPrice: 2350, image: "assets/images/ice-blue-ruched-mini-dress.png" },
        { id: "sale-black-premium-tee", name: "Black Premium Tee", price: 770, type: "shirt", color: "#202024", originalPrice: 1100, image: "assets/images/black-premium-tee.png" },
        { id: "sale-lavender-evening-gown", name: "Lavender Galaxy Evening Gown", price: 2660, type: "dress", color: "#9b72df", originalPrice: 3800, image: "assets/images/lavender-galaxy-evening-gown.png" },
        { id: "sale-brown-tailored-trousers", name: "Brown Tailored Trousers", price: 1575, type: "pants", color: "#8c6b4d", originalPrice: 2250, image: "assets/images/brown-tailored-trousers.png" }
      ],
      Accessories: [
        { id: "sale-crossbody-bag", name: "Mini Crossbody Bag", price: 1015, type: "bag", color: "#657a8c", originalPrice: 1450, image: "assets/images/blush-bow-handbag.png" },
        { id: "sale-bucket-hat", name: "Canvas Bucket Hat", price: 595, type: "hat", color: "#778b77", originalPrice: 850, image: "assets/images/black-patterned-bucket-hat.png" },
        { id: "sale-crew-socks", name: "Ribbed Crew Socks", price: 245, type: "socks", color: "#a27872", originalPrice: 350, image: "assets/images/ivory-crew-socks.png" },
        { id: "sale-brown-flat-cap", name: "Brown Flat Cap", price: 700, type: "hat", color: "#8a6658", originalPrice: 1000, image: "assets/images/brown-flat-cap.png" },
        { id: "sale-dark-brown-shoulder-tote", name: "Dark Brown Shoulder Tote", price: 1820, type: "bag", color: "#493b36", originalPrice: 2600, image: "assets/images/dark-brown-shoulder-tote.png" },
        { id: "sale-colorblock-pattern-socks", name: "Colorblock Pattern Socks", price: 385, type: "socks", color: "#256aa5", originalPrice: 550, image: "assets/images/colorblock-pattern-socks.png" }
      ]
    }
  };

  function getProductArt(type, color) {
    const shapes = {
      shirt: '<path d="m104 61 31-18h30l31 18 30 25-21 27-18-14v91H113v-91l-18 14-21-27z" fill="COLOR" stroke="#34445a" stroke-width="4" stroke-linejoin="round"/><path d="M135 44q15 25 30 0M150 73v78m-10-36h20" fill="none" stroke="#f7f2e9" stroke-width="4" stroke-linecap="round"/>',
      dress: '<path d="m125 49 12-9h26l12 9 12 38-18 14 28 88H98l28-88-18-14z" fill="COLOR" stroke="#34445a" stroke-width="4" stroke-linejoin="round"/><path d="M123 92q27 14 54 0M112 157h86" fill="none" stroke="#f7f2e9" stroke-width="4" stroke-linecap="round"/>',
      shoe: '<path d="M70 152q27-2 48-30l22-31q8-11 18-4l20 25q16 18 45 25 18 4 23 20l2 11q1 12-12 14H84q-18 0-18-14z" fill="COLOR" stroke="#34445a" stroke-width="4" stroke-linejoin="round"/><path d="M74 167h169M145 111l19 12m-29-2 17 12m-30-1 16 12" fill="none" stroke="#f7f2e9" stroke-width="5" stroke-linecap="round"/>',
      "formal-shoe": '<path d="M68 151q34 0 59-27l25-34q7-10 17-2l18 20q16 18 49 28 18 6 23 19l3 13q2 13-13 16H83q-18 0-18-15z" fill="COLOR" stroke="#34445a" stroke-width="4" stroke-linejoin="round"/><path d="M70 166q77 8 190-2M145 112l14 8m-20 1 14 8m-20 1 14 8" fill="none" stroke="#d8c7ad" stroke-width="4" stroke-linecap="round"/><path d="M80 178h165" fill="none" stroke="#34445a" stroke-width="3" stroke-linecap="round"/>',
      pants: '<path d="M105 47h92l-5 72-7 80h-37l-7-73-7 73h-37l-7-80z" fill="COLOR" stroke="#34445a" stroke-width="4" stroke-linejoin="round"/><path d="M106 68h89m-47-17v43" fill="none" stroke="#f7f2e9" stroke-width="4" stroke-linecap="round"/>',
      shorts: '<path d="M105 53h90l-5 61-6 44h-38l-7-37-7 37h-38l-6-44z" fill="COLOR" stroke="#34445a" stroke-width="4" stroke-linejoin="round"/><path d="M107 73h86m-44-18v37" fill="none" stroke="#f7f2e9" stroke-width="4" stroke-linecap="round"/>',
      jacket: '<path d="m109 61 27-18h28l27 18 27 25-20 27-18-14v91h-60v-91l-18 14-20-27z" fill="COLOR" stroke="#34445a" stroke-width="4" stroke-linejoin="round"/><path d="m136 44 14 18 14-18m-14 19v124m-10-68h20" fill="none" stroke="#f7f2e9" stroke-width="4" stroke-linecap="round"/>',
      bag: '<path d="M79 105h142l-12 91H91z" fill="COLOR" stroke="#34445a" stroke-width="4" stroke-linejoin="round"/><path d="M112 106V85a38 38 0 0 1 76 0v21" fill="none" stroke="#34445a" stroke-width="8" stroke-linecap="round"/><path d="M105 132h90m-76 27h62" fill="none" stroke="#f7f2e9" stroke-width="4" stroke-linecap="round"/>',
      hat: '<path d="M82 145q4-57 68-72 64 15 68 72l15 13q5 8-5 13-78 19-156 0-10-5-5-13z" fill="COLOR" stroke="#34445a" stroke-width="4" stroke-linejoin="round"/><path d="M85 146h130q-64 20-130 0z" fill="#755b43" stroke="#34445a" stroke-width="3"/>',
      socks: '<path d="M105 51h48v78q0 13 20 18l28 9q18 7 12 25-5 13-22 13h-79q-19 0-19-18V51zm57 0h41v80q0 11 16 17l22 9q18 8 10 24-6 13-22 13h-67z" fill="COLOR" stroke="#34445a" stroke-width="4" stroke-linejoin="round"/><path d="M106 75h46m12 0h39" fill="none" stroke="#f7f2e9" stroke-width="7" stroke-linecap="round"/>'
    };

    const shape = (shapes[type] || shapes.shirt).replaceAll("COLOR", color);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#e9edf1"/></linearGradient><filter id="shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="7" stdDeviation="7" flood-color="#30415b" flood-opacity=".15"/></filter></defs><rect width="300" height="250" rx="24" fill="url(#bg)"/><circle cx="150" cy="123" r="91" fill="#ffffff" opacity=".64"/><g filter="url(#shadow)">${shape}</g><path d="M25 219h250" stroke="#dce1e5" stroke-width="2" stroke-linecap="round"/></svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  function formatPrice(price) {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0
    }).format(price);
  }

  const colorOptions = {
    shirt: [
      { name: "Black", value: "#202024" },
      { name: "White", value: "#f0f0ee" },
      { name: "Navy", value: "#263a5a" },
      { name: "Forest green", value: "#315b37" }
    ],
    dress: [
      { name: "Burgundy", value: "#79152a" },
      { name: "Black", value: "#202024" },
      { name: "Ivory", value: "#e7e4dc" },
      { name: "Lavender", value: "#9b72df" }
    ],
    shoe: [
      { name: "White", value: "#f0f0ee" },
      { name: "Black", value: "#202024" },
      { name: "Navy", value: "#263a5a" },
      { name: "Gray", value: "#9ba0a9" }
    ],
    "formal-shoe": [
      { name: "Black", value: "#252326" },
      { name: "Brown", value: "#76513b" },
      { name: "Burgundy", value: "#4b292b" },
      { name: "Cognac", value: "#97633e" }
    ],
    shorts: [
      { name: "Black", value: "#202024" },
      { name: "White", value: "#f0f0ee" },
      { name: "Navy", value: "#263a5a" },
      { name: "Mint", value: "#b8ded6" }
    ],
    pants: [
      { name: "Navy", value: "#263a5a" },
      { name: "Black", value: "#202024" },
      { name: "Khaki", value: "#b58a57" },
      { name: "Ivory", value: "#e7e4dc" }
    ],
    jacket: [
      { name: "Black", value: "#202024" },
      { name: "Navy", value: "#303243" },
      { name: "Brown", value: "#8c6b4d" },
      { name: "Cream", value: "#e8d8c7" }
    ],
    bag: [
      { name: "Black", value: "#202024" },
      { name: "Taupe", value: "#9b8776" },
      { name: "Espresso", value: "#44322f" },
      { name: "Burgundy", value: "#531d2b" }
    ],
    hat: [
      { name: "Black", value: "#202024" },
      { name: "Brown", value: "#8a6658" },
      { name: "Charcoal", value: "#55545b" },
      { name: "Navy", value: "#263a5a" }
    ],
    socks: [
      { name: "Black", value: "#202024" },
      { name: "Ivory", value: "#f1eee2" },
      { name: "Gray", value: "#b8babc" },
      { name: "Burgundy", value: "#4a2631" }
    ]
  };
  const apparelTypes = new Set(["shirt", "dress", "shorts", "pants", "jacket"]);

  window.modaSphereGetProductOptions = (product) => ({
    sizes: product.type === "shoe" || product.type === "formal-shoe"
      ? Array.from({ length: 10 }, (_, index) => String(index + 36))
      : apparelTypes.has(product.type)
        ? ["XS", "S", "M", "L", "XL"]
        : ["One size"],
    colors: colorOptions[product.type] || colorOptions.shirt
  });

  window.modaSphereCollections = collections;

  function makeProductCard(product) {
    const card = document.createElement("article");
    card.className = "catalog-product";

    const imageFrame = document.createElement("div");
    imageFrame.className = "catalog-product-image";
    imageFrame.tabIndex = -1;
    if (product.originalPrice) {
      const badge = document.createElement("span");
      badge.className = "sale-badge";
      const discount = Math.round((1 - product.price / product.originalPrice) * 100);
      badge.textContent = `${discount}% OFF`;
      imageFrame.append(badge);
    }

    const image = document.createElement("img");
    image.src = product.image || getProductArt(product.type, product.color);
    image.alt = product.name;
    image.loading = "lazy";
    const imageLink = document.createElement("a");
    imageLink.href = `product.html?id=${encodeURIComponent(product.id)}`;
    imageLink.setAttribute("aria-label", `View ${product.name} details`);
    imageLink.append(image);
    imageFrame.append(imageLink);
    card.append(imageFrame);

    const info = document.createElement("div");
    info.className = "catalog-product-info";
    const actions = document.createElement("div");
    actions.className = "catalog-product-actions";
    const name = document.createElement("h2");
    const nameLink = document.createElement("a");
    nameLink.href = `product.html?id=${encodeURIComponent(product.id)}`;
    nameLink.textContent = product.name;
    name.append(nameLink);
    actions.append(name);
    const favorite = document.createElement("button");
    favorite.className = "favorite-toggle";
    favorite.type = "button";
    favorite.dataset.favoriteId = product.id;
    favorite.dataset.favoriteName = product.name;
    favorite.dataset.favoritePrice = String(product.price);
    favorite.dataset.favoriteImage = product.image || image.src;
    favorite.setAttribute("aria-label", `Save ${product.name} to favorites`);
    favorite.setAttribute("aria-pressed", "false");
    favorite.textContent = "♡";
    actions.append(favorite);
    info.append(actions);

    const price = document.createElement("p");
    price.className = "catalog-product-price";
    price.textContent = formatPrice(product.price);
    if (product.originalPrice) {
      const original = document.createElement("del");
      original.textContent = formatPrice(product.originalPrice);
      price.append(" ", original);
    }
    info.append(price);
    const options = window.modaSphereGetProductOptions(product);
    const availability = document.createElement("p");
    availability.className = "catalog-product-options";
    availability.textContent = `${options.sizes.length === 1 && options.sizes[0] === "One size"
      ? "One size"
      : product.type === "shoe" || product.type === "formal-shoe"
        ? `EU ${options.sizes[0]}–${options.sizes[options.sizes.length - 1]}`
        : `${options.sizes[0]}–${options.sizes[options.sizes.length - 1]}`} · ${options.colors.length} color options`;
    info.append(availability);

    const button = document.createElement("button");
    button.className = "add-to-basket";
    button.type = "button";
    button.dataset.addToBasket = "";
    button.dataset.productId = product.id;
    button.dataset.productName = product.name;
    button.dataset.productPrice = String(product.price);
    button.dataset.productImage = product.image || image.src;
    button.textContent = "Add to basket";
    info.append(button);
    card.append(info);
    return card;
  }

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const group = params.get("group");
  const products = collections[group]?.[category];

  if (!products) {
    if (document.getElementById("productGrid")) {
      window.location.replace("home.html");
    }
    return;
  }

  document.getElementById("categoryGroup").textContent = group;
  document.getElementById("categoryTitle").textContent = category;
  document.title = `ModaSphere | ${category}`;
  document.getElementById("collectionPlaceholder").hidden = true;

  const productGrid = document.getElementById("productGrid");
  productGrid.setAttribute("aria-label", `${category} collection`);
  const controls = document.getElementById("catalogControls");
  const search = document.getElementById("catalogSearch");
  const typeFilter = document.getElementById("typeFilter");
  const colorFilter = document.getElementById("colorFilter");
  const priceFilter = document.getElementById("priceFilter");
  const sortOrder = document.getElementById("sortOrder");
  const resultCount = document.getElementById("catalogResultCount");
  const emptyState = document.getElementById("catalogEmpty");
  const clearFilters = document.getElementById("clearCatalogFilters");

  function populateFilter(select, values, labelFor) {
    for (const value of values) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = labelFor(value);
      select.append(option);
    }
  }

  const types = [...new Set(products.map((product) => product.type))].sort();
  const colors = [...new Set(products.map((product) => product.color).filter(Boolean))].sort();
  const typeNames = {
    "formal-shoe": "Formal shoes",
    shoe: "Shoes",
    shorts: "Shorts",
    shirt: "Tops",
    dress: "Dresses",
    jacket: "Jackets",
    pants: "Pants",
    bag: "Bags",
    hat: "Hats",
    socks: "Socks"
  };
  const colorNames = new Map([
    ["#171719", "Black"], ["#17171a", "Black"], ["#17191c", "Black"],
    ["#17191e", "Black"], ["#202024", "Black"], ["#202026", "Black"],
    ["#202126", "Black"], ["#202329", "Black"], ["#202326", "Black"],
    ["#252326", "Black"], ["#263a5a", "Navy"], ["#303243", "Navy"],
    ["#315b37", "Green"], ["#44322f", "Brown"], ["#493b36", "Brown"],
    ["#4a2631", "Burgundy"], ["#4b292b", "Burgundy"], ["#531d2b", "Burgundy"],
    ["#55545b", "Charcoal"], ["#555462", "Charcoal"], ["#6386a8", "Blue"],
    ["#7194b2", "Blue"], ["#76513b", "Brown"], ["#80776b", "Taupe"],
    ["#8a6658", "Brown"], ["#8b6044", "Brown"], ["#8c6b4d", "Brown"],
    ["#9b72df", "Lavender"], ["#a8d4c8", "Mint"], ["#b8ded6", "Mint"],
    ["#c82f3a", "Red"], ["#cdeaf2", "Blue"], ["#df7eaa", "Pink"],
    ["#e8d8c7", "Cream"], ["#e9e3d3", "Ivory"], ["#f0f0ee", "White"],
    ["#f1eee2", "Ivory"], ["#f4f4f2", "White"], ["#f6f5f0", "White"]
  ]);
  populateFilter(typeFilter, types, (value) => typeNames[value] || "Other");
  const colorLabelCounts = new Map();
  for (const color of colors) {
    const label = colorNames.get(color.toLowerCase()) || color.toUpperCase();
    colorLabelCounts.set(label, (colorLabelCounts.get(label) || 0) + 1);
  }
  const colorLabelIndexes = new Map();
  populateFilter(colorFilter, colors, (value) => {
    const label = colorNames.get(value.toLowerCase()) || value.toUpperCase();
    if (colorLabelCounts.get(label) === 1) {
      return label;
    }
    const index = (colorLabelIndexes.get(label) || 0) + 1;
    colorLabelIndexes.set(label, index);
    return `${label} (shade ${index})`;
  });

  function renderProducts() {
    const query = search.value.trim().toLocaleLowerCase();
    const maxPrice = priceFilter.value === "" ? Infinity : Number(priceFilter.value);
    let visible = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(query) &&
      (!typeFilter.value || product.type === typeFilter.value) &&
      (!colorFilter.value || product.color === colorFilter.value) &&
      product.price <= maxPrice
    );
    if (sortOrder.value === "price-ascending") {
      visible = [...visible].sort((a, b) => a.price - b.price);
    } else if (sortOrder.value === "price-descending") {
      visible = [...visible].sort((a, b) => b.price - a.price);
    } else if (sortOrder.value === "name") {
      visible = [...visible].sort((a, b) => a.name.localeCompare(b.name));
    }
    productGrid.replaceChildren(...visible.map(makeProductCard));
    resultCount.textContent = `${visible.length} ${visible.length === 1 ? "piece" : "pieces"}`;
    emptyState.hidden = visible.length > 0;
    productGrid.hidden = visible.length === 0;
  }

  for (const control of [search, typeFilter, colorFilter, priceFilter, sortOrder]) {
    control.addEventListener("input", renderProducts);
    control.addEventListener("change", renderProducts);
  }
  clearFilters.addEventListener("click", () => {
    search.value = "";
    typeFilter.value = "";
    colorFilter.value = "";
    priceFilter.value = "";
    sortOrder.value = "";
    renderProducts();
    search.focus();
  });

  controls.hidden = false;
  renderProducts();
})();
