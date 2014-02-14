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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__22195){var map__22200 = p__22195;var map__22200__$1 = ((cljs.core.seq_QMARK_(map__22200))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22200):map__22200);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22200__$1,cljs.core.constant$keyword$226);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22200__$1,cljs.core.constant$keyword$259);var pred__22201 = cljs.core._EQ_;var expr__22202 = type;if(cljs.core.truth_((pred__22201.cljs$core$IFn$_invoke$arity$2 ? pred__22201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$292,expr__22202) : pred__22201.call(null,cljs.core.constant$keyword$292,expr__22202))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Total",cljs.core.constant$keyword$308,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Average",cljs.core.constant$keyword$308,"Averages for the selected Portfolio Company"], null),cljs.core.constant$keyword$307,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Benchmark",cljs.core.constant$keyword$308,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22201.cljs$core$IFn$_invoke$arity$2 ? pred__22201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$293,expr__22202) : pred__22201.call(null,cljs.core.constant$keyword$293,expr__22202))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Total",cljs.core.constant$keyword$308,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Average",cljs.core.constant$keyword$308,"Averages over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$307,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Benchmark",cljs.core.constant$keyword$308,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22201.cljs$core$IFn$_invoke$arity$2 ? pred__22201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$294,expr__22202) : pred__22201.call(null,cljs.core.constant$keyword$294,expr__22202))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Total",cljs.core.constant$keyword$308,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Average",cljs.core.constant$keyword$308,"Averages over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$307,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Benchmark",cljs.core.constant$keyword$308,"Averages over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Total",cljs.core.constant$keyword$308,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Average",cljs.core.constant$keyword$308,"Averages over all Portfolio Companies"], null),cljs.core.constant$keyword$307,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,"Benchmark",cljs.core.constant$keyword$308,"Averages over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__22204){var map__22230 = p__22204;var map__22230__$1 = ((cljs.core.seq_QMARK_(map__22230))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22230):map__22230);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22230__$1,cljs.core.constant$keyword$309);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22230__$1,cljs.core.constant$keyword$297);var all_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22230__$1,cljs.core.constant$keyword$310);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$297,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$297.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$311,cljs.core.constant$keyword$312,cljs.core.constant$keyword$313,cljs.core.constant$keyword$314,cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22231 = site_stats;var G__22231__$1 = (((G__22231 == null))?null:cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(G__22231));return G__22231__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22231 = site_stats;var G__22231__$1 = (((G__22231 == null))?null:cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(G__22231));return G__22231__$1;
})(),cljs.core.constant$keyword$222,"-")),(function (){var G__22232 = site_stats;var G__22232__$1 = (((G__22232 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22232));var G__22232__$2 = (((G__22232__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22232__$1));return G__22232__$2;
})(),(function (){var G__22233 = site_stats;var G__22233__$1 = (((G__22233 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22233));var G__22233__$2 = (((G__22233__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22233__$1));return G__22233__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22234 = site_stats;var G__22234__$1 = (((G__22234 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22234));return G__22234__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22234 = site_stats;var G__22234__$1 = (((G__22234 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22234));return G__22234__$1;
})(),cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22235 = site_stats;var G__22235__$1 = (((G__22235 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22235));var G__22235__$2 = (((G__22235__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22235__$1));return G__22235__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22235 = site_stats;var G__22235__$1 = (((G__22235 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22235));var G__22235__$2 = (((G__22235__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22235__$1));return G__22235__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22236 = site_stats;var G__22236__$1 = (((G__22236 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22236));var G__22236__$2 = (((G__22236__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22236__$1));return G__22236__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22236 = site_stats;var G__22236__$1 = (((G__22236 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22236));var G__22236__$2 = (((G__22236__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22236__$1));return G__22236__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22237 = site_stats;var G__22237__$1 = (((G__22237 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22237));var G__22237__$2 = (((G__22237__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22237__$1));return G__22237__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22237 = site_stats;var G__22237__$1 = (((G__22237 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22237));var G__22237__$2 = (((G__22237__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22237__$1));return G__22237__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22238 = site_stats;var G__22238__$1 = (((G__22238 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22238));return G__22238__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22238 = site_stats;var G__22238__$1 = (((G__22238 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22238));return G__22238__$1;
})(),cljs.core.constant$keyword$222,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22239 = site_stats;var G__22239__$1 = (((G__22239 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22239));var G__22239__$2 = (((G__22239__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22239__$1));return G__22239__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22239 = site_stats;var G__22239__$1 = (((G__22239 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22239));var G__22239__$2 = (((G__22239__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22239__$1));return G__22239__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-"))])], 0)),cljs.core.constant$keyword$306,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$311,cljs.core.constant$keyword$312,cljs.core.constant$keyword$313,cljs.core.constant$keyword$314,cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319],["\u00A0",(function (){var G__22240 = site_stats;var G__22240__$1 = (((G__22240 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22240));var G__22240__$2 = (((G__22240__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22240__$1));return G__22240__$2;
})(),(function (){var G__22241 = site_stats;var G__22241__$1 = (((G__22241 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22241));var G__22241__$2 = (((G__22241__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22241__$1));return G__22241__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22242 = site_stats;var G__22242__$1 = (((G__22242 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22242));var G__22242__$2 = (((G__22242__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22242__$1));return G__22242__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22242 = site_stats;var G__22242__$1 = (((G__22242 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22242));var G__22242__$2 = (((G__22242__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22242__$1));return G__22242__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22243 = site_stats;var G__22243__$1 = (((G__22243 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22243));var G__22243__$2 = (((G__22243__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22243__$1));return G__22243__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22243 = site_stats;var G__22243__$1 = (((G__22243 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22243));var G__22243__$2 = (((G__22243__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22243__$1));return G__22243__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22244 = site_stats;var G__22244__$1 = (((G__22244 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22244));var G__22244__$2 = (((G__22244__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22244__$1));return G__22244__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22244 = site_stats;var G__22244__$1 = (((G__22244 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22244));var G__22244__$2 = (((G__22244__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22244__$1));return G__22244__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22245 = site_stats;var G__22245__$1 = (((G__22245 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22245));var G__22245__$2 = (((G__22245__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22245__$1));return G__22245__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22245 = site_stats;var G__22245__$1 = (((G__22245 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22245));var G__22245__$2 = (((G__22245__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22245__$1));return G__22245__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-"))])], 0)),cljs.core.constant$keyword$307,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$311,cljs.core.constant$keyword$312,cljs.core.constant$keyword$313,cljs.core.constant$keyword$314,cljs.core.constant$keyword$315,cljs.core.constant$keyword$316,cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22246 = all_portfolio_company_site_stats;var G__22246__$1 = (((G__22246 == null))?null:cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(G__22246));return G__22246__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22246 = all_portfolio_company_site_stats;var G__22246__$1 = (((G__22246 == null))?null:cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(G__22246));return G__22246__$1;
})(),cljs.core.constant$keyword$222,"-")),(function (){var G__22247 = all_portfolio_company_site_stats;var G__22247__$1 = (((G__22247 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22247));var G__22247__$2 = (((G__22247__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22247__$1));return G__22247__$2;
})(),(function (){var G__22248 = all_portfolio_company_site_stats;var G__22248__$1 = (((G__22248 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22248));var G__22248__$2 = (((G__22248__$1 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__22248__$1));return G__22248__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22249 = all_portfolio_company_site_stats;var G__22249__$1 = (((G__22249 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22249));return G__22249__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22249 = all_portfolio_company_site_stats;var G__22249__$1 = (((G__22249 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22249));return G__22249__$1;
})(),cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22250 = all_portfolio_company_site_stats;var G__22250__$1 = (((G__22250 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22250));var G__22250__$2 = (((G__22250__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22250__$1));return G__22250__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22250 = all_portfolio_company_site_stats;var G__22250__$1 = (((G__22250 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__22250));var G__22250__$2 = (((G__22250__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22250__$1));return G__22250__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22251 = all_portfolio_company_site_stats;var G__22251__$1 = (((G__22251 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22251));var G__22251__$2 = (((G__22251__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22251__$1));return G__22251__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22251 = all_portfolio_company_site_stats;var G__22251__$1 = (((G__22251 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__22251));var G__22251__$2 = (((G__22251__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22251__$1));return G__22251__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22252 = all_portfolio_company_site_stats;var G__22252__$1 = (((G__22252 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22252));var G__22252__$2 = (((G__22252__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22252__$1));return G__22252__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22252 = all_portfolio_company_site_stats;var G__22252__$1 = (((G__22252 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__22252));var G__22252__$2 = (((G__22252__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22252__$1));return G__22252__$2;
})(),cljs.core.constant$keyword$290,0,cljs.core.constant$keyword$222,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22253 = all_portfolio_company_site_stats;var G__22253__$1 = (((G__22253 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22253));return G__22253__$1;
})(),cljs.core.constant$keyword$222,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22253 = all_portfolio_company_site_stats;var G__22253__$1 = (((G__22253 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__22253));return G__22253__$1;
})(),cljs.core.constant$keyword$222,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22254 = all_portfolio_company_site_stats;var G__22254__$1 = (((G__22254 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22254));var G__22254__$2 = (((G__22254__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22254__$1));return G__22254__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22254 = all_portfolio_company_site_stats;var G__22254__$1 = (((G__22254 == null))?null:cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(G__22254));var G__22254__$2 = (((G__22254__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__22254__$1));return G__22254__$2;
})(),cljs.core.constant$keyword$288,2,cljs.core.constant$keyword$222,"-"))])], 0))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__22298 = clustermap.components.full_report.overview.overview_data(data);var map__22298__$1 = ((cljs.core.seq_QMARK_(map__22298))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22298):map__22298);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22298__$1,cljs.core.constant$keyword$307);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22298__$1,cljs.core.constant$keyword$306);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22298__$1,cljs.core.constant$keyword$297);if(typeof clustermap.components.full_report.overview.t22299 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t22299 = (function (selection,averages,benchmark,map__22298,data,overview,meta22300){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__22298 = map__22298;
this.data = data;
this.overview = overview;
this.meta22300 = meta22300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t22299.cljs$lang$type = true;
clustermap.components.full_report.overview.t22299.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t22299";
clustermap.components.full_report.overview.t22299.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t22299");
});
clustermap.components.full_report.overview.t22299.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t22299.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$308) : self__.selection.call(null,cljs.core.constant$keyword$308))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$269) : self__.selection.call(null,cljs.core.constant$keyword$269)))),React.DOM.td(null,(function (){var attrs22306 = cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22306))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22306], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22306));
}
})()),React.DOM.td(null,(function (){var attrs22307 = cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22307))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22307], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22307));
}
})()),React.DOM.td(null,(function (){var attrs22308 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22308))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22308], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22308));
}
})()),React.DOM.td(null,(function (){var attrs22309 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22309))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22309], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22309));
}
})()),React.DOM.td(null,(function (){var attrs22310 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22310))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22310], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22310));
}
})()),React.DOM.td(null,(function (){var attrs22311 = cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22311))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22311], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22311));
}
})()),React.DOM.td(null,(function (){var attrs22312 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22312))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22312], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22312));
}
})()),React.DOM.td(null,(function (){var attrs22313 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22313))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22313], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22313));
}
})()),React.DOM.td(null,(function (){var attrs22314 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22314))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22314], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22314));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$308) : self__.averages.call(null,cljs.core.constant$keyword$308))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$269) : self__.averages.call(null,cljs.core.constant$keyword$269)))),React.DOM.td(null,(function (){var attrs22315 = cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22315))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22315], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22315));
}
})()),React.DOM.td(null,(function (){var attrs22316 = cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22316))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22316], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22316));
}
})()),React.DOM.td(null,(function (){var attrs22317 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22317))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22317], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22317));
}
})()),React.DOM.td(null,(function (){var attrs22318 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22318))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22318], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22318));
}
})()),React.DOM.td(null,(function (){var attrs22319 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22319))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22319], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22319));
}
})()),React.DOM.td(null,(function (){var attrs22320 = cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22320))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22320], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22320));
}
})()),React.DOM.td(null,(function (){var attrs22321 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22321))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22321], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22321));
}
})()),React.DOM.td(null,(function (){var attrs22322 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22322))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22322], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22322));
}
})()),React.DOM.td(null,(function (){var attrs22323 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22323))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22323], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22323));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$308) : self__.benchmark.call(null,cljs.core.constant$keyword$308))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$269) : self__.benchmark.call(null,cljs.core.constant$keyword$269)))),React.DOM.td(null,(function (){var attrs22324 = cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22324))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22324], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22324));
}
})()),React.DOM.td(null,(function (){var attrs22325 = cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22325))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22325], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22325));
}
})()),React.DOM.td(null,(function (){var attrs22326 = cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22326))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22326], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22326));
}
})()),React.DOM.td(null,(function (){var attrs22327 = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22327))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22327], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22327));
}
})()),React.DOM.td(null,(function (){var attrs22328 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$313.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22328))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22328], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22328));
}
})()),React.DOM.td(null,(function (){var attrs22329 = cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22329))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22329], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22329));
}
})()),React.DOM.td(null,(function (){var attrs22330 = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22330))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22330], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22330));
}
})()),React.DOM.td(null,(function (){var attrs22331 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22331))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22331], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22331));
}
})()),React.DOM.td(null,(function (){var attrs22332 = cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22332))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22332], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22332));
}
})()))))));
});
clustermap.components.full_report.overview.t22299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22301){var self__ = this;
var _22301__$1 = this;return self__.meta22300;
});
clustermap.components.full_report.overview.t22299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22301,meta22300__$1){var self__ = this;
var _22301__$1 = this;return (new clustermap.components.full_report.overview.t22299(self__.selection,self__.averages,self__.benchmark,self__.map__22298,self__.data,self__.overview,meta22300__$1));
});
clustermap.components.full_report.overview.__GT_t22299 = (function __GT_t22299(selection__$1,averages__$1,benchmark__$1,map__22298__$2,data__$1,overview__$1,meta22300){return (new clustermap.components.full_report.overview.t22299(selection__$1,averages__$1,benchmark__$1,map__22298__$2,data__$1,overview__$1,meta22300));
});
}
return (new clustermap.components.full_report.overview.t22299(selection,averages,benchmark,map__22298__$1,data,overview,null));
});
