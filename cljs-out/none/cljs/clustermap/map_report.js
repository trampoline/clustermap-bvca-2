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
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t10906 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10906 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta10907){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta10907 = meta10907;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10906.cljs$lang$type = true;
clustermap.map_report.t10906.cljs$lang$ctorStr = "clustermap.map-report/t10906";
clustermap.map_report.t10906.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10906");
});
clustermap.map_report.t10906.prototype.om$core$IRender$ = true;
clustermap.map_report.t10906.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs10911 = clustermap.formats.number.fnum.call(null,(function (){var G__10931 = self__.pc_summ;var G__10931__$1 = (((G__10931 == null))?null:(G__10931["count"]));return G__10931__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10911))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs10911),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10911),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs10916 = clustermap.formats.number.fnum.call(null,(function (){var G__10932 = self__.ic_summ;var G__10932__$1 = (((G__10932 == null))?null:(G__10932["count"]));return G__10932__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10916))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs10916),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10916),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs10921 = clustermap.formats.money.fmoney.call(null,(function (){var G__10933 = self__.pc_summ;var G__10933__$1 = (((G__10933 == null))?null:(G__10933["latest_turnover_stats"]["total"]));return G__10933__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10921))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs10921),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10921),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs10926 = clustermap.formats.number.fnum.call(null,(function (){var G__10934 = self__.pc_summ;var G__10934__$1 = (((G__10934 == null))?null:(G__10934["latest_employee_count_stats"]["total"]));return G__10934__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10926))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs10926),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10926),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t10906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10908){var self__ = this;
var _10908__$1 = this;return self__.meta10907;
});
clustermap.map_report.t10906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10908,meta10907__$1){var self__ = this;
var _10908__$1 = this;return (new clustermap.map_report.t10906(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta10907__$1));
});
clustermap.map_report.__GT_t10906 = (function __GT_t10906(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta10907){return (new clustermap.map_report.t10906(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta10907));
});
}
return (new clustermap.map_report.t10906(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t10957 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10957 = (function (data,selection_report,meta10958){
this.data = data;
this.selection_report = selection_report;
this.meta10958 = meta10958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10957.cljs$lang$type = true;
clustermap.map_report.t10957.cljs$lang$ctorStr = "clustermap.map-report/t10957";
clustermap.map_report.t10957.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10957");
});
clustermap.map_report.t10957.prototype.om$core$IRender$ = true;
clustermap.map_report.t10957.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs10960 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs10960))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs10960),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs10960));
}
})()),React.DOM.ul(null,(function (){var attrs10961 = clustermap.formats.number.fnum.call(null,(function (){var G__10976 = self__.data;var G__10976__$1 = (((G__10976 == null))?null:(G__10976["sites"]));var G__10976__$2 = (((G__10976__$1 == null))?null:cljs.core.count.call(null,G__10976__$1));return G__10976__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs10961))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs10961),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10961),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs10966 = clustermap.formats.money.fmoney.call(null,(function (){var G__10977 = self__.data;var G__10977__$1 = (((G__10977 == null))?null:(G__10977["latest_turnover"]));return G__10977__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10966))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs10966),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10966),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs10971 = clustermap.formats.number.fnum.call(null,(function (){var G__10978 = self__.data;var G__10978__$1 = (((G__10978 == null))?null:(G__10978["latest_employee_count"]));return G__10978__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs10971))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs10971),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10971),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t10957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10959){var self__ = this;
var _10959__$1 = this;return self__.meta10958;
});
clustermap.map_report.t10957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10959,meta10958__$1){var self__ = this;
var _10959__$1 = this;return (new clustermap.map_report.t10957(self__.data,self__.selection_report,meta10958__$1));
});
clustermap.map_report.__GT_t10957 = (function __GT_t10957(data__$1,selection_report__$1,meta10958){return (new clustermap.map_report.t10957(data__$1,selection_report__$1,meta10958));
});
}
return (new clustermap.map_report.t10957(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__10982 = cljs.core._EQ__EQ_;var expr__10983 = type;if(cljs.core.truth_(pred__10982.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__10983)))
{return clustermap.map_report.selection_report.call(null,value);
} else
{if(cljs.core.truth_(pred__10982.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__10983)))
{return clustermap.map_report.selection_report.call(null,value);
} else
{if(cljs.core.truth_(pred__10982.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__10983)))
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