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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__20725){var map__20730 = p__20725;var map__20730__$1 = ((cljs.core.seq_QMARK_(map__20730))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20730):map__20730);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20730__$1,cljs.core.constant$keyword$161);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20730__$1,cljs.core.constant$keyword$191);var pred__20731 = cljs.core._EQ_;var expr__20732 = type;if(cljs.core.truth_((pred__20731.cljs$core$IFn$_invoke$arity$2 ? pred__20731.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$226,expr__20732) : pred__20731.call(null,cljs.core.constant$keyword$226,expr__20732))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,"Total",cljs.core.constant$keyword$231,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,"Average",cljs.core.constant$keyword$231,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__20731.cljs$core$IFn$_invoke$arity$2 ? pred__20731.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$227,expr__20732) : pred__20731.call(null,cljs.core.constant$keyword$227,expr__20732))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,"Total",cljs.core.constant$keyword$231,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,"Average",cljs.core.constant$keyword$231,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__20731.cljs$core$IFn$_invoke$arity$2 ? pred__20731.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$228,expr__20732) : pred__20731.call(null,cljs.core.constant$keyword$228,expr__20732))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,"Total",cljs.core.constant$keyword$231,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,"Average",cljs.core.constant$keyword$231,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,"Total",cljs.core.constant$keyword$231,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,"Average",cljs.core.constant$keyword$231,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__20734){var map__20743 = p__20734;var map__20743__$1 = ((cljs.core.seq_QMARK_(map__20743))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20743):map__20743);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20743__$1,cljs.core.constant$keyword$232);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20743__$1,cljs.core.constant$keyword$229);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20743__$1,cljs.core.constant$keyword$233);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var use_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$234,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20744 = use_stats;var G__20744__$1 = (((G__20744 == null))?null:cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(G__20744));return G__20744__$1;
})(),cljs.core.constant$keyword$157,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20744 = use_stats;var G__20744__$1 = (((G__20744 == null))?null:cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(G__20744));return G__20744__$1;
})(),cljs.core.constant$keyword$157,"-")),cljs.core.constant$keyword$235,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20745 = use_stats;var G__20745__$1 = (((G__20745 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20745));return G__20745__$1;
})(),cljs.core.constant$keyword$157,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20745 = use_stats;var G__20745__$1 = (((G__20745 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20745));return G__20745__$1;
})(),cljs.core.constant$keyword$157,"-")),cljs.core.constant$keyword$236,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20746 = use_stats;var G__20746__$1 = (((G__20746 == null))?null:cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(G__20746));return G__20746__$1;
})(),cljs.core.constant$keyword$157,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20746 = use_stats;var G__20746__$1 = (((G__20746 == null))?null:cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(G__20746));return G__20746__$1;
})(),cljs.core.constant$keyword$157,"-")),cljs.core.constant$keyword$237,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20747 = use_stats;var G__20747__$1 = (((G__20747 == null))?null:cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(G__20747));var G__20747__$2 = (((G__20747__$1 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20747__$1));return G__20747__$2;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20747 = use_stats;var G__20747__$1 = (((G__20747 == null))?null:cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(G__20747));var G__20747__$2 = (((G__20747__$1 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20747__$1));return G__20747__$2;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-")),cljs.core.constant$keyword$238,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__20748 = use_stats;var G__20748__$1 = (((G__20748 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__20748));var G__20748__$2 = (((G__20748__$1 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20748__$1));return G__20748__$2;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20748 = use_stats;var G__20748__$1 = (((G__20748 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__20748));var G__20748__$2 = (((G__20748__$1 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20748__$1));return G__20748__$2;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-"))], null)], 0)),cljs.core.constant$keyword$230,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$234,"\u00A0",cljs.core.constant$keyword$235,"\u00A0",cljs.core.constant$keyword$236,"\u00A0",cljs.core.constant$keyword$237,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20749 = use_stats;var G__20749__$1 = (((G__20749 == null))?null:cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(G__20749));var G__20749__$2 = (((G__20749__$1 == null))?null:cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(G__20749__$1));return G__20749__$2;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20749 = use_stats;var G__20749__$1 = (((G__20749 == null))?null:cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(G__20749));var G__20749__$2 = (((G__20749__$1 == null))?null:cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(G__20749__$1));return G__20749__$2;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-")),cljs.core.constant$keyword$238,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__20750 = use_stats;var G__20750__$1 = (((G__20750 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__20750));var G__20750__$2 = (((G__20750__$1 == null))?null:cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(G__20750__$1));return G__20750__$2;
})(),cljs.core.constant$keyword$224,0,cljs.core.constant$keyword$157,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20750 = use_stats;var G__20750__$1 = (((G__20750 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__20750));var G__20750__$2 = (((G__20750__$1 == null))?null:cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(G__20750__$1));return G__20750__$2;
})(),cljs.core.constant$keyword$224,0,cljs.core.constant$keyword$157,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__20769 = clustermap.components.full_report.overview.overview_data(data);var map__20769__$1 = ((cljs.core.seq_QMARK_(map__20769))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20769):map__20769);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20769__$1,cljs.core.constant$keyword$230);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20769__$1,cljs.core.constant$keyword$229);if(typeof clustermap.components.full_report.overview.t20770 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t20770 = (function (selection,averages,map__20769,data,overview,meta20771){
this.selection = selection;
this.averages = averages;
this.map__20769 = map__20769;
this.data = data;
this.overview = overview;
this.meta20771 = meta20771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t20770.cljs$lang$type = true;
clustermap.components.full_report.overview.t20770.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t20770";
clustermap.components.full_report.overview.t20770.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t20770");
});
clustermap.components.full_report.overview.t20770.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t20770.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"2012 Overview"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$231) : self__.selection.call(null,cljs.core.constant$keyword$231))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$202) : self__.selection.call(null,cljs.core.constant$keyword$202)))),React.DOM.td(null,(function (){var attrs20777 = cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20777))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20777], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20777));
}
})()),React.DOM.td(null,(function (){var attrs20778 = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20778))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20778], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20778));
}
})()),React.DOM.td(null,(function (){var attrs20779 = cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20779))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20779], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20779));
}
})()),React.DOM.td(null,(function (){var attrs20780 = cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20780))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20780], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20780));
}
})()),React.DOM.td(null,(function (){var attrs20781 = cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20781))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20781], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20781));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$231) : self__.averages.call(null,cljs.core.constant$keyword$231))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$202) : self__.averages.call(null,cljs.core.constant$keyword$202)))),React.DOM.td(null,(function (){var attrs20782 = cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20782))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20782], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20782));
}
})()),React.DOM.td(null,(function (){var attrs20783 = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20783))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20783], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20783));
}
})()),React.DOM.td(null,(function (){var attrs20784 = cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20784))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20784], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20784));
}
})()),React.DOM.td(null,(function (){var attrs20785 = cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20785))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20785], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20785));
}
})()),React.DOM.td(null,(function (){var attrs20786 = cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20786))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20786], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20786));
}
})()))))));
});
clustermap.components.full_report.overview.t20770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20772){var self__ = this;
var _20772__$1 = this;return self__.meta20771;
});
clustermap.components.full_report.overview.t20770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20772,meta20771__$1){var self__ = this;
var _20772__$1 = this;return (new clustermap.components.full_report.overview.t20770(self__.selection,self__.averages,self__.map__20769,self__.data,self__.overview,meta20771__$1));
});
clustermap.components.full_report.overview.__GT_t20770 = (function __GT_t20770(selection__$1,averages__$1,map__20769__$2,data__$1,overview__$1,meta20771){return (new clustermap.components.full_report.overview.t20770(selection__$1,averages__$1,map__20769__$2,data__$1,overview__$1,meta20771));
});
}
return (new clustermap.components.full_report.overview.t20770(selection,averages,map__20769__$1,data,overview,null));
});
