// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__22426){var map__22431 = p__22426;var map__22431__$1 = ((cljs.core.seq_QMARK_(map__22431))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22431):map__22431);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22431__$1,cljs.core.constant$keyword$249);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22431__$1,cljs.core.constant$keyword$286);var pred__22432 = cljs.core._EQ_;var expr__22433 = type;if(cljs.core.truth_((pred__22432.cljs$core$IFn$_invoke$arity$2 ? pred__22432.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$319,expr__22433) : pred__22432.call(null,cljs.core.constant$keyword$319,expr__22433))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Total",cljs.core.constant$keyword$344,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$342,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Mean",cljs.core.constant$keyword$344,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$343,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Benchmark",cljs.core.constant$keyword$344,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22432.cljs$core$IFn$_invoke$arity$2 ? pred__22432.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$320,expr__22433) : pred__22432.call(null,cljs.core.constant$keyword$320,expr__22433))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Total",cljs.core.constant$keyword$344,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$342,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Mean",cljs.core.constant$keyword$344,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$343,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Benchmark",cljs.core.constant$keyword$344,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22432.cljs$core$IFn$_invoke$arity$2 ? pred__22432.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$321,expr__22433) : pred__22432.call(null,cljs.core.constant$keyword$321,expr__22433))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Total",cljs.core.constant$keyword$344,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$342,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Mean",cljs.core.constant$keyword$344,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$343,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Benchmark",cljs.core.constant$keyword$344,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Total",cljs.core.constant$keyword$344,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$342,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Mean",cljs.core.constant$keyword$344,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$343,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,"Benchmark",cljs.core.constant$keyword$344,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__22435){var map__22461 = p__22435;var map__22461__$1 = ((cljs.core.seq_QMARK_(map__22461))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22461):map__22461);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22461__$1,cljs.core.constant$keyword$345);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22461__$1,cljs.core.constant$keyword$328);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22461__$1,cljs.core.constant$keyword$346);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3406__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$328,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$347,cljs.core.constant$keyword$348,cljs.core.constant$keyword$349,cljs.core.constant$keyword$350,cljs.core.constant$keyword$351,cljs.core.constant$keyword$352,cljs.core.constant$keyword$353,cljs.core.constant$keyword$354,cljs.core.constant$keyword$355],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22462 = site_stats;var G__22462__$1 = (((G__22462 == null))?null:cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(G__22462));return G__22462__$1;
})(),cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22462 = site_stats;var G__22462__$1 = (((G__22462 == null))?null:cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(G__22462));return G__22462__$1;
})(),cljs.core.constant$keyword$245,"-")),(function (){var G__22463 = site_stats;var G__22463__$1 = (((G__22463 == null))?null:cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(G__22463));var G__22463__$2 = (((G__22463__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22463__$1));return G__22463__$2;
})(),(function (){var G__22464 = site_stats;var G__22464__$1 = (((G__22464 == null))?null:cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(G__22464));var G__22464__$2 = (((G__22464__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22464__$1));return G__22464__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22465 = site_stats;var G__22465__$1 = (((G__22465 == null))?null:cljs.core.constant$keyword$360.cljs$core$IFn$_invoke$arity$1(G__22465));return G__22465__$1;
})(),cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22465 = site_stats;var G__22465__$1 = (((G__22465 == null))?null:cljs.core.constant$keyword$360.cljs$core$IFn$_invoke$arity$1(G__22465));return G__22465__$1;
})(),cljs.core.constant$keyword$245,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22466 = site_stats;var G__22466__$1 = (((G__22466 == null))?null:cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(G__22466));var G__22466__$2 = (((G__22466__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22466__$1));return G__22466__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22466 = site_stats;var G__22466__$1 = (((G__22466 == null))?null:cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(G__22466));var G__22466__$2 = (((G__22466__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22466__$1));return G__22466__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22467 = site_stats;var G__22467__$1 = (((G__22467 == null))?null:cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(G__22467));var G__22467__$2 = (((G__22467__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22467__$1));return G__22467__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22467 = site_stats;var G__22467__$1 = (((G__22467 == null))?null:cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(G__22467));var G__22467__$2 = (((G__22467__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22467__$1));return G__22467__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22468 = site_stats;var G__22468__$1 = (((G__22468 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22468));var G__22468__$2 = (((G__22468__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22468__$1));return G__22468__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22468 = site_stats;var G__22468__$1 = (((G__22468 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22468));var G__22468__$2 = (((G__22468__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22468__$1));return G__22468__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22469 = site_stats;var G__22469__$1 = (((G__22469 == null))?null:cljs.core.constant$keyword$362.cljs$core$IFn$_invoke$arity$1(G__22469));return G__22469__$1;
})(),cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22469 = site_stats;var G__22469__$1 = (((G__22469 == null))?null:cljs.core.constant$keyword$362.cljs$core$IFn$_invoke$arity$1(G__22469));return G__22469__$1;
})(),cljs.core.constant$keyword$245,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22470 = site_stats;var G__22470__$1 = (((G__22470 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22470));var G__22470__$2 = (((G__22470__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22470__$1));return G__22470__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22470 = site_stats;var G__22470__$1 = (((G__22470 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22470));var G__22470__$2 = (((G__22470__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22470__$1));return G__22470__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-"))])], 0)),cljs.core.constant$keyword$342,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$347,cljs.core.constant$keyword$348,cljs.core.constant$keyword$349,cljs.core.constant$keyword$350,cljs.core.constant$keyword$351,cljs.core.constant$keyword$352,cljs.core.constant$keyword$353,cljs.core.constant$keyword$354,cljs.core.constant$keyword$355],["\u00A0",(function (){var G__22471 = site_stats;var G__22471__$1 = (((G__22471 == null))?null:cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(G__22471));var G__22471__$2 = (((G__22471__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22471__$1));return G__22471__$2;
})(),(function (){var G__22472 = site_stats;var G__22472__$1 = (((G__22472 == null))?null:cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(G__22472));var G__22472__$2 = (((G__22472__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22472__$1));return G__22472__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22473 = site_stats;var G__22473__$1 = (((G__22473 == null))?null:cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(G__22473));var G__22473__$2 = (((G__22473__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22473__$1));return G__22473__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22473 = site_stats;var G__22473__$1 = (((G__22473 == null))?null:cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(G__22473));var G__22473__$2 = (((G__22473__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22473__$1));return G__22473__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22474 = site_stats;var G__22474__$1 = (((G__22474 == null))?null:cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(G__22474));var G__22474__$2 = (((G__22474__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22474__$1));return G__22474__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22474 = site_stats;var G__22474__$1 = (((G__22474 == null))?null:cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(G__22474));var G__22474__$2 = (((G__22474__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22474__$1));return G__22474__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22475 = site_stats;var G__22475__$1 = (((G__22475 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22475));var G__22475__$2 = (((G__22475__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22475__$1));return G__22475__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22475 = site_stats;var G__22475__$1 = (((G__22475 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22475));var G__22475__$2 = (((G__22475__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22475__$1));return G__22475__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22476 = site_stats;var G__22476__$1 = (((G__22476 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22476));var G__22476__$2 = (((G__22476__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22476__$1));return G__22476__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22476 = site_stats;var G__22476__$1 = (((G__22476 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22476));var G__22476__$2 = (((G__22476__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22476__$1));return G__22476__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-"))])], 0)),cljs.core.constant$keyword$343,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$347,cljs.core.constant$keyword$348,cljs.core.constant$keyword$349,cljs.core.constant$keyword$350,cljs.core.constant$keyword$351,cljs.core.constant$keyword$352,cljs.core.constant$keyword$353,cljs.core.constant$keyword$354,cljs.core.constant$keyword$355],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22477 = all_investment_stats;var G__22477__$1 = (((G__22477 == null))?null:cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(G__22477));return G__22477__$1;
})(),cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22477 = all_investment_stats;var G__22477__$1 = (((G__22477 == null))?null:cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(G__22477));return G__22477__$1;
})(),cljs.core.constant$keyword$245,"-")),(function (){var G__22478 = all_investment_stats;var G__22478__$1 = (((G__22478 == null))?null:cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(G__22478));var G__22478__$2 = (((G__22478__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22478__$1));return G__22478__$2;
})(),(function (){var G__22479 = all_investment_stats;var G__22479__$1 = (((G__22479 == null))?null:cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(G__22479));var G__22479__$2 = (((G__22479__$1 == null))?null:cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(G__22479__$1));return G__22479__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22480 = all_investment_stats;var G__22480__$1 = (((G__22480 == null))?null:cljs.core.constant$keyword$360.cljs$core$IFn$_invoke$arity$1(G__22480));return G__22480__$1;
})(),cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22480 = all_investment_stats;var G__22480__$1 = (((G__22480 == null))?null:cljs.core.constant$keyword$360.cljs$core$IFn$_invoke$arity$1(G__22480));return G__22480__$1;
})(),cljs.core.constant$keyword$245,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22481 = all_investment_stats;var G__22481__$1 = (((G__22481 == null))?null:cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(G__22481));var G__22481__$2 = (((G__22481__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22481__$1));return G__22481__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22481 = all_investment_stats;var G__22481__$1 = (((G__22481 == null))?null:cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(G__22481));var G__22481__$2 = (((G__22481__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22481__$1));return G__22481__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22482 = all_investment_stats;var G__22482__$1 = (((G__22482 == null))?null:cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(G__22482));var G__22482__$2 = (((G__22482__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22482__$1));return G__22482__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22482 = all_investment_stats;var G__22482__$1 = (((G__22482 == null))?null:cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(G__22482));var G__22482__$2 = (((G__22482__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22482__$1));return G__22482__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22483 = all_investment_stats;var G__22483__$1 = (((G__22483 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22483));var G__22483__$2 = (((G__22483__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22483__$1));return G__22483__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22483 = all_investment_stats;var G__22483__$1 = (((G__22483 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22483));var G__22483__$2 = (((G__22483__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22483__$1));return G__22483__$2;
})(),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22484 = all_investment_stats;var G__22484__$1 = (((G__22484 == null))?null:cljs.core.constant$keyword$362.cljs$core$IFn$_invoke$arity$1(G__22484));return G__22484__$1;
})(),cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22484 = all_investment_stats;var G__22484__$1 = (((G__22484 == null))?null:cljs.core.constant$keyword$362.cljs$core$IFn$_invoke$arity$1(G__22484));return G__22484__$1;
})(),cljs.core.constant$keyword$245,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22485 = all_investment_stats;var G__22485__$1 = (((G__22485 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22485));var G__22485__$2 = (((G__22485__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22485__$1));return G__22485__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22485 = all_investment_stats;var G__22485__$1 = (((G__22485 == null))?null:cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(G__22485));var G__22485__$2 = (((G__22485__$1 == null))?null:cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(G__22485__$1));return G__22485__$2;
})(),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-"))])], 0))], null);
});
clustermap.components.full_report.overview.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__22529 = clustermap.components.full_report.overview.overview_data(data);var map__22529__$1 = ((cljs.core.seq_QMARK_(map__22529))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22529):map__22529);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22529__$1,cljs.core.constant$keyword$343);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22529__$1,cljs.core.constant$keyword$342);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22529__$1,cljs.core.constant$keyword$328);if(typeof clustermap.components.full_report.overview.t22530 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t22530 = (function (selection,averages,benchmark,map__22529,data,overview,meta22531){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__22529 = map__22529;
this.data = data;
this.overview = overview;
this.meta22531 = meta22531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t22530.cljs$lang$type = true;
clustermap.components.full_report.overview.t22530.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t22530";
clustermap.components.full_report.overview.t22530.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t22530");
});
clustermap.components.full_report.overview.t22530.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t22530.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$344) : self__.selection.call(null,cljs.core.constant$keyword$344))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$296) : self__.selection.call(null,cljs.core.constant$keyword$296)))),React.DOM.td(null,(function (){var attrs22537 = cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22537))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22537], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22537));
}
})()),React.DOM.td(null,(function (){var attrs22538 = cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22538))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22538], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22538));
}
})()),React.DOM.td(null,(function (){var attrs22539 = cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22539))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22539], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22539));
}
})()),React.DOM.td(null,(function (){var attrs22540 = cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22540))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22540], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22540));
}
})()),React.DOM.td(null,(function (){var attrs22541 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22541))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22541], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22541));
}
})()),React.DOM.td(null,(function (){var attrs22542 = cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22542))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22542], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22542));
}
})()),React.DOM.td(null,(function (){var attrs22543 = cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22543))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22543], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22543));
}
})()),React.DOM.td(null,(function (){var attrs22544 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22544))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22544], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22544));
}
})()),React.DOM.td(null,(function (){var attrs22545 = cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22545))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22545], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22545));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$344) : self__.averages.call(null,cljs.core.constant$keyword$344))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$296) : self__.averages.call(null,cljs.core.constant$keyword$296)))),React.DOM.td(null,(function (){var attrs22546 = cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22546))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22546], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22546));
}
})()),React.DOM.td(null,(function (){var attrs22547 = cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22547))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22547], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22547));
}
})()),React.DOM.td(null,(function (){var attrs22548 = cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22548))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22548], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22548));
}
})()),React.DOM.td(null,(function (){var attrs22549 = cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22549))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22549], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22549));
}
})()),React.DOM.td(null,(function (){var attrs22550 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22550))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22550], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22550));
}
})()),React.DOM.td(null,(function (){var attrs22551 = cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22551))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22551], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22551));
}
})()),React.DOM.td(null,(function (){var attrs22552 = cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22552))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22552], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22552));
}
})()),React.DOM.td(null,(function (){var attrs22553 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22553))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22553], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22553));
}
})()),React.DOM.td(null,(function (){var attrs22554 = cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22554))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22554], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22554));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$344) : self__.benchmark.call(null,cljs.core.constant$keyword$344))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$296) : self__.benchmark.call(null,cljs.core.constant$keyword$296)))),React.DOM.td(null,(function (){var attrs22555 = cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22555))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22555], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22555));
}
})()),React.DOM.td(null,(function (){var attrs22556 = cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22556))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22556], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22556));
}
})()),React.DOM.td(null,(function (){var attrs22557 = cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22557))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22557], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22557));
}
})()),React.DOM.td(null,(function (){var attrs22558 = cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22558))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22558], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22558));
}
})()),React.DOM.td(null,(function (){var attrs22559 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22559))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22559], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22559));
}
})()),React.DOM.td(null,(function (){var attrs22560 = cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22560))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22560], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22560));
}
})()),React.DOM.td(null,(function (){var attrs22561 = cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22561))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22561], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22561));
}
})()),React.DOM.td(null,(function (){var attrs22562 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22562))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22562], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22562));
}
})()),React.DOM.td(null,(function (){var attrs22563 = cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22563))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22563], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22563));
}
})()))))));
});
clustermap.components.full_report.overview.t22530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22532){var self__ = this;
var _22532__$1 = this;return self__.meta22531;
});
clustermap.components.full_report.overview.t22530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22532,meta22531__$1){var self__ = this;
var _22532__$1 = this;return (new clustermap.components.full_report.overview.t22530(self__.selection,self__.averages,self__.benchmark,self__.map__22529,self__.data,self__.overview,meta22531__$1));
});
clustermap.components.full_report.overview.__GT_t22530 = (function __GT_t22530(selection__$1,averages__$1,benchmark__$1,map__22529__$2,data__$1,overview__$1,meta22531){return (new clustermap.components.full_report.overview.t22530(selection__$1,averages__$1,benchmark__$1,map__22529__$2,data__$1,overview__$1,meta22531));
});
}
return (new clustermap.components.full_report.overview.t22530(selection,averages,benchmark,map__22529__$1,data,overview,null));
});
