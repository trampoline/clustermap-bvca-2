// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs11937 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs11937))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs11937),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs11937),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
}
} else
{return link_fn.call(null,type,first_obj);
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__11946){var map__11961 = p__11946;var map__11961__$1 = ((cljs.core.seq_QMARK_.call(null,map__11961))?cljs.core.apply.call(null,cljs.core.hash_map,map__11961):map__11961);var opts = map__11961__$1;var path_fn = cljs.core.get.call(null,map__11961__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__11961__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),company);if(typeof clustermap.components.full_report.company_list.t11962 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11962 = (function (company_path,link_fn,path_fn,opts,map__11961,p__11946,owner,company,portfolio_company,meta11963){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__11961 = map__11961;
this.p__11946 = p__11946;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta11963 = meta11963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11962.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11962.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11962";
clustermap.components.full_report.company_list.t11962.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11962");
});
clustermap.components.full_report.company_list.t11962.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11962.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs11965 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.company);if(cljs.core.map_QMARK_.call(null,attrs11965))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11965),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11965));
}
})(),(function (){var attrs11966 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs11966))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11966),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11966));
}
})(),(function (){var attrs11967 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__11974 = self__.company;var G__11974__$1 = (((G__11974 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__11974));var G__11974__$2 = (((G__11974__$1 == null))?null:cljs.core.filter.call(null,((function (G__11974,G__11974__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__11974,G__11974__$1))
,G__11974__$1));return G__11974__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11967))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11967),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11967));
}
})(),(function (){var attrs11968 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11968))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11968),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11968),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs11969 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs11969))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11969),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11969));
}
})(),(function (){var attrs11970 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11970))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11970),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11970));
}
})(),(function (){var attrs11971 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11971))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11971),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11971),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs11972 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs11972))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11972),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11972));
}
})(),(function (){var attrs11973 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11973))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11973),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11973));
}
})());
});
clustermap.components.full_report.company_list.t11962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11964){var self__ = this;
var _11964__$1 = this;return self__.meta11963;
});
clustermap.components.full_report.company_list.t11962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11964,meta11963__$1){var self__ = this;
var _11964__$1 = this;return (new clustermap.components.full_report.company_list.t11962(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__11961,self__.p__11946,self__.owner,self__.company,self__.portfolio_company,meta11963__$1));
});
clustermap.components.full_report.company_list.__GT_t11962 = (function __GT_t11962(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11961__$2,p__11946__$1,owner__$1,company__$1,portfolio_company__$1,meta11963){return (new clustermap.components.full_report.company_list.t11962(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11961__$2,p__11946__$1,owner__$1,company__$1,portfolio_company__$1,meta11963));
});
}
return (new clustermap.components.full_report.company_list.t11962(company_path,link_fn,path_fn,opts,map__11961__$1,p__11946,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_list.t11995 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11995 = (function (comm,opts,owner,companies,company_list,meta11996){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta11996 = meta11996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11995.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11995.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11995";
clustermap.components.full_report.company_list.t11995.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11995");
});
clustermap.components.full_report.company_list.t11995.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11995.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;var attrs11998 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308));if(cljs.core.map_QMARK_.call(null,attrs11998))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs11998)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs11999 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Portfolio Company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs11999))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs11999),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs11999));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs12004 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs12004))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12004),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12004));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs12005 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs12005))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12005),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12005));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Emp. change",new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185)))))),(function (){var attrs12006 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs12006))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs12006),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs12006));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs11998),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs12007 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Portfolio Company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs12007))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12007),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12007));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs12012 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs12012))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12012),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12012));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs12013 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs12013))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12013),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12013));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Emp. change",new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185)))))),(function (){var attrs12014 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs12014))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs12014),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs12014));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
}
});
clustermap.components.full_report.company_list.t11995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11997){var self__ = this;
var _11997__$1 = this;return self__.meta11996;
});
clustermap.components.full_report.company_list.t11995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11997,meta11996__$1){var self__ = this;
var _11997__$1 = this;return (new clustermap.components.full_report.company_list.t11995(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta11996__$1));
});
clustermap.components.full_report.company_list.__GT_t11995 = (function __GT_t11995(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta11996){return (new clustermap.components.full_report.company_list.t11995(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta11996));
});
}
return (new clustermap.components.full_report.company_list.t11995(comm,opts,owner,companies,company_list,null));
});

//# sourceMappingURL=company_list.js.map