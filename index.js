var position;

function runaway() {
    var runaway_btn = $(".no");
    var randX = Math.floor(Math.random() * (window.innerWidth - 1000));
    var randY = Math.floor(Math.random() * (window.innerHeight - 1000));

    runaway_btn.stop().animate({ left: randX + "px", top: randY + "px" });
}
$(document).ready(function () {
    var runaway_btn = $(".no");
    var yes_btn = $(".yes");
    position = runaway_btn.position();
    console.log(position);
    runaway_btn.on("mouseenter", runaway);
    runaway_btn.click(function () {
        console.log();
        $("#text").text("WILL U BE MY VALENTINE?!!!! 🥊😡");
        $(".no").remove();
        $(".yes").css({ left: "45%" });
    });

    yes_btn.click(function () {
        console.log();
        $("#text").text("see u  feb 14th 😽😽");
        $(".yes").remove();
        $(".no").remove();
    });
});
