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
{var attrs22892 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs22892))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs22892),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs22892),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__22901){var map__22914 = p__22901;var map__22914__$1 = ((cljs.core.seq_QMARK_.call(null,map__22914))?cljs.core.apply.call(null,cljs.core.hash_map,map__22914):map__22914);var opts = map__22914__$1;var path_fn = cljs.core.get.call(null,map__22914__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__22914__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),company);if(typeof clustermap.components.full_report.company_list.t22915 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22915 = (function (company_path,link_fn,path_fn,opts,map__22914,p__22901,owner,company,portfolio_company,meta22916){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22914 = map__22914;
this.p__22901 = p__22901;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta22916 = meta22916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22915.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22915.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22915";
clustermap.components.full_report.company_list.t22915.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-list/t22915");
});
clustermap.components.full_report.company_list.t22915.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22915.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22918 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.company);if(cljs.core.map_QMARK_.call(null,attrs22918))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22918),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22918));
}
})(),(function (){var attrs22919 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs22919))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22919),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22919));
}
})(),(function (){var attrs22920 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__22925 = self__.company;var G__22925__$1 = (((G__22925 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__22925));var G__22925__$2 = (((G__22925__$1 == null))?null:cljs.core.filter.call(null,((function (G__22925,G__22925__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22925,G__22925__$1))
,G__22925__$1));return G__22925__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs22920))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22920),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22920));
}
})(),(function (){var attrs22921 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22921))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22921),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22921),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs22922 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs22922))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22922),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22922));
}
})(),(function (){var attrs22923 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22923))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22923),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22923));
}
})(),(function (){var attrs22924 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs22924))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22924),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22924),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})());
});
clustermap.components.full_report.company_list.t22915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22917){var self__ = this;
var _22917__$1 = this;return self__.meta22916;
});
clustermap.components.full_report.company_list.t22915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22917,meta22916__$1){var self__ = this;
var _22917__$1 = this;return (new clustermap.components.full_report.company_list.t22915(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22914,self__.p__22901,self__.owner,self__.company,self__.portfolio_company,meta22916__$1));
});
clustermap.components.full_report.company_list.__GT_t22915 = (function __GT_t22915(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22914__$2,p__22901__$1,owner__$1,company__$1,portfolio_company__$1,meta22916){return (new clustermap.components.full_report.company_list.t22915(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22914__$2,p__22901__$1,owner__$1,company__$1,portfolio_company__$1,meta22916));
});
}
return (new clustermap.components.full_report.company_list.t22915(company_path,link_fn,path_fn,opts,map__22914__$1,p__22901,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_list.t22946 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22946 = (function (comm,opts,owner,companies,company_list,meta22947){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta22947 = meta22947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22946.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22946.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22946";
clustermap.components.full_report.company_list.t22946.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-list/t22946");
});
clustermap.components.full_report.company_list.t22946.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22946.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs22949 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308));if(cljs.core.map_QMARK_.call(null,attrs22949))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs22949)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs22950 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs22950))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22950),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22950));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs22955 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs22955))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22955),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22955));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs22956 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs22956))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22956),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22956));
}
})())),(function (){var attrs22957 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs22957))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs22957),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs22957));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs22949),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs22958 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs22958))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22958),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22958));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs22963 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs22963))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22963),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22963));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs22964 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs22964))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs22964),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs22964));
}
})())),(function (){var attrs22965 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs22965))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs22965),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs22965));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
}
});
clustermap.components.full_report.company_list.t22946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22948){var self__ = this;
var _22948__$1 = this;return self__.meta22947;
});
clustermap.components.full_report.company_list.t22946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22948,meta22947__$1){var self__ = this;
var _22948__$1 = this;return (new clustermap.components.full_report.company_list.t22946(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta22947__$1));
});
clustermap.components.full_report.company_list.__GT_t22946 = (function __GT_t22946(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta22947){return (new clustermap.components.full_report.company_list.t22946(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta22947));
});
}
return (new clustermap.components.full_report.company_list.t22946(comm,opts,owner,companies,company_list,null));
});

//# sourceMappingURL=company_list.js.map