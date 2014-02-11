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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__21652){var map__21657 = p__21652;var map__21657__$1 = ((cljs.core.seq_QMARK_(map__21657))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21657):map__21657);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21657__$1,cljs.core.constant$keyword$210);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21657__$1,cljs.core.constant$keyword$242);var pred__21658 = cljs.core._EQ_;var expr__21659 = type;if(cljs.core.truth_((pred__21658.cljs$core$IFn$_invoke$arity$2 ? pred__21658.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,expr__21659) : pred__21658.call(null,cljs.core.constant$keyword$275,expr__21659))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Total",cljs.core.constant$keyword$282,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Average",cljs.core.constant$keyword$282,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__21658.cljs$core$IFn$_invoke$arity$2 ? pred__21658.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$276,expr__21659) : pred__21658.call(null,cljs.core.constant$keyword$276,expr__21659))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Total",cljs.core.constant$keyword$282,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Average",cljs.core.constant$keyword$282,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__21658.cljs$core$IFn$_invoke$arity$2 ? pred__21658.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$277,expr__21659) : pred__21658.call(null,cljs.core.constant$keyword$277,expr__21659))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Total",cljs.core.constant$keyword$282,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Average",cljs.core.constant$keyword$282,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Total",cljs.core.constant$keyword$282,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$252,"Average",cljs.core.constant$keyword$282,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__21661){var map__21670 = p__21661;var map__21670__$1 = ((cljs.core.seq_QMARK_(map__21670))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21670):map__21670);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,cljs.core.constant$keyword$283);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,cljs.core.constant$keyword$284);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,cljs.core.constant$keyword$280);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21670__$1,cljs.core.constant$keyword$285);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var co_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$286,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21671 = co_stats;var G__21671__$1 = (((G__21671 == null))?null:cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(G__21671));return G__21671__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21671 = co_stats;var G__21671__$1 = (((G__21671 == null))?null:cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(G__21671));return G__21671__$1;
})(),cljs.core.constant$keyword$206,"-")),cljs.core.constant$keyword$287,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21672 = co_stats;var G__21672__$1 = (((G__21672 == null))?null:cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(G__21672));return G__21672__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21672 = co_stats;var G__21672__$1 = (((G__21672 == null))?null:cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(G__21672));return G__21672__$1;
})(),cljs.core.constant$keyword$206,"-")),cljs.core.constant$keyword$288,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21673 = co_stats;var G__21673__$1 = (((G__21673 == null))?null:cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(G__21673));return G__21673__$1;
})(),cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21673 = co_stats;var G__21673__$1 = (((G__21673 == null))?null:cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(G__21673));return G__21673__$1;
})(),cljs.core.constant$keyword$206,"-")),cljs.core.constant$keyword$289,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21674 = site_stats;var G__21674__$1 = (((G__21674 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21674));var G__21674__$2 = (((G__21674__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21674__$1));return G__21674__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21674 = site_stats;var G__21674__$1 = (((G__21674 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21674));var G__21674__$2 = (((G__21674__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21674__$1));return G__21674__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-")),cljs.core.constant$keyword$290,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21675 = site_stats;var G__21675__$1 = (((G__21675 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21675));var G__21675__$2 = (((G__21675__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21675__$1));return G__21675__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21675 = site_stats;var G__21675__$1 = (((G__21675 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21675));var G__21675__$2 = (((G__21675__$1 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21675__$1));return G__21675__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-"))], null)], 0)),cljs.core.constant$keyword$281,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$286,"\u00A0",cljs.core.constant$keyword$287,"\u00A0",cljs.core.constant$keyword$288,"\u00A0",cljs.core.constant$keyword$289,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21676 = site_stats;var G__21676__$1 = (((G__21676 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21676));var G__21676__$2 = (((G__21676__$1 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__21676__$1));return G__21676__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21676 = site_stats;var G__21676__$1 = (((G__21676 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21676));var G__21676__$2 = (((G__21676__$1 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__21676__$1));return G__21676__$2;
})(),cljs.core.constant$keyword$271,2,cljs.core.constant$keyword$206,"-")),cljs.core.constant$keyword$290,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__21677 = site_stats;var G__21677__$1 = (((G__21677 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21677));var G__21677__$2 = (((G__21677__$1 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__21677__$1));return G__21677__$2;
})(),cljs.core.constant$keyword$273,0,cljs.core.constant$keyword$206,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21677 = site_stats;var G__21677__$1 = (((G__21677 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21677));var G__21677__$2 = (((G__21677__$1 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__21677__$1));return G__21677__$2;
})(),cljs.core.constant$keyword$273,0,cljs.core.constant$keyword$206,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__21696 = clustermap.components.full_report.overview.overview_data(data);var map__21696__$1 = ((cljs.core.seq_QMARK_(map__21696))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21696):map__21696);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21696__$1,cljs.core.constant$keyword$281);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21696__$1,cljs.core.constant$keyword$280);if(typeof clustermap.components.full_report.overview.t21697 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t21697 = (function (selection,averages,map__21696,data,overview,meta21698){
this.selection = selection;
this.averages = averages;
this.map__21696 = map__21696;
this.data = data;
this.overview = overview;
this.meta21698 = meta21698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t21697.cljs$lang$type = true;
clustermap.components.full_report.overview.t21697.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t21697";
clustermap.components.full_report.overview.t21697.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t21697");
});
clustermap.components.full_report.overview.t21697.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t21697.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$282) : self__.selection.call(null,cljs.core.constant$keyword$282))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$252) : self__.selection.call(null,cljs.core.constant$keyword$252)))),React.DOM.td(null,(function (){var attrs21704 = cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21704))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21704], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21704));
}
})()),React.DOM.td(null,(function (){var attrs21705 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21705))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21705], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21705));
}
})()),React.DOM.td(null,(function (){var attrs21706 = cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21706))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21706], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21706));
}
})()),React.DOM.td(null,(function (){var attrs21707 = cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21707))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21707], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21707));
}
})()),React.DOM.td(null,(function (){var attrs21708 = cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs21708))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs21708], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs21708));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$282) : self__.averages.call(null,cljs.core.constant$keyword$282))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$252) : self__.averages.call(null,cljs.core.constant$keyword$252)))),React.DOM.td(null,(function (){var attrs21709 = cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21709))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21709], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21709));
}
})()),React.DOM.td(null,(function (){var attrs21710 = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21710))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21710], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21710));
}
})()),React.DOM.td(null,(function (){var attrs21711 = cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21711))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21711], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21711));
}
})()),React.DOM.td(null,(function (){var attrs21712 = cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21712))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21712], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21712));
}
})()),React.DOM.td(null,(function (){var attrs21713 = cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs21713))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs21713], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs21713));
}
})()))))));
});
clustermap.components.full_report.overview.t21697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21699){var self__ = this;
var _21699__$1 = this;return self__.meta21698;
});
clustermap.components.full_report.overview.t21697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21699,meta21698__$1){var self__ = this;
var _21699__$1 = this;return (new clustermap.components.full_report.overview.t21697(self__.selection,self__.averages,self__.map__21696,self__.data,self__.overview,meta21698__$1));
});
clustermap.components.full_report.overview.__GT_t21697 = (function __GT_t21697(selection__$1,averages__$1,map__21696__$2,data__$1,overview__$1,meta21698){return (new clustermap.components.full_report.overview.t21697(selection__$1,averages__$1,map__21696__$2,data__$1,overview__$1,meta21698));
});
}
return (new clustermap.components.full_report.overview.t21697(selection,averages,map__21696__$1,data,overview,null));
});
