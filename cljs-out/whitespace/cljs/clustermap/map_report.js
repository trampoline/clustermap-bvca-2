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
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t29184 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t29184 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta29185){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta29185 = meta29185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t29184.cljs$lang$type = true;
clustermap.map_report.t29184.cljs$lang$ctorStr = "clustermap.map-report/t29184";
clustermap.map_report.t29184.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t29184");
});
clustermap.map_report.t29184.prototype.om$core$IRender$ = true;
clustermap.map_report.t29184.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs29189 = clustermap.formats.number.fnum.call(null,(function (){var G__29209 = self__.pc_summ;var G__29209__$1 = (((G__29209 == null))?null:(G__29209["count"]));return G__29209__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29189))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29189),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29189),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs29194 = clustermap.formats.number.fnum.call(null,(function (){var G__29210 = self__.ic_summ;var G__29210__$1 = (((G__29210 == null))?null:(G__29210["count"]));return G__29210__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29194))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29194),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29194),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs29199 = clustermap.formats.money.fmoney.call(null,(function (){var G__29211 = self__.pc_summ;var G__29211__$1 = (((G__29211 == null))?null:(G__29211["latest_turnover_stats"]["total"]));return G__29211__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29199))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29199),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29199),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs29204 = clustermap.formats.number.fnum.call(null,(function (){var G__29212 = self__.pc_summ;var G__29212__$1 = (((G__29212 == null))?null:(G__29212["latest_employee_count_stats"]["total"]));return G__29212__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29204))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29204),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29204),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t29184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29186){var self__ = this;
var _29186__$1 = this;return self__.meta29185;
});
clustermap.map_report.t29184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29186,meta29185__$1){var self__ = this;
var _29186__$1 = this;return (new clustermap.map_report.t29184(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta29185__$1));
});
clustermap.map_report.__GT_t29184 = (function __GT_t29184(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta29185){return (new clustermap.map_report.t29184(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta29185));
});
}
return (new clustermap.map_report.t29184(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t29235 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t29235 = (function (data,selection_report,meta29236){
this.data = data;
this.selection_report = selection_report;
this.meta29236 = meta29236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t29235.cljs$lang$type = true;
clustermap.map_report.t29235.cljs$lang$ctorStr = "clustermap.map-report/t29235";
clustermap.map_report.t29235.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t29235");
});
clustermap.map_report.t29235.prototype.om$core$IRender$ = true;
clustermap.map_report.t29235.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs29238 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs29238))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs29238),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs29238));
}
})()),React.DOM.ul(null,(function (){var attrs29239 = clustermap.formats.number.fnum.call(null,(function (){var G__29254 = self__.data;var G__29254__$1 = (((G__29254 == null))?null:(G__29254["sites"]));var G__29254__$2 = (((G__29254__$1 == null))?null:cljs.core.count.call(null,G__29254__$1));return G__29254__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs29239))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29239),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29239),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs29244 = clustermap.formats.money.fmoney.call(null,(function (){var G__29255 = self__.data;var G__29255__$1 = (((G__29255 == null))?null:(G__29255["latest_turnover"]));return G__29255__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29244))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29244),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29244),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs29249 = clustermap.formats.number.fnum.call(null,(function (){var G__29256 = self__.data;var G__29256__$1 = (((G__29256 == null))?null:(G__29256["latest_employee_count"]));return G__29256__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29249))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29249),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29249),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t29235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29237){var self__ = this;
var _29237__$1 = this;return self__.meta29236;
});
clustermap.map_report.t29235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29237,meta29236__$1){var self__ = this;
var _29237__$1 = this;return (new clustermap.map_report.t29235(self__.data,self__.selection_report,meta29236__$1));
});
clustermap.map_report.__GT_t29235 = (function __GT_t29235(data__$1,selection_report__$1,meta29236){return (new clustermap.map_report.t29235(data__$1,selection_report__$1,meta29236));
});
}
return (new clustermap.map_report.t29235(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__29260 = cljs.core._EQ__EQ_;var expr__29261 = type;if(cljs.core.truth_(pred__29260.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__29261)))
{return clustermap.map_report.selection_report.call(null,value);
} else
{if(cljs.core.truth_(pred__29260.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__29261)))
{return clustermap.map_report.selection_report.call(null,value);
} else
{if(cljs.core.truth_(pred__29260.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__29261)))
{return clustermap.map_report.selection_report.call(null,value);
} else
{return clustermap.map_report.all_portfolio_companies_summary_report.call(null,data);
}
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});
