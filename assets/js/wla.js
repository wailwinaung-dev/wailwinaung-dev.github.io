/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });

    $(".portfolio-item").on('click', function (event) {
        let clicked_element = this.getAttribute("data");//get clicked portfolio
        let title = this.getElementsByTagName("h6")[0].innerHTML;//for modal title that is project name
        let template = portfolio_template(clicked_element);//for modal detail that is used technologies and responsibility

        $('#portfolio_modal .modal-title').text(title);
        $('#portfolio_modal .modal-body').html(template);

        $('#portfolio_modal').modal('show');
    });



    $('#portfolio_modal').on('show.bs.modal', function (event) {
        $('#portfolio_modal').css('padding', '0 15px');
    })
});

function portfolio_template(name) {
    console.log(name);
    if (name === 'zala') {
        return `
        <div class="row">
            <div class="col-lg-10">
                <img src="./assets/imgs/zala.png" class="d-block w-100" alt="Zala">
            </div>
            <div class="col-lg-2">
                
                <h5>Used Technologies</h5>
                <div>
                    <ul>
                        <li>CakePHP 3</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>Limitless Responsive web application Template</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <h5>Responsibilities</h5>
                <p> - Creating project begin to end</p>
                <h5>Company</h5>
                <p> - Sabahna Corporate Digital Solutions</p>
            </div>
        </div>
        `;
    }

    else if (name === 'royalstudio') {

        return `
        <div class="row">
            <div class="col-lg-10">
                <img src="./assets/imgs/royalstudio.jpeg" class="d-block w-100" alt="royalstudio">
            </div>
            <div class="col-lg-2">
                
                <h5>Used Technologies</h5>
                <div>
                    <ul>
                        <li>CakePHP 4, REST API</li>
                        <li>React</li>
                        <li>Redux Toolkit</li>
                        <li>Material Ui</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <h5>Responsibilities</h5>
                <p> - Creating project begin to end</p>
                <h5>Company</h5>
                <p> - Sabahna Corporate Digital Solutions</p>
            </div>
        </div>
        `
    }

    else if (name === 'sumisho') {

        return `
        <div class="row">
            <div class="col-lg-10">
                <img src="./assets/imgs/sumisho.png" class="d-block w-100" alt="sumisho">
            </div>
            <div class="col-lg-2">
                
                <h5>Used Technologies</h5>
                <div>
                    <ul>
                        <li>CakePHP 2</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <h5>Responsibilities</h5>
                <p> - Bug Fixed and new features</p>
                <h5>Company</h5>
                <p> - Brycen Myanmar Co.,Ltd</p>
            </div>
        </div>
        `
    }

    else if (name === 'mmspin') {

        return `
        <div class="row">
            <div class="col-lg-10">
                <img src="./assets/imgs/mmspin.png" class="d-block w-100" alt="mmspin">
            </div>
            <div class="col-lg-2">
                
                <h5>Used Technologies</h5>
                <div>
                    <ul>
                        <li>Laravel 9, REST API</li>
                        <li>React</li>
                        <li>Redux Toolkit</li>
                        <li>Metronic 8 Template</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <h5>Responsibilities</h5>
                <p> - Creating project begin to middle</p>
                <h5>Company</h5>
                <p> - Sabahna Corporate Digital Solutions</p>
            </div>
        </div>
        `
    }

    else if (name === 'mickhae') {

        return `
        <div class="row">
            <div class="col-lg-10">
                <img src="./assets/imgs/mickhae.png" class="d-block w-100" alt="mickhae">
            </div>
            <div class="col-lg-2">
                
                <h5>Used Technologies</h5>
                <div>
                    <ul>
                        <li>CakePHP 4, REST API</li>
                        <li>Ionic React</li>
                        <li>Redux Toolkit</li>
                        <li>Redux</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <h5>Responsibilities</h5>
                <p> - Creating project begin to end</p>
                <h5>Company</h5>
                <p> - Sabahna Corporate Digital Solutions</p>
            </div>
        </div>
        `
    }

    else if (name === 'wallet') {

        return `
        <div class="row">
            <div class="col-lg-10">
                <img src="./assets/imgs/wallet.png" class="d-block w-100" alt="wallet">
            </div>
            <div class="col-lg-2">
                
                <h5>Used Technologies</h5>
                <div>
                    <ul>
                        <li>Sail.js, REST API</li>
                        <li>AngularJs</li>
                        <li>Node-RED</li>
                        <li>Redux</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <h5>Responsibilities</h5>
                <p> - Bug Fixed and new features</p>
                <h5>Company</h5>
                <p> - Young Investment Group Co., Ltd</p>
            </div>
        </div>
        `
    }

    else if (name === 'corporate') {

        return `
        <div class="row">
            <div class="col-lg-10">
                <img src="./assets/imgs/corporate.png" class="d-block w-100" alt="corporate">
            </div>
            <div class="col-lg-2">
                
                <h5>Used Technologies</h5>
                <div>
                    <ul>
                        <li>Sail.js, REST API</li>
                        <li>ReactJs</li>
                        <li>Redux Saga</li>
                        <li>Node-RED</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <h5>Responsibilities</h5>
                <p> - Bug Fixed and new features</p>
                <h5>Company</h5>
                <p> - Young Investment Group Co., Ltd</p>
            </div>
        </div>
        `
    }

    else if (name === 'merchant') {

        return `
        <div class="row">
            <div class="col-lg-10">
                <img src="./assets/imgs/merchant.png" class="d-block w-100" alt="merchant">
            </div>
            <div class="col-lg-2">
                
                <h5>Used Technologies</h5>
                <div>
                    <ul>
                        <li>Sail.js, REST API</li>
                        <li>ReactJs</li>
                        <li>Redux Saga</li>
                        <li>Node-RED</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <h5>Responsibilities</h5>
                <p> - Bug Fixed and new features</p>
                <h5>Company</h5>
                <p> - Young Investment Group Co., Ltd</p>
            </div>
        </div>
        `
    }

    else if (name === 'subscriber') {

        return `
        <div class="row">
            <div class="col-lg-10">
                <img src="./assets/imgs/subscriber.png" class="d-block w-100" alt="subscriber">
            </div>
            <div class="col-lg-2">
                
                <h5>Used Technologies</h5>
                <div>
                    <ul>
                        <li>React Native</li>
                        <li>Redux Saga</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <h5>Responsibilities</h5>
                <p> - Bug Fixed and new features</p>
                <h5>Company</h5>
                <p> - Young Investment Group Co., Ltd</p>
                <p> - Download Links: <a href="https://play.google.com/store/apps/details?id=com.burma.unipay2" class="text-info">Google Play Store</a></p>
            </div>
        </div>
        `
    }
}

// protfolio filters
$(window).on("load", function () {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function () {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


