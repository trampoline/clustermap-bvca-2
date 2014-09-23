// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__38267){var map__38272 = p__38267;var map__38272__$1 = ((cljs.core.seq_QMARK_(map__38272))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38272):map__38272);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38272__$1,cljs.core.constant$keyword$904);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38272__$1,cljs.core.constant$keyword$871);var pred__38273 = cljs.core._EQ_;var expr__38274 = type;if(cljs.core.truth_((pred__38273.cljs$core$IFn$_invoke$arity$2 ? pred__38273.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$957,expr__38274) : pred__38273.call(null,cljs.core.constant$keyword$957,expr__38274))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1019,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Total",cljs.core.constant$keyword$1022,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$1020,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Mean",cljs.core.constant$keyword$1022,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$1021,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Benchmark",cljs.core.constant$keyword$1022,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__38273.cljs$core$IFn$_invoke$arity$2 ? pred__38273.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$958,expr__38274) : pred__38273.call(null,cljs.core.constant$keyword$958,expr__38274))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1019,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Total",cljs.core.constant$keyword$1022,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$1020,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Mean",cljs.core.constant$keyword$1022,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$1021,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Benchmark",cljs.core.constant$keyword$1022,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__38273.cljs$core$IFn$_invoke$arity$2 ? pred__38273.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$960,expr__38274) : pred__38273.call(null,cljs.core.constant$keyword$960,expr__38274))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1019,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Total",cljs.core.constant$keyword$1022,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$1020,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Mean",cljs.core.constant$keyword$1022,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$1021,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Benchmark",cljs.core.constant$keyword$1022,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1019,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Total",cljs.core.constant$keyword$1022,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$1020,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Mean",cljs.core.constant$keyword$1022,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$1021,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,"Benchmark",cljs.core.constant$keyword$1022,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__38276){var map__38302 = p__38276;var map__38302__$1 = ((cljs.core.seq_QMARK_(map__38302))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38302):map__38302);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38302__$1,cljs.core.constant$keyword$1023);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38302__$1,cljs.core.constant$keyword$1019);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38302__$1,cljs.core.constant$keyword$1024);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3558__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1019,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1019.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1025,cljs.core.constant$keyword$1026,cljs.core.constant$keyword$1018,cljs.core.constant$keyword$1027,cljs.core.constant$keyword$1028,cljs.core.constant$keyword$1029,cljs.core.constant$keyword$1030,cljs.core.constant$keyword$1031,cljs.core.constant$keyword$1032],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38303 = site_stats;var G__38303__$1 = (((G__38303 == null))?null:cljs.core.constant$keyword$1033.cljs$core$IFn$_invoke$arity$1(G__38303));var G__38303__$2 = (((G__38303__$1 == null))?null:cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(G__38303__$1));return G__38303__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38303 = site_stats;var G__38303__$1 = (((G__38303 == null))?null:cljs.core.constant$keyword$1033.cljs$core$IFn$_invoke$arity$1(G__38303));var G__38303__$2 = (((G__38303__$1 == null))?null:cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(G__38303__$1));return G__38303__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__38304 = site_stats;var G__38304__$1 = (((G__38304 == null))?null:cljs.core.constant$keyword$1034.cljs$core$IFn$_invoke$arity$1(G__38304));return G__38304__$1;
})(),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38304 = site_stats;var G__38304__$1 = (((G__38304 == null))?null:cljs.core.constant$keyword$1034.cljs$core$IFn$_invoke$arity$1(G__38304));return G__38304__$1;
})(),cljs.core.constant$keyword$827,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38305 = site_stats;var G__38305__$1 = (((G__38305 == null))?null:cljs.core.constant$keyword$1018.cljs$core$IFn$_invoke$arity$1(G__38305));var G__38305__$2 = (((G__38305__$1 == null))?null:cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(G__38305__$1));return G__38305__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38305 = site_stats;var G__38305__$1 = (((G__38305 == null))?null:cljs.core.constant$keyword$1018.cljs$core$IFn$_invoke$arity$1(G__38305));var G__38305__$2 = (((G__38305__$1 == null))?null:cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(G__38305__$1));return G__38305__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__38306 = site_stats;var G__38306__$1 = (((G__38306 == null))?null:cljs.core.constant$keyword$1035.cljs$core$IFn$_invoke$arity$1(G__38306));return G__38306__$1;
})(),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38306 = site_stats;var G__38306__$1 = (((G__38306 == null))?null:cljs.core.constant$keyword$1035.cljs$core$IFn$_invoke$arity$1(G__38306));return G__38306__$1;
})(),cljs.core.constant$keyword$827,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38307 = site_stats;var G__38307__$1 = (((G__38307 == null))?null:cljs.core.constant$keyword$1036.cljs$core$IFn$_invoke$arity$1(G__38307));var G__38307__$2 = (((G__38307__$1 == null))?null:cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(G__38307__$1));return G__38307__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38307 = site_stats;var G__38307__$1 = (((G__38307 == null))?null:cljs.core.constant$keyword$1036.cljs$core$IFn$_invoke$arity$1(G__38307));var G__38307__$2 = (((G__38307__$1 == null))?null:cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(G__38307__$1));return G__38307__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-")),(function (){var G__38308 = site_stats;var G__38308__$1 = (((G__38308 == null))?null:cljs.core.constant$keyword$1037.cljs$core$IFn$_invoke$arity$1(G__38308));var G__38308__$2 = (((G__38308__$1 == null))?null:cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(G__38308__$1));return G__38308__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__38309 = site_stats;var G__38309__$1 = (((G__38309 == null))?null:cljs.core.constant$keyword$1038.cljs$core$IFn$_invoke$arity$1(G__38309));return G__38309__$1;
})(),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38309 = site_stats;var G__38309__$1 = (((G__38309 == null))?null:cljs.core.constant$keyword$1038.cljs$core$IFn$_invoke$arity$1(G__38309));return G__38309__$1;
})(),cljs.core.constant$keyword$827,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38310 = site_stats;var G__38310__$1 = (((G__38310 == null))?null:cljs.core.constant$keyword$1037.cljs$core$IFn$_invoke$arity$1(G__38310));var G__38310__$2 = (((G__38310__$1 == null))?null:cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(G__38310__$1));return G__38310__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38310 = site_stats;var G__38310__$1 = (((G__38310 == null))?null:cljs.core.constant$keyword$1037.cljs$core$IFn$_invoke$arity$1(G__38310));var G__38310__$2 = (((G__38310__$1 == null))?null:cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(G__38310__$1));return G__38310__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-")),(function (){var G__38311 = site_stats;var G__38311__$1 = (((G__38311 == null))?null:cljs.core.constant$keyword$1036.cljs$core$IFn$_invoke$arity$1(G__38311));var G__38311__$2 = (((G__38311__$1 == null))?null:cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(G__38311__$1));return G__38311__$2;
})()])], 0)),cljs.core.constant$keyword$1020,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1020.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1025,cljs.core.constant$keyword$1026,cljs.core.constant$keyword$1018,cljs.core.constant$keyword$1027,cljs.core.constant$keyword$1028,cljs.core.constant$keyword$1029,cljs.core.constant$keyword$1030,cljs.core.constant$keyword$1031,cljs.core.constant$keyword$1032],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38312 = site_stats;var G__38312__$1 = (((G__38312 == null))?null:cljs.core.constant$keyword$1033.cljs$core$IFn$_invoke$arity$1(G__38312));var G__38312__$2 = (((G__38312__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38312__$1));return G__38312__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38312 = site_stats;var G__38312__$1 = (((G__38312 == null))?null:cljs.core.constant$keyword$1033.cljs$core$IFn$_invoke$arity$1(G__38312));var G__38312__$2 = (((G__38312__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38312__$1));return G__38312__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38313 = site_stats;var G__38313__$1 = (((G__38313 == null))?null:cljs.core.constant$keyword$1018.cljs$core$IFn$_invoke$arity$1(G__38313));var G__38313__$2 = (((G__38313__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38313__$1));return G__38313__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38313 = site_stats;var G__38313__$1 = (((G__38313 == null))?null:cljs.core.constant$keyword$1018.cljs$core$IFn$_invoke$arity$1(G__38313));var G__38313__$2 = (((G__38313__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38313__$1));return G__38313__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-")),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38314 = site_stats;var G__38314__$1 = (((G__38314 == null))?null:cljs.core.constant$keyword$1036.cljs$core$IFn$_invoke$arity$1(G__38314));var G__38314__$2 = (((G__38314__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38314__$1));return G__38314__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38314 = site_stats;var G__38314__$1 = (((G__38314 == null))?null:cljs.core.constant$keyword$1036.cljs$core$IFn$_invoke$arity$1(G__38314));var G__38314__$2 = (((G__38314__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38314__$1));return G__38314__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-")),(function (){var G__38315 = site_stats;var G__38315__$1 = (((G__38315 == null))?null:cljs.core.constant$keyword$1037.cljs$core$IFn$_invoke$arity$1(G__38315));var G__38315__$2 = (((G__38315__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38315__$1));return G__38315__$2;
})(),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38316 = site_stats;var G__38316__$1 = (((G__38316 == null))?null:cljs.core.constant$keyword$1037.cljs$core$IFn$_invoke$arity$1(G__38316));var G__38316__$2 = (((G__38316__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38316__$1));return G__38316__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38316 = site_stats;var G__38316__$1 = (((G__38316 == null))?null:cljs.core.constant$keyword$1037.cljs$core$IFn$_invoke$arity$1(G__38316));var G__38316__$2 = (((G__38316__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38316__$1));return G__38316__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-")),(function (){var G__38317 = site_stats;var G__38317__$1 = (((G__38317 == null))?null:cljs.core.constant$keyword$1036.cljs$core$IFn$_invoke$arity$1(G__38317));var G__38317__$2 = (((G__38317__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38317__$1));return G__38317__$2;
})()])], 0)),cljs.core.constant$keyword$1021,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1021.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$1025,cljs.core.constant$keyword$1026,cljs.core.constant$keyword$1018,cljs.core.constant$keyword$1027,cljs.core.constant$keyword$1028,cljs.core.constant$keyword$1029,cljs.core.constant$keyword$1030,cljs.core.constant$keyword$1031,cljs.core.constant$keyword$1032],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38318 = all_investment_stats;var G__38318__$1 = (((G__38318 == null))?null:cljs.core.constant$keyword$1033.cljs$core$IFn$_invoke$arity$1(G__38318));var G__38318__$2 = (((G__38318__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38318__$1));return G__38318__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38318 = all_investment_stats;var G__38318__$1 = (((G__38318 == null))?null:cljs.core.constant$keyword$1033.cljs$core$IFn$_invoke$arity$1(G__38318));var G__38318__$2 = (((G__38318__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38318__$1));return G__38318__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__38319 = all_investment_stats;var G__38319__$1 = (((G__38319 == null))?null:cljs.core.constant$keyword$1034.cljs$core$IFn$_invoke$arity$1(G__38319));return G__38319__$1;
})(),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38319 = all_investment_stats;var G__38319__$1 = (((G__38319 == null))?null:cljs.core.constant$keyword$1034.cljs$core$IFn$_invoke$arity$1(G__38319));return G__38319__$1;
})(),cljs.core.constant$keyword$827,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38320 = all_investment_stats;var G__38320__$1 = (((G__38320 == null))?null:cljs.core.constant$keyword$1018.cljs$core$IFn$_invoke$arity$1(G__38320));var G__38320__$2 = (((G__38320__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38320__$1));return G__38320__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38320 = all_investment_stats;var G__38320__$1 = (((G__38320 == null))?null:cljs.core.constant$keyword$1018.cljs$core$IFn$_invoke$arity$1(G__38320));var G__38320__$2 = (((G__38320__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38320__$1));return G__38320__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__38321 = all_investment_stats;var G__38321__$1 = (((G__38321 == null))?null:cljs.core.constant$keyword$1035.cljs$core$IFn$_invoke$arity$1(G__38321));return G__38321__$1;
})(),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38321 = all_investment_stats;var G__38321__$1 = (((G__38321 == null))?null:cljs.core.constant$keyword$1035.cljs$core$IFn$_invoke$arity$1(G__38321));return G__38321__$1;
})(),cljs.core.constant$keyword$827,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38322 = all_investment_stats;var G__38322__$1 = (((G__38322 == null))?null:cljs.core.constant$keyword$1036.cljs$core$IFn$_invoke$arity$1(G__38322));var G__38322__$2 = (((G__38322__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38322__$1));return G__38322__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38322 = all_investment_stats;var G__38322__$1 = (((G__38322 == null))?null:cljs.core.constant$keyword$1036.cljs$core$IFn$_invoke$arity$1(G__38322));var G__38322__$2 = (((G__38322__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38322__$1));return G__38322__$2;
})(),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-")),(function (){var G__38323 = all_investment_stats;var G__38323__$1 = (((G__38323 == null))?null:cljs.core.constant$keyword$1037.cljs$core$IFn$_invoke$arity$1(G__38323));var G__38323__$2 = (((G__38323__$1 == null))?null:cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(G__38323__$1));return G__38323__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__38324 = all_investment_stats;var G__38324__$1 = (((G__38324 == null))?null:cljs.core.constant$keyword$1038.cljs$core$IFn$_invoke$arity$1(G__38324));return G__38324__$1;
})(),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38324 = all_investment_stats;var G__38324__$1 = (((G__38324 == null))?null:cljs.core.constant$keyword$1038.cljs$core$IFn$_invoke$arity$1(G__38324));return G__38324__$1;
})(),cljs.core.constant$keyword$827,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38325 = all_investment_stats;var G__38325__$1 = (((G__38325 == null))?null:cljs.core.constant$keyword$1037.cljs$core$IFn$_invoke$arity$1(G__38325));var G__38325__$2 = (((G__38325__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38325__$1));return G__38325__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38325 = all_investment_stats;var G__38325__$1 = (((G__38325 == null))?null:cljs.core.constant$keyword$1037.cljs$core$IFn$_invoke$arity$1(G__38325));var G__38325__$2 = (((G__38325__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38325__$1));return G__38325__$2;
})(),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-")),(function (){var G__38326 = all_investment_stats;var G__38326__$1 = (((G__38326 == null))?null:cljs.core.constant$keyword$1036.cljs$core$IFn$_invoke$arity$1(G__38326));var G__38326__$2 = (((G__38326__$1 == null))?null:cljs.core.constant$keyword$995.cljs$core$IFn$_invoke$arity$1(G__38326__$1));return G__38326__$2;
})()])], 0))], null);
});
clustermap.components.full_report.overview.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < (0)))
{return React.DOM.i({"className": "icon-negative"});
} else
{return null;

}
}
}
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__38350 = clustermap.components.full_report.overview.overview_data(data);var map__38350__$1 = ((cljs.core.seq_QMARK_(map__38350))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38350):map__38350);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38350__$1,cljs.core.constant$keyword$1021);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38350__$1,cljs.core.constant$keyword$1020);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38350__$1,cljs.core.constant$keyword$1019);if(typeof clustermap.components.full_report.overview.t38351 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t38351 = (function (selection,averages,benchmark,map__38350,data,overview,meta38352){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__38350 = map__38350;
this.data = data;
this.overview = overview;
this.meta38352 = meta38352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t38351.cljs$lang$type = true;
clustermap.components.full_report.overview.t38351.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t38351";
clustermap.components.full_report.overview.t38351.cljs$lang$ctorPrWriter = ((function (map__38350,map__38350__$1,benchmark,averages,selection){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.overview/t38351");
});})(map__38350,map__38350__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t38351.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t38351.prototype.om$core$IRender$render$arity$1 = ((function (map__38350,map__38350__$1,benchmark,averages,selection){
return (function (this__9536__auto__){var self__ = this;
var this__9536__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1022) : self__.selection.call(null,cljs.core.constant$keyword$1022))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$903) : self__.selection.call(null,cljs.core.constant$keyword$903)))),React.DOM.td(null,(function (){var attrs38358 = cljs.core.constant$keyword$1030.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs38358))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs38358], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38358))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38358)], null))));
})()),React.DOM.td(null,(function (){var attrs38359 = cljs.core.constant$keyword$1027.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs38359))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs38359], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38359))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38359)], null))));
})()),React.DOM.td(null,(function (){var attrs38360 = cljs.core.constant$keyword$1026.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs38360))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs38360], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38360))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38360)], null))));
})()),React.DOM.td(null,(function (){var attrs38361 = cljs.core.constant$keyword$1018.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs38361))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs38361], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38361))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38361)], null))));
})()),React.DOM.td(null,(function (){var attrs38362 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$1029.cljs$core$IFn$_invoke$arity$1(self__.selection));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs38362))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs38362], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38362))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38362)], null))));
})()),React.DOM.td(null,(function (){var attrs38363 = cljs.core.constant$keyword$1031.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs38363))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs38363], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38363))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38363)], null))));
})()),React.DOM.td(null,(function (){var attrs38364 = cljs.core.constant$keyword$1025.cljs$core$IFn$_invoke$arity$1(self__.selection);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs38364))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs38364], 0))):{"className": "selection"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38364))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38364)], null))));
})()))))));
});})(map__38350,map__38350__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t38351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38350,map__38350__$1,benchmark,averages,selection){
return (function (_38353){var self__ = this;
var _38353__$1 = this;return self__.meta38352;
});})(map__38350,map__38350__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.t38351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38350,map__38350__$1,benchmark,averages,selection){
return (function (_38353,meta38352__$1){var self__ = this;
var _38353__$1 = this;return (new clustermap.components.full_report.overview.t38351(self__.selection,self__.averages,self__.benchmark,self__.map__38350,self__.data,self__.overview,meta38352__$1));
});})(map__38350,map__38350__$1,benchmark,averages,selection))
;
clustermap.components.full_report.overview.__GT_t38351 = ((function (map__38350,map__38350__$1,benchmark,averages,selection){
return (function __GT_t38351(selection__$1,averages__$1,benchmark__$1,map__38350__$2,data__$1,overview__$1,meta38352){return (new clustermap.components.full_report.overview.t38351(selection__$1,averages__$1,benchmark__$1,map__38350__$2,data__$1,overview__$1,meta38352));
});})(map__38350,map__38350__$1,benchmark,averages,selection))
;
}
return (new clustermap.components.full_report.overview.t38351(selection,averages,benchmark,map__38350__$1,data,overview,null));
});
