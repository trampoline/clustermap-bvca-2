// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
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
{var attrs12011 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs12011))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs12011),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs12011),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__12020){var map__12033 = p__12020;var map__12033__$1 = ((cljs.core.seq_QMARK_.call(null,map__12033))?cljs.core.apply.call(null,cljs.core.hash_map,map__12033):map__12033);var opts = map__12033__$1;var path_fn = cljs.core.get.call(null,map__12033__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__12033__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),company);if(typeof clustermap.components.full_report.company_list.t12034 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t12034 = (function (company_path,link_fn,path_fn,opts,map__12033,p__12020,owner,company,portfolio_company,meta12035){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__12033 = map__12033;
this.p__12020 = p__12020;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta12035 = meta12035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t12034.cljs$lang$type = true;
clustermap.components.full_report.company_list.t12034.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t12034";
clustermap.components.full_report.company_list.t12034.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-list/t12034");
});
clustermap.components.full_report.company_list.t12034.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t12034.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs12037 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.company);if(cljs.core.map_QMARK_.call(null,attrs12037))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12037),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12037));
}
})(),(function (){var attrs12038 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs12038))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12038),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12038));
}
})(),(function (){var attrs12039 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__12044 = self__.company;var G__12044__$1 = (((G__12044 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__12044));var G__12044__$2 = (((G__12044__$1 == null))?null:cljs.core.filter.call(null,((function (G__12044,G__12044__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__12044,G__12044__$1))
,G__12044__$1));return G__12044__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs12039))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12039),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12039));
}
})(),(function (){var attrs12040 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12040))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12040),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12040),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs12041 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs12041))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12041),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12041));
}
})(),(function (){var attrs12042 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12042))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12042),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12042));
}
})(),(function (){var attrs12043 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12043))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12043),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12043),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})());
});
clustermap.components.full_report.company_list.t12034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12036){var self__ = this;
var _12036__$1 = this;return self__.meta12035;
});
clustermap.components.full_report.company_list.t12034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12036,meta12035__$1){var self__ = this;
var _12036__$1 = this;return (new clustermap.components.full_report.company_list.t12034(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__12033,self__.p__12020,self__.owner,self__.company,self__.portfolio_company,meta12035__$1));
});
clustermap.components.full_report.company_list.__GT_t12034 = (function __GT_t12034(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__12033__$2,p__12020__$1,owner__$1,company__$1,portfolio_company__$1,meta12035){return (new clustermap.components.full_report.company_list.t12034(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__12033__$2,p__12020__$1,owner__$1,company__$1,portfolio_company__$1,meta12035));
});
}
return (new clustermap.components.full_report.company_list.t12034(company_path,link_fn,path_fn,opts,map__12033__$1,p__12020,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_list.t12065 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t12065 = (function (comm,opts,owner,companies,company_list,meta12066){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta12066 = meta12066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t12065.cljs$lang$type = true;
clustermap.components.full_report.company_list.t12065.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t12065";
clustermap.components.full_report.company_list.t12065.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-list/t12065");
});
clustermap.components.full_report.company_list.t12065.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t12065.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs12068 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308));if(cljs.core.map_QMARK_.call(null,attrs12068))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs12068)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs12069 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Portfolio Company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs12069))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12069),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12069));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs12074 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs12074))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12074),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12074));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs12075 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs12075))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12075),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12075));
}
})())),(function (){var attrs12076 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs12076))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs12076),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs12076));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs12068),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs12077 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Portfolio Company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs12077))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12077),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12077));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs12082 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs12082))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12082),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12082));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs12083 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs12083))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12083),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12083));
}
})())),(function (){var attrs12084 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs12084))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs12084),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs12084));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
}
});
clustermap.components.full_report.company_list.t12065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12067){var self__ = this;
var _12067__$1 = this;return self__.meta12066;
});
clustermap.components.full_report.company_list.t12065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12067,meta12066__$1){var self__ = this;
var _12067__$1 = this;return (new clustermap.components.full_report.company_list.t12065(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta12066__$1));
});
clustermap.components.full_report.company_list.__GT_t12065 = (function __GT_t12065(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta12066){return (new clustermap.components.full_report.company_list.t12065(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta12066));
});
}
return (new clustermap.components.full_report.company_list.t12065(comm,opts,owner,companies,company_list,null));
});
