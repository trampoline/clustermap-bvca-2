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
{var attrs44682 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs44682))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs44682),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs44682),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__44691){var map__44704 = p__44691;var map__44704__$1 = ((cljs.core.seq_QMARK_.call(null,map__44704))?cljs.core.apply.call(null,cljs.core.hash_map,map__44704):map__44704);var opts = map__44704__$1;var path_fn = cljs.core.get.call(null,map__44704__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__44704__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),company);if(typeof clustermap.components.full_report.company_list.t44705 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t44705 = (function (company_path,link_fn,path_fn,opts,map__44704,p__44691,owner,company,portfolio_company,meta44706){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__44704 = map__44704;
this.p__44691 = p__44691;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta44706 = meta44706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t44705.cljs$lang$type = true;
clustermap.components.full_report.company_list.t44705.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t44705";
clustermap.components.full_report.company_list.t44705.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-list/t44705");
});
clustermap.components.full_report.company_list.t44705.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t44705.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs44708 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.company);if(cljs.core.map_QMARK_.call(null,attrs44708))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs44708),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs44708));
}
})(),(function (){var attrs44709 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs44709))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs44709),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs44709));
}
})(),(function (){var attrs44710 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__44715 = self__.company;var G__44715__$1 = (((G__44715 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__44715));var G__44715__$2 = (((G__44715__$1 == null))?null:cljs.core.filter.call(null,((function (G__44715,G__44715__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__44715,G__44715__$1))
,G__44715__$1));return G__44715__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs44710))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs44710),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs44710));
}
})(),(function (){var attrs44711 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs44711))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs44711),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs44711),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs44712 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs44712))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs44712),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs44712));
}
})(),(function (){var attrs44713 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs44713))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs44713),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs44713));
}
})(),(function (){var attrs44714 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs44714))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs44714),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs44714),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})());
});
clustermap.components.full_report.company_list.t44705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44707){var self__ = this;
var _44707__$1 = this;return self__.meta44706;
});
clustermap.components.full_report.company_list.t44705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44707,meta44706__$1){var self__ = this;
var _44707__$1 = this;return (new clustermap.components.full_report.company_list.t44705(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__44704,self__.p__44691,self__.owner,self__.company,self__.portfolio_company,meta44706__$1));
});
clustermap.components.full_report.company_list.__GT_t44705 = (function __GT_t44705(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__44704__$2,p__44691__$1,owner__$1,company__$1,portfolio_company__$1,meta44706){return (new clustermap.components.full_report.company_list.t44705(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__44704__$2,p__44691__$1,owner__$1,company__$1,portfolio_company__$1,meta44706));
});
}
return (new clustermap.components.full_report.company_list.t44705(company_path,link_fn,path_fn,opts,map__44704__$1,p__44691,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_list.t44736 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t44736 = (function (comm,opts,owner,companies,company_list,meta44737){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta44737 = meta44737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t44736.cljs$lang$type = true;
clustermap.components.full_report.company_list.t44736.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t44736";
clustermap.components.full_report.company_list.t44736.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-list/t44736");
});
clustermap.components.full_report.company_list.t44736.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t44736.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs44739 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308));if(cljs.core.map_QMARK_.call(null,attrs44739))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs44739)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs44740 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs44740))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs44740),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs44740));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs44745 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs44745))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs44745),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs44745));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs44746 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs44746))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs44746),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs44746));
}
})())),(function (){var attrs44747 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs44747))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs44747),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs44747));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs44739),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs44748 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs44748))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs44748),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs44748));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs44753 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs44753))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs44753),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs44753));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs44754 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs44754))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs44754),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs44754));
}
})())),(function (){var attrs44755 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs44755))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs44755),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs44755));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
}
});
clustermap.components.full_report.company_list.t44736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44738){var self__ = this;
var _44738__$1 = this;return self__.meta44737;
});
clustermap.components.full_report.company_list.t44736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44738,meta44737__$1){var self__ = this;
var _44738__$1 = this;return (new clustermap.components.full_report.company_list.t44736(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta44737__$1));
});
clustermap.components.full_report.company_list.__GT_t44736 = (function __GT_t44736(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta44737){return (new clustermap.components.full_report.company_list.t44736(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta44737));
});
}
return (new clustermap.components.full_report.company_list.t44736(comm,opts,owner,companies,company_list,null));
});
