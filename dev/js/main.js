var currentTela = 0;
var paths = {
	path0: "m113.59465,224.174759l9.198219,-47.85437l27.594658,-52.485428l51.247208,-26.242729l43.363037,-38.592232l52.561249,1.543686c0,0 34.164795,21.611656 36.792847,21.611656c2.628082,0 14.454346,16.980583 14.454346,16.980583c0,0 15.768372,30.873779 15.768372,30.873779c0,0 56.503357,29.330109 56.503357,29.330109c0,0 26.280609,-26.242722 26.280609,-26.242722c0,0 44.677063,-54.029129 44.677063,-54.029129c0,0 49.933197,-9.262138 49.933197,-9.262138c0,0 35.478821,18.524277 35.478821,18.524277c0,0 61.75946,52.485435 61.75946,52.485435c0,0 27.594666,46.310684 27.594666,46.310684c0,0 9.198242,55.572815 9.198242,55.572815c0,0 -23.652588,32.41748 -23.652588,32.41748c0,0 -42.049011,46.310669 -42.049011,46.310669c0,0 -60.445435,0 -60.445435,0c0,0 -40.734924,-18.524261 -40.734924,-18.524261c0,0 -30.222748,-26.242737 -30.222748,-26.242737c0,0 -34.164795,9.262146 -34.164795,9.262146c0,0 -31.536743,50.941742 -31.536743,52.485443c0,1.543701 -48.619171,30.873779 -48.619171,30.873779c0,0 -35.478821,-3.087372 -35.478821,-3.087372c0,0 -73.585754,-9.262146 -73.585754,-9.262146c0,0 -61.75946,20.067963 -61.75946,20.067963c0,0 -45.991089,-27.786407 -45.991089,-27.786407c0,0 -61.75946,-72.553406 -61.75946,-72.553406c0,0 27.59465,-52.485428 27.59465,-52.485428z",
	path1: "m45,244c-4,-3 1,0 1,-3c0,-3 0,-6 0,-9c0,-1 0.24744,-4.010223 0,-7c-0.501709,-6.062042 -2,-14 -2,-19c0,-3 -0.640728,-5.051651 0,-9c0.506542,-3.121445 1,-6 1,-7c0,-3 1,-5 1,-15c0,-1 1,-9 1,-12c0,-7 0.499031,-7.953323 1,-16c0.062138,-0.998062 1,-3 1,-9c0,-2 0.493458,-2.878555 1,-6c0.320366,-1.974182 0,-3 0,-7c0,-1 0,-10 0,-11c0,-6 1.496227,-7.907784 2,-12c0.244366,-1.985016 -0.229752,-3.026749 0,-4c1.027485,-4.352501 1.789848,-6.078438 3,-9c1.711411,-4.131714 4.415897,-6.761078 6,-10c2.778702,-5.681442 3.562866,-7.630341 8,-15c1.153381,-1.915649 4.173096,-2.85273 5,-4c1.307449,-1.813992 3.004868,-1.901463 4,-2c5.074203,-0.502445 6,-1 7,-1c1,0 3,0 4,0c5,0 8.211678,0.714119 11,3c1.093674,0.896595 3.769508,3.390995 6,7c1.662506,2.689995 5.458801,7.693436 6,9c1.530731,3.695518 0.871811,8.089531 3,11c3.779465,5.168724 5.95517,6.549156 7,10c0.869354,2.871277 1.981628,4.712006 3,10c0.18911,0.981956 -1.269623,3.693626 3,10c1.585693,2.342125 5,11 5,14c0,1 0.498291,5.937958 1,12c0.164963,1.993179 0,4 0,5c0,5 2,8 2,11c0,2 0,4 0,7c0,1 0.497559,1.925797 1,7c0.098541,0.995132 0.498291,5.937958 1,12c0.742325,8.96933 0,13 0,15c0,1 0,4 0,10c0,2 1,4 1,6c0,3 0,6 0,9c0,2 1.458801,4.693436 2,6c0.38269,0.923874 1.993988,7.83551 3,17c0.327347,2.982086 0.360794,6.215118 3,13c1.621246,4.167908 3.273453,6.922302 4,10c1.624603,6.881897 2,9 2,10c0,1 0.186005,1.692535 2,3c1.147263,0.826904 2.186005,2.692535 4,4c1.147263,0.826904 3.076126,1.61731 4,2c1.306564,0.541199 3,2 4,2c1,0 5.585785,-0.585785 7,-2c1.414215,-1.414215 4.61731,-2.076111 5,-3c1.082397,-2.613129 3.513,-2.593994 5,-5c1.662506,-2.690002 2.877655,-6.06601 4,-8c1.809723,-3.118469 3.692551,-7.186005 5,-9c1.653809,-2.294525 2.493454,-3.878571 3,-7c0.160187,-0.987091 -0.430496,-3.132996 1,-7c0.775803,-2.097168 0.633453,-3.022476 1,-6c0.503769,-4.092209 2,-8 3,-11c1,-3 1.499039,-5.953323 2,-14c0.186417,-2.994202 0,-17 0,-18c0,-9 -0.247437,-12.010223 0,-15c0.501709,-6.062042 1.519455,-8.038742 2,-11c0.506546,-3.121445 0.850555,-4.003723 1,-7c0.500626,-10.037399 2.126205,-10.941727 3,-13c7.044739,-16.59433 7.486252,-22.823746 8,-25c0.689255,-2.919754 1.337494,-6.310005 3,-9c0.7435,-1.203003 3.2565,-5.796997 4,-7c1.662506,-2.689995 3.088638,-5.941841 7,-12c5.117065,-7.925629 8.186005,-11.692551 10,-13c3.441803,-2.480713 3.692551,-4.186005 5,-6c0.826904,-1.14727 1.931625,-2.073402 3,-3c3.777267,-3.276009 10.076111,-5.617317 11,-6c1.306549,-0.541199 3.693451,-3.458801 5,-4c0.923889,-0.382683 2.456726,-2.296097 8,0c1.306549,0.541199 4.552185,5.257248 7,9c4.274933,6.536438 6.144287,6.934143 7,9c1.210144,2.921562 4.496216,9.907784 5,14c0.366547,2.977524 0.300476,5.916061 1,9c1.783447,7.862526 1,11 1,16c0,1 -0.430481,7.132996 1,11c0.775787,2.097168 0.679626,4.025818 1,6c0.506531,3.121445 1,6 1,8c0,3 0,6 0,7c0,1 0.839813,3.012909 1,4c0.506531,3.121445 0.234619,5.152237 1,7c0.541199,1.306564 1.493469,1.878555 2,5c0.160187,0.987091 0.839813,4.012909 1,5c0.506531,3.121445 3.458801,5.693436 4,7c0.38269,0.923874 1.303223,2.769348 2,4c2.031464,3.587921 2.186005,4.692551 4,6c1.147278,0.826904 0.830566,1.622482 2,0c1.84903,-2.565369 8.309998,-3.337494 11,-5c1.203003,-0.7435 4.4505,-3.450485 7,-6c2.5495,-2.549515 3,-4 4,-8c1,-4 2,-6 2,-8c0,-3 1.486267,-4.823746 2,-7c0.229767,-0.973251 0.33197,-4.229355 2,-8c2.917267,-6.59465 9.130646,-13.128723 10,-16c1.04483,-3.450851 3.337494,-8.310013 5,-11c1.487,-2.406006 3,-5 4,-6c1,-1 0.878693,-3.878677 3,-6c0.707092,-0.707108 2.303223,-2.769348 3,-4c2.031464,-3.587929 2.186005,-4.692551 4,-6c1.147278,-0.826904 1.823761,-3.486259 4,-4c0.973236,-0.229752 2.292908,-1.292892 3,-2c0.707092,-0.707108 3.026764,-0.229752 4,0c6.528748,1.541229 8.261078,3.594231 10,5c4.979492,4.025497 6.337494,8.310005 8,11c0.7435,1.203003 1.173096,1.85273 2,3c1.307465,1.813995 1.337494,6.310005 3,9c0.7435,1.203003 1.458801,1.693436 2,3c0.765381,1.847763 1,5 3,7c1,1 1.61731,2.076126 2,3c0.541199,1.306564 2.304474,0.469269 6,2c1.306549,0.541199 2,1 3,1c2,0 3,0 4,0c2,0 3.103394,-1.906326 4,-3c2.285889,-2.78833 2.385101,-4.372009 5,-8c0.826904,-1.147263 3,-2 3,-4c0,-1 0.912323,-4.03067 2,-7c1.852264,-5.056587 4.981628,-10.712006 6,-16c0.189117,-0.981956 0.679626,-4.025826 1,-6c0.506531,-3.121445 1.61731,-6.076118 2,-7c0.541199,-1.306564 2,-3 5,-6c4,-4 5,-5 7,-7c1,-1 3.003418,-1.917519 4,-2c6.062042,-0.501709 7,-1 8,-1c4,0 5,1 6,1c4,0 3.587982,3.500908 12,10c3.538971,2.734184 4.173096,2.85273 5,4c1.307465,1.813995 1.824432,2.097885 3,4c2.628662,4.253258 10.173096,19.85273 11,21c3.922363,5.441978 5,7 6,8c4,4 5.012939,3.839813 6,4c3.12146,0.506546 5,1 6,1c2,0 6.080261,0.689255 9,0c4.352478,-1.027481 9,-4 13,-6c4,-2 2.915649,-6.76104 15,-11c0.943604,-0.331009 2.461975,-1.463226 13,-11c1.048584,-0.948944 5.617188,-4.126862 13,-10c2.21344,-1.760841 3.041321,-2.847229 7,-4c3.036194,-0.884132 4.026733,-2.770248 5,-3c2.17627,-0.513741 4.87854,-2.493462 8,-3c0.987061,-0.160179 3.69342,-1.458801 5,-2c4.619385,-1.913414 9.057922,-1.402168 26,0c6.062012,0.501709 9.005127,1.82444 12,2c17.087891,1.001717 32.439392,8.171936 33,9c3.019104,4.459282 7.682922,3.879044 17,13c5.152954,5.044495 6,8 7,11c1,3 7.486267,14.823746 8,17c1.37854,5.839493 0.496216,6.907791 1,11c0.244385,1.985016 0,5 0,7c0,2 0,3 0,9c0,1 -0.714111,4.21167 -3,7c-0.896606,1.093674 -1.733093,5.326187 -9,11c-1.762451,1.376099 -8.077026,1.782257 -14,4c-12.174561,4.558517 -15.992065,5.082672 -26,6c-11.991333,1.099136 -15.012573,0.645554 -20,1c-7.053284,0.501266 -11.000977,1.937592 -13,2c-16.023438,0.500244 -22,1 -35,1c-3,0 -7,0 -15,0c-9,0 -11,0 -20,0c-3,0 -5.937988,-0.498291 -12,-1c-2.989807,-0.247437 -4,0 -23,0c-6,0 -19.001648,0.900162 -22,1c-15.024963,0.500275 -18.968811,1.499573 -31,2c-5.994812,0.249359 -9.077484,-0.96109 -15,0c-3.121429,0.506546 -6.096619,0.533737 -12,2c-3.069031,0.762268 -8.175323,0.301712 -26,3c-4.07666,0.617126 -9.331329,0.612991 -33,7c-3.05307,0.823868 -5.013794,1.959564 -8,3c-11.05304,3.851028 -11.405334,6.082718 -18,9c-3.77063,1.668015 -6.359344,3.480698 -8,5c-8.55661,7.923676 -6,11 -6,13c0,1 0.186005,4.692551 2,6c1.147278,0.826904 3.15097,1.434631 5,4c0.584717,0.811249 2.29184,-0.101669 8,2c10.943695,4.029327 14,6 20,6c6,0 17,1 23,1c14,0 22.030823,0.221588 30,-1c11.05127,-1.694031 16,-3 21,-4c15,-3 17.717041,-5.991104 39,-8c3.9823,-0.375885 31.006226,-1.750931 36,-2c10.037415,-0.500626 21.038757,-1.519455 24,-2c3.12146,-0.506546 10,-1 13,-1c4,0 11.064575,-0.199081 16,-1c3.12146,-0.506546 19,-3 20,-3c10,0 13,0 15,0c6,0 9,0 11,0c4,0 7.022461,-0.366547 10,0c4.092224,0.503769 5.012939,0.839813 6,1c6.242859,1.013077 6.699158,3.486603 18,5c1.9823,0.265472 5.056824,0.946228 6,2c8.540771,9.542297 10.458801,10.693436 11,12c0.765381,1.847763 1,4 1,9c0,5 0,12 0,13c0,1 0.68927,5.080261 0,8c-0.513733,2.176239 -2.23053,2.632904 -4,4c-8.411987,6.499084 -8.984985,10.282532 -15,14c-2.690002,1.662506 -25.07843,11.789856 -28,13c-4.131714,1.711426 -18.00708,3.938385 -27,5c-8.006653,0.94519 -11.029358,0.252258 -46,2c-14.018188,0.700592 -26.994568,2.5 -96,2c-2.999908,-0.021729 -6.693451,0.458801 -8,1c-1.847748,0.765381 -14,1 -17,1c-16,0 -24,0 -47,0c-5,0 -23,0 -31,0c-11,0 -16,0 -19,0c-5,0 -7,0 -11,0c-15,0 -16.980438,-0.14801 -24,-1c-9.976654,-1.210907 -13,-1 -19,-1c-5,0 -29,0 -31,0c-3,0 -8,0 -9,0c-2,0 -13,0 -17,0c-7,0 -9.946716,0.498749 -17,1c-5.984909,0.425323 -16,1 -19,1c-4,0 -11,0 -14,0c-3,0 -10,0 -28,0c-1,0 -3,0 -4,0c-3,0 -4,0 -8,0c-2,0 -5.823746,-0.486267 -8,-1c-0.973251,-0.229767 -4.026749,-0.770233 -5,-1c-2.176254,-0.513733 -6,-1 -12,-3c-9,-3 -11.891685,-4.29718 -28,-10c-2.98098,-1.055359 -6.026749,-1.770233 -7,-2c-2.176254,-0.513733 -5.198006,-1.632965 -11,-5c-6.236954,-3.619446 -11.818581,-8.286499 -18,-12c-12.656532,-7.603424 -15.372013,-9.385101 -19,-12c-1.14727,-0.826904 -5.186008,-3.692535 -7,-5c-1.14727,-0.826904 -3.458803,-1.693451 -4,-3c-0.382683,-0.923889 -1,-6 -1,-7c0,-2 1,-5 2,-6c1,-1 4.418861,-3.418854 6,-5c1.581139,-1.581146 2,-3 4,-4l6,-7l1,-1l1,-1z",
	path2: "m180,230c0,-116.022102 93.977905,-210 210,-210c116.022095,0 210,93.977898 210,210c0,116.022095 -93.977905,210 -210,210c-116.022095,0 -210,-93.977905 -210,-210z",
	path3: "m391,18c1,0 3,0 4,0c2,0 3,0 4,0c1,0 2.42334,-0.571758 8,4c1.093658,0.896595 1.303223,2.769352 2,4c2.031464,3.587927 2.61731,5.07612 3,6c0.541199,1.306564 0.917511,2.003407 1,3c0.501709,6.062038 2,7 2,8c0,1 0.486267,1.82375 1,4c0.229767,0.973248 1,2 1,3c0,2 1,5 2,8c1,3 1,6 1,9c0,1 1,2 1,3c0,3 1,5 1,7c0,3 0,4 0,6c0,3 1.458801,2.693436 2,4c0.38269,0.923882 -0.122192,2.007492 0,3c0.503784,4.092216 0.31073,7.080254 1,10c0.513733,2.176254 1,5 1,6c0,2 1.458801,3.693436 2,5c0.38269,0.923882 0,2 0,3c0,1 0.486267,1.823746 1,4c0.229767,0.973251 1,2 1,4c0,3 1.486267,4.823746 2,7c0.459503,1.946503 1,4 1,5c0,1 -0.189117,3.018051 0,4c1.018372,5.287994 3.012909,4.839813 4,5c3.121429,0.506546 3.852722,2.173096 5,3c1.813995,1.307449 2.852722,1.173096 4,2c1.813995,1.307449 5.693451,1.458801 7,2c2.771637,1.148056 4,0 5,0c1,0 4,0 5,0c1,0 1.796997,-1.2565 3,-2c2.690002,-1.662506 3.693451,-2.458801 5,-3c2.771637,-1.148056 5.647491,-1.972519 10,-3c2.919739,-0.689255 4.852722,-2.173096 6,-3c1.813995,-1.307449 3.418854,-2.418854 5,-4c1.581146,-1.581146 5.761078,-2.415894 9,-4c2.840729,-1.389359 9.309998,-4.337494 12,-6c3.609009,-2.230492 5.151001,-1.434624 7,-4c0.584717,-0.811241 4.039856,-3.923981 6,-5c5.11145,-2.805908 13.127075,-4.925903 16,-10c0.492676,-0.870201 4.552795,-3.105576 5,-4c2.236084,-4.472137 5.934143,-4.144295 8,-5c2.92157,-1.210152 4.076111,-0.617317 5,-1c3.919678,-1.623589 4.412048,-1.968552 8,-4c1.230652,-0.696785 4.934143,-3.144295 7,-4c2.92157,-1.210152 6,-2 10,-4c2,-1 3.026733,-0.770248 4,-1c2.17627,-0.513741 5.002502,-1.929108 6,-2c7.053284,-0.501259 8.292908,-2.292892 9,-3c1.414185,-1.414215 3.012939,0.160179 4,0c3.12146,-0.506538 7,-2 8,-2c2,0 6,0 7,0c2,0 3,0 4,0c1,0 3,0 4,0c1,0 6.493469,3.878555 7,7c0.48053,2.961266 2,6 2,7c0,1 0,4 0,7c0,1 0,2 0,4c0,2 -1.371338,5.746742 -4,10c-2.351135,3.80423 -2.692566,6.186005 -4,8c-0.826904,1.14727 -4.714111,4.211678 -7,7c-1.793213,2.187347 -3.418884,2.418854 -5,4c-1.581116,1.581146 -2.692566,3.186005 -4,5c-0.826904,1.147263 -2.151001,3.434631 -4,6c-2.923523,4.056213 -7.418884,6.418854 -9,8c-1.581116,1.581146 -4.21167,2.714127 -7,5c-1.093689,0.896591 -4.056641,2.917526 -7,5c-4.081726,2.887863 -6,4 -9,6c-3,2 -3.309998,2.337494 -6,4c-3.609009,2.230484 -4.22937,3.331985 -8,5c-3.297302,1.458633 -5.098328,4.910339 -12,7c-2.871277,0.869354 -10.033508,4.743332 -11,5c-7.792175,2.069321 -17.0979,11.824432 -19,13c-4.253235,2.628662 -5,4 -6,5c-2,2 -4.474243,3.149353 -5,4c-1.175568,1.902115 -5.098297,6.910339 -12,9c-1.914185,0.579575 -2.852722,2.173096 -4,3c-1.813995,1.307449 -3.824432,2.097885 -5,4c-0.525726,0.850647 -0.692535,2.186005 -2,4c-0.826904,1.147263 -1,3 -1,5c0,1 -0.765381,2.152237 0,4c1.623596,3.919693 5.367035,3.658127 10,9c3.276001,3.777267 5.06601,5.877655 7,7c3.118469,1.809723 2.773743,6.835205 8,9c0.923889,0.38269 4.480713,3.359344 6,5c3.961853,4.27829 6.418884,4.418854 8,6c1.581116,1.581146 3,3 4,4c3,3 6.038147,3.72171 10,8c1.519287,1.640656 2,3 4,4c2,1 5.397827,1.064728 11,4c4.428894,2.320526 8.886841,6.295471 19,10c2.96936,1.087677 9.769348,4.303223 11,5c3.587952,2.031464 8.708496,5.672607 15,8c3.867004,1.430481 9.69342,4.458801 11,5c2.771667,1.148041 7,3 9,4c4,2 9.303589,4.372559 16,8c3.170288,1.717346 8.21167,4.714111 11,7c1.093689,0.896606 3.61731,3.076111 4,4c1.082397,2.613129 3.418884,2.418854 5,4c1.581116,1.581146 2.692566,3.186005 4,5c0.826904,1.147278 2.852722,3.173096 4,4c1.813965,1.307465 2.173096,2.852722 3,4c1.307434,1.813995 2,3 2,4c0,1 0,2 0,3c0,2 0.122192,6.007507 0,7c-0.503784,4.092224 -2.610657,6.159271 -4,9c-1.584106,3.238922 -6.232727,6.733246 -12,12c-1.044312,0.953644 -3,2 -7,4c-2,1 -5,2 -10,2c-3,0 -9,0 -16,0c-1,0 -2.007568,0.212677 -5,0c-7.053284,-0.501251 -9.174866,-0.58786 -19,-5c-2.039856,-0.916016 -2.390991,-1.769501 -6,-4c-2.690002,-1.662506 -4.305664,-5.457275 -18,-8c-1.96637,-0.365112 -14.611023,-3.92807 -17,-6c-1.68927,-1.465088 -20.21167,-9.714111 -23,-12c-2.187317,-1.793182 -10.154297,-3.186432 -22,-12c-2.269226,-1.688385 -4,-4 -6,-5c-8,-4 -22.087433,-11.793945 -27,-14c-2.039825,-0.916016 -4.439362,-2.171936 -5,-3c-3.019073,-4.45929 -8.21167,-2.714111 -11,-5c-3.281006,-2.689789 -5.705475,-5.346191 -8,-7c-1.813995,-1.307465 -5.718994,-3.310211 -9,-6c-2.78833,-2.285889 -6,-4 -7,-5c-1,-1 -3.309998,-2.337494 -6,-4c-4.812012,-2.973999 -3.852722,-5.173096 -5,-6c-1.813995,-1.307465 -3.076111,-2.61731 -4,-3c-1.306549,-0.541199 -2.399902,-0.800171 -7,-3c-7.046021,-3.369507 -8.292908,-6.292908 -9,-7c-1.414215,-1.414215 -6.902832,-3.224213 -9,-4c-3.867004,-1.430481 -4.693451,-2.458801 -6,-3c-4.619385,-1.913422 -4.907776,-1.496216 -9,-2c-1.985016,-0.244354 -5,0 -8,0c-1,0 -2,0 -4,0c-6,0 -10.757355,-4.242645 -15,0c-0.707092,0.707092 -0.823761,1.486267 -3,2c-0.973236,0.229767 -3.076111,0.61731 -4,1c-1.306549,0.541199 -2.852722,1.173096 -4,2c-7.255981,5.229797 -16.753052,6.583435 -28,11c-2.943451,1.155884 -5.309998,1.337494 -8,3c-1.203003,0.7435 -2.036102,1.621796 -4,2c-5.287994,1.018372 -7.549164,3.95517 -11,5c-3.828369,1.159149 -3.693451,1.458801 -5,2c-2.771637,1.148041 -4.824432,0.0979 -6,2c-0.525726,0.850647 -1.693451,2.458801 -3,3c-0.923889,0.38269 -2.852722,1.173096 -4,2c-3.627991,2.614899 -7.878693,1.878693 -10,4c-0.707092,0.707092 -3.878571,2.493469 -7,3c-0.987091,0.160187 -2,0 -3,0c-1,0 -5,1 -8,2c-3,1 -6.310013,0.337494 -9,2c-1.203003,0.7435 -4,2 -7,3c-3,1 -5,3 -6,3c-2,0 -5.076126,1.61731 -6,2c-1.306564,0.541199 -5.097885,1.824432 -7,3c-0.850647,0.525726 -1.292892,0.292908 -2,1c-0.707108,0.707092 -2.026749,0.770233 -3,1c-2.176254,0.513733 -6.053497,1.540497 -8,2c-6.528748,1.541229 -9,4 -11,4c-5,0 -7.186005,-0.307465 -9,1c-1.147263,0.826904 -3.549149,2.95517 -7,4c-1.914185,0.579559 -9.693436,2.458801 -11,3c-0.923874,0.38269 -5.159271,0.610657 -8,2c-3.238922,1.584106 -8,2 -10,2c-1,0 -1.292892,1.292908 -2,2c-2.121323,2.121307 -4.907791,0.496216 -9,1c-0.992508,0.122192 -3.693436,0.458801 -5,1c-4.6194,1.913422 -6,0 -8,0c-1,0 -4,0 -6,0c-3,0 -4,0 -6,0c-1,0 -2,0 -3,0c-2,0 -3,0 -4,0c-2,0 -5.160622,-6.752838 -13,-10c-0.923882,-0.38269 -1.789848,-2.07843 -3,-5c-0.855705,-2.065857 -1.752556,-4.010223 -2,-7c-0.501709,-6.062042 0.34523,-6.416962 5,-19c1.430496,-3.867004 10.611046,-9.92807 13,-12c1.689247,-1.465088 10.848564,-6.248322 14,-8c10.561211,-5.870331 12.186188,-8.95108 29,-12c0.983948,-0.178436 4.132996,-1.569519 8,-3c4.194351,-1.551605 10,-5 13,-6c3,-1 6,-2 8,-3c2,-1 2.693436,-2.458801 4,-3c0.923874,-0.38269 7.159271,-1.610657 10,-3c3.238922,-1.584106 12,-3 13,-4c1,-1 13,-5 14,-5c1,0 8.693436,-2.458801 10,-3c0.923874,-0.38269 4.462585,1.249847 7,-2c0.615417,-0.788208 1,-1 5,-1c2,0 10.693436,-2.458801 12,-3c1.847763,-0.765366 2.753128,-0.332687 4,-1c4.495667,-2.406006 6.004028,-1.910202 7,-2c11.135162,-1.004059 13.038727,-2.519455 16,-3c3.121429,-0.506546 3.693451,-2.458801 5,-3c2.771637,-1.148056 8.504242,-1.035522 13,-4c1.180634,-0.778519 1.916046,-1.189377 4,-2c6.784882,-2.639206 7.620026,-1.674988 13,-5c1.203003,-0.7435 6.076111,-7.61731 7,-8c2.613129,-1.082397 3,-5 3,-6c0,-1 -2.634827,-8.706253 -11,-14c-12.561981,-7.949615 -15.712006,-5.981628 -21,-7c-3.927826,-0.756424 -11.041321,-0.847229 -15,-2c-3.036163,-0.88414 -3.878571,-1.493454 -7,-2c-5.922516,-0.96109 -12.693436,-2.458801 -14,-3c-1.847763,-0.765366 -4,0 -7,0c-3,0 -6.693436,-1.458801 -8,-2c-9.2388,-3.826828 -11.861938,-0.475449 -18,-2c-5.903397,-1.466263 -8.038742,-1.519455 -11,-2c-3.121445,-0.506546 -5.036087,-0.62178 -7,-1c-5.287994,-1.018372 -7.857544,-2.359787 -10,-3c-16.400635,-4.900909 -20.00325,-1.958603 -33,-3c-12.003128,-0.961777 -15.038742,-0.519455 -18,-1c-3.121445,-0.506546 -6.001938,-1.937866 -7,-2c-8.046677,-0.500961 -16.014603,-1.704391 -19,-2c-5.074203,-0.502441 -8.010597,-0.854782 -9,-1c-10.329643,-1.516068 -13.796997,-4.2565 -15,-5c-2.689995,-1.662506 -4.042908,-0.71022 -5,-1c-3.450844,-1.04483 -5.304482,-1.469269 -9,-3c-2.613129,-1.082397 -4.714119,-5.21167 -7,-8c-2.689789,-3.281006 -3.186005,-4.692551 -5,-6c-1.14727,-0.826904 -0.519455,-2.038742 -1,-5c-0.506542,-3.121445 -2.121277,-11.090393 -1,-18c0.506542,-3.121445 2.458801,-5.693436 3,-7c0.382683,-0.923882 1,-2 2,-3c1,-1 0.617317,-3.076118 1,-4c1.623589,-3.919685 12.076118,-10.617317 13,-11c1.306564,-0.541199 9,-2 14,-2c3,0 4,0 5,0c3,0 8,0 11,0c2,0 19.823746,2.486259 22,3c2.919754,0.689262 15.00885,0.867264 16,1c11.300873,1.51339 19,4 20,4c2,0 3,0 4,0c1,0 3.884964,1.274315 6,2c4.823029,1.654816 6.009659,0.861298 7,1c7.209747,1.009758 14,4 15,4c3,0 3.823746,1.486259 6,2c2.919754,0.689262 4,0 5,0c2,0 3.001236,0.950188 4,1c10.037399,0.500618 12.823746,2.486259 15,3c2.919754,0.689262 8.012909,-0.160179 9,0c6.242889,1.013084 8.946716,3.498741 16,4c0.997498,0.070892 4.593109,2.47554 13,4c0.983948,0.178421 4.152252,1.234634 6,2c1.306549,0.541199 2.597382,-0.102928 6,2c1.9021,1.175568 21.725372,6.387375 23,7c8.161652,3.922684 11.823761,1.486252 14,2c2.919739,0.689255 5,0 6,0c2,0 3,0 6,0c1,0 2,0 3,0c5,0 5.852722,-1.173096 7,-2c1.813995,-1.307449 3.376404,-1.080307 5,-5c1.530731,-3.695518 1,-7 1,-9c0,-4 0,-5 0,-6c0,-1 0.289795,-2.042908 0,-3c-3.134491,-10.352531 -6.810883,-10.018044 -7,-11c-1.018372,-5.287994 -5,-12 -5,-15c0,-3 0,-4 0,-5c0,-1 -0.493469,-3.878555 -1,-7c-0.160187,-0.987091 1.148041,-6.228363 0,-9c-0.541199,-1.306564 -1,-3 -1,-4c0,-2 0,-3 0,-7c0,-1 0,-4 0,-5c0,-3 -0.765381,-4.152241 0,-6c0.541199,-1.306564 1.486267,-1.82375 2,-4c0.229767,-0.973248 2.173096,-1.85273 3,-3c1.307465,-1.813992 2.692535,-3.186008 4,-5c0.826904,-1.14727 2.323669,-1.520164 4,-3c2.703003,-2.386164 4.076111,-2.617317 5,-3c1.306549,-0.541197 2.878693,0.121321 5,-2c0.707092,-0.707108 3,-1 5,-2c2,-1 3,-1 4,-1c1,0 2,0 4,0c1,0 2,0 3,0c5,0 7,0 10,0c1,0 2,0 3,-1l2,-1z"
};
var raphs = {};
var slider;
var next;
var prev;
var check;
var ds;
var r = 210;
var cx = 390;
var cy = 230;

var inicialPosition = {
	path0: {x:10, y:10},
	path1: {x:400, y:10},
	path2: {x:10, y:280},
	path3: {x:400, y:280}
}
var whInicial = {
	w:370,
	h:250
}

function init(){
	var conteudo = $("#conteudo");
	for (var i = 0; i < 4; i++) {
		conteudo.append($("<div></div>")
			.attr("id", "path" + i)
			.attr("class", "path-opt")
		);

		var raph = {};
		raph.r = Raphael("path" + i);
		raph.r.setViewBox(0, 0, 780, 540, true);
		raph.r.canvas.setAttribute('preserveAspectRatio', 'none');

		raph.path = raph.r.path(paths["path" + i]);
		raph.length = raph.path.getTotalLength();

		raphs["path" + i] = raph;
	};

	slider = new Dragdealer('slider', {slide:false, x:0.5, animationCallback: sliderMoving});
	next = $("#next");
	prev = $("#prev");
	check = $("#check");
	ds = $("#dist");
	check.hide();
	ds.hide();

	next.on("click", avancar);
	prev.on("click", retornar);

	$("#slider").hide();
	$("#distAngle").hide();
	$("#show").on("click", showhideAngle);

	montaTela(currentTela);
}

function montaTela(){
	if(currentTela == 0){
		next.show();
		prev.hide();
		next.attr("class", "inativo");
		$("#title").html("Escolha uma das formas para iniciar");
		$(".path-opt").on("click", optClick);
	}else if(currentTela == 1){
		next.show();
		prev.show();
		if(raphs[tgId].gPtF){
			next.attr("class", "");
		}else{
			next.attr("class", "inativo");
		}
		prev.attr("class", "");
		$("#title").html("Clique sobre a curva para escolher o ponto inicial");
		$("#" + tgId).on("click", canvasClick);
	}else if(currentTela == 2){
		next.hide();
		prev.show();
		prev.attr("class", "");
		$("#title").html("Arraste o slider");
		raphs[tgId].gPt = raphs[tgId].r.circle(raphs[tgId].pt.x, raphs[tgId].pt.y, 4).attr("fill", "#FF0000");
		raphs[tgId].subPathInc = true;
		$("#slider").show();
		ds.html("Distância: 0");
		ds.show();
		$("#slider").css("z-index", 200);
		slider.setValue(0.5, 0);
		if(tgId == "path2"){
			$("#show").attr("checked", false);
			check.show();
		}
	}
}

function avancar(){
	if(currentTela == 0){
		return;
	}else if(currentTela == 1){
		if(raphs[tgId].gPtF){
			currentTela = 2;
			$("#" + tgId).off("click", canvasClick);
		}else{
			return;
		}
	}else if(currentTela == 2){
		return;
	}
	montaTela();
}

function retornar(){
	if(currentTela == 0){
		return;
	}else if(currentTela == 1){
		currentTela = 0;
		$("#" + tgId).off("click", canvasClick);
		if(raphs[tgId].gPtF) {
			raphs[tgId].gPtF.remove();
			raphs[tgId].gPtF = null;
		}
		//raphs[tgId].gPt = raphs[tgId].r.circle(pt.x, pt.y, 6).attr("stroke-width", "2");
		raphs[tgId].iniDist = null;
		raphs[tgId].ptF = null;
		raphs[tgId].pt = null;
		raphs[tgId].iniLength = null;
		shrinkPath();
	}else if(currentTela == 2){
		currentTela = 1;
		raphs[tgId].gPt.remove();
		raphs[tgId].subPath.remove();
		raphs[tgId].subPath = null;
		raphs[tgId].subPathInc = false;
		//raphs[tgId].subPathString = null;
		$("#slider").hide();
		if(tgId == "path2"){
			$("#show").attr("checked", false);
			check.hide();
		}
		ds.hide();
		slider.setValue(0.5, 0);
	}
	montaTela();
}

var tgId;
function optClick(e){
	$(".path-opt").off("click", optClick);
	tgId = e.currentTarget.id;
	currentTela = 1;
	//console.log(raphs[tgId].path.getTotalLength());

	growPath();
}

function growPath(){
	$(".path-opt").css("z-index", "50");
	$("#" + tgId).css("z-index", "99").animate({width: "780px", height: "540px", top: "0px", left: "0px"}, 500, finishGrow);
}

function shrinkPath(){
	$("#" + tgId).css("z-index", "99").animate({width: whInicial.w + "px", height: whInicial.h + "px", top: inicialPosition[tgId].y + "px", left: inicialPosition[tgId].x + "px"}, 500, finishShrink);
}

function finishGrow(){
	montaTela();
}

function finishShrink(){

}

function canvasClick(e){
	//console.log($().offset().left);
	
	var offX  = (e.offsetX || e.clientX - $("#" + tgId).offset().left + window.pageXOffset);
	var offY  = (e.offsetY || e.clientY - $("#" + tgId).offset().top + window.pageYOffset );
	//console.log(offX, offY);
	var minDist = 9999;
	var pt;
	var iniLength;
	for (var i = 0; i < raphs[tgId].length; i+=10) {
		var pDist = raphs[tgId].path.getPointAtLength(i);
		var dist = distance(offX, offY, pDist.x, pDist.y);
		if(dist < minDist) {
			minDist = dist;
			pt = pDist;
			iniLength = i;
		}
	};

	if(minDist < 5){
		next.attr("class", "");
		if(raphs[tgId].gPtF) raphs[tgId].gPtF.remove();

		raphs[tgId].gPtF = raphs[tgId].r.circle(pt.x, pt.y, 6).attr("stroke-width", "1");
		//raphs[tgId].gPt = raphs[tgId].r.circle(pt.x, pt.y, 6).attr("stroke-width", "2");
		raphs[tgId].iniDist = minDist;
		raphs[tgId].ptF = pt;
		raphs[tgId].pt = pt;
		raphs[tgId].iniLength = iniLength;
	}
}

function sliderMoving(x, y){
	//console.log(x);
	if(!tgId) return;

	var sliderVal = (x - 0.5) * raphs[tgId].length;
	var newLen = raphs[tgId].iniLength + sliderVal;

	if(newLen > raphs[tgId].length) newLen -= raphs[tgId].length;
	else if(newLen < 0) newLen += raphs[tgId].length;

	var newPt = raphs[tgId].path.getPointAtLength(newLen);

	if(raphs[tgId].subPathInc){
		var pathsDrag = [];
		var from = raphs[tgId].iniLength;
		var to = newLen;
		if(sliderVal < 0){
			if(from < raphs[tgId].length/2){
				if(to >= from + raphs[tgId].length/2){
					pathsDrag.push(raphs[tgId].path.getSubpath(0, from));
					pathsDrag.push(raphs[tgId].path.getSubpath(to, raphs[tgId].length));
				}else{
					if(from > to){
						var aux = from;
						from = to;
						to = aux;
					}
					pathsDrag.push(raphs[tgId].path.getSubpath(from, to));
				}
			}else{
				if(from > to){
					var aux = from;
					from = to;
					to = aux;
				}
				pathsDrag.push(raphs[tgId].path.getSubpath(from, to));
			}
		}else{
			if(from > raphs[tgId].length/2){
				if(to <= from - raphs[tgId].length/2){
					pathsDrag.push(raphs[tgId].path.getSubpath(from, raphs[tgId].length));
					pathsDrag.push(raphs[tgId].path.getSubpath(0, to));
				}else{
					if(from > to){
						var aux = from;
						from = to;
						to = aux;
					}
					pathsDrag.push(raphs[tgId].path.getSubpath(from, to));
				}
			}else{
				if(from > to){
					var aux = from;
					from = to;
					to = aux;
				}
				pathsDrag.push(raphs[tgId].path.getSubpath(from, to));
			}
		}
		

		//raphs[tgId].subPathString = raphs[tgId].path.getSubpath(from, to);

		if(raphs[tgId].subPath) raphs[tgId].subPath.remove();//raphs[tgId].subPath.attr("path", raphs[tgId].subPathString);
		//else raphs[tgId].subPath = raphs[tgId].r.path(raphs[tgId].subPathString).attr("stroke-width", "2");
		raphs[tgId].subPath = raphs[tgId].r.set();
		for (var i = 0; i < pathsDrag.length; i++) {
			raphs[tgId].subPath.push(raphs[tgId].r.path(pathsDrag[i]).attr("stroke-width", "2"));
		};
	}

	//console.log();

	raphs[tgId].gPt.attr("cx", newPt.x);
	raphs[tgId].gPt.attr("cy", newPt.y);
	raphs[tgId].pt = newPt;

	ds.html("Distância: " + sliderVal.toFixed(0));

	showhideAngle();
}

function showhideAngle(){
	if($("#show").is(":checked")){
		if(raphs[tgId].angle) raphs[tgId].angle.remove();
		raphs[tgId].angle = raphs[tgId].r.set();
		$("#distAngle").show();
		var pths = getRpath();
		
		raphs[tgId].angle.push(raphs[tgId].r.path(pths[0]));
		raphs[tgId].angle.push(raphs[tgId].r.path(pths[1]));
		raphs[tgId].angle.push(raphs[tgId].r.path(pths[2]).attr("fill", "#FF0000"));
	}else{
		if(raphs[tgId].angle) {
			raphs[tgId].angle.remove();
			raphs[tgId].angle = null;
			$("#distAngle").hide();
		}
	}
}

function convertPathToArray(path){
	return Raphael.parsePathString(path);
}

function distance(x1, y1, x2, y2){
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function getRpath(){
	var arrCaminhos = [];
	var posPtF = raphs[tgId].ptF;
	var posPt = raphs[tgId].pt;


	var caminho = "M" + cx + "," + cy;
	caminho += "L" + posPt.x + "," + posPt.y;
	arrCaminhos.push(caminho);

	var caminho2 = "M" + cx + "," + cy;
	caminho2 += "L" + posPtF.x + "," + posPtF.y;
	arrCaminhos.push(caminho2);

	var caminho3 = "M" + cx + "," + cy;

	var raio = 50;

	var anguloInicial = Math.atan2(posPtF.y - cy,posPtF.x - cx);
	var anguloFinal = Math.atan2(posPt.y - cy,posPt.x - cx);
	

	//if(anguloInicial < 0) anguloInicial += 2 * Math.PI;
	//if(anguloFinal < 0) anguloFinal += 2 * Math.PI;

	anguloInicial *= 180/Math.PI;
	anguloFinal *= 180/Math.PI;

	var max;
	var min;

	if(anguloInicial > 0){
		min = anguloInicial - 180;
		if(anguloFinal < min){
			anguloFinal = 180 + (180 + anguloFinal);
		}
	}else{
		max = anguloInicial + 180;
		if(anguloFinal > max){
			anguloFinal = -179.99 - (180 - anguloFinal);
		}
	}

	//var passo = anguloFinal > anguloInicial ? (anguloFinal - anguloInicial)/100 : (anguloInicial - anguloFinal)/100;
	var passo = 1// * (anguloFinal > anguloInicial ? 1 : -1);//(anguloFinal - anguloInicial)/100;
	//console.log(anguloFinal - anguloInicial);
	$("#distAngle").html((anguloFinal - anguloInicial).toFixed(1) + "º");

	if(anguloFinal < anguloInicial){
		var aux = anguloFinal;
		anguloFinal = anguloInicial;
		anguloInicial = aux;
	}

	var count = 0;

	
	for (var i = anguloInicial; i < anguloFinal; i+=passo) {
		var ang = i * Math.PI/180;

		//if(ang > Math.PI) ang -= 2 * Math.PI;
		var rx = raio * Math.cos(ang);
		var ry = raio * Math.sin(ang);
		caminho3 += "L" + (rx + cx) + "," + (ry + cy);

		count++;
		if(count > 180) break;
	};

	caminho3 += "z";

	arrCaminhos.push(caminho3);

	return arrCaminhos;

}