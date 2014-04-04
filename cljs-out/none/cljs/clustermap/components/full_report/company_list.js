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
{var attrs22880 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs22880))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs22880),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs22880),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__22889){var map__22902 = p__22889;var map__22902__$1 = ((cljs.core.seq_QMARK_.call(null,map__22902))?cljs.core.apply.call(null,cljs.core.hash_map,map__22902):map__22902);var opts = map__22902__$1;var path_fn = cljs.core.get.call(null,map__22902__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__22902__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),company);if(typeof clustermap.components.full_report.company_list.t22903 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22903 = (function (company_path,link_fn,path_fn,opts,map__22902,p__22889,owner,company,portfolio_company,meta22904){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22902 = map__22902;
this.p__22889 = p__22889;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta22904 = meta22904;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22903.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22903.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22903";
clustermap.components.full_report.company_list.t22903.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-list/t22903");
});
clustermap.components.full_report.company_list.t22903.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22903.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22906 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.company);if(cljs.core.map_QMARK_.call(null,attrs22906))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22906),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22906));
}
})(),(function (){var attrs22907 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs22907))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22907),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22907));
}
})(),(function (){var attrs22908 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__22913 = self__.company;var G__22913__$1 = (((G__22913 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__22913));var G__22913__$2 = (((G__22913__$1 == null))?null:cljs.core.filter.call(null,((function (G__22913,G__22913__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22913,G__22913__$1))
,G__22913__$1));return G__22913__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs22908))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22908),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22908));
}
})(),(function (){var attrs22909 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22909))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22909),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22909),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs22910 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs22910))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22910),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22910));
}
})(),(function (){var attrs22911 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22911))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22911),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22911));
}
})(),(function (){var attrs22912 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22912))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22912),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22912),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})());
});
clustermap.components.full_report.company_list.t22903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22905){var self__ = this;
var _22905__$1 = this;return self__.meta22904;
});
clustermap.components.full_report.company_list.t22903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22905,meta22904__$1){var self__ = this;
var _22905__$1 = this;return (new clustermap.components.full_report.company_list.t22903(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22902,self__.p__22889,self__.owner,self__.company,self__.portfolio_company,meta22904__$1));
});
clustermap.components.full_report.company_list.__GT_t22903 = (function __GT_t22903(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22902__$2,p__22889__$1,owner__$1,company__$1,portfolio_company__$1,meta22904){return (new clustermap.components.full_report.company_list.t22903(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22902__$2,p__22889__$1,owner__$1,company__$1,portfolio_company__$1,meta22904));
});
}
return (new clustermap.components.full_report.company_list.t22903(company_path,link_fn,path_fn,opts,map__22902__$1,p__22889,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_list.t22934 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22934 = (function (comm,opts,owner,companies,company_list,meta22935){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta22935 = meta22935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22934.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22934.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22934";
clustermap.components.full_report.company_list.t22934.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-list/t22934");
});
clustermap.components.full_report.company_list.t22934.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22934.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs22937 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308));if(cljs.core.map_QMARK_.call(null,attrs22937))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs22937)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs22938 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs22938))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22938),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22938));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs22943 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs22943))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22943),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22943));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs22944 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs22944))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22944),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22944));
}
})())),(function (){var attrs22945 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs22945))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs22945),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs22945));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs22937),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs22946 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs22946))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22946),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22946));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs22951 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs22951))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22951),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22951));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs22952 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs22952))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22952),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22952));
}
})())),(function (){var attrs22953 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs22953))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs22953),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs22953));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
}
});
clustermap.components.full_report.company_list.t22934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22936){var self__ = this;
var _22936__$1 = this;return self__.meta22935;
});
clustermap.components.full_report.company_list.t22934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22936,meta22935__$1){var self__ = this;
var _22936__$1 = this;return (new clustermap.components.full_report.company_list.t22934(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta22935__$1));
});
clustermap.components.full_report.company_list.__GT_t22934 = (function __GT_t22934(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta22935){return (new clustermap.components.full_report.company_list.t22934(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta22935));
});
}
return (new clustermap.components.full_report.company_list.t22934(comm,opts,owner,companies,company_list,null));
});

//# sourceMappingURL=company_list.js.map