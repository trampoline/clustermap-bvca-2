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
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t11032 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t11032 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta11033){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11033 = meta11033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t11032.cljs$lang$type = true;
clustermap.map_report.t11032.cljs$lang$ctorStr = "clustermap.map-report/t11032";
clustermap.map_report.t11032.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t11032");
});
clustermap.map_report.t11032.prototype.om$core$IRender$ = true;
clustermap.map_report.t11032.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11037 = clustermap.formats.number.fnum.call(null,(function (){var G__11057 = self__.pc_summ;var G__11057__$1 = (((G__11057 == null))?null:(G__11057["count"]));return G__11057__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11037))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11037),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11037),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs11042 = clustermap.formats.number.fnum.call(null,(function (){var G__11058 = self__.ic_summ;var G__11058__$1 = (((G__11058 == null))?null:(G__11058["count"]));return G__11058__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11042))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11042),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11042),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs11047 = clustermap.formats.money.fmoney.call(null,(function (){var G__11059 = self__.pc_summ;var G__11059__$1 = (((G__11059 == null))?null:(G__11059["latest_turnover_stats"]["total"]));return G__11059__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11047))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11047),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11047),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11052 = clustermap.formats.number.fnum.call(null,(function (){var G__11060 = self__.pc_summ;var G__11060__$1 = (((G__11060 == null))?null:(G__11060["latest_employee_count_stats"]["total"]));return G__11060__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11052))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11052),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11052),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t11032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11034){var self__ = this;
var _11034__$1 = this;return self__.meta11033;
});
clustermap.map_report.t11032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11034,meta11033__$1){var self__ = this;
var _11034__$1 = this;return (new clustermap.map_report.t11032(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta11033__$1));
});
clustermap.map_report.__GT_t11032 = (function __GT_t11032(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11033){return (new clustermap.map_report.t11032(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11033));
});
}
return (new clustermap.map_report.t11032(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.portfolio_company_report = (function portfolio_company_report(data){if(typeof clustermap.map_report.t11089 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t11089 = (function (data,portfolio_company_report,meta11090){
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta11090 = meta11090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t11089.cljs$lang$type = true;
clustermap.map_report.t11089.cljs$lang$ctorStr = "clustermap.map-report/t11089";
clustermap.map_report.t11089.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t11089");
});
clustermap.map_report.t11089.prototype.om$core$IRender$ = true;
clustermap.map_report.t11089.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11092 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs11092))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11092),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11092));
}
})()),React.DOM.ul(null,(function (){var attrs11093 = clustermap.formats.number.fnum.call(null,(function (){var G__11113 = self__.data;var G__11113__$1 = (((G__11113 == null))?null:(G__11113["sites"]));var G__11113__$2 = (((G__11113__$1 == null))?null:cljs.core.count.call(null,G__11113__$1));return G__11113__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11093))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11093),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11093),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs11098 = clustermap.formats.number.fnum.call(null,(function (){var G__11114 = self__.data;var G__11114__$1 = (((G__11114 == null))?null:(G__11114["boundarylinecolls"]["uk_constituencies"]));var G__11114__$2 = (((G__11114__$1 == null))?null:cljs.core.count.call(null,G__11114__$1));return G__11114__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11098))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11098),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11098),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs11103 = clustermap.formats.money.fmoney.call(null,(function (){var G__11115 = self__.data;var G__11115__$1 = (((G__11115 == null))?null:(G__11115["latest_turnover"]));return G__11115__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11103))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11103),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11103),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11108 = clustermap.formats.number.fnum.call(null,(function (){var G__11116 = self__.data;var G__11116__$1 = (((G__11116 == null))?null:(G__11116["latest_employee_count"]));return G__11116__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11108))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11108),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11108),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t11089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11091){var self__ = this;
var _11091__$1 = this;return self__.meta11090;
});
clustermap.map_report.t11089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11091,meta11090__$1){var self__ = this;
var _11091__$1 = this;return (new clustermap.map_report.t11089(self__.data,self__.portfolio_company_report,meta11090__$1));
});
clustermap.map_report.__GT_t11089 = (function __GT_t11089(data__$1,portfolio_company_report__$1,meta11090){return (new clustermap.map_report.t11089(data__$1,portfolio_company_report__$1,meta11090));
});
}
return (new clustermap.map_report.t11089(data,portfolio_company_report,null));
});
clustermap.map_report.investor_company_report = (function investor_company_report(data){if(typeof clustermap.map_report.t11145 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t11145 = (function (data,investor_company_report,meta11146){
this.data = data;
this.investor_company_report = investor_company_report;
this.meta11146 = meta11146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t11145.cljs$lang$type = true;
clustermap.map_report.t11145.cljs$lang$ctorStr = "clustermap.map-report/t11145";
clustermap.map_report.t11145.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t11145");
});
clustermap.map_report.t11145.prototype.om$core$IRender$ = true;
clustermap.map_report.t11145.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11148 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs11148))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11148),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11148));
}
})()),React.DOM.ul(null,(function (){var attrs11149 = clustermap.formats.number.fnum.call(null,(function (){var G__11169 = self__.data;var G__11169__$1 = (((G__11169 == null))?null:(G__11169["portfolio_companies"]));var G__11169__$2 = (((G__11169__$1 == null))?null:cljs.core.count.call(null,G__11169__$1));return G__11169__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11149))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11149),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11149),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs11154 = clustermap.formats.number.fnum.call(null,(function (){var G__11170 = self__.data;var G__11170__$1 = (((G__11170 == null))?null:(G__11170["boundarylinecolls"]["uk_constituencies"]));var G__11170__$2 = (((G__11170__$1 == null))?null:cljs.core.count.call(null,G__11170__$1));return G__11170__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11154))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11154),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11154),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs11159 = clustermap.formats.money.fmoney.call(null,(function (){var G__11171 = self__.data;var G__11171__$1 = (((G__11171 == null))?null:(G__11171["total_turnover"]));return G__11171__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11159))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11159),React.DOM.small(null,"Total Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11159),React.DOM.small(null,"Total Company Turnover"));
}
})(),(function (){var attrs11164 = clustermap.formats.number.fnum.call(null,(function (){var G__11172 = self__.data;var G__11172__$1 = (((G__11172 == null))?null:(G__11172["total_employee_count"]));return G__11172__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11164))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11164),React.DOM.small(null,"Total Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11164),React.DOM.small(null,"Total Company Employees"));
}
})()));
});
clustermap.map_report.t11145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11147){var self__ = this;
var _11147__$1 = this;return self__.meta11146;
});
clustermap.map_report.t11145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11147,meta11146__$1){var self__ = this;
var _11147__$1 = this;return (new clustermap.map_report.t11145(self__.data,self__.investor_company_report,meta11146__$1));
});
clustermap.map_report.__GT_t11145 = (function __GT_t11145(data__$1,investor_company_report__$1,meta11146){return (new clustermap.map_report.t11145(data__$1,investor_company_report__$1,meta11146));
});
}
return (new clustermap.map_report.t11145(data,investor_company_report,null));
});
clustermap.map_report.constituency_report = (function constituency_report(data){if(typeof clustermap.map_report.t11202 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t11202 = (function (data,constituency_report,meta11203){
this.data = data;
this.constituency_report = constituency_report;
this.meta11203 = meta11203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t11202.cljs$lang$type = true;
clustermap.map_report.t11202.cljs$lang$ctorStr = "clustermap.map-report/t11202";
clustermap.map_report.t11202.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t11202");
});
clustermap.map_report.t11202.prototype.om$core$IRender$ = true;
clustermap.map_report.t11202.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11205 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs11205))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11205),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11205));
}
})(),(function (){var attrs11206 = (self__.data["mp"]);if(cljs.core.map_QMARK_.call(null,attrs11206))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11206),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11206),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11207 = clustermap.formats.number.fnum.call(null,(function (){var G__11227 = self__.data;var G__11227__$1 = (((G__11227 == null))?null:(G__11227["investor_companies"]));var G__11227__$2 = (((G__11227__$1 == null))?null:cljs.core.count.call(null,G__11227__$1));return G__11227__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11207))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11207),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11207),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs11212 = clustermap.formats.number.fnum.call(null,(function (){var G__11228 = self__.data;var G__11228__$1 = (((G__11228 == null))?null:(G__11228["portfolio_companies"]));var G__11228__$2 = (((G__11228__$1 == null))?null:cljs.core.count.call(null,G__11228__$1));return G__11228__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11212))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11212),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11212),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs11217 = clustermap.formats.money.fmoney.call(null,(function (){var G__11229 = self__.data;var G__11229__$1 = (((G__11229 == null))?null:(G__11229["total_turnover"]));return G__11229__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11217))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11217),React.DOM.small(null,"Total Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11217),React.DOM.small(null,"Total Turnover"));
}
})(),(function (){var attrs11222 = clustermap.formats.number.fnum.call(null,(function (){var G__11230 = self__.data;var G__11230__$1 = (((G__11230 == null))?null:(G__11230["total_employee_count"]));return G__11230__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11222))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11222),React.DOM.small(null,"Total Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11222),React.DOM.small(null,"Total Employees"));
}
})()));
});
clustermap.map_report.t11202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11204){var self__ = this;
var _11204__$1 = this;return self__.meta11203;
});
clustermap.map_report.t11202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11204,meta11203__$1){var self__ = this;
var _11204__$1 = this;return (new clustermap.map_report.t11202(self__.data,self__.constituency_report,meta11203__$1));
});
clustermap.map_report.__GT_t11202 = (function __GT_t11202(data__$1,constituency_report__$1,meta11203){return (new clustermap.map_report.t11202(data__$1,constituency_report__$1,meta11203));
});
}
return (new clustermap.map_report.t11202(data,constituency_report,null));
});
clustermap.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11234 = cljs.core._EQ__EQ_;var expr__11235 = type;if(cljs.core.truth_(pred__11234.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11235)))
{return clustermap.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11234.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11235)))
{return clustermap.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11234.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11235)))
{return clustermap.map_report.constituency_report.call(null,value);
} else
{return clustermap.map_report.all_portfolio_companies_summary_report.call(null,data);
}
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map