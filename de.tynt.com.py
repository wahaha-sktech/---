(function() {
    var i, d = document, p = "unsafe-url", e, s, t, u = ["https://ps.eyeota.net/pixel?pid=c9gd671&t=gif&uid=OY%2Fj22byyt2n%2BsRSUsFT3Q%3D%3D&us_privacy=&33random=1744894739741.1&cat=33across", "https://ps.eyeota.net/pixel?pid=c9gd671&t=gif&uid=OY%2Fj22byyt2n%2BsRSUsFT3Q%3D%3D&us_privacy=&33random=1744894739741.2&cat=33across"];
    try {
        for (i = 0; i < u.length; ++i) {
            t = u[i].charAt(0);
            if (t == "1") {
                e = d.createElement("iframe");
                if (e) {
                    s = e.style;
                    s.position = "absolute";
                    s.visibility = s.overflow = "hidden";
                    s.left = s.bottom = s.width = s.height = "1px";
                    e.referrerPolicy = p;
                    d.body.appendChild(e);
                    e.src = u[i].substr(1);
                }
            } else if (t == "3") {
                e = d.createElement("script");
                if (e) {
                    e.referrerPolicy = p;
                    d.body.appendChild(e);
                    e.src = u[i].substr(1);
                }
            } else {
                e = new Image();
                if (e) {
                    e.referrerPolicy = p;
                    e.src = u[i];
                }
            }
        }
    } catch (x) {}
    ;
}
)();
