module SmoothXYCube(size, smooth_rad) {
    $fa = ($fa >= 12) ? 1 : $fa;
    $fs = ($fs >= 2) ? 0.4 : $fs;

    size = is_num(size) ? [size, size, size] : size;

    scalex = (smooth_rad < size[0]/2) ? 1 : size[0]/(2*smooth_rad);
    scaley = (smooth_rad < size[1]/2) ? 1 : size[1]/(2*smooth_rad);
    smoothx = smooth_rad * scalex;
    smoothy = smooth_rad * scaley;

    linear_extrude(size[2]) hull() {
        translate([smoothx, smoothy])
        scale([scalex, scaley])
        circle(r=smooth_rad);
        translate([size[0]-smoothx, smoothy])
        scale([scalex, scaley])
        circle(r=smooth_rad);
        translate([smoothx, size[1]-smoothy])
        scale([scalex, scaley])
        circle(r=smooth_rad);
        translate([size[0]-smoothx, size[1]-smoothy])
        scale([scalex, scaley])
        circle(r=smooth_rad);
    }
}

depth = 15.2;
length = 93.8;
width = 15.1;

SmoothXYCube([
    length,
    width,
    depth,
], 3.6);