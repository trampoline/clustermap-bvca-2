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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__12015){var map__12024 = p__12015;var map__12024__$1 = ((cljs.core.seq_QMARK_.call(null,map__12024))?cljs.core.apply.call(null,cljs.core.hash_map,map__12024):map__12024);var opts = map__12024__$1;var path_fn = cljs.core.get.call(null,map__12024__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__12024__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t12025 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t12025 = (function (company_path,link_fn,path_fn,opts,map__12024,p__12015,owner,investment,meta12026){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__12024 = map__12024;
this.p__12015 = p__12015;
this.owner = owner;
this.investment = investment;
this.meta12026 = meta12026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t12025.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t12025.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t12025";
clustermap.components.full_report.company_site_list.t12025.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-site-list/t12025");
});
clustermap.components.full_report.company_site_list.t12025.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t12025.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs12028 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"portfolio_company_no","portfolio_company_no",771436428).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",4225526294).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs12028))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12028),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12028));
}
})(),(function (){var attrs12029 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",4491774974).cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_.call(null,attrs12029))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12029),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12029));
}
})(),(function (){var attrs12030 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",4797549766).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs12030))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12030),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12030));
}
})(),(function (){var attrs12031 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",3478315290).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs12031))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12031),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12031));
}
})());
});
clustermap.components.full_report.company_site_list.t12025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12027){var self__ = this;
var _12027__$1 = this;return self__.meta12026;
});
clustermap.components.full_report.company_site_list.t12025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12027,meta12026__$1){var self__ = this;
var _12027__$1 = this;return (new clustermap.components.full_report.company_site_list.t12025(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__12024,self__.p__12015,self__.owner,self__.investment,meta12026__$1));
});
clustermap.components.full_report.company_site_list.__GT_t12025 = (function __GT_t12025(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__12024__$2,p__12015__$1,owner__$1,investment__$2,meta12026){return (new clustermap.components.full_report.company_site_list.t12025(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__12024__$2,p__12015__$1,owner__$1,investment__$2,meta12026));
});
}
return (new clustermap.components.full_report.company_site_list.t12025(company_path,link_fn,path_fn,opts,map__12024__$1,p__12015,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_site_list.t12046 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t12046 = (function (comm,opts,owner,investments,company_site_list,meta12047){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta12047 = meta12047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t12046.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t12046.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t12046";
clustermap.components.full_report.company_site_list.t12046.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-site-list/t12046");
});
clustermap.components.full_report.company_site_list.t12046.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t12046.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;var attrs12049 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912));if(cljs.core.map_QMARK_.call(null,attrs12049))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs12049)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs12050 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Portfolio Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs12050))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12050),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12050));
}
})(),(function (){var attrs12051 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs12051))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12051),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12051));
}
})(),(function (){var attrs12052 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs12052))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12052),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12052));
}
})(),(function (){var attrs12053 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs12053))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12053),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12053));
}
})())),(function (){var attrs12054 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs12054))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs12054),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs12054));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs12049),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs12055 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Portfolio Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs12055))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12055),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12055));
}
})(),(function (){var attrs12056 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs12056))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12056),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12056));
}
})(),(function (){var attrs12057 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs12057))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12057),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12057));
}
})(),(function (){var attrs12058 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs12058))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12058),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12058));
}
})())),(function (){var attrs12059 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs12059))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs12059),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs12059));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
}
});
clustermap.components.full_report.company_site_list.t12046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12048){var self__ = this;
var _12048__$1 = this;return self__.meta12047;
});
clustermap.components.full_report.company_site_list.t12046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12048,meta12047__$1){var self__ = this;
var _12048__$1 = this;return (new clustermap.components.full_report.company_site_list.t12046(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta12047__$1));
});
clustermap.components.full_report.company_site_list.__GT_t12046 = (function __GT_t12046(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta12047){return (new clustermap.components.full_report.company_site_list.t12046(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta12047));
});
}
return (new clustermap.components.full_report.company_site_list.t12046(comm,opts,owner,investments,company_site_list,null));
});

//# sourceMappingURL=company_site_list.js.map