// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_site_list');
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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__33721){var map__33730 = p__33721;var map__33730__$1 = ((cljs.core.seq_QMARK_.call(null,map__33730))?cljs.core.apply.call(null,cljs.core.hash_map,map__33730):map__33730);var opts = map__33730__$1;var path_fn = cljs.core.get.call(null,map__33730__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__33730__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t33731 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t33731 = (function (company_path,link_fn,path_fn,opts,map__33730,p__33721,owner,investment,meta33732){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__33730 = map__33730;
this.p__33721 = p__33721;
this.owner = owner;
this.investment = investment;
this.meta33732 = meta33732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t33731.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t33731.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t33731";
clustermap.components.full_report.company_site_list.t33731.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-site-list/t33731");
});
clustermap.components.full_report.company_site_list.t33731.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t33731.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs33734 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"portfolio_company_no","portfolio_company_no",771436428).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",4225526294).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs33734))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33734),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33734));
}
})(),(function (){var attrs33735 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",4491774974).cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_.call(null,attrs33735))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33735),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33735));
}
})(),(function (){var attrs33736 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",4797549766).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs33736))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33736),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33736));
}
})(),(function (){var attrs33737 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",3478315290).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs33737))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33737),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33737));
}
})());
});
clustermap.components.full_report.company_site_list.t33731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33733){var self__ = this;
var _33733__$1 = this;return self__.meta33732;
});
clustermap.components.full_report.company_site_list.t33731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33733,meta33732__$1){var self__ = this;
var _33733__$1 = this;return (new clustermap.components.full_report.company_site_list.t33731(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__33730,self__.p__33721,self__.owner,self__.investment,meta33732__$1));
});
clustermap.components.full_report.company_site_list.__GT_t33731 = (function __GT_t33731(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33730__$2,p__33721__$1,owner__$1,investment__$2,meta33732){return (new clustermap.components.full_report.company_site_list.t33731(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33730__$2,p__33721__$1,owner__$1,investment__$2,meta33732));
});
}
return (new clustermap.components.full_report.company_site_list.t33731(company_path,link_fn,path_fn,opts,map__33730__$1,p__33721,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_site_list.t33752 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t33752 = (function (comm,opts,owner,investments,company_site_list,meta33753){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta33753 = meta33753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t33752.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t33752.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t33752";
clustermap.components.full_report.company_site_list.t33752.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-site-list/t33752");
});
clustermap.components.full_report.company_site_list.t33752.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t33752.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;var attrs33755 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912));if(cljs.core.map_QMARK_.call(null,attrs33755))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs33755)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs33756 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Portfolio Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs33756))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33756),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33756));
}
})(),(function (){var attrs33757 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs33757))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33757),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33757));
}
})(),(function (){var attrs33758 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs33758))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33758),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33758));
}
})(),(function (){var attrs33759 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs33759))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33759),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33759));
}
})())),(function (){var attrs33760 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs33760))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs33760),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs33760));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs33755),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs33761 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Portfolio Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs33761))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33761),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33761));
}
})(),(function (){var attrs33762 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs33762))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33762),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33762));
}
})(),(function (){var attrs33763 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs33763))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33763),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33763));
}
})(),(function (){var attrs33764 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs33764))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33764),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33764));
}
})())),(function (){var attrs33765 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs33765))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs33765),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs33765));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
}
});
clustermap.components.full_report.company_site_list.t33752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33754){var self__ = this;
var _33754__$1 = this;return self__.meta33753;
});
clustermap.components.full_report.company_site_list.t33752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33754,meta33753__$1){var self__ = this;
var _33754__$1 = this;return (new clustermap.components.full_report.company_site_list.t33752(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta33753__$1));
});
clustermap.components.full_report.company_site_list.__GT_t33752 = (function __GT_t33752(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta33753){return (new clustermap.components.full_report.company_site_list.t33752(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta33753));
});
}
return (new clustermap.components.full_report.company_site_list.t33752(comm,opts,owner,investments,company_site_list,null));
});
