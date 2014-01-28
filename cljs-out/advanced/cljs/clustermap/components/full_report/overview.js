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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__20927){var map__20932 = p__20927;var map__20932__$1 = ((cljs.core.seq_QMARK_(map__20932))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20932):map__20932);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20932__$1,cljs.core.constant$keyword$187);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20932__$1,cljs.core.constant$keyword$217);var pred__20933 = cljs.core._EQ_;var expr__20934 = type;if(cljs.core.truth_((pred__20933.cljs$core$IFn$_invoke$arity$2 ? pred__20933.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$252,expr__20934) : pred__20933.call(null,cljs.core.constant$keyword$252,expr__20934))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,"Total",cljs.core.constant$keyword$257,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,"Average",cljs.core.constant$keyword$257,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__20933.cljs$core$IFn$_invoke$arity$2 ? pred__20933.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$253,expr__20934) : pred__20933.call(null,cljs.core.constant$keyword$253,expr__20934))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,"Total",cljs.core.constant$keyword$257,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,"Average",cljs.core.constant$keyword$257,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__20933.cljs$core$IFn$_invoke$arity$2 ? pred__20933.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$254,expr__20934) : pred__20933.call(null,cljs.core.constant$keyword$254,expr__20934))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,"Total",cljs.core.constant$keyword$257,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,"Average",cljs.core.constant$keyword$257,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,"Total",cljs.core.constant$keyword$257,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,"Average",cljs.core.constant$keyword$257,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__20936){var map__20945 = p__20936;var map__20945__$1 = ((cljs.core.seq_QMARK_(map__20945))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20945):map__20945);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.constant$keyword$258);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.constant$keyword$259);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.constant$keyword$255);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,cljs.core.constant$keyword$260);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$255.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$261,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20946 = co_stats;var G__20946__$1 = (((G__20946 == null))?null:cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(G__20946));return G__20946__$1;
})(),cljs.core.constant$keyword$183,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20946 = co_stats;var G__20946__$1 = (((G__20946 == null))?null:cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(G__20946));return G__20946__$1;
})(),cljs.core.constant$keyword$183,"-")),cljs.core.constant$keyword$262,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20947 = co_stats;var G__20947__$1 = (((G__20947 == null))?null:cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(G__20947));return G__20947__$1;
})(),cljs.core.constant$keyword$183,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20947 = co_stats;var G__20947__$1 = (((G__20947 == null))?null:cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(G__20947));return G__20947__$1;
})(),cljs.core.constant$keyword$183,"-")),cljs.core.constant$keyword$263,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20948 = co_stats;var G__20948__$1 = (((G__20948 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__20948));return G__20948__$1;
})(),cljs.core.constant$keyword$183,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20948 = co_stats;var G__20948__$1 = (((G__20948 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__20948));return G__20948__$1;
})(),cljs.core.constant$keyword$183,"-")),cljs.core.constant$keyword$264,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20949 = site_stats;var G__20949__$1 = (((G__20949 == null))?null:cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(G__20949));var G__20949__$2 = (((G__20949__$1 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__20949__$1));return G__20949__$2;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20949 = site_stats;var G__20949__$1 = (((G__20949 == null))?null:cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(G__20949));var G__20949__$2 = (((G__20949__$1 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__20949__$1));return G__20949__$2;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-")),cljs.core.constant$keyword$265,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__20950 = site_stats;var G__20950__$1 = (((G__20950 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__20950));var G__20950__$2 = (((G__20950__$1 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__20950__$1));return G__20950__$2;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20950 = site_stats;var G__20950__$1 = (((G__20950 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__20950));var G__20950__$2 = (((G__20950__$1 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__20950__$1));return G__20950__$2;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-"))], null)], 0)),cljs.core.constant$keyword$256,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$256.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$261,"\u00A0",cljs.core.constant$keyword$262,"\u00A0",cljs.core.constant$keyword$263,"\u00A0",cljs.core.constant$keyword$264,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20951 = site_stats;var G__20951__$1 = (((G__20951 == null))?null:cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(G__20951));var G__20951__$2 = (((G__20951__$1 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__20951__$1));return G__20951__$2;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20951 = site_stats;var G__20951__$1 = (((G__20951 == null))?null:cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(G__20951));var G__20951__$2 = (((G__20951__$1 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__20951__$1));return G__20951__$2;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-")),cljs.core.constant$keyword$265,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__20952 = site_stats;var G__20952__$1 = (((G__20952 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__20952));var G__20952__$2 = (((G__20952__$1 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__20952__$1));return G__20952__$2;
})(),cljs.core.constant$keyword$250,0,cljs.core.constant$keyword$183,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20952 = site_stats;var G__20952__$1 = (((G__20952 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__20952));var G__20952__$2 = (((G__20952__$1 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__20952__$1));return G__20952__$2;
})(),cljs.core.constant$keyword$250,0,cljs.core.constant$keyword$183,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__20971 = clustermap.components.full_report.overview.overview_data(data);var map__20971__$1 = ((cljs.core.seq_QMARK_(map__20971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20971):map__20971);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20971__$1,cljs.core.constant$keyword$256);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20971__$1,cljs.core.constant$keyword$255);if(typeof clustermap.components.full_report.overview.t20972 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t20972 = (function (selection,averages,map__20971,data,overview,meta20973){
this.selection = selection;
this.averages = averages;
this.map__20971 = map__20971;
this.data = data;
this.overview = overview;
this.meta20973 = meta20973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t20972.cljs$lang$type = true;
clustermap.components.full_report.overview.t20972.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t20972";
clustermap.components.full_report.overview.t20972.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t20972");
});
clustermap.components.full_report.overview.t20972.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t20972.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"2012 Overview"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$257) : self__.selection.call(null,cljs.core.constant$keyword$257))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$228) : self__.selection.call(null,cljs.core.constant$keyword$228)))),React.DOM.td(null,(function (){var attrs20979 = cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20979))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20979], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20979));
}
})()),React.DOM.td(null,(function (){var attrs20980 = cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20980))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20980], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20980));
}
})()),React.DOM.td(null,(function (){var attrs20981 = cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20981))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20981], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20981));
}
})()),React.DOM.td(null,(function (){var attrs20982 = cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20982))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20982], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20982));
}
})()),React.DOM.td(null,(function (){var attrs20983 = cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20983))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20983], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20983));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$257) : self__.averages.call(null,cljs.core.constant$keyword$257))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$228) : self__.averages.call(null,cljs.core.constant$keyword$228)))),React.DOM.td(null,(function (){var attrs20984 = cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20984))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20984], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20984));
}
})()),React.DOM.td(null,(function (){var attrs20985 = cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20985))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20985], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20985));
}
})()),React.DOM.td(null,(function (){var attrs20986 = cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20986))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20986], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20986));
}
})()),React.DOM.td(null,(function (){var attrs20987 = cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20987))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20987], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20987));
}
})()),React.DOM.td(null,(function (){var attrs20988 = cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20988))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20988], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20988));
}
})()))))));
});
clustermap.components.full_report.overview.t20972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20974){var self__ = this;
var _20974__$1 = this;return self__.meta20973;
});
clustermap.components.full_report.overview.t20972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20974,meta20973__$1){var self__ = this;
var _20974__$1 = this;return (new clustermap.components.full_report.overview.t20972(self__.selection,self__.averages,self__.map__20971,self__.data,self__.overview,meta20973__$1));
});
clustermap.components.full_report.overview.__GT_t20972 = (function __GT_t20972(selection__$1,averages__$1,map__20971__$2,data__$1,overview__$1,meta20973){return (new clustermap.components.full_report.overview.t20972(selection__$1,averages__$1,map__20971__$2,data__$1,overview__$1,meta20973));
});
}
return (new clustermap.components.full_report.overview.t20972(selection,averages,map__20971__$1,data,overview,null));
});
