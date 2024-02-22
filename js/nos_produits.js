let menus = document.querySelector('.menus_button');
let burgers = document.querySelector('.burgers_button');
let tacos = document.querySelector('.tacos_button');
let sandwishs = document.querySelector('.sandwishs_button');
let accompagnements = document.querySelector('.accompagnements_button');
let desserts = document.querySelector('.desserts_button');

let m = document.querySelectorAll('.menus');
let b = document.querySelectorAll('.burgers');
let t = document.querySelectorAll('.tacos');
let s = document.querySelectorAll('.sandwishs');
let a = document.querySelectorAll('.accompagnements');
let d = document.querySelectorAll('.desserts');

menus.addEventListener('click', function() {
    m.forEach(function(mm) {
        mm.style.display = "block";
    });
    b.forEach(function(bb) {
        bb.style.display = "none";
    });
    t.forEach(function(tt) {
        tt.style.display = "none";
      });
    s.forEach(function(ss) {
        ss.style.display = "none";
    });
    a.forEach(function(aa) {
        aa.style.display = "none";
    });
    d.forEach(function(dd) {
        dd.style.display = "none";
    });
});

burgers.addEventListener('click', function() {
    b.forEach(function(bb) {
        bb.style.display = "block";
    });
    m.forEach(function(mm) {
        mm.style.display = "none";
    });
    t.forEach(function(tt) {
        tt.style.display = "none";
      });
    s.forEach(function(ss) {
        ss.style.display = "none";
    });
    a.forEach(function(aa) {
        aa.style.display = "none";
    });
    d.forEach(function(dd) {
        dd.style.display = "none";
    });
});

tacos.addEventListener('click', function() {
    t.forEach(function(tt) {
        tt.style.display = "block";
    });
    m.forEach(function(mm) {
        mm.style.display = "none";
    });
    b.forEach(function(bb) {
        bb.style.display = "none";
      });
    s.forEach(function(ss) {
        ss.style.display = "none";
    });
    a.forEach(function(aa) {
        aa.style.display = "none";
    });
    d.forEach(function(dd) {
        dd.style.display = "none";
    });
});

sandwishs.addEventListener('click', function() {
    s.forEach(function(ss) {
        ss.style.display = "block";
    });
    m.forEach(function(mm) {
        mm.style.display = "none";
    });
    t.forEach(function(tt) {
        tt.style.display = "none";
      });
    b.forEach(function(bb) {
        bb.style.display = "none";
    });
    a.forEach(function(aa) {
        aa.style.display = "none";
    });
    d.forEach(function(dd) {
        dd.style.display = "none";
    });
});

accompagnements.addEventListener('click', function() {
    a.forEach(function(aa) {
        aa.style.display = "block";
    });
    m.forEach(function(mm) {
        mm.style.display = "none";
    });
    t.forEach(function(tt) {
        tt.style.display = "none";
      });
    s.forEach(function(ss) {
        ss.style.display = "none";
    });
    b.forEach(function(bb) {
        bb.style.display = "none";
    });
    d.forEach(function(dd) {
        dd.style.display = "none";
    });
});

desserts.addEventListener('click', function() {
    d.forEach(function(dd) {
        dd.style.display = "block";
    });
    m.forEach(function(mm) {
        mm.style.display = "none";
    });
    t.forEach(function(tt) {
        tt.style.display = "none";
      });
    s.forEach(function(ss) {
        ss.style.display = "none";
    });
    a.forEach(function(aa) {
        aa.style.display = "none";
    });
    b.forEach(function(bb) {
        bb.style.display = "none";
    });
});
