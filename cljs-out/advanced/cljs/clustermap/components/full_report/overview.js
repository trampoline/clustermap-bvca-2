// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(data){var sel = cljs.core.constant$keyword$218.cljs$core$IFn$_invoke$arity$1(data);var val = cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(sel);var pred__20711 = cljs.core._EQ_;var expr__20712 = cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(sel);if(cljs.core.truth_((pred__20711.cljs$core$IFn$_invoke$arity$2 ? pred__20711.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__20712) : pred__20711.call(null,cljs.core.constant$keyword$230,expr__20712))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,"Total",cljs.core.constant$keyword$232,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,"Average",cljs.core.constant$keyword$232,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__20711.cljs$core$IFn$_invoke$arity$2 ? pred__20711.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$233,expr__20712) : pred__20711.call(null,cljs.core.constant$keyword$233,expr__20712))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,"Total",cljs.core.constant$keyword$232,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,"Average",cljs.core.constant$keyword$232,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__20711.cljs$core$IFn$_invoke$arity$2 ? pred__20711.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$234,expr__20712) : pred__20711.call(null,cljs.core.constant$keyword$234,expr__20712))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,"Total",cljs.core.constant$keyword$232,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,"Average",cljs.core.constant$keyword$232,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,"Total",cljs.core.constant$keyword$232,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,"Average",cljs.core.constant$keyword$232,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(data){var apc_stats = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(data);var sel_stats = (function (){var or__3406__auto__ = cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return apc_stats;
}
})();var sel_descrs = clustermap.components.full_report.overview.describe_selection(data);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$218.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$237,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20721 = sel_stats;var G__20721__$1 = (((G__20721 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20721));return G__20721__$1;
})(),cljs.core.constant$keyword$149,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20721 = sel_stats;var G__20721__$1 = (((G__20721 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20721));return G__20721__$1;
})(),cljs.core.constant$keyword$149,"-")),cljs.core.constant$keyword$238,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20722 = sel_stats;var G__20722__$1 = (((G__20722 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__20722));return G__20722__$1;
})(),cljs.core.constant$keyword$149,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20722 = sel_stats;var G__20722__$1 = (((G__20722 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__20722));return G__20722__$1;
})(),cljs.core.constant$keyword$149,"-")),cljs.core.constant$keyword$239,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20723 = sel_stats;var G__20723__$1 = (((G__20723 == null))?null:cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(G__20723));return G__20723__$1;
})(),cljs.core.constant$keyword$149,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20723 = sel_stats;var G__20723__$1 = (((G__20723 == null))?null:cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(G__20723));return G__20723__$1;
})(),cljs.core.constant$keyword$149,"-")),cljs.core.constant$keyword$240,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20724 = sel_stats;var G__20724__$1 = (((G__20724 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20724));var G__20724__$2 = (((G__20724__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20724__$1));return G__20724__$2;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20724 = sel_stats;var G__20724__$1 = (((G__20724 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20724));var G__20724__$2 = (((G__20724__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20724__$1));return G__20724__$2;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-")),cljs.core.constant$keyword$241,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__20725 = sel_stats;var G__20725__$1 = (((G__20725 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20725));var G__20725__$2 = (((G__20725__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20725__$1));return G__20725__$2;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20725 = sel_stats;var G__20725__$1 = (((G__20725 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20725));var G__20725__$2 = (((G__20725__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20725__$1));return G__20725__$2;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-"))], null)], 0)),cljs.core.constant$keyword$231,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$237,"\u00A0",cljs.core.constant$keyword$238,"\u00A0",cljs.core.constant$keyword$239,"\u00A0",cljs.core.constant$keyword$240,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20726 = sel_stats;var G__20726__$1 = (((G__20726 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20726));var G__20726__$2 = (((G__20726__$1 == null))?null:cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(G__20726__$1));return G__20726__$2;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20726 = sel_stats;var G__20726__$1 = (((G__20726 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20726));var G__20726__$2 = (((G__20726__$1 == null))?null:cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(G__20726__$1));return G__20726__$2;
})(),cljs.core.constant$keyword$214,2,cljs.core.constant$keyword$149,"-")),cljs.core.constant$keyword$241,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__20727 = sel_stats;var G__20727__$1 = (((G__20727 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20727));var G__20727__$2 = (((G__20727__$1 == null))?null:cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(G__20727__$1));return G__20727__$2;
})(),cljs.core.constant$keyword$216,0,cljs.core.constant$keyword$149,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20727 = sel_stats;var G__20727__$1 = (((G__20727 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20727));var G__20727__$2 = (((G__20727__$1 == null))?null:cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(G__20727__$1));return G__20727__$2;
})(),cljs.core.constant$keyword$216,0,cljs.core.constant$keyword$149,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(p__20728){var map__20748 = p__20728;var map__20748__$1 = ((cljs.core.seq_QMARK_(map__20748))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20748):map__20748);var data = map__20748__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20748__$1,cljs.core.constant$keyword$218);var map__20749 = clustermap.components.full_report.overview.overview_data(data);var map__20749__$1 = ((cljs.core.seq_QMARK_(map__20749))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20749):map__20749);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20749__$1,cljs.core.constant$keyword$231);var selection__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20749__$1,cljs.core.constant$keyword$218);if(typeof clustermap.components.full_report.overview.t20750 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t20750 = (function (averages,map__20749,selection,data,map__20748,p__20728,overview,meta20751){
this.averages = averages;
this.map__20749 = map__20749;
this.selection = selection;
this.data = data;
this.map__20748 = map__20748;
this.p__20728 = p__20728;
this.overview = overview;
this.meta20751 = meta20751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t20750.cljs$lang$type = true;
clustermap.components.full_report.overview.t20750.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t20750";
clustermap.components.full_report.overview.t20750.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t20750");
});
clustermap.components.full_report.overview.t20750.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t20750.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"2012 Overview"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232) : self__.selection.call(null,cljs.core.constant$keyword$232))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$194) : self__.selection.call(null,cljs.core.constant$keyword$194)))),React.DOM.td(null,(function (){var attrs20757 = (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$237) : self__.selection.call(null,cljs.core.constant$keyword$237));if(cljs.core.map_QMARK_(attrs20757))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20757], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20757));
}
})()),React.DOM.td(null,(function (){var attrs20758 = (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$238) : self__.selection.call(null,cljs.core.constant$keyword$238));if(cljs.core.map_QMARK_(attrs20758))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20758], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20758));
}
})()),React.DOM.td(null,(function (){var attrs20759 = (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$239) : self__.selection.call(null,cljs.core.constant$keyword$239));if(cljs.core.map_QMARK_(attrs20759))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20759], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20759));
}
})()),React.DOM.td(null,(function (){var attrs20760 = (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$240) : self__.selection.call(null,cljs.core.constant$keyword$240));if(cljs.core.map_QMARK_(attrs20760))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20760], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20760));
}
})()),React.DOM.td(null,(function (){var attrs20761 = (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$241) : self__.selection.call(null,cljs.core.constant$keyword$241));if(cljs.core.map_QMARK_(attrs20761))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20761], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20761));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232) : self__.averages.call(null,cljs.core.constant$keyword$232))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$194) : self__.averages.call(null,cljs.core.constant$keyword$194)))),React.DOM.td(null,(function (){var attrs20762 = (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$237) : self__.averages.call(null,cljs.core.constant$keyword$237));if(cljs.core.map_QMARK_(attrs20762))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20762], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20762));
}
})()),React.DOM.td(null,(function (){var attrs20763 = (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$238) : self__.averages.call(null,cljs.core.constant$keyword$238));if(cljs.core.map_QMARK_(attrs20763))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20763], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20763));
}
})()),React.DOM.td(null,(function (){var attrs20764 = (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$239) : self__.averages.call(null,cljs.core.constant$keyword$239));if(cljs.core.map_QMARK_(attrs20764))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20764], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20764));
}
})()),React.DOM.td(null,(function (){var attrs20765 = (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$240) : self__.averages.call(null,cljs.core.constant$keyword$240));if(cljs.core.map_QMARK_(attrs20765))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20765], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20765));
}
})()),React.DOM.td(null,(function (){var attrs20766 = (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$241) : self__.averages.call(null,cljs.core.constant$keyword$241));if(cljs.core.map_QMARK_(attrs20766))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20766], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20766));
}
})()))))));
});
clustermap.components.full_report.overview.t20750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20752){var self__ = this;
var _20752__$1 = this;return self__.meta20751;
});
clustermap.components.full_report.overview.t20750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20752,meta20751__$1){var self__ = this;
var _20752__$1 = this;return (new clustermap.components.full_report.overview.t20750(self__.averages,self__.map__20749,self__.selection,self__.data,self__.map__20748,self__.p__20728,self__.overview,meta20751__$1));
});
clustermap.components.full_report.overview.__GT_t20750 = (function __GT_t20750(averages__$1,map__20749__$2,selection__$2,data__$1,map__20748__$2,p__20728__$1,overview__$1,meta20751){return (new clustermap.components.full_report.overview.t20750(averages__$1,map__20749__$2,selection__$2,data__$1,map__20748__$2,p__20728__$1,overview__$1,meta20751));
});
}
return (new clustermap.components.full_report.overview.t20750(averages,map__20749__$1,selection__$1,data,map__20748__$1,p__20728,overview,null));
});
