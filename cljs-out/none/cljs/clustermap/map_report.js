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
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t10858 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10858 = (function (empty_report,meta10859){
this.empty_report = empty_report;
this.meta10859 = meta10859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10858.cljs$lang$type = true;
clustermap.map_report.t10858.cljs$lang$ctorStr = "clustermap.map-report/t10858";
clustermap.map_report.t10858.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10858");
});
clustermap.map_report.t10858.prototype.om$core$IRender$ = true;
clustermap.map_report.t10858.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t10858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10860){var self__ = this;
var _10860__$1 = this;return self__.meta10859;
});
clustermap.map_report.t10858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10860,meta10859__$1){var self__ = this;
var _10860__$1 = this;return (new clustermap.map_report.t10858(self__.empty_report,meta10859__$1));
});
clustermap.map_report.__GT_t10858 = (function __GT_t10858(empty_report__$1,meta10859){return (new clustermap.map_report.t10858(empty_report__$1,meta10859));
});
}
return (new clustermap.map_report.t10858(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t10892 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10892 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta10893){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta10893 = meta10893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10892.cljs$lang$type = true;
clustermap.map_report.t10892.cljs$lang$ctorStr = "clustermap.map-report/t10892";
clustermap.map_report.t10892.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10892");
});
clustermap.map_report.t10892.prototype.om$core$IRender$ = true;
clustermap.map_report.t10892.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs10897 = clustermap.formats.number.fnum.call(null,(function (){var G__10917 = self__.pc_summ;var G__10917__$1 = (((G__10917 == null))?null:(G__10917["count"]));return G__10917__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10897))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs10897),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10897),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs10902 = clustermap.formats.number.fnum.call(null,(function (){var G__10918 = self__.ic_summ;var G__10918__$1 = (((G__10918 == null))?null:(G__10918["count"]));return G__10918__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10902))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs10902),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10902),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs10907 = clustermap.formats.money.fmoney.call(null,(function (){var G__10919 = self__.pc_summ;var G__10919__$1 = (((G__10919 == null))?null:(G__10919["latest_turnover_stats"]["total"]));return G__10919__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10907))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs10907),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10907),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs10912 = clustermap.formats.number.fnum.call(null,(function (){var G__10920 = self__.pc_summ;var G__10920__$1 = (((G__10920 == null))?null:(G__10920["latest_employee_count_stats"]["total"]));return G__10920__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10912))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs10912),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10912),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t10892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10894){var self__ = this;
var _10894__$1 = this;return self__.meta10893;
});
clustermap.map_report.t10892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10894,meta10893__$1){var self__ = this;
var _10894__$1 = this;return (new clustermap.map_report.t10892(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta10893__$1));
});
clustermap.map_report.__GT_t10892 = (function __GT_t10892(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta10893){return (new clustermap.map_report.t10892(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta10893));
});
}
return (new clustermap.map_report.t10892(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t10926 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10926 = (function (data,selection_report,meta10927){
this.data = data;
this.selection_report = selection_report;
this.meta10927 = meta10927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10926.cljs$lang$type = true;
clustermap.map_report.t10926.cljs$lang$ctorStr = "clustermap.map-report/t10926";
clustermap.map_report.t10926.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10926");
});
clustermap.map_report.t10926.prototype.om$core$IRender$ = true;
clustermap.map_report.t10926.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t10926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10928){var self__ = this;
var _10928__$1 = this;return self__.meta10927;
});
clustermap.map_report.t10926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10928,meta10927__$1){var self__ = this;
var _10928__$1 = this;return (new clustermap.map_report.t10926(self__.data,self__.selection_report,meta10927__$1));
});
clustermap.map_report.__GT_t10926 = (function __GT_t10926(data__$1,selection_report__$1,meta10927){return (new clustermap.map_report.t10926(data__$1,selection_report__$1,meta10927));
});
}
return (new clustermap.map_report.t10926(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__10934 = cljs.core._EQ__EQ_;var expr__10935 = type;if(cljs.core.truth_(pred__10934.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10935)))
{return clustermap.map_report.selection_report.call(null,value);
} else
{if(cljs.core.truth_(pred__10934.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10935)))
{return clustermap.map_report.selection_report.call(null,value);
} else
{if(cljs.core.truth_(pred__10934.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10935)))
{return clustermap.map_report.selection_report.call(null,value);
} else
{return clustermap.map_report.all_portfolio_companies_summary_report.call(null,data);
}
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map