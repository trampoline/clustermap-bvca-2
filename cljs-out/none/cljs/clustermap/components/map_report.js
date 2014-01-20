// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.components.map_report.t11070 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11070 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta11071){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11071 = meta11071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11070.cljs$lang$type = true;
clustermap.components.map_report.t11070.cljs$lang$ctorStr = "clustermap.components.map-report/t11070";
clustermap.components.map_report.t11070.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11070");
});
clustermap.components.map_report.t11070.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11070.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11075 = clustermap.formats.number.fnum.call(null,(function (){var G__11095 = self__.pc_summ;var G__11095__$1 = (((G__11095 == null))?null:(G__11095["count"]));return G__11095__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11075))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11075),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11075),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs11080 = clustermap.formats.number.fnum.call(null,(function (){var G__11096 = self__.ic_summ;var G__11096__$1 = (((G__11096 == null))?null:(G__11096["count"]));return G__11096__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11080))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11080),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11080),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs11085 = clustermap.formats.money.fmoney.call(null,(function (){var G__11097 = self__.pc_summ;var G__11097__$1 = (((G__11097 == null))?null:(G__11097["latest_turnover_stats"]["total"]));return G__11097__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11085))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11085),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11085),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11090 = clustermap.formats.number.fnum.call(null,(function (){var G__11098 = self__.pc_summ;var G__11098__$1 = (((G__11098 == null))?null:(G__11098["latest_employee_count_stats"]["total"]));return G__11098__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11090))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11090),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11090),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11072){var self__ = this;
var _11072__$1 = this;return self__.meta11071;
});
clustermap.components.map_report.t11070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11072,meta11071__$1){var self__ = this;
var _11072__$1 = this;return (new clustermap.components.map_report.t11070(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta11071__$1));
});
clustermap.components.map_report.__GT_t11070 = (function __GT_t11070(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11071){return (new clustermap.components.map_report.t11070(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11071));
});
}
return (new clustermap.components.map_report.t11070(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(data){if(typeof clustermap.components.map_report.t11127 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11127 = (function (data,portfolio_company_report,meta11128){
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta11128 = meta11128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11127.cljs$lang$type = true;
clustermap.components.map_report.t11127.cljs$lang$ctorStr = "clustermap.components.map-report/t11127";
clustermap.components.map_report.t11127.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11127");
});
clustermap.components.map_report.t11127.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11127.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11130 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs11130))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11130),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11130));
}
})()),React.DOM.ul(null,(function (){var attrs11131 = clustermap.formats.number.fnum.call(null,(function (){var G__11151 = self__.data;var G__11151__$1 = (((G__11151 == null))?null:(G__11151["sites"]));var G__11151__$2 = (((G__11151__$1 == null))?null:cljs.core.count.call(null,G__11151__$1));return G__11151__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11131))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11131),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11131),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs11136 = clustermap.formats.number.fnum.call(null,(function (){var G__11152 = self__.data;var G__11152__$1 = (((G__11152 == null))?null:(G__11152["boundarylinecolls"]["uk_constituencies"]));var G__11152__$2 = (((G__11152__$1 == null))?null:cljs.core.count.call(null,G__11152__$1));return G__11152__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11136))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11136),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11136),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs11141 = clustermap.formats.money.fmoney.call(null,(function (){var G__11153 = self__.data;var G__11153__$1 = (((G__11153 == null))?null:(G__11153["latest_turnover"]));return G__11153__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11141))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11141),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11141),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11146 = clustermap.formats.number.fnum.call(null,(function (){var G__11154 = self__.data;var G__11154__$1 = (((G__11154 == null))?null:(G__11154["latest_employee_count"]));return G__11154__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11146))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11146),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11146),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11129){var self__ = this;
var _11129__$1 = this;return self__.meta11128;
});
clustermap.components.map_report.t11127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11129,meta11128__$1){var self__ = this;
var _11129__$1 = this;return (new clustermap.components.map_report.t11127(self__.data,self__.portfolio_company_report,meta11128__$1));
});
clustermap.components.map_report.__GT_t11127 = (function __GT_t11127(data__$1,portfolio_company_report__$1,meta11128){return (new clustermap.components.map_report.t11127(data__$1,portfolio_company_report__$1,meta11128));
});
}
return (new clustermap.components.map_report.t11127(data,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(data){if(typeof clustermap.components.map_report.t11183 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11183 = (function (data,investor_company_report,meta11184){
this.data = data;
this.investor_company_report = investor_company_report;
this.meta11184 = meta11184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11183.cljs$lang$type = true;
clustermap.components.map_report.t11183.cljs$lang$ctorStr = "clustermap.components.map-report/t11183";
clustermap.components.map_report.t11183.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11183");
});
clustermap.components.map_report.t11183.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11183.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11186 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs11186))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11186),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11186));
}
})()),React.DOM.ul(null,(function (){var attrs11187 = clustermap.formats.number.fnum.call(null,(function (){var G__11207 = self__.data;var G__11207__$1 = (((G__11207 == null))?null:(G__11207["portfolio_companies"]));var G__11207__$2 = (((G__11207__$1 == null))?null:cljs.core.count.call(null,G__11207__$1));return G__11207__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11187))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11187),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11187),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs11192 = clustermap.formats.number.fnum.call(null,(function (){var G__11208 = self__.data;var G__11208__$1 = (((G__11208 == null))?null:(G__11208["boundarylinecolls"]["uk_constituencies"]));var G__11208__$2 = (((G__11208__$1 == null))?null:cljs.core.count.call(null,G__11208__$1));return G__11208__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11192))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11192),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11192),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs11197 = clustermap.formats.money.fmoney.call(null,(function (){var G__11209 = self__.data;var G__11209__$1 = (((G__11209 == null))?null:(G__11209["total_turnover"]));return G__11209__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11197))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11197),React.DOM.small(null,"Total Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11197),React.DOM.small(null,"Total Company Turnover"));
}
})(),(function (){var attrs11202 = clustermap.formats.number.fnum.call(null,(function (){var G__11210 = self__.data;var G__11210__$1 = (((G__11210 == null))?null:(G__11210["total_employee_count"]));return G__11210__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11202))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11202),React.DOM.small(null,"Total Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11202),React.DOM.small(null,"Total Company Employees"));
}
})()));
});
clustermap.components.map_report.t11183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11185){var self__ = this;
var _11185__$1 = this;return self__.meta11184;
});
clustermap.components.map_report.t11183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11185,meta11184__$1){var self__ = this;
var _11185__$1 = this;return (new clustermap.components.map_report.t11183(self__.data,self__.investor_company_report,meta11184__$1));
});
clustermap.components.map_report.__GT_t11183 = (function __GT_t11183(data__$1,investor_company_report__$1,meta11184){return (new clustermap.components.map_report.t11183(data__$1,investor_company_report__$1,meta11184));
});
}
return (new clustermap.components.map_report.t11183(data,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(data){if(typeof clustermap.components.map_report.t11240 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11240 = (function (data,constituency_report,meta11241){
this.data = data;
this.constituency_report = constituency_report;
this.meta11241 = meta11241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11240.cljs$lang$type = true;
clustermap.components.map_report.t11240.cljs$lang$ctorStr = "clustermap.components.map-report/t11240";
clustermap.components.map_report.t11240.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11240");
});
clustermap.components.map_report.t11240.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11240.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11243 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs11243))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11243),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11243));
}
})(),(function (){var attrs11244 = (self__.data["mp"]);if(cljs.core.map_QMARK_.call(null,attrs11244))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11244),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11244),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11245 = clustermap.formats.number.fnum.call(null,(function (){var G__11265 = self__.data;var G__11265__$1 = (((G__11265 == null))?null:(G__11265["investor_companies"]));var G__11265__$2 = (((G__11265__$1 == null))?null:cljs.core.count.call(null,G__11265__$1));return G__11265__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11245))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11245),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11245),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs11250 = clustermap.formats.number.fnum.call(null,(function (){var G__11266 = self__.data;var G__11266__$1 = (((G__11266 == null))?null:(G__11266["portfolio_companies"]));var G__11266__$2 = (((G__11266__$1 == null))?null:cljs.core.count.call(null,G__11266__$1));return G__11266__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11250))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11250),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11250),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs11255 = clustermap.formats.money.fmoney.call(null,(function (){var G__11267 = self__.data;var G__11267__$1 = (((G__11267 == null))?null:(G__11267["total_turnover"]));return G__11267__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11255))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11255),React.DOM.small(null,"Total Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11255),React.DOM.small(null,"Total Turnover"));
}
})(),(function (){var attrs11260 = clustermap.formats.number.fnum.call(null,(function (){var G__11268 = self__.data;var G__11268__$1 = (((G__11268 == null))?null:(G__11268["total_employee_count"]));return G__11268__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11260))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11260),React.DOM.small(null,"Total Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11260),React.DOM.small(null,"Total Employees"));
}
})()));
});
clustermap.components.map_report.t11240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11242){var self__ = this;
var _11242__$1 = this;return self__.meta11241;
});
clustermap.components.map_report.t11240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11242,meta11241__$1){var self__ = this;
var _11242__$1 = this;return (new clustermap.components.map_report.t11240(self__.data,self__.constituency_report,meta11241__$1));
});
clustermap.components.map_report.__GT_t11240 = (function __GT_t11240(data__$1,constituency_report__$1,meta11241){return (new clustermap.components.map_report.t11240(data__$1,constituency_report__$1,meta11241));
});
}
return (new clustermap.components.map_report.t11240(data,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11272 = cljs.core._EQ__EQ_;var expr__11273 = type;if(cljs.core.truth_(pred__11272.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11273)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11272.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11273)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11272.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11273)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,data);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map