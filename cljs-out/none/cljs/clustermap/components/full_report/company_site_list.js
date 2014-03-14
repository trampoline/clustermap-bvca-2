// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.company_site_list');
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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__23056){var map__23065 = p__23056;var map__23065__$1 = ((cljs.core.seq_QMARK_.call(null,map__23065))?cljs.core.apply.call(null,cljs.core.hash_map,map__23065):map__23065);var opts = map__23065__$1;var path_fn = cljs.core.get.call(null,map__23065__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__23065__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t23066 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t23066 = (function (company_path,link_fn,path_fn,opts,map__23065,p__23056,owner,investment,meta23067){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__23065 = map__23065;
this.p__23056 = p__23056;
this.owner = owner;
this.investment = investment;
this.meta23067 = meta23067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t23066.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t23066.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t23066";
clustermap.components.full_report.company_site_list.t23066.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-site-list/t23066");
});
clustermap.components.full_report.company_site_list.t23066.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t23066.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs23069 = new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",4225526294).cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_.call(null,attrs23069))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs23069),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs23069));
}
})(),(function (){var attrs23070 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",4491774974).cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_.call(null,attrs23070))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs23070),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs23070));
}
})(),(function (){var attrs23071 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",4797549766).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs23071))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs23071),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs23071));
}
})(),(function (){var attrs23072 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",3478315290).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs23072))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs23072),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs23072));
}
})());
});
clustermap.components.full_report.company_site_list.t23066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23068){var self__ = this;
var _23068__$1 = this;return self__.meta23067;
});
clustermap.components.full_report.company_site_list.t23066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23068,meta23067__$1){var self__ = this;
var _23068__$1 = this;return (new clustermap.components.full_report.company_site_list.t23066(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__23065,self__.p__23056,self__.owner,self__.investment,meta23067__$1));
});
clustermap.components.full_report.company_site_list.__GT_t23066 = (function __GT_t23066(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__23065__$2,p__23056__$1,owner__$1,investment__$2,meta23067){return (new clustermap.components.full_report.company_site_list.t23066(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__23065__$2,p__23056__$1,owner__$1,investment__$2,meta23067));
});
}
return (new clustermap.components.full_report.company_site_list.t23066(company_path,link_fn,path_fn,opts,map__23065__$1,p__23056,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_site_list.t23087 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t23087 = (function (comm,opts,owner,investments,company_site_list,meta23088){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta23088 = meta23088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t23087.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t23087.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t23087";
clustermap.components.full_report.company_site_list.t23087.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-site-list/t23087");
});
clustermap.components.full_report.company_site_list.t23087.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t23087.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs23090 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912));if(cljs.core.map_QMARK_.call(null,attrs23090))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs23090)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs23091 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs23091))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs23091),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs23091));
}
})(),(function (){var attrs23092 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs23092))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs23092),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs23092));
}
})(),(function (){var attrs23093 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs23093))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs23093),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs23093));
}
})(),(function (){var attrs23094 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs23094))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs23094),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs23094));
}
})())),(function (){var attrs23095 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs23095))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs23095),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs23095));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs23090),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs23096 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs23096))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs23096),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs23096));
}
})(),(function (){var attrs23097 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs23097))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs23097),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs23097));
}
})(),(function (){var attrs23098 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs23098))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs23098),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs23098));
}
})(),(function (){var attrs23099 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs23099))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs23099),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs23099));
}
})())),(function (){var attrs23100 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs23100))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs23100),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs23100));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
}
});
clustermap.components.full_report.company_site_list.t23087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23089){var self__ = this;
var _23089__$1 = this;return self__.meta23088;
});
clustermap.components.full_report.company_site_list.t23087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23089,meta23088__$1){var self__ = this;
var _23089__$1 = this;return (new clustermap.components.full_report.company_site_list.t23087(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta23088__$1));
});
clustermap.components.full_report.company_site_list.__GT_t23087 = (function __GT_t23087(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta23088){return (new clustermap.components.full_report.company_site_list.t23087(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta23088));
});
}
return (new clustermap.components.full_report.company_site_list.t23087(comm,opts,owner,investments,company_site_list,null));
});

//# sourceMappingURL=company_site_list.js.map