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
{var attrs33643 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs33643))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs33643),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs33643),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__33652){var map__33667 = p__33652;var map__33667__$1 = ((cljs.core.seq_QMARK_.call(null,map__33667))?cljs.core.apply.call(null,cljs.core.hash_map,map__33667):map__33667);var opts = map__33667__$1;var path_fn = cljs.core.get.call(null,map__33667__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__33667__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),company);if(typeof clustermap.components.full_report.company_list.t33668 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33668 = (function (company_path,link_fn,path_fn,opts,map__33667,p__33652,owner,company,portfolio_company,meta33669){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__33667 = map__33667;
this.p__33652 = p__33652;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta33669 = meta33669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33668.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33668.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33668";
clustermap.components.full_report.company_list.t33668.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t33668");
});
clustermap.components.full_report.company_list.t33668.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33668.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs33671 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.company);if(cljs.core.map_QMARK_.call(null,attrs33671))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33671),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33671));
}
})(),(function (){var attrs33672 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs33672))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33672),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33672));
}
})(),(function (){var attrs33673 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__33680 = self__.company;var G__33680__$1 = (((G__33680 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__33680));var G__33680__$2 = (((G__33680__$1 == null))?null:cljs.core.filter.call(null,((function (G__33680,G__33680__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__33680,G__33680__$1))
,G__33680__$1));return G__33680__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs33673))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33673),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33673));
}
})(),(function (){var attrs33674 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33674))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33674),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33674),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs33675 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs33675))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33675),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33675));
}
})(),(function (){var attrs33676 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33676))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33676),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33676));
}
})(),(function (){var attrs33677 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33677))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33677),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33677),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3406__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs33678 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs33678))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33678),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33678));
}
})(),(function (){var attrs33679 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33679))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33679),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33679));
}
})());
});
clustermap.components.full_report.company_list.t33668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33670){var self__ = this;
var _33670__$1 = this;return self__.meta33669;
});
clustermap.components.full_report.company_list.t33668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33670,meta33669__$1){var self__ = this;
var _33670__$1 = this;return (new clustermap.components.full_report.company_list.t33668(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__33667,self__.p__33652,self__.owner,self__.company,self__.portfolio_company,meta33669__$1));
});
clustermap.components.full_report.company_list.__GT_t33668 = (function __GT_t33668(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33667__$2,p__33652__$1,owner__$1,company__$1,portfolio_company__$1,meta33669){return (new clustermap.components.full_report.company_list.t33668(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33667__$2,p__33652__$1,owner__$1,company__$1,portfolio_company__$1,meta33669));
});
}
return (new clustermap.components.full_report.company_list.t33668(company_path,link_fn,path_fn,opts,map__33667__$1,p__33652,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_list.t33701 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33701 = (function (comm,opts,owner,companies,company_list,meta33702){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta33702 = meta33702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33701.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33701.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33701";
clustermap.components.full_report.company_list.t33701.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t33701");
});
clustermap.components.full_report.company_list.t33701.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33701.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;var attrs33704 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308));if(cljs.core.map_QMARK_.call(null,attrs33704))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs33704)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs33705 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Portfolio Company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs33705))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33705),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33705));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs33710 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs33710))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33710),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33710));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs33711 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs33711))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33711),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33711));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Emp. change",new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185)))))),(function (){var attrs33712 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs33712))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs33712),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs33712));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs33704),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs33713 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Portfolio Company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs33713))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33713),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33713));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs33718 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs33718))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33718),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33718));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs33719 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs33719))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33719),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33719));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Emp. change",new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185)))))),(function (){var attrs33720 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs33720))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs33720),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs33720));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
}
});
clustermap.components.full_report.company_list.t33701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33703){var self__ = this;
var _33703__$1 = this;return self__.meta33702;
});
clustermap.components.full_report.company_list.t33701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33703,meta33702__$1){var self__ = this;
var _33703__$1 = this;return (new clustermap.components.full_report.company_list.t33701(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta33702__$1));
});
clustermap.components.full_report.company_list.__GT_t33701 = (function __GT_t33701(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta33702){return (new clustermap.components.full_report.company_list.t33701(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta33702));
});
}
return (new clustermap.components.full_report.company_list.t33701(comm,opts,owner,companies,company_list,null));
});
