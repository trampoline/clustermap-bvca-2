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
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t28743 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28743 = (function (empty_report,meta28744){
this.empty_report = empty_report;
this.meta28744 = meta28744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28743.cljs$lang$type = true;
clustermap.map_report.t28743.cljs$lang$ctorStr = "clustermap.map-report/t28743";
clustermap.map_report.t28743.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28743");
});
clustermap.map_report.t28743.prototype.om$core$IRender$ = true;
clustermap.map_report.t28743.prototype.om$core$IRender$render$arity$1 = (function (this__9133__auto__){var self__ = this;
var this__9133__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t28743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28745){var self__ = this;
var _28745__$1 = this;return self__.meta28744;
});
clustermap.map_report.t28743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28745,meta28744__$1){var self__ = this;
var _28745__$1 = this;return (new clustermap.map_report.t28743(self__.empty_report,meta28744__$1));
});
clustermap.map_report.__GT_t28743 = (function __GT_t28743(empty_report__$1,meta28744){return (new clustermap.map_report.t28743(empty_report__$1,meta28744));
});
}
return (new clustermap.map_report.t28743(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t28777 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28777 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta28778){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta28778 = meta28778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28777.cljs$lang$type = true;
clustermap.map_report.t28777.cljs$lang$ctorStr = "clustermap.map-report/t28777";
clustermap.map_report.t28777.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28777");
});
clustermap.map_report.t28777.prototype.om$core$IRender$ = true;
clustermap.map_report.t28777.prototype.om$core$IRender$render$arity$1 = (function (this__9133__auto__){var self__ = this;
var this__9133__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs28782 = clustermap.formats.number.fnum.call(null,(function (){var G__28802 = self__.pc_summ;var G__28802__$1 = (((G__28802 == null))?null:(G__28802["count"]));return G__28802__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28782))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28782)),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28782),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs28787 = clustermap.formats.number.fnum.call(null,(function (){var G__28803 = self__.ic_summ;var G__28803__$1 = (((G__28803 == null))?null:(G__28803["count"]));return G__28803__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28787))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28787)),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28787),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs28792 = clustermap.formats.money.fmoney.call(null,(function (){var G__28804 = self__.pc_summ;var G__28804__$1 = (((G__28804 == null))?null:(G__28804["latest_turnover_stats"]["total"]));return G__28804__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28792))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28792)),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28792),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs28797 = clustermap.formats.number.fnum.call(null,(function (){var G__28805 = self__.pc_summ;var G__28805__$1 = (((G__28805 == null))?null:(G__28805["latest_employee_count_stats"]["total"]));return G__28805__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28797))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28797)),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28797),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t28777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28779){var self__ = this;
var _28779__$1 = this;return self__.meta28778;
});
clustermap.map_report.t28777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28779,meta28778__$1){var self__ = this;
var _28779__$1 = this;return (new clustermap.map_report.t28777(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta28778__$1));
});
clustermap.map_report.__GT_t28777 = (function __GT_t28777(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta28778){return (new clustermap.map_report.t28777(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta28778));
});
}
return (new clustermap.map_report.t28777(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t28811 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28811 = (function (data,selection_report,meta28812){
this.data = data;
this.selection_report = selection_report;
this.meta28812 = meta28812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28811.cljs$lang$type = true;
clustermap.map_report.t28811.cljs$lang$ctorStr = "clustermap.map-report/t28811";
clustermap.map_report.t28811.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28811");
});
clustermap.map_report.t28811.prototype.om$core$IRender$ = true;
clustermap.map_report.t28811.prototype.om$core$IRender$render$arity$1 = (function (this__9133__auto__){var self__ = this;
var this__9133__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t28811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28813){var self__ = this;
var _28813__$1 = this;return self__.meta28812;
});
clustermap.map_report.t28811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28813,meta28812__$1){var self__ = this;
var _28813__$1 = this;return (new clustermap.map_report.t28811(self__.data,self__.selection_report,meta28812__$1));
});
clustermap.map_report.__GT_t28811 = (function __GT_t28811(data__$1,selection_report__$1,meta28812){return (new clustermap.map_report.t28811(data__$1,selection_report__$1,meta28812));
});
}
return (new clustermap.map_report.t28811(data,selection_report,null));
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
