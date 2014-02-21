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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__22458){var map__22463 = p__22458;var map__22463__$1 = ((cljs.core.seq_QMARK_(map__22463))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22463):map__22463);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22463__$1,cljs.core.constant$keyword$242);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22463__$1,cljs.core.constant$keyword$277);var pred__22464 = cljs.core._EQ_;var expr__22465 = type;if(cljs.core.truth_((pred__22464.cljs$core$IFn$_invoke$arity$2 ? pred__22464.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,expr__22465) : pred__22464.call(null,cljs.core.constant$keyword$310,expr__22465))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Total",cljs.core.constant$keyword$330,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Average",cljs.core.constant$keyword$330,"Averages for the selected Portfolio Company"], null),cljs.core.constant$keyword$329,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Benchmark",cljs.core.constant$keyword$330,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22464.cljs$core$IFn$_invoke$arity$2 ? pred__22464.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$311,expr__22465) : pred__22464.call(null,cljs.core.constant$keyword$311,expr__22465))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Total",cljs.core.constant$keyword$330,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Average",cljs.core.constant$keyword$330,"Averages over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$329,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Benchmark",cljs.core.constant$keyword$330,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22464.cljs$core$IFn$_invoke$arity$2 ? pred__22464.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$312,expr__22465) : pred__22464.call(null,cljs.core.constant$keyword$312,expr__22465))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Total",cljs.core.constant$keyword$330,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Average",cljs.core.constant$keyword$330,"Averages over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$329,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Benchmark",cljs.core.constant$keyword$330,"Averages over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Total",cljs.core.constant$keyword$330,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Average",cljs.core.constant$keyword$330,"Averages over all Portfolio Companies"], null),cljs.core.constant$keyword$329,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,"Benchmark",cljs.core.constant$keyword$330,"Averages over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__22467){var map__22493 = p__22467;var map__22493__$1 = ((cljs.core.seq_QMARK_(map__22493))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22493):map__22493);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22493__$1,cljs.core.constant$keyword$331);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22493__$1,cljs.core.constant$keyword$319);var all_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22493__$1,cljs.core.constant$keyword$332);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$319,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$333,cljs.core.constant$keyword$334,cljs.core.constant$keyword$335,cljs.core.constant$keyword$336,cljs.core.constant$keyword$337,cljs.core.constant$keyword$338,cljs.core.constant$keyword$339,cljs.core.constant$keyword$340,cljs.core.constant$keyword$341],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22494 = site_stats;var G__22494__$1 = (((G__22494 == null))?null:cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(G__22494));return G__22494__$1;
})(),cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22494 = site_stats;var G__22494__$1 = (((G__22494 == null))?null:cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(G__22494));return G__22494__$1;
})(),cljs.core.constant$keyword$238,"-")),(function (){var G__22495 = site_stats;var G__22495__$1 = (((G__22495 == null))?null:cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(G__22495));var G__22495__$2 = (((G__22495__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22495__$1));return G__22495__$2;
})(),(function (){var G__22496 = site_stats;var G__22496__$1 = (((G__22496 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__22496));var G__22496__$2 = (((G__22496__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22496__$1));return G__22496__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22497 = site_stats;var G__22497__$1 = (((G__22497 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__22497));return G__22497__$1;
})(),cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22497 = site_stats;var G__22497__$1 = (((G__22497 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__22497));return G__22497__$1;
})(),cljs.core.constant$keyword$238,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22498 = site_stats;var G__22498__$1 = (((G__22498 == null))?null:cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(G__22498));var G__22498__$2 = (((G__22498__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22498__$1));return G__22498__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22498 = site_stats;var G__22498__$1 = (((G__22498 == null))?null:cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(G__22498));var G__22498__$2 = (((G__22498__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22498__$1));return G__22498__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22499 = site_stats;var G__22499__$1 = (((G__22499 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__22499));var G__22499__$2 = (((G__22499__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22499__$1));return G__22499__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22499 = site_stats;var G__22499__$1 = (((G__22499 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__22499));var G__22499__$2 = (((G__22499__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22499__$1));return G__22499__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22500 = site_stats;var G__22500__$1 = (((G__22500 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22500));var G__22500__$2 = (((G__22500__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22500__$1));return G__22500__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22500 = site_stats;var G__22500__$1 = (((G__22500 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22500));var G__22500__$2 = (((G__22500__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22500__$1));return G__22500__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22501 = site_stats;var G__22501__$1 = (((G__22501 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__22501));return G__22501__$1;
})(),cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22501 = site_stats;var G__22501__$1 = (((G__22501 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__22501));return G__22501__$1;
})(),cljs.core.constant$keyword$238,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22502 = site_stats;var G__22502__$1 = (((G__22502 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22502));var G__22502__$2 = (((G__22502__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22502__$1));return G__22502__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22502 = site_stats;var G__22502__$1 = (((G__22502 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22502));var G__22502__$2 = (((G__22502__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22502__$1));return G__22502__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"))])], 0)),cljs.core.constant$keyword$328,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$333,cljs.core.constant$keyword$334,cljs.core.constant$keyword$335,cljs.core.constant$keyword$336,cljs.core.constant$keyword$337,cljs.core.constant$keyword$338,cljs.core.constant$keyword$339,cljs.core.constant$keyword$340,cljs.core.constant$keyword$341],["\u00A0",(function (){var G__22503 = site_stats;var G__22503__$1 = (((G__22503 == null))?null:cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(G__22503));var G__22503__$2 = (((G__22503__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22503__$1));return G__22503__$2;
})(),(function (){var G__22504 = site_stats;var G__22504__$1 = (((G__22504 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__22504));var G__22504__$2 = (((G__22504__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22504__$1));return G__22504__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22505 = site_stats;var G__22505__$1 = (((G__22505 == null))?null:cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(G__22505));var G__22505__$2 = (((G__22505__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22505__$1));return G__22505__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22505 = site_stats;var G__22505__$1 = (((G__22505 == null))?null:cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(G__22505));var G__22505__$2 = (((G__22505__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22505__$1));return G__22505__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22506 = site_stats;var G__22506__$1 = (((G__22506 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__22506));var G__22506__$2 = (((G__22506__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22506__$1));return G__22506__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22506 = site_stats;var G__22506__$1 = (((G__22506 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__22506));var G__22506__$2 = (((G__22506__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22506__$1));return G__22506__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22507 = site_stats;var G__22507__$1 = (((G__22507 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22507));var G__22507__$2 = (((G__22507__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22507__$1));return G__22507__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22507 = site_stats;var G__22507__$1 = (((G__22507 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22507));var G__22507__$2 = (((G__22507__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22507__$1));return G__22507__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22508 = site_stats;var G__22508__$1 = (((G__22508 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22508));var G__22508__$2 = (((G__22508__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22508__$1));return G__22508__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22508 = site_stats;var G__22508__$1 = (((G__22508 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22508));var G__22508__$2 = (((G__22508__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22508__$1));return G__22508__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"))])], 0)),cljs.core.constant$keyword$329,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$333,cljs.core.constant$keyword$334,cljs.core.constant$keyword$335,cljs.core.constant$keyword$336,cljs.core.constant$keyword$337,cljs.core.constant$keyword$338,cljs.core.constant$keyword$339,cljs.core.constant$keyword$340,cljs.core.constant$keyword$341],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22509 = all_portfolio_company_site_stats;var G__22509__$1 = (((G__22509 == null))?null:cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(G__22509));return G__22509__$1;
})(),cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22509 = all_portfolio_company_site_stats;var G__22509__$1 = (((G__22509 == null))?null:cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(G__22509));return G__22509__$1;
})(),cljs.core.constant$keyword$238,"-")),(function (){var G__22510 = all_portfolio_company_site_stats;var G__22510__$1 = (((G__22510 == null))?null:cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(G__22510));var G__22510__$2 = (((G__22510__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22510__$1));return G__22510__$2;
})(),(function (){var G__22511 = all_portfolio_company_site_stats;var G__22511__$1 = (((G__22511 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__22511));var G__22511__$2 = (((G__22511__$1 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__22511__$1));return G__22511__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22512 = all_portfolio_company_site_stats;var G__22512__$1 = (((G__22512 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__22512));return G__22512__$1;
})(),cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22512 = all_portfolio_company_site_stats;var G__22512__$1 = (((G__22512 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__22512));return G__22512__$1;
})(),cljs.core.constant$keyword$238,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22513 = all_portfolio_company_site_stats;var G__22513__$1 = (((G__22513 == null))?null:cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(G__22513));var G__22513__$2 = (((G__22513__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22513__$1));return G__22513__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22513 = all_portfolio_company_site_stats;var G__22513__$1 = (((G__22513 == null))?null:cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(G__22513));var G__22513__$2 = (((G__22513__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22513__$1));return G__22513__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22514 = all_portfolio_company_site_stats;var G__22514__$1 = (((G__22514 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__22514));var G__22514__$2 = (((G__22514__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22514__$1));return G__22514__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22514 = all_portfolio_company_site_stats;var G__22514__$1 = (((G__22514 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__22514));var G__22514__$2 = (((G__22514__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22514__$1));return G__22514__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22515 = all_portfolio_company_site_stats;var G__22515__$1 = (((G__22515 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22515));var G__22515__$2 = (((G__22515__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22515__$1));return G__22515__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22515 = all_portfolio_company_site_stats;var G__22515__$1 = (((G__22515 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22515));var G__22515__$2 = (((G__22515__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22515__$1));return G__22515__$2;
})(),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22516 = all_portfolio_company_site_stats;var G__22516__$1 = (((G__22516 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__22516));return G__22516__$1;
})(),cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22516 = all_portfolio_company_site_stats;var G__22516__$1 = (((G__22516 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__22516));return G__22516__$1;
})(),cljs.core.constant$keyword$238,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22517 = all_portfolio_company_site_stats;var G__22517__$1 = (((G__22517 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22517));var G__22517__$2 = (((G__22517__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22517__$1));return G__22517__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22517 = all_portfolio_company_site_stats;var G__22517__$1 = (((G__22517 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__22517));var G__22517__$2 = (((G__22517__$1 == null))?null:cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(G__22517__$1));return G__22517__$2;
})(),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"))])], 0))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__22561 = clustermap.components.full_report.overview.overview_data(data);var map__22561__$1 = ((cljs.core.seq_QMARK_(map__22561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22561):map__22561);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.constant$keyword$329);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.constant$keyword$328);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.constant$keyword$319);if(typeof clustermap.components.full_report.overview.t22562 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t22562 = (function (selection,averages,benchmark,map__22561,data,overview,meta22563){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__22561 = map__22561;
this.data = data;
this.overview = overview;
this.meta22563 = meta22563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t22562.cljs$lang$type = true;
clustermap.components.full_report.overview.t22562.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t22562";
clustermap.components.full_report.overview.t22562.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t22562");
});
clustermap.components.full_report.overview.t22562.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t22562.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$330) : self__.selection.call(null,cljs.core.constant$keyword$330))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$287) : self__.selection.call(null,cljs.core.constant$keyword$287)))),React.DOM.td(null,(function (){var attrs22569 = cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22569))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22569], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22569));
}
})()),React.DOM.td(null,(function (){var attrs22570 = cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22570))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22570], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22570));
}
})()),React.DOM.td(null,(function (){var attrs22571 = cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22571))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22571], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22571));
}
})()),React.DOM.td(null,(function (){var attrs22572 = cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22572))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22572], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22572));
}
})()),React.DOM.td(null,(function (){var attrs22573 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22573))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22573], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22573));
}
})()),React.DOM.td(null,(function (){var attrs22574 = cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22574))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22574], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22574));
}
})()),React.DOM.td(null,(function (){var attrs22575 = cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22575))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22575], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22575));
}
})()),React.DOM.td(null,(function (){var attrs22576 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22576))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22576], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22576));
}
})()),React.DOM.td(null,(function (){var attrs22577 = cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22577))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22577], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22577));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$330) : self__.averages.call(null,cljs.core.constant$keyword$330))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$287) : self__.averages.call(null,cljs.core.constant$keyword$287)))),React.DOM.td(null,(function (){var attrs22578 = cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22578))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22578], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22578));
}
})()),React.DOM.td(null,(function (){var attrs22579 = cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22579))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22579], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22579));
}
})()),React.DOM.td(null,(function (){var attrs22580 = cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22580))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22580], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22580));
}
})()),React.DOM.td(null,(function (){var attrs22581 = cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22581))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22581], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22581));
}
})()),React.DOM.td(null,(function (){var attrs22582 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22582))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22582], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22582));
}
})()),React.DOM.td(null,(function (){var attrs22583 = cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22583))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22583], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22583));
}
})()),React.DOM.td(null,(function (){var attrs22584 = cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22584))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22584], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22584));
}
})()),React.DOM.td(null,(function (){var attrs22585 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22585))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22585], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22585));
}
})()),React.DOM.td(null,(function (){var attrs22586 = cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22586))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22586], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22586));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$330) : self__.benchmark.call(null,cljs.core.constant$keyword$330))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$287) : self__.benchmark.call(null,cljs.core.constant$keyword$287)))),React.DOM.td(null,(function (){var attrs22587 = cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22587))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22587], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22587));
}
})()),React.DOM.td(null,(function (){var attrs22588 = cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22588))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22588], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22588));
}
})()),React.DOM.td(null,(function (){var attrs22589 = cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22589))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22589], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22589));
}
})()),React.DOM.td(null,(function (){var attrs22590 = cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22590))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22590], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22590));
}
})()),React.DOM.td(null,(function (){var attrs22591 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22591))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22591], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22591));
}
})()),React.DOM.td(null,(function (){var attrs22592 = cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22592))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22592], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22592));
}
})()),React.DOM.td(null,(function (){var attrs22593 = cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22593))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22593], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22593));
}
})()),React.DOM.td(null,(function (){var attrs22594 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22594))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22594], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22594));
}
})()),React.DOM.td(null,(function (){var attrs22595 = cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22595))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22595], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22595));
}
})()))))));
});
clustermap.components.full_report.overview.t22562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22564){var self__ = this;
var _22564__$1 = this;return self__.meta22563;
});
clustermap.components.full_report.overview.t22562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22564,meta22563__$1){var self__ = this;
var _22564__$1 = this;return (new clustermap.components.full_report.overview.t22562(self__.selection,self__.averages,self__.benchmark,self__.map__22561,self__.data,self__.overview,meta22563__$1));
});
clustermap.components.full_report.overview.__GT_t22562 = (function __GT_t22562(selection__$1,averages__$1,benchmark__$1,map__22561__$2,data__$1,overview__$1,meta22563){return (new clustermap.components.full_report.overview.t22562(selection__$1,averages__$1,benchmark__$1,map__22561__$2,data__$1,overview__$1,meta22563));
});
}
return (new clustermap.components.full_report.overview.t22562(selection,averages,benchmark,map__22561__$1,data,overview,null));
});
