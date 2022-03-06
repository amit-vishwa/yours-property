const createFoot1 = () => {
    let foot = document.querySelector(".section-footer");

    foot.innerHTML=`<div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-8 section-md-t3">
        <div class="widget-a">
          <div class="w-header-a text-center">
            <a class="navbar-brand text-brand text-center" href="#"
              >Yours<span class="color-b">Property</span></a
            >
          </div>
          <div class="w-body-a"><br><br><br>
            <h3>About Us</h3><br>
            <p>The company is intended to provide a hassle free selling and buying of properties.
              It will eliminate the middle brokers, so that no extra charges needs to be paid.
              The buyer and seller can contact each other directly to sell, buy or rent their properties.</p>
          </div>
          <div class="w-body-a"><br>
            <h3>Contact Us</h3><br>
            <h6>Support Emails :</h6><p>feedback@yoursproperties.com, customersupport@yoursproperties.com</p> 
            <h6>Telephone :</h6><p> 2526 2526, 1800 0001</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4 section-md-t3">
        <br><br>
        <div class="w-body-a">
          <h3 class="text-center">Give us a feedback!</h3><br>
          <input
            type="email"
            name="email"
            class="form-control form-control-lg form-control-a"
            placeholder="Your email id"
            data-rule="minlen:1"
            data-msg="Please enter proper email id"
          />
          <div class="validation"></div><br>
          <textarea name="message" class="form-control form-control-lg form-control-a" name="message" cols="45" rows="8" data-rule="required" data-msg="Please write something for us" placeholder="Your feedback or your query"></textarea>
          <div class="validation"></div><br>
          <div class="col-sm-12">
            <button type="submit" class="form-control form-control-lg form-control-a btn-outline-success">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

createFoot1();