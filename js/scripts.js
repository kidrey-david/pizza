// business logic
function Pizza(first) {
    this.name= first;
    this.additions = [];
  }
  function Addition(size, topping, crust) {
    this.sizes= size;
    this.toppings= topping;
    this.crusts= crust;
  }
  Pizza.prototype.fullOrder = function() {
    return this.name
  }
  Addition.prototype.fullAddition = function() {
    return this.sizes + ", " + this.toppings + ", " + this.crusts;
  }
  $(document).ready(function() {
  
    $("#add-addition").click(function() {
      $("#new-addition").append('<div id="new-additions">'+
                                  '<div class="form-group">'+
                                  '<label for="new-size">Size</label>'+
                                  '<input type="text" class="form-control" id="new-size">'+
                                  '</div>'+   
                                  '<div class="form-group">'+
                                  '<label for="new-toppings">Toppings</label>'+
                                  '<input type="text" class="form-control new-street">'+
                                  '</div>'+
                                  '<div class="form-group">'+
                                  '<label for="new-crust">Crust</label>'+
                                  '<input type="text" class="form-control new-city">'+
                                  '</div>'+
                                  '</div>');
    });
  
    $("form#new-type").submit(function(event) {
      event.preventDefault();
  
      var inputtedPizzaType = $("input#new-type").val();
      var newContact = new Pizza(inputtedPizzaType);
  
      $(".new-addition").each(function() {
        var inputtedSize = $(this).find("input.new-size").val();
        var inputtedToppings = $(this).find("input.new-toppings").val();
        var inputtedCrust = $(this).find("input.new-crust").val();
        var newAdditions = new Addition(inputtedSize, inputtedToppings, inputtedCrust)
        newPizzaType.additions.push(newAddition)
      });
  
      $("ul#pizza-type").append("<li><span class='pizza-type'>" + newPizzaType.fullOrder() + "</span></li>");
  
      $(".pizza-type").last().click(function() {
        $("#show-pizza-type").show();
        $("#show-pizza-type h2").text(newPizzaType.name());
        $(".pizza-type").text(newPizzaType.name);
        $("ul#additions").text("");
        newPizzaType.additions.forEach(function(addition) {
          $("ul#additions").append("<li>" + addition.fullAddition() + "</li>");
        });
      });
  
      $("input#new-type").val("");
      $("input.new-size").val("");
      $("input.new-toppings").val("");
      $("input.new-crust").val("");
  
    });
  });