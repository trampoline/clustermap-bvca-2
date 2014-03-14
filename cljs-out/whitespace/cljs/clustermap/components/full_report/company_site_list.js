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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__44980){var map__44989 = p__44980;var map__44989__$1 = ((cljs.core.seq_QMARK_.call(null,map__44989))?cljs.core.apply.call(null,cljs.core.hash_map,map__44989):map__44989);var opts = map__44989__$1;var path_fn = cljs.core.get.call(null,map__44989__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__44989__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t44990 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t44990 = (function (company_path,link_fn,path_fn,opts,map__44989,p__44980,owner,investment,meta44991){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__44989 = map__44989;
this.p__44980 = p__44980;
this.owner = owner;
this.investment = investment;
this.meta44991 = meta44991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t44990.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t44990.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t44990";
clustermap.components.full_report.company_site_list.t44990.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-site-list/t44990");
});
clustermap.components.full_report.company_site_list.t44990.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t44990.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs44993 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"portfolio_company_no","portfolio_company_no",771436428).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",4225526294).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs44993))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs44993),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs44993));
}
})(),(function (){var attrs44994 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",4491774974).cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_.call(null,attrs44994))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs44994),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs44994));
}
})(),(function (){var attrs44995 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",4797549766).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs44995))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs44995),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs44995));
}
})(),(function (){var attrs44996 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",3478315290).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs44996))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs44996),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs44996));
}
})());
});
clustermap.components.full_report.company_site_list.t44990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44992){var self__ = this;
var _44992__$1 = this;return self__.meta44991;
});
clustermap.components.full_report.company_site_list.t44990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44992,meta44991__$1){var self__ = this;
var _44992__$1 = this;return (new clustermap.components.full_report.company_site_list.t44990(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__44989,self__.p__44980,self__.owner,self__.investment,meta44991__$1));
});
clustermap.components.full_report.company_site_list.__GT_t44990 = (function __GT_t44990(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__44989__$2,p__44980__$1,owner__$1,investment__$2,meta44991){return (new clustermap.components.full_report.company_site_list.t44990(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__44989__$2,p__44980__$1,owner__$1,investment__$2,meta44991));
});
}
return (new clustermap.components.full_report.company_site_list.t44990(company_path,link_fn,path_fn,opts,map__44989__$1,p__44980,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_site_list.t45011 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t45011 = (function (comm,opts,owner,investments,company_site_list,meta45012){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta45012 = meta45012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t45011.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t45011.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t45011";
clustermap.components.full_report.company_site_list.t45011.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-site-list/t45011");
});
clustermap.components.full_report.company_site_list.t45011.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t45011.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs45014 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912));if(cljs.core.map_QMARK_.call(null,attrs45014))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs45014)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs45015 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs45015))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45015),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45015));
}
})(),(function (){var attrs45016 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs45016))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45016),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45016));
}
})(),(function (){var attrs45017 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs45017))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45017),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45017));
}
})(),(function (){var attrs45018 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs45018))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45018),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45018));
}
})())),(function (){var attrs45019 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs45019))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs45019),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs45019));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs45014),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs45020 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs45020))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45020),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45020));
}
})(),(function (){var attrs45021 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs45021))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45021),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45021));
}
})(),(function (){var attrs45022 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs45022))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45022),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45022));
}
})(),(function (){var attrs45023 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs45023))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45023),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45023));
}
})())),(function (){var attrs45024 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs45024))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs45024),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs45024));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
}
});
clustermap.components.full_report.company_site_list.t45011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45013){var self__ = this;
var _45013__$1 = this;return self__.meta45012;
});
clustermap.components.full_report.company_site_list.t45011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45013,meta45012__$1){var self__ = this;
var _45013__$1 = this;return (new clustermap.components.full_report.company_site_list.t45011(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta45012__$1));
});
clustermap.components.full_report.company_site_list.__GT_t45011 = (function __GT_t45011(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta45012){return (new clustermap.components.full_report.company_site_list.t45011(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta45012));
});
}
return (new clustermap.components.full_report.company_site_list.t45011(comm,opts,owner,investments,company_site_list,null));
});
