// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
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
goog.require('clustermap.formats.number');
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t19775 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19775 = (function (empty_report,meta19776){
this.empty_report = empty_report;
this.meta19776 = meta19776;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19775.cljs$lang$type = true;
clustermap.map_report.t19775.cljs$lang$ctorStr = "clustermap.map-report/t19775";
clustermap.map_report.t19775.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19775");
});
clustermap.map_report.t19775.prototype.om$core$IRender$ = true;
clustermap.map_report.t19775.prototype.om$core$IRender$render$arity$1 = (function (this__9133__auto__){var self__ = this;
var this__9133__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t19775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19777){var self__ = this;
var _19777__$1 = this;return self__.meta19776;
});
clustermap.map_report.t19775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19777,meta19776__$1){var self__ = this;
var _19777__$1 = this;return (new clustermap.map_report.t19775(self__.empty_report,meta19776__$1));
});
clustermap.map_report.__GT_t19775 = (function __GT_t19775(empty_report__$1,meta19776){return (new clustermap.map_report.t19775(empty_report__$1,meta19776));
});
}
return (new clustermap.map_report.t19775(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(data);var ic_summ = cljs.core.constant$keyword$176.cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t19809 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19809 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta19810){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta19810 = meta19810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19809.cljs$lang$type = true;
clustermap.map_report.t19809.cljs$lang$ctorStr = "clustermap.map-report/t19809";
clustermap.map_report.t19809.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19809");
});
clustermap.map_report.t19809.prototype.om$core$IRender$ = true;
clustermap.map_report.t19809.prototype.om$core$IRender$render$arity$1 = (function (this__9133__auto__){var self__ = this;
var this__9133__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs19814 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__19834 = self__.pc_summ;var G__19834__$1 = (((G__19834 == null))?null:(G__19834["count"]));return G__19834__$1;
})(),cljs.core.constant$keyword$110,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__19834 = self__.pc_summ;var G__19834__$1 = (((G__19834 == null))?null:(G__19834["count"]));return G__19834__$1;
})(),cljs.core.constant$keyword$110,"-"));if(cljs.core.map_QMARK_(attrs19814))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19814], 0))),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19814),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs19819 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__19835 = self__.ic_summ;var G__19835__$1 = (((G__19835 == null))?null:(G__19835["count"]));return G__19835__$1;
})(),cljs.core.constant$keyword$110,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__19835 = self__.ic_summ;var G__19835__$1 = (((G__19835 == null))?null:(G__19835["count"]));return G__19835__$1;
})(),cljs.core.constant$keyword$110,"-"));if(cljs.core.map_QMARK_(attrs19819))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19819], 0))),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19819),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs19824 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__19836 = self__.pc_summ;var G__19836__$1 = (((G__19836 == null))?null:(G__19836["latest_turnover_stats"]["total"]));return G__19836__$1;
})(),cljs.core.constant$keyword$171,2,cljs.core.constant$keyword$110,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__19836 = self__.pc_summ;var G__19836__$1 = (((G__19836 == null))?null:(G__19836["latest_turnover_stats"]["total"]));return G__19836__$1;
})(),cljs.core.constant$keyword$171,2,cljs.core.constant$keyword$110,"-"));if(cljs.core.map_QMARK_(attrs19824))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19824], 0))),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19824),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs19829 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__19837 = self__.pc_summ;var G__19837__$1 = (((G__19837 == null))?null:(G__19837["latest_employee_count_stats"]["total"]));return G__19837__$1;
})(),cljs.core.constant$keyword$110,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__19837 = self__.pc_summ;var G__19837__$1 = (((G__19837 == null))?null:(G__19837["latest_employee_count_stats"]["total"]));return G__19837__$1;
})(),cljs.core.constant$keyword$110,"-"));if(cljs.core.map_QMARK_(attrs19829))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19829], 0))),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19829),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t19809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19811){var self__ = this;
var _19811__$1 = this;return self__.meta19810;
});
clustermap.map_report.t19809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19811,meta19810__$1){var self__ = this;
var _19811__$1 = this;return (new clustermap.map_report.t19809(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta19810__$1));
});
clustermap.map_report.__GT_t19809 = (function __GT_t19809(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta19810){return (new clustermap.map_report.t19809(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta19810));
});
}
return (new clustermap.map_report.t19809(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t19843 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19843 = (function (data,selection_report,meta19844){
this.data = data;
this.selection_report = selection_report;
this.meta19844 = meta19844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19843.cljs$lang$type = true;
clustermap.map_report.t19843.cljs$lang$ctorStr = "clustermap.map-report/t19843";
clustermap.map_report.t19843.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19843");
});
clustermap.map_report.t19843.prototype.om$core$IRender$ = true;
clustermap.map_report.t19843.prototype.om$core$IRender$render$arity$1 = (function (this__9133__auto__){var self__ = this;
var this__9133__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t19843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19845){var self__ = this;
var _19845__$1 = this;return self__.meta19844;
});
clustermap.map_report.t19843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19845,meta19844__$1){var self__ = this;
var _19845__$1 = this;return (new clustermap.map_report.t19843(self__.data,self__.selection_report,meta19844__$1));
});
clustermap.map_report.__GT_t19843 = (function __GT_t19843(data__$1,selection_report__$1,meta19844){return (new clustermap.map_report.t19843(data__$1,selection_report__$1,meta19844));
});
}
return (new clustermap.map_report.t19843(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){if((cljs.core.constant$keyword$177.cljs$core$IFn$_invoke$arity$1(data) == null))
{return clustermap.map_report.all_portfolio_companies_summary_report(data);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$178,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,cljs.core.constant$keyword$139], null))))
{return clustermap.map_report.selection_report(cljs.core.constant$keyword$177.cljs$core$IFn$_invoke$arity$1(data));
} else
{return null;
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root(app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});
