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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.components.map_report.t30076 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30076 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta30077){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta30077 = meta30077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30076.cljs$lang$type = true;
clustermap.components.map_report.t30076.cljs$lang$ctorStr = "clustermap.components.map-report/t30076";
clustermap.components.map_report.t30076.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30076");
});
clustermap.components.map_report.t30076.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30076.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs30081 = clustermap.formats.number.fnum.call(null,(function (){var G__30101 = self__.pc_summ;var G__30101__$1 = (((G__30101 == null))?null:(G__30101["count"]));return G__30101__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30081))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30081),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30081),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs30086 = clustermap.formats.number.fnum.call(null,(function (){var G__30102 = self__.ic_summ;var G__30102__$1 = (((G__30102 == null))?null:(G__30102["count"]));return G__30102__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30086))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30086),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30086),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs30091 = clustermap.formats.money.fmoney.call(null,(function (){var G__30103 = self__.pc_summ;var G__30103__$1 = (((G__30103 == null))?null:(G__30103["latest_turnover_stats"]["total"]));return G__30103__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30091))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30091),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30091),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs30096 = clustermap.formats.number.fnum.call(null,(function (){var G__30104 = self__.pc_summ;var G__30104__$1 = (((G__30104 == null))?null:(G__30104["latest_employee_count_stats"]["total"]));return G__30104__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30096))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30096),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30096),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t30076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30078){var self__ = this;
var _30078__$1 = this;return self__.meta30077;
});
clustermap.components.map_report.t30076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30078,meta30077__$1){var self__ = this;
var _30078__$1 = this;return (new clustermap.components.map_report.t30076(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta30077__$1));
});
clustermap.components.map_report.__GT_t30076 = (function __GT_t30076(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta30077){return (new clustermap.components.map_report.t30076(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta30077));
});
}
return (new clustermap.components.map_report.t30076(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(data){if(typeof clustermap.components.map_report.t30133 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30133 = (function (data,portfolio_company_report,meta30134){
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta30134 = meta30134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30133.cljs$lang$type = true;
clustermap.components.map_report.t30133.cljs$lang$ctorStr = "clustermap.components.map-report/t30133";
clustermap.components.map_report.t30133.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30133");
});
clustermap.components.map_report.t30133.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30133.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30136 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs30136))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30136),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30136));
}
})()),React.DOM.ul(null,(function (){var attrs30137 = clustermap.formats.number.fnum.call(null,(function (){var G__30157 = self__.data;var G__30157__$1 = (((G__30157 == null))?null:(G__30157["sites"]));var G__30157__$2 = (((G__30157__$1 == null))?null:cljs.core.count.call(null,G__30157__$1));return G__30157__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs30137))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30137),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30137),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs30142 = clustermap.formats.number.fnum.call(null,(function (){var G__30158 = self__.data;var G__30158__$1 = (((G__30158 == null))?null:(G__30158["boundarylinecolls"]["uk_constituencies"]));var G__30158__$2 = (((G__30158__$1 == null))?null:cljs.core.count.call(null,G__30158__$1));return G__30158__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs30142))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30142),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30142),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs30147 = clustermap.formats.money.fmoney.call(null,(function (){var G__30159 = self__.data;var G__30159__$1 = (((G__30159 == null))?null:(G__30159["latest_turnover"]));return G__30159__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30147))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30147),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30147),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs30152 = clustermap.formats.number.fnum.call(null,(function (){var G__30160 = self__.data;var G__30160__$1 = (((G__30160 == null))?null:(G__30160["latest_employee_count"]));return G__30160__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30152))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30152),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30152),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t30133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30135){var self__ = this;
var _30135__$1 = this;return self__.meta30134;
});
clustermap.components.map_report.t30133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30135,meta30134__$1){var self__ = this;
var _30135__$1 = this;return (new clustermap.components.map_report.t30133(self__.data,self__.portfolio_company_report,meta30134__$1));
});
clustermap.components.map_report.__GT_t30133 = (function __GT_t30133(data__$1,portfolio_company_report__$1,meta30134){return (new clustermap.components.map_report.t30133(data__$1,portfolio_company_report__$1,meta30134));
});
}
return (new clustermap.components.map_report.t30133(data,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(data){if(typeof clustermap.components.map_report.t30189 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30189 = (function (data,investor_company_report,meta30190){
this.data = data;
this.investor_company_report = investor_company_report;
this.meta30190 = meta30190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30189.cljs$lang$type = true;
clustermap.components.map_report.t30189.cljs$lang$ctorStr = "clustermap.components.map-report/t30189";
clustermap.components.map_report.t30189.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30189");
});
clustermap.components.map_report.t30189.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30189.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30192 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs30192))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30192),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30192));
}
})()),React.DOM.ul(null,(function (){var attrs30193 = clustermap.formats.number.fnum.call(null,(function (){var G__30213 = self__.data;var G__30213__$1 = (((G__30213 == null))?null:(G__30213["portfolio_companies"]));var G__30213__$2 = (((G__30213__$1 == null))?null:cljs.core.count.call(null,G__30213__$1));return G__30213__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs30193))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30193),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30193),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs30198 = clustermap.formats.number.fnum.call(null,(function (){var G__30214 = self__.data;var G__30214__$1 = (((G__30214 == null))?null:(G__30214["boundarylinecolls"]["uk_constituencies"]));var G__30214__$2 = (((G__30214__$1 == null))?null:cljs.core.count.call(null,G__30214__$1));return G__30214__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs30198))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30198),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30198),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs30203 = clustermap.formats.money.fmoney.call(null,(function (){var G__30215 = self__.data;var G__30215__$1 = (((G__30215 == null))?null:(G__30215["total_turnover"]));return G__30215__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30203))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30203),React.DOM.small(null,"Total Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30203),React.DOM.small(null,"Total Company Turnover"));
}
})(),(function (){var attrs30208 = clustermap.formats.number.fnum.call(null,(function (){var G__30216 = self__.data;var G__30216__$1 = (((G__30216 == null))?null:(G__30216["total_employee_count"]));return G__30216__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30208))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30208),React.DOM.small(null,"Total Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30208),React.DOM.small(null,"Total Company Employees"));
}
})()));
});
clustermap.components.map_report.t30189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30191){var self__ = this;
var _30191__$1 = this;return self__.meta30190;
});
clustermap.components.map_report.t30189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30191,meta30190__$1){var self__ = this;
var _30191__$1 = this;return (new clustermap.components.map_report.t30189(self__.data,self__.investor_company_report,meta30190__$1));
});
clustermap.components.map_report.__GT_t30189 = (function __GT_t30189(data__$1,investor_company_report__$1,meta30190){return (new clustermap.components.map_report.t30189(data__$1,investor_company_report__$1,meta30190));
});
}
return (new clustermap.components.map_report.t30189(data,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(data){if(typeof clustermap.components.map_report.t30246 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30246 = (function (data,constituency_report,meta30247){
this.data = data;
this.constituency_report = constituency_report;
this.meta30247 = meta30247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30246.cljs$lang$type = true;
clustermap.components.map_report.t30246.cljs$lang$ctorStr = "clustermap.components.map-report/t30246";
clustermap.components.map_report.t30246.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30246");
});
clustermap.components.map_report.t30246.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30246.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30249 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs30249))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30249),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30249));
}
})(),(function (){var attrs30250 = (self__.data["mp"]);if(cljs.core.map_QMARK_.call(null,attrs30250))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs30250),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs30250),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
}
})()),React.DOM.ul(null,(function (){var attrs30251 = clustermap.formats.number.fnum.call(null,(function (){var G__30271 = self__.data;var G__30271__$1 = (((G__30271 == null))?null:(G__30271["investor_companies"]));var G__30271__$2 = (((G__30271__$1 == null))?null:cljs.core.count.call(null,G__30271__$1));return G__30271__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs30251))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30251),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30251),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs30256 = clustermap.formats.number.fnum.call(null,(function (){var G__30272 = self__.data;var G__30272__$1 = (((G__30272 == null))?null:(G__30272["portfolio_companies"]));var G__30272__$2 = (((G__30272__$1 == null))?null:cljs.core.count.call(null,G__30272__$1));return G__30272__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs30256))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30256),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30256),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs30261 = clustermap.formats.money.fmoney.call(null,(function (){var G__30273 = self__.data;var G__30273__$1 = (((G__30273 == null))?null:(G__30273["total_turnover"]));return G__30273__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30261))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30261),React.DOM.small(null,"Total Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30261),React.DOM.small(null,"Total Turnover"));
}
})(),(function (){var attrs30266 = clustermap.formats.number.fnum.call(null,(function (){var G__30274 = self__.data;var G__30274__$1 = (((G__30274 == null))?null:(G__30274["total_employee_count"]));return G__30274__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30266))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30266),React.DOM.small(null,"Total Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30266),React.DOM.small(null,"Total Employees"));
}
})()));
});
clustermap.components.map_report.t30246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30248){var self__ = this;
var _30248__$1 = this;return self__.meta30247;
});
clustermap.components.map_report.t30246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30248,meta30247__$1){var self__ = this;
var _30248__$1 = this;return (new clustermap.components.map_report.t30246(self__.data,self__.constituency_report,meta30247__$1));
});
clustermap.components.map_report.__GT_t30246 = (function __GT_t30246(data__$1,constituency_report__$1,meta30247){return (new clustermap.components.map_report.t30246(data__$1,constituency_report__$1,meta30247));
});
}
return (new clustermap.components.map_report.t30246(data,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__30278 = cljs.core._EQ__EQ_;var expr__30279 = type;if(cljs.core.truth_(pred__30278.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__30279)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__30278.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__30279)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__30278.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__30279)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,data);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
