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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__22244){var map__22249 = p__22244;var map__22249__$1 = ((cljs.core.seq_QMARK_(map__22249))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22249):map__22249);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22249__$1,cljs.core.constant$keyword$228);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22249__$1,cljs.core.constant$keyword$263);var pred__22250 = cljs.core._EQ_;var expr__22251 = type;if(cljs.core.truth_((pred__22250.cljs$core$IFn$_invoke$arity$2 ? pred__22250.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,expr__22251) : pred__22250.call(null,cljs.core.constant$keyword$296,expr__22251))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Total",cljs.core.constant$keyword$312,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Average",cljs.core.constant$keyword$312,"Averages for the selected Portfolio Company"], null),cljs.core.constant$keyword$311,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Benchmark",cljs.core.constant$keyword$312,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22250.cljs$core$IFn$_invoke$arity$2 ? pred__22250.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,expr__22251) : pred__22250.call(null,cljs.core.constant$keyword$297,expr__22251))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Total",cljs.core.constant$keyword$312,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Average",cljs.core.constant$keyword$312,"Averages over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$311,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Benchmark",cljs.core.constant$keyword$312,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22250.cljs$core$IFn$_invoke$arity$2 ? pred__22250.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$298,expr__22251) : pred__22250.call(null,cljs.core.constant$keyword$298,expr__22251))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Total",cljs.core.constant$keyword$312,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Average",cljs.core.constant$keyword$312,"Averages over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$311,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Benchmark",cljs.core.constant$keyword$312,"Averages over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$301,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Total",cljs.core.constant$keyword$312,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Average",cljs.core.constant$keyword$312,"Averages over all Portfolio Companies"], null),cljs.core.constant$keyword$311,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,"Benchmark",cljs.core.constant$keyword$312,"Averages over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__22253){var map__22279 = p__22253;var map__22279__$1 = ((cljs.core.seq_QMARK_(map__22279))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22279):map__22279);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22279__$1,cljs.core.constant$keyword$313);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22279__$1,cljs.core.constant$keyword$301);var all_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22279__$1,cljs.core.constant$keyword$314);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$301,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319,cljs.core.constant$keyword$320,cljs.core.constant$keyword$321,cljs.core.constant$keyword$322,cljs.core.constant$keyword$323],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22280 = site_stats;var G__22280__$1 = (((G__22280 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22280));return G__22280__$1;
})(),cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22280 = site_stats;var G__22280__$1 = (((G__22280 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22280));return G__22280__$1;
})(),cljs.core.constant$keyword$224,"-")),(function (){var G__22281 = site_stats;var G__22281__$1 = (((G__22281 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22281));var G__22281__$2 = (((G__22281__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22281__$1));return G__22281__$2;
})(),(function (){var G__22282 = site_stats;var G__22282__$1 = (((G__22282 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22282));var G__22282__$2 = (((G__22282__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22282__$1));return G__22282__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22283 = site_stats;var G__22283__$1 = (((G__22283 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22283));return G__22283__$1;
})(),cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22283 = site_stats;var G__22283__$1 = (((G__22283 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22283));return G__22283__$1;
})(),cljs.core.constant$keyword$224,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22284 = site_stats;var G__22284__$1 = (((G__22284 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22284));var G__22284__$2 = (((G__22284__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22284__$1));return G__22284__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22284 = site_stats;var G__22284__$1 = (((G__22284 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22284));var G__22284__$2 = (((G__22284__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22284__$1));return G__22284__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22285 = site_stats;var G__22285__$1 = (((G__22285 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22285));var G__22285__$2 = (((G__22285__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22285__$1));return G__22285__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22285 = site_stats;var G__22285__$1 = (((G__22285 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22285));var G__22285__$2 = (((G__22285__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22285__$1));return G__22285__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22286 = site_stats;var G__22286__$1 = (((G__22286 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22286));var G__22286__$2 = (((G__22286__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22286__$1));return G__22286__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22286 = site_stats;var G__22286__$1 = (((G__22286 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22286));var G__22286__$2 = (((G__22286__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22286__$1));return G__22286__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22287 = site_stats;var G__22287__$1 = (((G__22287 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22287));return G__22287__$1;
})(),cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22287 = site_stats;var G__22287__$1 = (((G__22287 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22287));return G__22287__$1;
})(),cljs.core.constant$keyword$224,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22288 = site_stats;var G__22288__$1 = (((G__22288 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22288));var G__22288__$2 = (((G__22288__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22288__$1));return G__22288__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22288 = site_stats;var G__22288__$1 = (((G__22288 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22288));var G__22288__$2 = (((G__22288__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22288__$1));return G__22288__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"))])], 0)),cljs.core.constant$keyword$310,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319,cljs.core.constant$keyword$320,cljs.core.constant$keyword$321,cljs.core.constant$keyword$322,cljs.core.constant$keyword$323],["\u00A0",(function (){var G__22289 = site_stats;var G__22289__$1 = (((G__22289 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22289));var G__22289__$2 = (((G__22289__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22289__$1));return G__22289__$2;
})(),(function (){var G__22290 = site_stats;var G__22290__$1 = (((G__22290 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22290));var G__22290__$2 = (((G__22290__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22290__$1));return G__22290__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22291 = site_stats;var G__22291__$1 = (((G__22291 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22291));var G__22291__$2 = (((G__22291__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22291__$1));return G__22291__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22291 = site_stats;var G__22291__$1 = (((G__22291 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22291));var G__22291__$2 = (((G__22291__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22291__$1));return G__22291__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22292 = site_stats;var G__22292__$1 = (((G__22292 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22292));var G__22292__$2 = (((G__22292__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22292__$1));return G__22292__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22292 = site_stats;var G__22292__$1 = (((G__22292 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22292));var G__22292__$2 = (((G__22292__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22292__$1));return G__22292__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22293 = site_stats;var G__22293__$1 = (((G__22293 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22293));var G__22293__$2 = (((G__22293__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22293__$1));return G__22293__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22293 = site_stats;var G__22293__$1 = (((G__22293 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22293));var G__22293__$2 = (((G__22293__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22293__$1));return G__22293__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22294 = site_stats;var G__22294__$1 = (((G__22294 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22294));var G__22294__$2 = (((G__22294__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22294__$1));return G__22294__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22294 = site_stats;var G__22294__$1 = (((G__22294 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22294));var G__22294__$2 = (((G__22294__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22294__$1));return G__22294__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"))])], 0)),cljs.core.constant$keyword$311,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319,cljs.core.constant$keyword$320,cljs.core.constant$keyword$321,cljs.core.constant$keyword$322,cljs.core.constant$keyword$323],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22295 = all_portfolio_company_site_stats;var G__22295__$1 = (((G__22295 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22295));return G__22295__$1;
})(),cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22295 = all_portfolio_company_site_stats;var G__22295__$1 = (((G__22295 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22295));return G__22295__$1;
})(),cljs.core.constant$keyword$224,"-")),(function (){var G__22296 = all_portfolio_company_site_stats;var G__22296__$1 = (((G__22296 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22296));var G__22296__$2 = (((G__22296__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22296__$1));return G__22296__$2;
})(),(function (){var G__22297 = all_portfolio_company_site_stats;var G__22297__$1 = (((G__22297 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22297));var G__22297__$2 = (((G__22297__$1 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22297__$1));return G__22297__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22298 = all_portfolio_company_site_stats;var G__22298__$1 = (((G__22298 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22298));return G__22298__$1;
})(),cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22298 = all_portfolio_company_site_stats;var G__22298__$1 = (((G__22298 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__22298));return G__22298__$1;
})(),cljs.core.constant$keyword$224,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22299 = all_portfolio_company_site_stats;var G__22299__$1 = (((G__22299 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22299));var G__22299__$2 = (((G__22299__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22299__$1));return G__22299__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22299 = all_portfolio_company_site_stats;var G__22299__$1 = (((G__22299 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22299));var G__22299__$2 = (((G__22299__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22299__$1));return G__22299__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22300 = all_portfolio_company_site_stats;var G__22300__$1 = (((G__22300 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22300));var G__22300__$2 = (((G__22300__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22300__$1));return G__22300__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22300 = all_portfolio_company_site_stats;var G__22300__$1 = (((G__22300 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22300));var G__22300__$2 = (((G__22300__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22300__$1));return G__22300__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22301 = all_portfolio_company_site_stats;var G__22301__$1 = (((G__22301 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22301));var G__22301__$2 = (((G__22301__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22301__$1));return G__22301__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22301 = all_portfolio_company_site_stats;var G__22301__$1 = (((G__22301 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__22301));var G__22301__$2 = (((G__22301__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22301__$1));return G__22301__$2;
})(),cljs.core.constant$keyword$294,0,cljs.core.constant$keyword$224,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22302 = all_portfolio_company_site_stats;var G__22302__$1 = (((G__22302 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22302));return G__22302__$1;
})(),cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22302 = all_portfolio_company_site_stats;var G__22302__$1 = (((G__22302 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22302));return G__22302__$1;
})(),cljs.core.constant$keyword$224,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22303 = all_portfolio_company_site_stats;var G__22303__$1 = (((G__22303 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22303));var G__22303__$2 = (((G__22303__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22303__$1));return G__22303__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22303 = all_portfolio_company_site_stats;var G__22303__$1 = (((G__22303 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22303));var G__22303__$2 = (((G__22303__$1 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22303__$1));return G__22303__$2;
})(),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"))])], 0))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__22347 = clustermap.components.full_report.overview.overview_data(data);var map__22347__$1 = ((cljs.core.seq_QMARK_(map__22347))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22347):map__22347);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22347__$1,cljs.core.constant$keyword$311);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22347__$1,cljs.core.constant$keyword$310);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22347__$1,cljs.core.constant$keyword$301);if(typeof clustermap.components.full_report.overview.t22348 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t22348 = (function (selection,averages,benchmark,map__22347,data,overview,meta22349){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__22347 = map__22347;
this.data = data;
this.overview = overview;
this.meta22349 = meta22349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t22348.cljs$lang$type = true;
clustermap.components.full_report.overview.t22348.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t22348";
clustermap.components.full_report.overview.t22348.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t22348");
});
clustermap.components.full_report.overview.t22348.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t22348.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$312) : self__.selection.call(null,cljs.core.constant$keyword$312))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$273) : self__.selection.call(null,cljs.core.constant$keyword$273)))),React.DOM.td(null,(function (){var attrs22355 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22355))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22355], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22355));
}
})()),React.DOM.td(null,(function (){var attrs22356 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22356))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22356], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22356));
}
})()),React.DOM.td(null,(function (){var attrs22357 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22357))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22357], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22357));
}
})()),React.DOM.td(null,(function (){var attrs22358 = cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22358))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22358], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22358));
}
})()),React.DOM.td(null,(function (){var attrs22359 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22359))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22359], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22359));
}
})()),React.DOM.td(null,(function (){var attrs22360 = cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22360))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22360], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22360));
}
})()),React.DOM.td(null,(function (){var attrs22361 = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22361))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22361], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22361));
}
})()),React.DOM.td(null,(function (){var attrs22362 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22362))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22362], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22362));
}
})()),React.DOM.td(null,(function (){var attrs22363 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22363))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22363], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22363));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$312) : self__.averages.call(null,cljs.core.constant$keyword$312))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$273) : self__.averages.call(null,cljs.core.constant$keyword$273)))),React.DOM.td(null,(function (){var attrs22364 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22364))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22364], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22364));
}
})()),React.DOM.td(null,(function (){var attrs22365 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22365))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22365], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22365));
}
})()),React.DOM.td(null,(function (){var attrs22366 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22366))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22366], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22366));
}
})()),React.DOM.td(null,(function (){var attrs22367 = cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22367))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22367], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22367));
}
})()),React.DOM.td(null,(function (){var attrs22368 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22368))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22368], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22368));
}
})()),React.DOM.td(null,(function (){var attrs22369 = cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22369))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22369], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22369));
}
})()),React.DOM.td(null,(function (){var attrs22370 = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22370))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22370], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22370));
}
})()),React.DOM.td(null,(function (){var attrs22371 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22371))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22371], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22371));
}
})()),React.DOM.td(null,(function (){var attrs22372 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22372))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22372], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22372));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$312) : self__.benchmark.call(null,cljs.core.constant$keyword$312))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$273) : self__.benchmark.call(null,cljs.core.constant$keyword$273)))),React.DOM.td(null,(function (){var attrs22373 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22373))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22373], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22373));
}
})()),React.DOM.td(null,(function (){var attrs22374 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22374))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22374], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22374));
}
})()),React.DOM.td(null,(function (){var attrs22375 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22375))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22375], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22375));
}
})()),React.DOM.td(null,(function (){var attrs22376 = cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22376))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22376], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22376));
}
})()),React.DOM.td(null,(function (){var attrs22377 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22377))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22377], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22377));
}
})()),React.DOM.td(null,(function (){var attrs22378 = cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22378))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22378], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22378));
}
})()),React.DOM.td(null,(function (){var attrs22379 = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22379))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22379], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22379));
}
})()),React.DOM.td(null,(function (){var attrs22380 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22380))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22380], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22380));
}
})()),React.DOM.td(null,(function (){var attrs22381 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22381))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22381], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22381));
}
})()))))));
});
clustermap.components.full_report.overview.t22348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22350){var self__ = this;
var _22350__$1 = this;return self__.meta22349;
});
clustermap.components.full_report.overview.t22348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22350,meta22349__$1){var self__ = this;
var _22350__$1 = this;return (new clustermap.components.full_report.overview.t22348(self__.selection,self__.averages,self__.benchmark,self__.map__22347,self__.data,self__.overview,meta22349__$1));
});
clustermap.components.full_report.overview.__GT_t22348 = (function __GT_t22348(selection__$1,averages__$1,benchmark__$1,map__22347__$2,data__$1,overview__$1,meta22349){return (new clustermap.components.full_report.overview.t22348(selection__$1,averages__$1,benchmark__$1,map__22347__$2,data__$1,overview__$1,meta22349));
});
}
return (new clustermap.components.full_report.overview.t22348(selection,averages,benchmark,map__22347__$1,data,overview,null));
});
