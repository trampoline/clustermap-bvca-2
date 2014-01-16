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
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t29814 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t29814 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta29815){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta29815 = meta29815;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t29814.cljs$lang$type = true;
clustermap.map_report.t29814.cljs$lang$ctorStr = "clustermap.map-report/t29814";
clustermap.map_report.t29814.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t29814");
});
clustermap.map_report.t29814.prototype.om$core$IRender$ = true;
clustermap.map_report.t29814.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs29819 = clustermap.formats.number.fnum.call(null,(function (){var G__29839 = self__.pc_summ;var G__29839__$1 = (((G__29839 == null))?null:(G__29839["count"]));return G__29839__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29819))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29819),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29819),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs29824 = clustermap.formats.number.fnum.call(null,(function (){var G__29840 = self__.ic_summ;var G__29840__$1 = (((G__29840 == null))?null:(G__29840["count"]));return G__29840__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29824))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29824),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29824),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs29829 = clustermap.formats.money.fmoney.call(null,(function (){var G__29841 = self__.pc_summ;var G__29841__$1 = (((G__29841 == null))?null:(G__29841["latest_turnover_stats"]["total"]));return G__29841__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29829))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29829),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29829),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs29834 = clustermap.formats.number.fnum.call(null,(function (){var G__29842 = self__.pc_summ;var G__29842__$1 = (((G__29842 == null))?null:(G__29842["latest_employee_count_stats"]["total"]));return G__29842__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29834))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29834),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29834),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t29814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29816){var self__ = this;
var _29816__$1 = this;return self__.meta29815;
});
clustermap.map_report.t29814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29816,meta29815__$1){var self__ = this;
var _29816__$1 = this;return (new clustermap.map_report.t29814(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta29815__$1));
});
clustermap.map_report.__GT_t29814 = (function __GT_t29814(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta29815){return (new clustermap.map_report.t29814(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta29815));
});
}
return (new clustermap.map_report.t29814(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.portfolio_company_report = (function portfolio_company_report(data){if(typeof clustermap.map_report.t29871 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t29871 = (function (data,portfolio_company_report,meta29872){
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta29872 = meta29872;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t29871.cljs$lang$type = true;
clustermap.map_report.t29871.cljs$lang$ctorStr = "clustermap.map-report/t29871";
clustermap.map_report.t29871.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t29871");
});
clustermap.map_report.t29871.prototype.om$core$IRender$ = true;
clustermap.map_report.t29871.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs29874 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs29874))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs29874),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs29874));
}
})()),React.DOM.ul(null,(function (){var attrs29875 = clustermap.formats.number.fnum.call(null,(function (){var G__29895 = self__.data;var G__29895__$1 = (((G__29895 == null))?null:(G__29895["sites"]));var G__29895__$2 = (((G__29895__$1 == null))?null:cljs.core.count.call(null,G__29895__$1));return G__29895__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs29875))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29875),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29875),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs29880 = clustermap.formats.number.fnum.call(null,(function (){var G__29896 = self__.data;var G__29896__$1 = (((G__29896 == null))?null:(G__29896["boundarylinecolls"]["uk_constituencies"]));var G__29896__$2 = (((G__29896__$1 == null))?null:cljs.core.count.call(null,G__29896__$1));return G__29896__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs29880))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29880),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29880),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs29885 = clustermap.formats.money.fmoney.call(null,(function (){var G__29897 = self__.data;var G__29897__$1 = (((G__29897 == null))?null:(G__29897["latest_turnover"]));return G__29897__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29885))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29885),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29885),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs29890 = clustermap.formats.number.fnum.call(null,(function (){var G__29898 = self__.data;var G__29898__$1 = (((G__29898 == null))?null:(G__29898["latest_employee_count"]));return G__29898__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29890))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29890),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29890),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t29871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29873){var self__ = this;
var _29873__$1 = this;return self__.meta29872;
});
clustermap.map_report.t29871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29873,meta29872__$1){var self__ = this;
var _29873__$1 = this;return (new clustermap.map_report.t29871(self__.data,self__.portfolio_company_report,meta29872__$1));
});
clustermap.map_report.__GT_t29871 = (function __GT_t29871(data__$1,portfolio_company_report__$1,meta29872){return (new clustermap.map_report.t29871(data__$1,portfolio_company_report__$1,meta29872));
});
}
return (new clustermap.map_report.t29871(data,portfolio_company_report,null));
});
clustermap.map_report.investor_company_report = (function investor_company_report(data){if(typeof clustermap.map_report.t29927 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t29927 = (function (data,investor_company_report,meta29928){
this.data = data;
this.investor_company_report = investor_company_report;
this.meta29928 = meta29928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t29927.cljs$lang$type = true;
clustermap.map_report.t29927.cljs$lang$ctorStr = "clustermap.map-report/t29927";
clustermap.map_report.t29927.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t29927");
});
clustermap.map_report.t29927.prototype.om$core$IRender$ = true;
clustermap.map_report.t29927.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs29930 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs29930))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs29930),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs29930));
}
})()),React.DOM.ul(null,(function (){var attrs29931 = clustermap.formats.number.fnum.call(null,(function (){var G__29951 = self__.data;var G__29951__$1 = (((G__29951 == null))?null:(G__29951["portfolio_companies"]));var G__29951__$2 = (((G__29951__$1 == null))?null:cljs.core.count.call(null,G__29951__$1));return G__29951__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs29931))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29931),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29931),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs29936 = clustermap.formats.number.fnum.call(null,(function (){var G__29952 = self__.data;var G__29952__$1 = (((G__29952 == null))?null:(G__29952["boundarylinecolls"]["uk_constituencies"]));var G__29952__$2 = (((G__29952__$1 == null))?null:cljs.core.count.call(null,G__29952__$1));return G__29952__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs29936))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29936),React.DOM.small(null,"Constituencies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29936),React.DOM.small(null,"Constituencies"));
}
})(),(function (){var attrs29941 = clustermap.formats.money.fmoney.call(null,(function (){var G__29953 = self__.data;var G__29953__$1 = (((G__29953 == null))?null:(G__29953["total_turnover"]));return G__29953__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29941))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29941),React.DOM.small(null,"Total Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29941),React.DOM.small(null,"Total Company Turnover"));
}
})(),(function (){var attrs29946 = clustermap.formats.number.fnum.call(null,(function (){var G__29954 = self__.data;var G__29954__$1 = (((G__29954 == null))?null:(G__29954["total_employee_count"]));return G__29954__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29946))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29946),React.DOM.small(null,"Total Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29946),React.DOM.small(null,"Total Company Employees"));
}
})()));
});
clustermap.map_report.t29927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29929){var self__ = this;
var _29929__$1 = this;return self__.meta29928;
});
clustermap.map_report.t29927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29929,meta29928__$1){var self__ = this;
var _29929__$1 = this;return (new clustermap.map_report.t29927(self__.data,self__.investor_company_report,meta29928__$1));
});
clustermap.map_report.__GT_t29927 = (function __GT_t29927(data__$1,investor_company_report__$1,meta29928){return (new clustermap.map_report.t29927(data__$1,investor_company_report__$1,meta29928));
});
}
return (new clustermap.map_report.t29927(data,investor_company_report,null));
});
clustermap.map_report.constituency_report = (function constituency_report(data){if(typeof clustermap.map_report.t29984 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t29984 = (function (data,constituency_report,meta29985){
this.data = data;
this.constituency_report = constituency_report;
this.meta29985 = meta29985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t29984.cljs$lang$type = true;
clustermap.map_report.t29984.cljs$lang$ctorStr = "clustermap.map-report/t29984";
clustermap.map_report.t29984.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t29984");
});
clustermap.map_report.t29984.prototype.om$core$IRender$ = true;
clustermap.map_report.t29984.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs29987 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs29987))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs29987),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs29987));
}
})(),(function (){var attrs29988 = (self__.data["mp"]);if(cljs.core.map_QMARK_.call(null,attrs29988))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs29988),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs29988),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
}
})()),React.DOM.ul(null,(function (){var attrs29989 = clustermap.formats.number.fnum.call(null,(function (){var G__30009 = self__.data;var G__30009__$1 = (((G__30009 == null))?null:(G__30009["investor_companies"]));var G__30009__$2 = (((G__30009__$1 == null))?null:cljs.core.count.call(null,G__30009__$1));return G__30009__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs29989))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29989),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29989),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs29994 = clustermap.formats.number.fnum.call(null,(function (){var G__30010 = self__.data;var G__30010__$1 = (((G__30010 == null))?null:(G__30010["portfolio_companies"]));var G__30010__$2 = (((G__30010__$1 == null))?null:cljs.core.count.call(null,G__30010__$1));return G__30010__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs29994))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29994),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29994),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs29999 = clustermap.formats.money.fmoney.call(null,(function (){var G__30011 = self__.data;var G__30011__$1 = (((G__30011 == null))?null:(G__30011["total_turnover"]));return G__30011__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs29999))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs29999),React.DOM.small(null,"Total Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs29999),React.DOM.small(null,"Total Turnover"));
}
})(),(function (){var attrs30004 = clustermap.formats.number.fnum.call(null,(function (){var G__30012 = self__.data;var G__30012__$1 = (((G__30012 == null))?null:(G__30012["total_employee_count"]));return G__30012__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30004))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30004),React.DOM.small(null,"Total Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30004),React.DOM.small(null,"Total Employees"));
}
})()));
});
clustermap.map_report.t29984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29986){var self__ = this;
var _29986__$1 = this;return self__.meta29985;
});
clustermap.map_report.t29984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29986,meta29985__$1){var self__ = this;
var _29986__$1 = this;return (new clustermap.map_report.t29984(self__.data,self__.constituency_report,meta29985__$1));
});
clustermap.map_report.__GT_t29984 = (function __GT_t29984(data__$1,constituency_report__$1,meta29985){return (new clustermap.map_report.t29984(data__$1,constituency_report__$1,meta29985));
});
}
return (new clustermap.map_report.t29984(data,constituency_report,null));
});
clustermap.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__30016 = cljs.core._EQ__EQ_;var expr__30017 = type;if(cljs.core.truth_(pred__30016.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__30017)))
{return clustermap.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__30016.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__30017)))
{return clustermap.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__30016.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__30017)))
{return clustermap.map_report.constituency_report.call(null,value);
} else
{return clustermap.map_report.all_portfolio_companies_summary_report.call(null,data);
}
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});
