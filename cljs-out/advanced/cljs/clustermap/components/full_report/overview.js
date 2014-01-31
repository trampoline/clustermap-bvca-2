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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21406){var map__21411 = p__21406;var map__21411__$1 = ((cljs.core.seq_QMARK_(map__21411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21411):map__21411);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21411__$1,cljs.core.constant$keyword$195);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21411__$1,cljs.core.constant$keyword$225);var pred__21412 = cljs.core._EQ_;var expr__21413 = type;if(cljs.core.truth_((pred__21412.cljs$core$IFn$_invoke$arity$2 ? pred__21412.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260,expr__21413) : pred__21412.call(null,cljs.core.constant$keyword$260,expr__21413))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,"Total",cljs.core.constant$keyword$267,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,"Average",cljs.core.constant$keyword$267,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21412.cljs$core$IFn$_invoke$arity$2 ? pred__21412.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$261,expr__21413) : pred__21412.call(null,cljs.core.constant$keyword$261,expr__21413))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,"Total",cljs.core.constant$keyword$267,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,"Average",cljs.core.constant$keyword$267,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21412.cljs$core$IFn$_invoke$arity$2 ? pred__21412.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$262,expr__21413) : pred__21412.call(null,cljs.core.constant$keyword$262,expr__21413))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,"Total",cljs.core.constant$keyword$267,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,"Average",cljs.core.constant$keyword$267,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,"Total",cljs.core.constant$keyword$267,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,"Average",cljs.core.constant$keyword$267,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21415){var map__21424 = p__21415;var map__21424__$1 = ((cljs.core.seq_QMARK_(map__21424))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21424):map__21424);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,cljs.core.constant$keyword$268);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,cljs.core.constant$keyword$269);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,cljs.core.constant$keyword$265);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,cljs.core.constant$keyword$270);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$265,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$271,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21425 = co_stats;var G__21425__$1 = (((G__21425 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21425));return G__21425__$1;
})(),cljs.core.constant$keyword$191,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21425 = co_stats;var G__21425__$1 = (((G__21425 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21425));return G__21425__$1;
})(),cljs.core.constant$keyword$191,"-")),cljs.core.constant$keyword$272,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21426 = co_stats;var G__21426__$1 = (((G__21426 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21426));return G__21426__$1;
})(),cljs.core.constant$keyword$191,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21426 = co_stats;var G__21426__$1 = (((G__21426 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21426));return G__21426__$1;
})(),cljs.core.constant$keyword$191,"-")),cljs.core.constant$keyword$273,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21427 = co_stats;var G__21427__$1 = (((G__21427 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21427));return G__21427__$1;
})(),cljs.core.constant$keyword$191,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21427 = co_stats;var G__21427__$1 = (((G__21427 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21427));return G__21427__$1;
})(),cljs.core.constant$keyword$191,"-")),cljs.core.constant$keyword$274,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21428 = site_stats;var G__21428__$1 = (((G__21428 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21428));var G__21428__$2 = (((G__21428__$1 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21428__$1));return G__21428__$2;
})(),cljs.core.constant$keyword$256,2,cljs.core.constant$keyword$191,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21428 = site_stats;var G__21428__$1 = (((G__21428 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21428));var G__21428__$2 = (((G__21428__$1 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21428__$1));return G__21428__$2;
})(),cljs.core.constant$keyword$256,2,cljs.core.constant$keyword$191,"-")),cljs.core.constant$keyword$275,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21429 = site_stats;var G__21429__$1 = (((G__21429 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21429));var G__21429__$2 = (((G__21429__$1 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21429__$1));return G__21429__$2;
})(),cljs.core.constant$keyword$256,2,cljs.core.constant$keyword$191,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21429 = site_stats;var G__21429__$1 = (((G__21429 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21429));var G__21429__$2 = (((G__21429__$1 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21429__$1));return G__21429__$2;
})(),cljs.core.constant$keyword$256,2,cljs.core.constant$keyword$191,"-"))], null)], 0)),cljs.core.constant$keyword$266,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$271,"\u00A0",cljs.core.constant$keyword$272,"\u00A0",cljs.core.constant$keyword$273,"\u00A0",cljs.core.constant$keyword$274,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21430 = site_stats;var G__21430__$1 = (((G__21430 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21430));var G__21430__$2 = (((G__21430__$1 == null))?null:cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(G__21430__$1));return G__21430__$2;
})(),cljs.core.constant$keyword$256,2,cljs.core.constant$keyword$191,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21430 = site_stats;var G__21430__$1 = (((G__21430 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21430));var G__21430__$2 = (((G__21430__$1 == null))?null:cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(G__21430__$1));return G__21430__$2;
})(),cljs.core.constant$keyword$256,2,cljs.core.constant$keyword$191,"-")),cljs.core.constant$keyword$275,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21431 = site_stats;var G__21431__$1 = (((G__21431 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21431));var G__21431__$2 = (((G__21431__$1 == null))?null:cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(G__21431__$1));return G__21431__$2;
})(),cljs.core.constant$keyword$258,0,cljs.core.constant$keyword$191,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21431 = site_stats;var G__21431__$1 = (((G__21431 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21431));var G__21431__$2 = (((G__21431__$1 == null))?null:cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(G__21431__$1));return G__21431__$2;
})(),cljs.core.constant$keyword$258,0,cljs.core.constant$keyword$191,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21450 = clustermap.components.full_report.overview.overview_data(data);var map__21450__$1 = ((cljs.core.seq_QMARK_(map__21450))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21450):map__21450);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,cljs.core.constant$keyword$266);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,cljs.core.constant$keyword$265);if(typeof clustermap.components.full_report.overview.t21451 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21451 = (function (selection,averages,map__21450,data,overview,meta21452){
this.selection = selection;
this.averages = averages;
this.map__21450 = map__21450;
this.data = data;
this.overview = overview;
this.meta21452 = meta21452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21451.cljs$lang$type = true;
clustermap.components.full_report.overview.t21451.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21451";
clustermap.components.full_report.overview.t21451.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21451");
});
clustermap.components.full_report.overview.t21451.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21451.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$267) : self__.selection.call(null,cljs.core.constant$keyword$267))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$236) : self__.selection.call(null,cljs.core.constant$keyword$236)))),React.DOM.td(null,(function (){var attrs21458 = cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21458))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21458], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21458));
}
})()),React.DOM.td(null,(function (){var attrs21459 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21459))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21459], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21459));
}
})()),React.DOM.td(null,(function (){var attrs21460 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21460))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21460], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21460));
}
})()),React.DOM.td(null,(function (){var attrs21461 = cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21461))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21461], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21461));
}
})()),React.DOM.td(null,(function (){var attrs21462 = cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21462))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21462], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21462));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$267) : self__.averages.call(null,cljs.core.constant$keyword$267))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$236) : self__.averages.call(null,cljs.core.constant$keyword$236)))),React.DOM.td(null,(function (){var attrs21463 = cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21463))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21463], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21463));
}
})()),React.DOM.td(null,(function (){var attrs21464 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21464))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21464], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21464));
}
})()),React.DOM.td(null,(function (){var attrs21465 = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21465))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21465], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21465));
}
})()),React.DOM.td(null,(function (){var attrs21466 = cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21466))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21466], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21466));
}
})()),React.DOM.td(null,(function (){var attrs21467 = cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21467))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21467], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21467));
}
})()))))));
});
clustermap.components.full_report.overview.t21451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21453){var self__ = this;
var _21453__$1 = this;return self__.meta21452;
});
clustermap.components.full_report.overview.t21451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21453,meta21452__$1){var self__ = this;
var _21453__$1 = this;return (new clustermap.components.full_report.overview.t21451(self__.selection,self__.averages,self__.map__21450,self__.data,self__.overview,meta21452__$1));
});
clustermap.components.full_report.overview.__GT_t21451 = (function __GT_t21451(selection__$1,averages__$1,map__21450__$2,data__$1,overview__$1,meta21452){return (new clustermap.components.full_report.overview.t21451(selection__$1,averages__$1,map__21450__$2,data__$1,overview__$1,meta21452));
});
}
return (new clustermap.components.full_report.overview.t21451(selection,averages,map__21450__$1,data,overview,null));
});
