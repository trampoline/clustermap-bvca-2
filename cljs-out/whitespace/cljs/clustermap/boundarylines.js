// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
clustermap.boundarylines.boundarylines = cljs.core.atom.call(null,null);
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [7,0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [9,0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,3.0E-4], null)], null);
clustermap.boundarylines.choose_tolerance = (function choose_tolerance(zoom){var or__3406__auto__ = cljs.core.some.call(null,(function (p__30640){var vec__30641 = p__30640;var z = cljs.core.nth.call(null,vec__30641,0,null);var t = cljs.core.nth.call(null,vec__30641,1,null);if((zoom <= z))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
});
clustermap.boundarylines.create_boundarylines_map = (function create_boundarylines_map(blseq){return cljs.core.reduce.call(null,(function (m,bl){(m[(bl["id"])] = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap.fromArray([(bl["tolerance"]),bl], true, false)));
return m;
}),{},blseq);
});
/**
* initialise with minimum resolution versions
*/
clustermap.boundarylines.init_boundarylines = (function init_boundarylines(blseq){cljs.core.reset_BANG_.call(null,clustermap.boundarylines.boundarylines,clustermap.boundarylines.create_boundarylines_map.call(null,blseq));
return null;
});
clustermap.boundarylines.get_boundaryline = (function get_boundaryline(id,zoom){var versions = (cljs.core.deref.call(null,clustermap.boundarylines.boundarylines)[id]);return null;
});
