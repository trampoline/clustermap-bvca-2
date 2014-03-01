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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__22913){var map__22918 = p__22913;var map__22918__$1 = ((cljs.core.seq_QMARK_(map__22918))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22918):map__22918);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,cljs.core.constant$keyword$266);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22918__$1,cljs.core.constant$keyword$305);var pred__22919 = cljs.core._EQ_;var expr__22920 = type;if(cljs.core.truth_((pred__22919.cljs$core$IFn$_invoke$arity$2 ? pred__22919.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$338,expr__22920) : pred__22919.call(null,cljs.core.constant$keyword$338,expr__22920))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$348,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Total",cljs.core.constant$keyword$375,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$373,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Mean",cljs.core.constant$keyword$375,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$374,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Benchmark",cljs.core.constant$keyword$375,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22919.cljs$core$IFn$_invoke$arity$2 ? pred__22919.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$339,expr__22920) : pred__22919.call(null,cljs.core.constant$keyword$339,expr__22920))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$348,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Total",cljs.core.constant$keyword$375,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$373,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Mean",cljs.core.constant$keyword$375,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$374,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Benchmark",cljs.core.constant$keyword$375,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22919.cljs$core$IFn$_invoke$arity$2 ? pred__22919.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$340,expr__22920) : pred__22919.call(null,cljs.core.constant$keyword$340,expr__22920))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$348,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Total",cljs.core.constant$keyword$375,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$373,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Mean",cljs.core.constant$keyword$375,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$374,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Benchmark",cljs.core.constant$keyword$375,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$348,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Total",cljs.core.constant$keyword$375,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$373,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Mean",cljs.core.constant$keyword$375,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$374,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$315,"Benchmark",cljs.core.constant$keyword$375,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__22922){var map__22948 = p__22922;var map__22948__$1 = ((cljs.core.seq_QMARK_(map__22948))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22948):map__22948);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,cljs.core.constant$keyword$376);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,cljs.core.constant$keyword$348);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948__$1,cljs.core.constant$keyword$377);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3406__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$348,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$378,cljs.core.constant$keyword$379,cljs.core.constant$keyword$380,cljs.core.constant$keyword$381,cljs.core.constant$keyword$382,cljs.core.constant$keyword$383,cljs.core.constant$keyword$384,cljs.core.constant$keyword$385,cljs.core.constant$keyword$386],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22949 = site_stats;var G__22949__$1 = (((G__22949 == null))?null:cljs.core.constant$keyword$387.cljs$core$IFn$_invoke$arity$1(G__22949));return G__22949__$1;
})(),cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22949 = site_stats;var G__22949__$1 = (((G__22949 == null))?null:cljs.core.constant$keyword$387.cljs$core$IFn$_invoke$arity$1(G__22949));return G__22949__$1;
})(),cljs.core.constant$keyword$262,"-")),(function (){var G__22950 = site_stats;var G__22950__$1 = (((G__22950 == null))?null:cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(G__22950));var G__22950__$2 = (((G__22950__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__22950__$1));return G__22950__$2;
})(),(function (){var G__22951 = site_stats;var G__22951__$1 = (((G__22951 == null))?null:cljs.core.constant$keyword$390.cljs$core$IFn$_invoke$arity$1(G__22951));var G__22951__$2 = (((G__22951__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__22951__$1));return G__22951__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22952 = site_stats;var G__22952__$1 = (((G__22952 == null))?null:cljs.core.constant$keyword$391.cljs$core$IFn$_invoke$arity$1(G__22952));return G__22952__$1;
})(),cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22952 = site_stats;var G__22952__$1 = (((G__22952 == null))?null:cljs.core.constant$keyword$391.cljs$core$IFn$_invoke$arity$1(G__22952));return G__22952__$1;
})(),cljs.core.constant$keyword$262,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22953 = site_stats;var G__22953__$1 = (((G__22953 == null))?null:cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(G__22953));var G__22953__$2 = (((G__22953__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__22953__$1));return G__22953__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22953 = site_stats;var G__22953__$1 = (((G__22953 == null))?null:cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(G__22953));var G__22953__$2 = (((G__22953__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__22953__$1));return G__22953__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22954 = site_stats;var G__22954__$1 = (((G__22954 == null))?null:cljs.core.constant$keyword$390.cljs$core$IFn$_invoke$arity$1(G__22954));var G__22954__$2 = (((G__22954__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__22954__$1));return G__22954__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22954 = site_stats;var G__22954__$1 = (((G__22954 == null))?null:cljs.core.constant$keyword$390.cljs$core$IFn$_invoke$arity$1(G__22954));var G__22954__$2 = (((G__22954__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__22954__$1));return G__22954__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22955 = site_stats;var G__22955__$1 = (((G__22955 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__22955));var G__22955__$2 = (((G__22955__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__22955__$1));return G__22955__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22955 = site_stats;var G__22955__$1 = (((G__22955 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__22955));var G__22955__$2 = (((G__22955__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__22955__$1));return G__22955__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22956 = site_stats;var G__22956__$1 = (((G__22956 == null))?null:cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(G__22956));return G__22956__$1;
})(),cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22956 = site_stats;var G__22956__$1 = (((G__22956 == null))?null:cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(G__22956));return G__22956__$1;
})(),cljs.core.constant$keyword$262,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22957 = site_stats;var G__22957__$1 = (((G__22957 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__22957));var G__22957__$2 = (((G__22957__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__22957__$1));return G__22957__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22957 = site_stats;var G__22957__$1 = (((G__22957 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__22957));var G__22957__$2 = (((G__22957__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__22957__$1));return G__22957__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-"))])], 0)),cljs.core.constant$keyword$373,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$373.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$378,cljs.core.constant$keyword$379,cljs.core.constant$keyword$380,cljs.core.constant$keyword$381,cljs.core.constant$keyword$382,cljs.core.constant$keyword$383,cljs.core.constant$keyword$384,cljs.core.constant$keyword$385,cljs.core.constant$keyword$386],["\u00A0",(function (){var G__22958 = site_stats;var G__22958__$1 = (((G__22958 == null))?null:cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(G__22958));var G__22958__$2 = (((G__22958__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22958__$1));return G__22958__$2;
})(),(function (){var G__22959 = site_stats;var G__22959__$1 = (((G__22959 == null))?null:cljs.core.constant$keyword$390.cljs$core$IFn$_invoke$arity$1(G__22959));var G__22959__$2 = (((G__22959__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22959__$1));return G__22959__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22960 = site_stats;var G__22960__$1 = (((G__22960 == null))?null:cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(G__22960));var G__22960__$2 = (((G__22960__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22960__$1));return G__22960__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22960 = site_stats;var G__22960__$1 = (((G__22960 == null))?null:cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(G__22960));var G__22960__$2 = (((G__22960__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22960__$1));return G__22960__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22961 = site_stats;var G__22961__$1 = (((G__22961 == null))?null:cljs.core.constant$keyword$390.cljs$core$IFn$_invoke$arity$1(G__22961));var G__22961__$2 = (((G__22961__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22961__$1));return G__22961__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22961 = site_stats;var G__22961__$1 = (((G__22961 == null))?null:cljs.core.constant$keyword$390.cljs$core$IFn$_invoke$arity$1(G__22961));var G__22961__$2 = (((G__22961__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22961__$1));return G__22961__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22962 = site_stats;var G__22962__$1 = (((G__22962 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__22962));var G__22962__$2 = (((G__22962__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22962__$1));return G__22962__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22962 = site_stats;var G__22962__$1 = (((G__22962 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__22962));var G__22962__$2 = (((G__22962__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22962__$1));return G__22962__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22963 = site_stats;var G__22963__$1 = (((G__22963 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__22963));var G__22963__$2 = (((G__22963__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22963__$1));return G__22963__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22963 = site_stats;var G__22963__$1 = (((G__22963 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__22963));var G__22963__$2 = (((G__22963__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22963__$1));return G__22963__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-"))])], 0)),cljs.core.constant$keyword$374,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$374.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$378,cljs.core.constant$keyword$379,cljs.core.constant$keyword$380,cljs.core.constant$keyword$381,cljs.core.constant$keyword$382,cljs.core.constant$keyword$383,cljs.core.constant$keyword$384,cljs.core.constant$keyword$385,cljs.core.constant$keyword$386],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22964 = all_investment_stats;var G__22964__$1 = (((G__22964 == null))?null:cljs.core.constant$keyword$387.cljs$core$IFn$_invoke$arity$1(G__22964));return G__22964__$1;
})(),cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22964 = all_investment_stats;var G__22964__$1 = (((G__22964 == null))?null:cljs.core.constant$keyword$387.cljs$core$IFn$_invoke$arity$1(G__22964));return G__22964__$1;
})(),cljs.core.constant$keyword$262,"-")),(function (){var G__22965 = all_investment_stats;var G__22965__$1 = (((G__22965 == null))?null:cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(G__22965));var G__22965__$2 = (((G__22965__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22965__$1));return G__22965__$2;
})(),(function (){var G__22966 = all_investment_stats;var G__22966__$1 = (((G__22966 == null))?null:cljs.core.constant$keyword$390.cljs$core$IFn$_invoke$arity$1(G__22966));var G__22966__$2 = (((G__22966__$1 == null))?null:cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(G__22966__$1));return G__22966__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22967 = all_investment_stats;var G__22967__$1 = (((G__22967 == null))?null:cljs.core.constant$keyword$391.cljs$core$IFn$_invoke$arity$1(G__22967));return G__22967__$1;
})(),cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22967 = all_investment_stats;var G__22967__$1 = (((G__22967 == null))?null:cljs.core.constant$keyword$391.cljs$core$IFn$_invoke$arity$1(G__22967));return G__22967__$1;
})(),cljs.core.constant$keyword$262,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22968 = all_investment_stats;var G__22968__$1 = (((G__22968 == null))?null:cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(G__22968));var G__22968__$2 = (((G__22968__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22968__$1));return G__22968__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22968 = all_investment_stats;var G__22968__$1 = (((G__22968 == null))?null:cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(G__22968));var G__22968__$2 = (((G__22968__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22968__$1));return G__22968__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22969 = all_investment_stats;var G__22969__$1 = (((G__22969 == null))?null:cljs.core.constant$keyword$390.cljs$core$IFn$_invoke$arity$1(G__22969));var G__22969__$2 = (((G__22969__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22969__$1));return G__22969__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22969 = all_investment_stats;var G__22969__$1 = (((G__22969 == null))?null:cljs.core.constant$keyword$390.cljs$core$IFn$_invoke$arity$1(G__22969));var G__22969__$2 = (((G__22969__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22969__$1));return G__22969__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22970 = all_investment_stats;var G__22970__$1 = (((G__22970 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__22970));var G__22970__$2 = (((G__22970__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22970__$1));return G__22970__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22970 = all_investment_stats;var G__22970__$1 = (((G__22970 == null))?null:cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(G__22970));var G__22970__$2 = (((G__22970__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22970__$1));return G__22970__$2;
})(),cljs.core.constant$keyword$336,0,cljs.core.constant$keyword$262,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22971 = all_investment_stats;var G__22971__$1 = (((G__22971 == null))?null:cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(G__22971));return G__22971__$1;
})(),cljs.core.constant$keyword$262,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22971 = all_investment_stats;var G__22971__$1 = (((G__22971 == null))?null:cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(G__22971));return G__22971__$1;
})(),cljs.core.constant$keyword$262,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22972 = all_investment_stats;var G__22972__$1 = (((G__22972 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__22972));var G__22972__$2 = (((G__22972__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22972__$1));return G__22972__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22972 = all_investment_stats;var G__22972__$1 = (((G__22972 == null))?null:cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(G__22972));var G__22972__$2 = (((G__22972__$1 == null))?null:cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(G__22972__$1));return G__22972__$2;
})(),cljs.core.constant$keyword$334,2,cljs.core.constant$keyword$262,"-"))])], 0))], null);
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
clustermap.components.full_report.overview.overview = (function overview(data){var map__23016 = clustermap.components.full_report.overview.overview_data(data);var map__23016__$1 = ((cljs.core.seq_QMARK_(map__23016))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23016):map__23016);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$374);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$373);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$348);if(typeof clustermap.components.full_report.overview.t23017 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t23017 = (function (selection,averages,benchmark,map__23016,data,overview,meta23018){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__23016 = map__23016;
this.data = data;
this.overview = overview;
this.meta23018 = meta23018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t23017.cljs$lang$type = true;
clustermap.components.full_report.overview.t23017.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t23017";
clustermap.components.full_report.overview.t23017.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t23017");
});
clustermap.components.full_report.overview.t23017.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t23017.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$375) : self__.selection.call(null,cljs.core.constant$keyword$375))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$315) : self__.selection.call(null,cljs.core.constant$keyword$315)))),React.DOM.td(null,(function (){var attrs23024 = cljs.core.constant$keyword$378.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23024))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23024], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23024));
}
})()),React.DOM.td(null,(function (){var attrs23025 = cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23025))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23025], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23025));
}
})()),React.DOM.td(null,(function (){var attrs23026 = cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23026))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23026], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23026));
}
})()),React.DOM.td(null,(function (){var attrs23027 = cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23027))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23027], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23027));
}
})()),React.DOM.td(null,(function (){var attrs23028 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$380.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs23028))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23028], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23028));
}
})()),React.DOM.td(null,(function (){var attrs23029 = cljs.core.constant$keyword$383.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23029))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23029], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23029));
}
})()),React.DOM.td(null,(function (){var attrs23030 = cljs.core.constant$keyword$384.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23030))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23030], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23030));
}
})()),React.DOM.td(null,(function (){var attrs23031 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$379.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs23031))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23031], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23031));
}
})()),React.DOM.td(null,(function (){var attrs23032 = cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23032))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23032], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23032));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$375) : self__.averages.call(null,cljs.core.constant$keyword$375))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$315) : self__.averages.call(null,cljs.core.constant$keyword$315)))),React.DOM.td(null,(function (){var attrs23033 = cljs.core.constant$keyword$378.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs23033))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs23033], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs23033));
}
})()),React.DOM.td(null,(function (){var attrs23034 = cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs23034))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs23034], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs23034));
}
})()),React.DOM.td(null,(function (){var attrs23035 = cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs23035))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs23035], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs23035));
}
})()),React.DOM.td(null,(function (){var attrs23036 = cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs23036))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs23036], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs23036));
}
})()),React.DOM.td(null,(function (){var attrs23037 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$380.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs23037))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs23037], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs23037));
}
})()),React.DOM.td(null,(function (){var attrs23038 = cljs.core.constant$keyword$383.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs23038))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs23038], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs23038));
}
})()),React.DOM.td(null,(function (){var attrs23039 = cljs.core.constant$keyword$384.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs23039))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs23039], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs23039));
}
})()),React.DOM.td(null,(function (){var attrs23040 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$379.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs23040))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs23040], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs23040));
}
})()),React.DOM.td(null,(function (){var attrs23041 = cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs23041))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs23041], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs23041));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$375) : self__.benchmark.call(null,cljs.core.constant$keyword$375))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$315) : self__.benchmark.call(null,cljs.core.constant$keyword$315)))),React.DOM.td(null,(function (){var attrs23042 = cljs.core.constant$keyword$378.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs23042))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs23042], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs23042));
}
})()),React.DOM.td(null,(function (){var attrs23043 = cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs23043))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs23043], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs23043));
}
})()),React.DOM.td(null,(function (){var attrs23044 = cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs23044))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs23044], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs23044));
}
})()),React.DOM.td(null,(function (){var attrs23045 = cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs23045))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs23045], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs23045));
}
})()),React.DOM.td(null,(function (){var attrs23046 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$380.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs23046))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs23046], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs23046));
}
})()),React.DOM.td(null,(function (){var attrs23047 = cljs.core.constant$keyword$383.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs23047))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs23047], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs23047));
}
})()),React.DOM.td(null,(function (){var attrs23048 = cljs.core.constant$keyword$384.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs23048))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs23048], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs23048));
}
})()),React.DOM.td(null,(function (){var attrs23049 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$379.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs23049))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs23049], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs23049));
}
})()),React.DOM.td(null,(function (){var attrs23050 = cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs23050))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs23050], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs23050));
}
})()))))));
});
clustermap.components.full_report.overview.t23017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23019){var self__ = this;
var _23019__$1 = this;return self__.meta23018;
});
clustermap.components.full_report.overview.t23017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23019,meta23018__$1){var self__ = this;
var _23019__$1 = this;return (new clustermap.components.full_report.overview.t23017(self__.selection,self__.averages,self__.benchmark,self__.map__23016,self__.data,self__.overview,meta23018__$1));
});
clustermap.components.full_report.overview.__GT_t23017 = (function __GT_t23017(selection__$1,averages__$1,benchmark__$1,map__23016__$2,data__$1,overview__$1,meta23018){return (new clustermap.components.full_report.overview.t23017(selection__$1,averages__$1,benchmark__$1,map__23016__$2,data__$1,overview__$1,meta23018));
});
}
return (new clustermap.components.full_report.overview.t23017(selection,averages,benchmark,map__23016__$1,data,overview,null));
});
