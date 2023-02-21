// Display the most popular movies, animes and tv series
var products = {
      1: {
        name: "The Office",
        desc: "8.9/10 IMDb",
        img: "Items/theoffice.jpg",
        price: 113
      },

      2: {
        name: "F.R.I.E.N.D.S",
        desc: "8.9/10 IMDb",
        img: "Items/Friends.jpg",
        price: 300
      },

      3: {
        name: "Stranger Things",
        desc: "8.7/10 IMDb",
        img: "Items/StrangerThings.jpg",
        price: 300
      },

      4: {
        name: "NARUTO (うずまきナルト)",
        desc: "8.3/10 IMDb",
        img: "Items/Naruto.jpg",
        price: 616
      },

      5: {
        name: "How I Met Your Mother",
        desc: "8.3/10 IMDb",
        img: "Items/HowIMetYourMother.jpg",
        price: 100
      },

      6: {
        name: "The Big Bang Theory",
        desc: "8.9/10 IMDb",
        img: "Items/TheBigBangTheory.jpg",
        price: 250
      },

      7: {
        name: "V for Vendetta",
        desc: "8.1/10 IMDb",
        img: "Items/VforVendetta.jpg",
        price: 15
      },

      8: {
        name: "IT Chapter: 1",
        desc: "8.9/10 IMDb",
        img: "Items/ITChapter1.jpg",
        price: 30
      },

      9: {
        name: "Mission: Impossible 5",
        desc: "8.5/10 IMDb",
        img: "Items/MissionImpossibleRogueNation.jpg",
        price: 22
      },

      10: {
        name: "The Nun",
        desc: "8.9/10 IMDb",
        img: "Items/TheNun.jpg",
        price: 16
      },

      11: {
        name: "Dragon Ball Z",
        desc: "8.1/10 IMDb",
        img: "Items/DragonBallZ.jpg",
        price: 846
      },

      12: {
        name: "The Ring",
        desc: "8.3/10 IMDb",
        img: "Items/TheRing.jpg",
        price: 20
      },

      13: {
        name: "Deadpool",
        desc: "8.9/10 IMDb",
        img: "Items/Deadpool.jpg",
        price: 28
      },

      14: {
        name: "Maleficent",
        desc: "8.5/10 IMDb",
        img: "Items/Maleficent.jpg",
        price: 10
      },

      15: {
        name: "Chilling Adventures of Sabrina",
        desc: "8.6/10 IMDb",
        img: "Items/ChillingAdventuresofSabrina.jpg",
        price: 432
      },

      16: {
        name: "Drag Me to Hell",
        desc: "8.6/10 IMDb",
        img: "Items/DragMetoHell.jpg",
        price: 15
      },

      17: {
        name: "White House Down",
        desc: "8.7/10 IMDb",
        img: "Items/WhitehouseDown.jpg",
        price: 15
      },

      18: {
        name: "Taylor Swift 1989 World Tour",
        desc: "8.5/10 IMDb",
        img: "Items/TaylorSwift1989WorldTour.jpg",
        price: 26
      },

      19: {
        name: "Avengers: Endgame",
        desc: "8.9/10 IMDb",
        img: "Items/AvengersEndgame.jpg",
        price: 30
      },

      20: {
        name: "The Conjuring 2",
        desc: "8.3/10 IMDb",
        img: "Items/TheConjuring2.jpg",
        price: 13
      },

      21: {
        name: "The Transporter Refueled",
        desc: "7.3/10 IMDb",
        img: "Items/TheTransporterRefueled.jpg",
        price: 18
      },

      22: {
        name: "The Grudge 3",
        desc: "8.3/10 IMDb",
        img: "Items/TheGrudge3.jpg",
        price: 14
      },

      23: {
        name: "Paranormal Activity 3",
        desc: "8.3/10 IMDb",
        img: "Items/ParanormalActivity3.jpg",
        price: 13
      },

      24: {
        name: "Pirates of the Caribbean 4",
        desc: "8.9/10 IMDb",
        img: "Items/PoCStrangerTides.jpg",
        price: 13
      },

      25: {
        name: "Guardians of the Galaxy Vol. 2",
        desc: "8.9/10 IMDb",
        img: "Items/GoGVol2.jpg",
        price: 16
      },

      26: {
          name: "Thor: Ragnarok",
        desc: "8.8/10 IMDb",
        img: "Items/ThorRagnarok.jpg",
        price: 19
      },

      27: {
        name: "Scary Movie 3",
        desc: "8.9/10 IMDb",
        img: "Items/ScaryMovie3.jpg",
        price: 13
      },

      28: {
        name: "Modern Family",
        desc: "8.5/10 IMDb",
        img: "Items/ModernFamily.jpg",
        price: 138
      },

      29: {
        name: "Transformers 2",
        desc: "8.9/10 IMDb",
        img: "Items/TransformersRevengeoftheFallen.jpg",
        price: 19
      },

      30: {
        name: "Mission: Impossible 4",
        desc: "7.4/10 IMDb",
        img: "Items/MissionImpossibleGhostProtocol.jpg",
        price: 17
      },

      31: {
        name: "Joker",
        desc: "8.4/10 IMDb",
        img: "Items/Joker.jpg",
        price: 29
      },

      32: {
        name: "Loki",
        desc: "7.2/10 IMDb",
        img: "Items/Loki.jpg",
        price: 175
      },

      33: {
        name: "Conjuring 3",
        desc: "7.6/10 IMDb",
        img: "Items/Conjuring3.jpg",
        price: 49
      },

      34: {
        name: "Black Widow",
        desc: "7.9/10 IMDb",
        img: "Items/BlackWidow.jpg",
        price: 45
      },

      35: {
        name: "Birds of Prey",
        desc: "7.7/10 IMDb",
        img: "Items/BirdsofPrey.jpg",
        price: 35
      },

      36: {
        name: "Enola Holmes",
        desc: "7.4/10 IMDb",
        img: "Items/EnolaHolmes.jpg",
        price: 174
      },

    };


  /* Items CSS Grid */
  window.addEventListener("load", function () {
    var container = document.getElementById("items_to_purchase"),
      item = null, part = null;
    for (let i in products) {
      item = document.createElement("div");
      item.classList.add("the_item");

      // Item Image
      part = document.createElement("img");
      part.src = products[i]['img'];
      part.classList.add("item_pic");
      part.alt = products[i]['name'];
      item.appendChild(part);

      // Item Name
      part = document.createElement("div");
      part.innerHTML = products[i]['name'];
      part.classList.add("item_name");
      item.appendChild(part);

      // Item Price
      part = document.createElement("div");
      part.innerHTML = "$" + products[i]['price'];
      part.classList.add("item_price");
      item.appendChild(part);

      // Item Description
      part = document.createElement("div");
      part.innerHTML = products[i]['desc'];
      part.classList.add("imdb_rate");
      part.classList.add("text");
      item.appendChild(part);

      // Add to cart
      part = document.createElement("input");
      part.type = "button";
      part.value = "Add to Cart";
      part.classList.add("itemadd");
      part.onclick = cart.add;
      part.dataset.id = i;
      item.appendChild(part);

      container.appendChild(item);
    }
  });

  /* Cart AKA Step 1*/
  var total;
  var cart = {
    data: null, // current shopping cart
    load: function () {
      // This function will load previous shopping cart

      cart.data = localStorage.getItem("cart");
      if (cart.data == null) {
        cart.data = {};
      } else {
        cart.data = JSON.parse(cart.data);
      }
    },







    save: function () {
      // To save the current cart data
      localStorage.setItem("cart", JSON.stringify(cart.data));
    },


    /* Functions of the Cart */

    add: function () {
      // This will add chosen items to the cart
      if (cart.data[this.dataset.id] === undefined) {
        var product = products[this.dataset.id];
        cart.data[this.dataset.id] = {
          name: product['name'],
          desc: product['desc'],
          img: product['img'],
          price: product['price'],
          quantity: 1
        };
      } else {
        cart.data[this.dataset.id]['quantity']++;
      }
      cart.save();
      cart.list();
    },

    list: function () {
      // list() : update HTML

      var container = document.getElementById("cart-monitor"),
        item = null, part = null, product = null;
      container.innerHTML = "";

      // Empty cart
      var isempty = function (obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            return false;
          }
        }
        return true;
      };

      if (isempty(cart.data)) {
        item = document.createElement("div");
        item.innerHTML = "Step 1: Add something you like...";
        item.style.fontSize = "30px";
        item.style.fontWeight = "bold";
        item.style.color = "white";
        item.style.position = "center";
        item.style.top = "100px";
        item.style.left = "85%";
        container.appendChild(item);
      }

      // Not empty
      else {
        // List items
        var subtotal = 0;
        total = 0;
        for (var i in cart.data) {
          item = document.createElement("div");
          item.classList.add("cartitem");
          product = cart.data[i];

          // Quantity
          part = document.createElement("input");
          part.type = "number";
          part.value = product['quantity'];
          part.dataset.id = i;
          part.classList.add("cartquantity");
          part.addEventListener("change", cart.change);
          item.appendChild(part);



          // Name
          part = document.createElement("span");
          part.innerHTML = product['name'];
          part.classList.add("cart_name");
          item.appendChild(part);

          // Subtotal
          subtotal = product['quantity'] * product['price'];
          total += subtotal;

          container.appendChild(item);
        }

        // EMPTY BUTTONS
        item = document.createElement("input");
        item.type = "button";
        item.value = "Empty";
        item.addEventListener("click", cart.reset);
        item.classList.add("cartempty");
        container.appendChild(item);

        // CHECKOUT BUTTONS
        item = document.createElement("input");
        item.type = "button";
        item.value = "Checkout - " + "$" + total;
        item.addEventListener("click", cart.checkout);
        item.classList.add("cartcheckout");
        container.appendChild(item);
      }
    },

    change: function () {
      // change() : change quantity
      if (this.value === 0) {
        delete cart.data[this.dataset.id];
      } else {
        cart.data[this.dataset.id]['quantity'] = this.value;
      }
      cart.save();
      cart.list();
    },

    // To empty the cart.
    reset: function () {
      if (confirm("Do you want to cancel your choices?")) {
        cart.data = {};
        cart.save();
        cart.list();
      }
    },

    checkout: function () {
      // checkout() : checkout the cart
      document.getElementById('the_form').style.display = 'block';
    }
  };

  // Load previous cart and update HTML on load
  window.addEventListener("load", function () {
    cart.load();
    cart.list();
  });



  /*JavaScript Validation*/
  function confirmation() {
    var name = document.getElementById("myForm").elements[0].value;
    var address = document.getElementById("myForm").elements[1].value;
    var email = document.getElementById("myForm").elements[2].value;
    var tel = document.getElementById("myForm").elements[3].value;
    if (name === "" || address === "" || email === "" || tel === "") {
      alert("To Complete Your Purchase, Please Fill Every Required Field.")
    } else {
      var c = confirm(name + ", your total bill is $" + total + "\n" +
        "Your Address: " + address +
        "\nYour Email: " + email +
        "\nYour Tel: " + tel +
        "\nHappy Flixing!");

      if (c === true) {
        document.getElementById("the_form").style.display = "none";
        cart.data = {};
        cart.save();
        cart.list();
      }
    }
  }
