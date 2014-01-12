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
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t10792 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10792 = (function (empty_report,meta10793){
this.empty_report = empty_report;
this.meta10793 = meta10793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10792.cljs$lang$type = true;
clustermap.map_report.t10792.cljs$lang$ctorStr = "clustermap.map-report/t10792";
clustermap.map_report.t10792.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10792");
});
clustermap.map_report.t10792.prototype.om$core$IRender$ = true;
clustermap.map_report.t10792.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t10792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10794){var self__ = this;
var _10794__$1 = this;return self__.meta10793;
});
clustermap.map_report.t10792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10794,meta10793__$1){var self__ = this;
var _10794__$1 = this;return (new clustermap.map_report.t10792(self__.empty_report,meta10793__$1));
});
clustermap.map_report.__GT_t10792 = (function __GT_t10792(empty_report__$1,meta10793){return (new clustermap.map_report.t10792(empty_report__$1,meta10793));
});
}
return (new clustermap.map_report.t10792(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t10826 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10826 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta10827){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta10827 = meta10827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10826.cljs$lang$type = true;
clustermap.map_report.t10826.cljs$lang$ctorStr = "clustermap.map-report/t10826";
clustermap.map_report.t10826.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10826");
});
clustermap.map_report.t10826.prototype.om$core$IRender$ = true;
clustermap.map_report.t10826.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs10831 = clustermap.formats.number.fnum.call(null,(function (){var G__10851 = self__.pc_summ;var G__10851__$1 = (((G__10851 == null))?null:(G__10851["count"]));return G__10851__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10831))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs10831)),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10831),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs10836 = clustermap.formats.number.fnum.call(null,(function (){var G__10852 = self__.ic_summ;var G__10852__$1 = (((G__10852 == null))?null:(G__10852["count"]));return G__10852__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10836))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs10836)),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10836),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs10841 = clustermap.formats.money.fmoney.call(null,(function (){var G__10853 = self__.pc_summ;var G__10853__$1 = (((G__10853 == null))?null:(G__10853["latest_turnover_stats"]["total"]));return G__10853__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10841))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs10841)),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10841),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs10846 = clustermap.formats.number.fnum.call(null,(function (){var G__10854 = self__.pc_summ;var G__10854__$1 = (((G__10854 == null))?null:(G__10854["latest_employee_count_stats"]["total"]));return G__10854__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10846))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs10846)),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10846),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t10826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10828){var self__ = this;
var _10828__$1 = this;return self__.meta10827;
});
clustermap.map_report.t10826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10828,meta10827__$1){var self__ = this;
var _10828__$1 = this;return (new clustermap.map_report.t10826(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta10827__$1));
});
clustermap.map_report.__GT_t10826 = (function __GT_t10826(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta10827){return (new clustermap.map_report.t10826(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta10827));
});
}
return (new clustermap.map_report.t10826(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t10860 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10860 = (function (data,selection_report,meta10861){
this.data = data;
this.selection_report = selection_report;
this.meta10861 = meta10861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10860.cljs$lang$type = true;
clustermap.map_report.t10860.cljs$lang$ctorStr = "clustermap.map-report/t10860";
clustermap.map_report.t10860.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10860");
});
clustermap.map_report.t10860.prototype.om$core$IRender$ = true;
clustermap.map_report.t10860.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t10860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10862){var self__ = this;
var _10862__$1 = this;return self__.meta10861;
});
clustermap.map_report.t10860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10862,meta10861__$1){var self__ = this;
var _10862__$1 = this;return (new clustermap.map_report.t10860(self__.data,self__.selection_report,meta10861__$1));
});
clustermap.map_report.__GT_t10860 = (function __GT_t10860(data__$1,selection_report__$1,meta10861){return (new clustermap.map_report.t10860(data__$1,selection_report__$1,meta10861));
});
}
return (new clustermap.map_report.t10860(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){if((new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data) == null))
{return clustermap.map_report.all_portfolio_companies_summary_report.call(null,data);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null))))
{return clustermap.map_report.selection_report.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data));
} else
{return null;
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map