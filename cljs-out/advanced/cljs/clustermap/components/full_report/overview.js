// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__34070){var map__34075 = p__34070;var map__34075__$1 = ((cljs.core.seq_QMARK_(map__34075))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34075):map__34075);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34075__$1,cljs.core.constant$keyword$543);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34075__$1,cljs.core.constant$keyword$582);var pred__34076 = cljs.core._EQ_;var expr__34077 = type;if(cljs.core.truth_((pred__34076.cljs$core$IFn$_invoke$arity$2 ? pred__34076.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$627,expr__34077) : pred__34076.call(null,cljs.core.constant$keyword$627,expr__34077))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$637,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Total",cljs.core.constant$keyword$662,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$660,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Mean",cljs.core.constant$keyword$662,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$661,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Benchmark",cljs.core.constant$keyword$662,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__34076.cljs$core$IFn$_invoke$arity$2 ? pred__34076.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$628,expr__34077) : pred__34076.call(null,cljs.core.constant$keyword$628,expr__34077))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$637,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Total",cljs.core.constant$keyword$662,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$660,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Mean",cljs.core.constant$keyword$662,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$661,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Benchmark",cljs.core.constant$keyword$662,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__34076.cljs$core$IFn$_invoke$arity$2 ? pred__34076.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34077) : pred__34076.call(null,cljs.core.constant$keyword$629,expr__34077))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$637,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Total",cljs.core.constant$keyword$662,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$660,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Mean",cljs.core.constant$keyword$662,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$661,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Benchmark",cljs.core.constant$keyword$662,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$637,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Total",cljs.core.constant$keyword$662,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$660,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Mean",cljs.core.constant$keyword$662,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$661,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,"Benchmark",cljs.core.constant$keyword$662,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__34079){var map__34105 = p__34079;var map__34105__$1 = ((cljs.core.seq_QMARK_(map__34105))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34105):map__34105);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34105__$1,cljs.core.constant$keyword$663);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34105__$1,cljs.core.constant$keyword$637);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34105__$1,cljs.core.constant$keyword$664);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3441__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$637,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$665,cljs.core.constant$keyword$666,cljs.core.constant$keyword$667,cljs.core.constant$keyword$668,cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34106 = site_stats;var G__34106__$1 = (((G__34106 == null))?null:cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(G__34106));return G__34106__$1;
})(),cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34106 = site_stats;var G__34106__$1 = (((G__34106 == null))?null:cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(G__34106));return G__34106__$1;
})(),cljs.core.constant$keyword$539,"-")),(function (){var G__34107 = site_stats;var G__34107__$1 = (((G__34107 == null))?null:cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(G__34107));var G__34107__$2 = (((G__34107__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34107__$1));return G__34107__$2;
})(),(function (){var G__34108 = site_stats;var G__34108__$1 = (((G__34108 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34108));var G__34108__$2 = (((G__34108__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34108__$1));return G__34108__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34109 = site_stats;var G__34109__$1 = (((G__34109 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34109));return G__34109__$1;
})(),cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34109 = site_stats;var G__34109__$1 = (((G__34109 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34109));return G__34109__$1;
})(),cljs.core.constant$keyword$539,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34110 = site_stats;var G__34110__$1 = (((G__34110 == null))?null:cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(G__34110));var G__34110__$2 = (((G__34110__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34110__$1));return G__34110__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34110 = site_stats;var G__34110__$1 = (((G__34110 == null))?null:cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(G__34110));var G__34110__$2 = (((G__34110__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34110__$1));return G__34110__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34111 = site_stats;var G__34111__$1 = (((G__34111 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34111));var G__34111__$2 = (((G__34111__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34111__$1));return G__34111__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34111 = site_stats;var G__34111__$1 = (((G__34111 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34111));var G__34111__$2 = (((G__34111__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34111__$1));return G__34111__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34112 = site_stats;var G__34112__$1 = (((G__34112 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34112));var G__34112__$2 = (((G__34112__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34112__$1));return G__34112__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34112 = site_stats;var G__34112__$1 = (((G__34112 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34112));var G__34112__$2 = (((G__34112__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34112__$1));return G__34112__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34113 = site_stats;var G__34113__$1 = (((G__34113 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34113));return G__34113__$1;
})(),cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34113 = site_stats;var G__34113__$1 = (((G__34113 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34113));return G__34113__$1;
})(),cljs.core.constant$keyword$539,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34114 = site_stats;var G__34114__$1 = (((G__34114 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34114));var G__34114__$2 = (((G__34114__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34114__$1));return G__34114__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34114 = site_stats;var G__34114__$1 = (((G__34114 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34114));var G__34114__$2 = (((G__34114__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34114__$1));return G__34114__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-"))])], 0)),cljs.core.constant$keyword$660,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$660.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$665,cljs.core.constant$keyword$666,cljs.core.constant$keyword$667,cljs.core.constant$keyword$668,cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673],["\u00A0",(function (){var G__34115 = site_stats;var G__34115__$1 = (((G__34115 == null))?null:cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(G__34115));var G__34115__$2 = (((G__34115__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34115__$1));return G__34115__$2;
})(),(function (){var G__34116 = site_stats;var G__34116__$1 = (((G__34116 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34116));var G__34116__$2 = (((G__34116__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34116__$1));return G__34116__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34117 = site_stats;var G__34117__$1 = (((G__34117 == null))?null:cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(G__34117));var G__34117__$2 = (((G__34117__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34117__$1));return G__34117__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34117 = site_stats;var G__34117__$1 = (((G__34117 == null))?null:cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(G__34117));var G__34117__$2 = (((G__34117__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34117__$1));return G__34117__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34118 = site_stats;var G__34118__$1 = (((G__34118 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34118));var G__34118__$2 = (((G__34118__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34118__$1));return G__34118__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34118 = site_stats;var G__34118__$1 = (((G__34118 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34118));var G__34118__$2 = (((G__34118__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34118__$1));return G__34118__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34119 = site_stats;var G__34119__$1 = (((G__34119 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34119));var G__34119__$2 = (((G__34119__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34119__$1));return G__34119__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34119 = site_stats;var G__34119__$1 = (((G__34119 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34119));var G__34119__$2 = (((G__34119__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34119__$1));return G__34119__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34120 = site_stats;var G__34120__$1 = (((G__34120 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34120));var G__34120__$2 = (((G__34120__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34120__$1));return G__34120__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34120 = site_stats;var G__34120__$1 = (((G__34120 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34120));var G__34120__$2 = (((G__34120__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34120__$1));return G__34120__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-"))])], 0)),cljs.core.constant$keyword$661,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$661.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$665,cljs.core.constant$keyword$666,cljs.core.constant$keyword$667,cljs.core.constant$keyword$668,cljs.core.constant$keyword$669,cljs.core.constant$keyword$670,cljs.core.constant$keyword$671,cljs.core.constant$keyword$672,cljs.core.constant$keyword$673],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34121 = all_investment_stats;var G__34121__$1 = (((G__34121 == null))?null:cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(G__34121));return G__34121__$1;
})(),cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34121 = all_investment_stats;var G__34121__$1 = (((G__34121 == null))?null:cljs.core.constant$keyword$674.cljs$core$IFn$_invoke$arity$1(G__34121));return G__34121__$1;
})(),cljs.core.constant$keyword$539,"-")),(function (){var G__34122 = all_investment_stats;var G__34122__$1 = (((G__34122 == null))?null:cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(G__34122));var G__34122__$2 = (((G__34122__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34122__$1));return G__34122__$2;
})(),(function (){var G__34123 = all_investment_stats;var G__34123__$1 = (((G__34123 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34123));var G__34123__$2 = (((G__34123__$1 == null))?null:cljs.core.constant$keyword$676.cljs$core$IFn$_invoke$arity$1(G__34123__$1));return G__34123__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34124 = all_investment_stats;var G__34124__$1 = (((G__34124 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34124));return G__34124__$1;
})(),cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34124 = all_investment_stats;var G__34124__$1 = (((G__34124 == null))?null:cljs.core.constant$keyword$678.cljs$core$IFn$_invoke$arity$1(G__34124));return G__34124__$1;
})(),cljs.core.constant$keyword$539,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34125 = all_investment_stats;var G__34125__$1 = (((G__34125 == null))?null:cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(G__34125));var G__34125__$2 = (((G__34125__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34125__$1));return G__34125__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34125 = all_investment_stats;var G__34125__$1 = (((G__34125 == null))?null:cljs.core.constant$keyword$675.cljs$core$IFn$_invoke$arity$1(G__34125));var G__34125__$2 = (((G__34125__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34125__$1));return G__34125__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34126 = all_investment_stats;var G__34126__$1 = (((G__34126 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34126));var G__34126__$2 = (((G__34126__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34126__$1));return G__34126__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34126 = all_investment_stats;var G__34126__$1 = (((G__34126 == null))?null:cljs.core.constant$keyword$677.cljs$core$IFn$_invoke$arity$1(G__34126));var G__34126__$2 = (((G__34126__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34126__$1));return G__34126__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34127 = all_investment_stats;var G__34127__$1 = (((G__34127 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34127));var G__34127__$2 = (((G__34127__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34127__$1));return G__34127__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34127 = all_investment_stats;var G__34127__$1 = (((G__34127 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__34127));var G__34127__$2 = (((G__34127__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34127__$1));return G__34127__$2;
})(),cljs.core.constant$keyword$625,0,cljs.core.constant$keyword$539,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__34128 = all_investment_stats;var G__34128__$1 = (((G__34128 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34128));return G__34128__$1;
})(),cljs.core.constant$keyword$539,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34128 = all_investment_stats;var G__34128__$1 = (((G__34128 == null))?null:cljs.core.constant$keyword$680.cljs$core$IFn$_invoke$arity$1(G__34128));return G__34128__$1;
})(),cljs.core.constant$keyword$539,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34129 = all_investment_stats;var G__34129__$1 = (((G__34129 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34129));var G__34129__$2 = (((G__34129__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34129__$1));return G__34129__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34129 = all_investment_stats;var G__34129__$1 = (((G__34129 == null))?null:cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(G__34129));var G__34129__$2 = (((G__34129__$1 == null))?null:cljs.core.constant$keyword$681.cljs$core$IFn$_invoke$arity$1(G__34129__$1));return G__34129__$2;
})(),cljs.core.constant$keyword$623,2,cljs.core.constant$keyword$539,"-"))])], 0))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__34167 = clustermap.components.full_report.overview.overview_data(data);var map__34167__$1 = ((cljs.core.seq_QMARK_(map__34167))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34167):map__34167);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34167__$1,cljs.core.constant$keyword$661);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34167__$1,cljs.core.constant$keyword$660);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34167__$1,cljs.core.constant$keyword$637);if(typeof clustermap.components.full_report.overview.t34168 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t34168 = (function (selection,averages,benchmark,map__34167,data,overview,meta34169){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__34167 = map__34167;
this.data = data;
this.overview = overview;
this.meta34169 = meta34169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t34168.cljs$lang$type = true;
clustermap.components.full_report.overview.t34168.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t34168";
clustermap.components.full_report.overview.t34168.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.overview/t34168");
});
clustermap.components.full_report.overview.t34168.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t34168.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$662) : self__.selection.call(null,cljs.core.constant$keyword$662))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$592) : self__.selection.call(null,cljs.core.constant$keyword$592)))),React.DOM.td(null,(function (){var attrs34175 = cljs.core.constant$keyword$665.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34175))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34175], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34175));
}
})()),React.DOM.td(null,(function (){var attrs34176 = cljs.core.constant$keyword$668.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34176))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34176], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34176));
}
})()),React.DOM.td(null,(function (){var attrs34177 = cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34177))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34177], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34177));
}
})()),React.DOM.td(null,(function (){var attrs34178 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34178))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34178], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34178));
}
})()),React.DOM.td(null,(function (){var attrs34179 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$667.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs34179))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34179], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34179));
}
})()),React.DOM.td(null,(function (){var attrs34180 = cljs.core.constant$keyword$670.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34180))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34180], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34180));
}
})()),React.DOM.td(null,(function (){var attrs34181 = cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs34181))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs34181], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs34181));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$662) : self__.averages.call(null,cljs.core.constant$keyword$662))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$592) : self__.averages.call(null,cljs.core.constant$keyword$592)))),React.DOM.td(null,(function (){var attrs34182 = cljs.core.constant$keyword$665.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34182))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34182], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34182));
}
})()),React.DOM.td(null,(function (){var attrs34183 = cljs.core.constant$keyword$668.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34183))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34183], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34183));
}
})()),React.DOM.td(null,(function (){var attrs34184 = cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34184))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34184], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34184));
}
})()),React.DOM.td(null,(function (){var attrs34185 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34185))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34185], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34185));
}
})()),React.DOM.td(null,(function (){var attrs34186 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$667.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs34186))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34186], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34186));
}
})()),React.DOM.td(null,(function (){var attrs34187 = cljs.core.constant$keyword$670.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34187))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34187], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34187));
}
})()),React.DOM.td(null,(function (){var attrs34188 = cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs34188))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs34188], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs34188));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$662) : self__.benchmark.call(null,cljs.core.constant$keyword$662))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$592) : self__.benchmark.call(null,cljs.core.constant$keyword$592)))),React.DOM.td(null,(function (){var attrs34189 = cljs.core.constant$keyword$665.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34189))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34189], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34189));
}
})()),React.DOM.td(null,(function (){var attrs34190 = cljs.core.constant$keyword$668.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34190))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34190], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34190));
}
})()),React.DOM.td(null,(function (){var attrs34191 = cljs.core.constant$keyword$672.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34191))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34191], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34191));
}
})()),React.DOM.td(null,(function (){var attrs34192 = cljs.core.constant$keyword$673.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34192))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34192], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34192));
}
})()),React.DOM.td(null,(function (){var attrs34193 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$667.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs34193))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34193], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34193));
}
})()),React.DOM.td(null,(function (){var attrs34194 = cljs.core.constant$keyword$670.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34194))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34194], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34194));
}
})()),React.DOM.td(null,(function (){var attrs34195 = cljs.core.constant$keyword$671.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs34195))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs34195], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs34195));
}
})()))))));
});
clustermap.components.full_report.overview.t34168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34170){var self__ = this;
var _34170__$1 = this;return self__.meta34169;
});
clustermap.components.full_report.overview.t34168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34170,meta34169__$1){var self__ = this;
var _34170__$1 = this;return (new clustermap.components.full_report.overview.t34168(self__.selection,self__.averages,self__.benchmark,self__.map__34167,self__.data,self__.overview,meta34169__$1));
});
clustermap.components.full_report.overview.__GT_t34168 = (function __GT_t34168(selection__$1,averages__$1,benchmark__$1,map__34167__$2,data__$1,overview__$1,meta34169){return (new clustermap.components.full_report.overview.t34168(selection__$1,averages__$1,benchmark__$1,map__34167__$2,data__$1,overview__$1,meta34169));
});
}
return (new clustermap.components.full_report.overview.t34168(selection,averages,benchmark,map__34167__$1,data,overview,null));
});
