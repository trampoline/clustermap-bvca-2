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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__22389){var map__22394 = p__22389;var map__22394__$1 = ((cljs.core.seq_QMARK_(map__22394))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22394):map__22394);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22394__$1,cljs.core.constant$keyword$235);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22394__$1,cljs.core.constant$keyword$270);var pred__22395 = cljs.core._EQ_;var expr__22396 = type;if(cljs.core.truth_((pred__22395.cljs$core$IFn$_invoke$arity$2 ? pred__22395.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,expr__22396) : pred__22395.call(null,cljs.core.constant$keyword$303,expr__22396))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Total",cljs.core.constant$keyword$320,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$318,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Average",cljs.core.constant$keyword$320,"Averages for the selected Portfolio Company"], null),cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Benchmark",cljs.core.constant$keyword$320,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22395.cljs$core$IFn$_invoke$arity$2 ? pred__22395.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$304,expr__22396) : pred__22395.call(null,cljs.core.constant$keyword$304,expr__22396))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Total",cljs.core.constant$keyword$320,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$318,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Average",cljs.core.constant$keyword$320,"Averages over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Benchmark",cljs.core.constant$keyword$320,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22395.cljs$core$IFn$_invoke$arity$2 ? pred__22395.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$305,expr__22396) : pred__22395.call(null,cljs.core.constant$keyword$305,expr__22396))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Total",cljs.core.constant$keyword$320,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$318,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Average",cljs.core.constant$keyword$320,"Averages over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Benchmark",cljs.core.constant$keyword$320,"Averages over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Total",cljs.core.constant$keyword$320,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$318,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Average",cljs.core.constant$keyword$320,"Averages over all Portfolio Companies"], null),cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,"Benchmark",cljs.core.constant$keyword$320,"Averages over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__22398){var map__22424 = p__22398;var map__22424__$1 = ((cljs.core.seq_QMARK_(map__22424))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22424):map__22424);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22424__$1,cljs.core.constant$keyword$321);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22424__$1,cljs.core.constant$keyword$309);var all_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22424__$1,cljs.core.constant$keyword$322);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$309,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$323,cljs.core.constant$keyword$324,cljs.core.constant$keyword$325,cljs.core.constant$keyword$326,cljs.core.constant$keyword$327,cljs.core.constant$keyword$328,cljs.core.constant$keyword$329,cljs.core.constant$keyword$330,cljs.core.constant$keyword$331],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22425 = site_stats;var G__22425__$1 = (((G__22425 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22425));return G__22425__$1;
})(),cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22425 = site_stats;var G__22425__$1 = (((G__22425 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22425));return G__22425__$1;
})(),cljs.core.constant$keyword$231,"-")),(function (){var G__22426 = site_stats;var G__22426__$1 = (((G__22426 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22426));var G__22426__$2 = (((G__22426__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22426__$1));return G__22426__$2;
})(),(function (){var G__22427 = site_stats;var G__22427__$1 = (((G__22427 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22427));var G__22427__$2 = (((G__22427__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22427__$1));return G__22427__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22428 = site_stats;var G__22428__$1 = (((G__22428 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22428));return G__22428__$1;
})(),cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22428 = site_stats;var G__22428__$1 = (((G__22428 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22428));return G__22428__$1;
})(),cljs.core.constant$keyword$231,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22429 = site_stats;var G__22429__$1 = (((G__22429 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22429));var G__22429__$2 = (((G__22429__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22429__$1));return G__22429__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22429 = site_stats;var G__22429__$1 = (((G__22429 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22429));var G__22429__$2 = (((G__22429__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22429__$1));return G__22429__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22430 = site_stats;var G__22430__$1 = (((G__22430 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22430));var G__22430__$2 = (((G__22430__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22430__$1));return G__22430__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22430 = site_stats;var G__22430__$1 = (((G__22430 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22430));var G__22430__$2 = (((G__22430__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22430__$1));return G__22430__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22431 = site_stats;var G__22431__$1 = (((G__22431 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22431));var G__22431__$2 = (((G__22431__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22431__$1));return G__22431__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22431 = site_stats;var G__22431__$1 = (((G__22431 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22431));var G__22431__$2 = (((G__22431__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22431__$1));return G__22431__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22432 = site_stats;var G__22432__$1 = (((G__22432 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22432));return G__22432__$1;
})(),cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22432 = site_stats;var G__22432__$1 = (((G__22432 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22432));return G__22432__$1;
})(),cljs.core.constant$keyword$231,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22433 = site_stats;var G__22433__$1 = (((G__22433 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22433));var G__22433__$2 = (((G__22433__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22433__$1));return G__22433__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22433 = site_stats;var G__22433__$1 = (((G__22433 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22433));var G__22433__$2 = (((G__22433__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22433__$1));return G__22433__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"))])], 0)),cljs.core.constant$keyword$318,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$323,cljs.core.constant$keyword$324,cljs.core.constant$keyword$325,cljs.core.constant$keyword$326,cljs.core.constant$keyword$327,cljs.core.constant$keyword$328,cljs.core.constant$keyword$329,cljs.core.constant$keyword$330,cljs.core.constant$keyword$331],["\u00A0",(function (){var G__22434 = site_stats;var G__22434__$1 = (((G__22434 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22434));var G__22434__$2 = (((G__22434__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22434__$1));return G__22434__$2;
})(),(function (){var G__22435 = site_stats;var G__22435__$1 = (((G__22435 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22435));var G__22435__$2 = (((G__22435__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22435__$1));return G__22435__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22436 = site_stats;var G__22436__$1 = (((G__22436 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22436));var G__22436__$2 = (((G__22436__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22436__$1));return G__22436__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22436 = site_stats;var G__22436__$1 = (((G__22436 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22436));var G__22436__$2 = (((G__22436__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22436__$1));return G__22436__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22437 = site_stats;var G__22437__$1 = (((G__22437 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22437));var G__22437__$2 = (((G__22437__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22437__$1));return G__22437__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22437 = site_stats;var G__22437__$1 = (((G__22437 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22437));var G__22437__$2 = (((G__22437__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22437__$1));return G__22437__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22438 = site_stats;var G__22438__$1 = (((G__22438 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22438));var G__22438__$2 = (((G__22438__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22438__$1));return G__22438__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22438 = site_stats;var G__22438__$1 = (((G__22438 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22438));var G__22438__$2 = (((G__22438__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22438__$1));return G__22438__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22439 = site_stats;var G__22439__$1 = (((G__22439 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22439));var G__22439__$2 = (((G__22439__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22439__$1));return G__22439__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22439 = site_stats;var G__22439__$1 = (((G__22439 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22439));var G__22439__$2 = (((G__22439__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22439__$1));return G__22439__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"))])], 0)),cljs.core.constant$keyword$319,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$323,cljs.core.constant$keyword$324,cljs.core.constant$keyword$325,cljs.core.constant$keyword$326,cljs.core.constant$keyword$327,cljs.core.constant$keyword$328,cljs.core.constant$keyword$329,cljs.core.constant$keyword$330,cljs.core.constant$keyword$331],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22440 = all_portfolio_company_site_stats;var G__22440__$1 = (((G__22440 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22440));return G__22440__$1;
})(),cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22440 = all_portfolio_company_site_stats;var G__22440__$1 = (((G__22440 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22440));return G__22440__$1;
})(),cljs.core.constant$keyword$231,"-")),(function (){var G__22441 = all_portfolio_company_site_stats;var G__22441__$1 = (((G__22441 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22441));var G__22441__$2 = (((G__22441__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22441__$1));return G__22441__$2;
})(),(function (){var G__22442 = all_portfolio_company_site_stats;var G__22442__$1 = (((G__22442 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22442));var G__22442__$2 = (((G__22442__$1 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22442__$1));return G__22442__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22443 = all_portfolio_company_site_stats;var G__22443__$1 = (((G__22443 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22443));return G__22443__$1;
})(),cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22443 = all_portfolio_company_site_stats;var G__22443__$1 = (((G__22443 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22443));return G__22443__$1;
})(),cljs.core.constant$keyword$231,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22444 = all_portfolio_company_site_stats;var G__22444__$1 = (((G__22444 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22444));var G__22444__$2 = (((G__22444__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22444__$1));return G__22444__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22444 = all_portfolio_company_site_stats;var G__22444__$1 = (((G__22444 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22444));var G__22444__$2 = (((G__22444__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22444__$1));return G__22444__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22445 = all_portfolio_company_site_stats;var G__22445__$1 = (((G__22445 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22445));var G__22445__$2 = (((G__22445__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22445__$1));return G__22445__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22445 = all_portfolio_company_site_stats;var G__22445__$1 = (((G__22445 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22445));var G__22445__$2 = (((G__22445__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22445__$1));return G__22445__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22446 = all_portfolio_company_site_stats;var G__22446__$1 = (((G__22446 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22446));var G__22446__$2 = (((G__22446__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22446__$1));return G__22446__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22446 = all_portfolio_company_site_stats;var G__22446__$1 = (((G__22446 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22446));var G__22446__$2 = (((G__22446__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22446__$1));return G__22446__$2;
})(),cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$231,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22447 = all_portfolio_company_site_stats;var G__22447__$1 = (((G__22447 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22447));return G__22447__$1;
})(),cljs.core.constant$keyword$231,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22447 = all_portfolio_company_site_stats;var G__22447__$1 = (((G__22447 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22447));return G__22447__$1;
})(),cljs.core.constant$keyword$231,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22448 = all_portfolio_company_site_stats;var G__22448__$1 = (((G__22448 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22448));var G__22448__$2 = (((G__22448__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22448__$1));return G__22448__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22448 = all_portfolio_company_site_stats;var G__22448__$1 = (((G__22448 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22448));var G__22448__$2 = (((G__22448__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__22448__$1));return G__22448__$2;
})(),cljs.core.constant$keyword$299,2,cljs.core.constant$keyword$231,"-"))])], 0))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__22492 = clustermap.components.full_report.overview.overview_data(data);var map__22492__$1 = ((cljs.core.seq_QMARK_(map__22492))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22492):map__22492);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22492__$1,cljs.core.constant$keyword$319);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22492__$1,cljs.core.constant$keyword$318);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22492__$1,cljs.core.constant$keyword$309);if(typeof clustermap.components.full_report.overview.t22493 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t22493 = (function (selection,averages,benchmark,map__22492,data,overview,meta22494){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__22492 = map__22492;
this.data = data;
this.overview = overview;
this.meta22494 = meta22494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t22493.cljs$lang$type = true;
clustermap.components.full_report.overview.t22493.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t22493";
clustermap.components.full_report.overview.t22493.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t22493");
});
clustermap.components.full_report.overview.t22493.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t22493.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$320) : self__.selection.call(null,cljs.core.constant$keyword$320))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$280) : self__.selection.call(null,cljs.core.constant$keyword$280)))),React.DOM.td(null,(function (){var attrs22500 = cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22500))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22500], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22500));
}
})()),React.DOM.td(null,(function (){var attrs22501 = cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22501))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22501], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22501));
}
})()),React.DOM.td(null,(function (){var attrs22502 = cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22502))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22502], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22502));
}
})()),React.DOM.td(null,(function (){var attrs22503 = cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22503))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22503], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22503));
}
})()),React.DOM.td(null,(function (){var attrs22504 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22504))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22504], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22504));
}
})()),React.DOM.td(null,(function (){var attrs22505 = cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22505))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22505], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22505));
}
})()),React.DOM.td(null,(function (){var attrs22506 = cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22506))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22506], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22506));
}
})()),React.DOM.td(null,(function (){var attrs22507 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22507))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22507], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22507));
}
})()),React.DOM.td(null,(function (){var attrs22508 = cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22508))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22508], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22508));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$320) : self__.averages.call(null,cljs.core.constant$keyword$320))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$280) : self__.averages.call(null,cljs.core.constant$keyword$280)))),React.DOM.td(null,(function (){var attrs22509 = cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22509))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22509], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22509));
}
})()),React.DOM.td(null,(function (){var attrs22510 = cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22510))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22510], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22510));
}
})()),React.DOM.td(null,(function (){var attrs22511 = cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22511))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22511], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22511));
}
})()),React.DOM.td(null,(function (){var attrs22512 = cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22512))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22512], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22512));
}
})()),React.DOM.td(null,(function (){var attrs22513 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22513))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22513], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22513));
}
})()),React.DOM.td(null,(function (){var attrs22514 = cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22514))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22514], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22514));
}
})()),React.DOM.td(null,(function (){var attrs22515 = cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22515))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22515], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22515));
}
})()),React.DOM.td(null,(function (){var attrs22516 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22516))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22516], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22516));
}
})()),React.DOM.td(null,(function (){var attrs22517 = cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22517))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22517], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22517));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$320) : self__.benchmark.call(null,cljs.core.constant$keyword$320))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$280) : self__.benchmark.call(null,cljs.core.constant$keyword$280)))),React.DOM.td(null,(function (){var attrs22518 = cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22518))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22518], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22518));
}
})()),React.DOM.td(null,(function (){var attrs22519 = cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22519))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22519], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22519));
}
})()),React.DOM.td(null,(function (){var attrs22520 = cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22520))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22520], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22520));
}
})()),React.DOM.td(null,(function (){var attrs22521 = cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22521))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22521], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22521));
}
})()),React.DOM.td(null,(function (){var attrs22522 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22522))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22522], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22522));
}
})()),React.DOM.td(null,(function (){var attrs22523 = cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22523))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22523], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22523));
}
})()),React.DOM.td(null,(function (){var attrs22524 = cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22524))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22524], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22524));
}
})()),React.DOM.td(null,(function (){var attrs22525 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22525))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22525], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22525));
}
})()),React.DOM.td(null,(function (){var attrs22526 = cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22526))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22526], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22526));
}
})()))))));
});
clustermap.components.full_report.overview.t22493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22495){var self__ = this;
var _22495__$1 = this;return self__.meta22494;
});
clustermap.components.full_report.overview.t22493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22495,meta22494__$1){var self__ = this;
var _22495__$1 = this;return (new clustermap.components.full_report.overview.t22493(self__.selection,self__.averages,self__.benchmark,self__.map__22492,self__.data,self__.overview,meta22494__$1));
});
clustermap.components.full_report.overview.__GT_t22493 = (function __GT_t22493(selection__$1,averages__$1,benchmark__$1,map__22492__$2,data__$1,overview__$1,meta22494){return (new clustermap.components.full_report.overview.t22493(selection__$1,averages__$1,benchmark__$1,map__22492__$2,data__$1,overview__$1,meta22494));
});
}
return (new clustermap.components.full_report.overview.t22493(selection,averages,benchmark,map__22492__$1,data,overview,null));
});
